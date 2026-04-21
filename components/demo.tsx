/** @format */

'use client';

import { useEffect, useRef, useState } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Message {
	id: number;
	sender: 'patient' | 'doctor';
	text: string;
	isAI: boolean;
	timestamp: string;
}

// ─── Real X-Ray Image ────────────────────────────────────────────────────────
// Source: Wikimedia Commons, CC0 Public Domain (Mikael Häggström)

const XRAY_URL =
	'https://upload.wikimedia.org/wikipedia/commons/a/a1/Normal_posteroanterior_%28PA%29_chest_radiograph_%28X-ray%29.jpg';

function XRayImage({
	glowing,
	fill = false,
}: {
	glowing: boolean;
	fill?: boolean;
}) {
	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			src={XRAY_URL}
			alt='Chest X-ray — PA view'
			style={{
				width: '100%',
				height: '100%',
				objectFit: fill ? 'cover' : 'contain',
				objectPosition: 'center top',
				filter: glowing
					? 'grayscale(0.15) brightness(0.95) drop-shadow(0 0 8px rgba(15,118,110,0.65))'
					: 'grayscale(0.1) brightness(0.9)',
				transition: 'filter 0.4s ease',
				display: 'block',
			}}
		/>
	);
}

// ─── Demo Component ───────────────────────────────────────────────────────────

export default function Demo() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [showXray, setShowXray] = useState(false);
	const [capturedFlash, setCapturedFlash] = useState(false);
	const [xrayCaptured, setXrayCaptured] = useState(false);
	const [findingsVisible, setFindingsVisible] = useState(0);
	const [showDiagnosis, setShowDiagnosis] = useState(false);
	const [showTriage, setShowTriage] = useState(false);
	const [showNextSteps, setShowNextSteps] = useState(false);
	const [linesAnimating, setLinesAnimating] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);
	const [barsKey, setBarsKey] = useState(0);

	const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

	const clearAll = () => {
		timeoutsRef.current.forEach(clearTimeout);
		timeoutsRef.current = [];
	};

	const schedule = (fn: () => void, delay: number) => {
		const id = setTimeout(fn, delay);
		timeoutsRef.current.push(id);
	};

	const addMessage = (msg: Message) => {
		setMessages((prev) => [...prev, msg]);
	};

	const runSequence = () => {
		// Reset
		setMessages([]);
		setShowXray(false);
		setCapturedFlash(false);
		setXrayCaptured(false);
		setFindingsVisible(0);
		setShowDiagnosis(false);
		setShowTriage(false);
		setShowNextSteps(false);
		setLinesAnimating(false);
		setFadeOut(false);

		// 1s — Patient message 1
		schedule(() => {
			addMessage({
				id: 1,
				sender: 'patient',
				text: 'I have had chest pain for 3 days now.',
				isAI: false,
				timestamp: '09:41',
			});
		}, 1000);

		// 3s — Patient message 2
		schedule(() => {
			addMessage({
				id: 2,
				sender: 'patient',
				text: 'Here is my X-ray report. \u{1F4CB}',
				isAI: false,
				timestamp: '09:41',
			});
		}, 3000);

		// 4s — Doctor "capture"
		schedule(() => {
			addMessage({
				id: 3,
				sender: 'doctor',
				text: 'capture',
				isAI: false,
				timestamp: '09:42',
			});
		}, 4000);

		// 4.2s — X-ray in glasses + captured flash
		schedule(() => {
			setShowXray(true);
			setCapturedFlash(true);
			const flashId = setTimeout(() => setCapturedFlash(false), 1800);
			timeoutsRef.current.push(flashId);
		}, 4200);

		// 4.5s — X-ray appears in report panel
		schedule(() => {
			setXrayCaptured(true);
		}, 4500);

		// 5s — SVG connector lines animate
		schedule(() => {
			setLinesAnimating(true);
		}, 5000);

		// 5.5s — AI findings one by one
		schedule(() => setFindingsVisible(1), 5500);
		schedule(() => setFindingsVisible(2), 6000);
		schedule(() => setFindingsVisible(3), 6500);

		// 6.5s — Patient message 3
		schedule(() => {
			addMessage({
				id: 4,
				sender: 'patient',
				text: 'It gets worse when I breathe deeply.',
				isAI: false,
				timestamp: '09:42',
			});
		}, 6800);

		// 7.5s — Diagnosis card
		schedule(() => {
			setShowDiagnosis(true);
			setBarsKey((k) => k + 1);
		}, 7500);

		// 8.5s — Doctor AI suggested message
		schedule(() => {
			addMessage({
				id: 5,
				sender: 'doctor',
				text: 'Any fever or recent travel?',
				isAI: true,
				timestamp: '09:43',
			});
		}, 8500);

		// 9s — Triage questions
		schedule(() => {
			setShowTriage(true);
		}, 9000);

		// 10s — Patient fever reply
		schedule(() => {
			addMessage({
				id: 6,
				sender: 'patient',
				text: 'Yes, mild fever for 2 days.',
				isAI: false,
				timestamp: '09:43',
			});
		}, 10000);

		// 11s — Next Steps
		schedule(() => {
			setShowNextSteps(true);
		}, 11000);

		// 14s — fade out
		schedule(() => setFadeOut(true), 14000);

		// 15s — loop restart
		schedule(() => runSequence(), 15000);
	};

	useEffect(() => {
		runSequence();
		return clearAll;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const diagnoses = [
		{ label: 'Viral Pneumonia', pct: 74, bars: 9 },
		{ label: 'Pulmonary Embolism', pct: 15, bars: 3 },
		{ label: 'Pleuritis', pct: 11, bars: 2 },
	];

	const findings = [
		'Mild opacity lower right lobe',
		'No pleural effusion detected',
		'Consistent with early consolidation',
	];

	return (
		<div
			style={{
				position: 'relative',
				borderRadius: 20,
				padding: 4,
				transition: 'opacity 0.8s ease',
				opacity: fadeOut ? 0 : 1,
				width: '100%',
				minWidth: 0,
			}}
		>
			{/* Outer glow */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					borderRadius: 20,
					background:
						'radial-gradient(ellipse at 60% 50%, rgba(15,118,110,0.12) 0%, transparent 70%)',
					pointerEvents: 'none',
					zIndex: 0,
				}}
			/>

			{/* Main wrapper */}
			<div
				className='sarva-demo-wrapper'
				style={{
					position: 'relative',
					zIndex: 1,
					background: 'rgba(255,255,255,0.03)',
					border: '1px solid rgba(255,255,255,0.08)',
					borderRadius: 20,
					padding: 20,
					overflow: 'hidden',
					width: '100%',
					minWidth: 0,
				}}
			>
				{/* Grid layout */}
				<div className='sarva-demo-grid'>
					{/* ── PANEL A: Glasses View ── */}
					<PanelGlasses showXray={showXray} capturedFlash={capturedFlash} />

					{/* ── PANEL C: AI Analysis (spans 2 rows on desktop) ── */}
					<div className='sarva-demo-panel-c'>
						<PanelAnalysis
							xrayCaptured={xrayCaptured}
							findingsVisible={findingsVisible}
							findings={findings}
							showDiagnosis={showDiagnosis}
							showTriage={showTriage}
							showNextSteps={showNextSteps}
							diagnoses={diagnoses}
							barsKey={barsKey}
						/>
					</div>

					{/* ── PANEL B: Live Transcript ── */}
					<PanelTranscript messages={messages} />
				</div>

				{/* ── SVG Connector Lines ── */}
				<ConnectorLines animating={linesAnimating} />
			</div>

			<style>{`
        .sarva-demo-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          min-height: 0;
          width: 100%;
          min-width: 0;
        }

        .sarva-demo-panel-a,
        .sarva-demo-panel-b,
        .sarva-demo-panel-c {
          min-width: 0;
        }

        .sarva-demo-captured-row {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          min-width: 0;
        }

        .sarva-demo-captured-copy {
          flex: 1;
          min-width: 0;
        }

        .sarva-demo-connector {
          display: none;
        }

        @media (min-width: 1024px) {
          .sarva-demo-grid {
            grid-template-columns: 280px minmax(0, 1fr);
            grid-template-rows: auto 1fr;
            gap: 16px;
            min-height: 480px;
          }

          .sarva-demo-panel-a {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          }

          .sarva-demo-panel-b {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
          }

          .sarva-demo-panel-c {
            grid-column: 2 / 3;
            grid-row: 1 / 3;
          }

          .sarva-demo-connector {
            display: block;
          }
        }

        @media (max-width: 767px) {
          .sarva-demo-wrapper {
            padding: 12px !important;
          }

          .sarva-demo-captured-row {
            flex-direction: column;
          }
        }
      `}</style>
		</div>
	);
}

// ─── Panel A: Glasses View ────────────────────────────────────────────────────

function PanelGlasses({
	showXray,
	capturedFlash,
}: {
	showXray: boolean;
	capturedFlash: boolean;
}) {
	return (
		<div
			className='sarva-demo-panel-a'
			style={{
				background: '#080C1A',
				border: '1px solid rgba(255,255,255,0.07)',
				borderRadius: 14,
				height: 180,
				position: 'relative',
				overflow: 'hidden',
				minWidth: 0,
			}}
		>
			{/* Scanline overlay */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					backgroundImage:
						'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.015) 3px, rgba(255,255,255,0.015) 4px)',
					pointerEvents: 'none',
					zIndex: 2,
				}}
			/>

			{/* Moving scan line */}
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					height: 2,
					background:
						'linear-gradient(90deg, transparent, rgba(75,158,255,0.4), transparent)',
					animation: 'scanLineAnim 3s linear infinite',
					zIndex: 3,
				}}
			/>

			{/* REC indicator */}
			<div
				style={{
					position: 'absolute',
					top: 10,
					left: 12,
					display: 'flex',
					alignItems: 'center',
					gap: 5,
					zIndex: 4,
				}}
			>
				<span
					className='rec-dot'
					style={{
						display: 'inline-block',
						width: 7,
						height: 7,
						borderRadius: '50%',
						background: '#FF3B3B',
					}}
				/>
				<span
					style={{
						fontFamily: 'var(--font-jetbrains-mono), monospace',
						fontSize: 9,
						color: '#FF3B3B',
						letterSpacing: '0.05em',
					}}
				>
					REC
				</span>
			</div>

			{/* SarvaDoc AI label */}
			<div
				style={{
					position: 'absolute',
					top: 10,
					right: 12,
					zIndex: 4,
					fontFamily: 'var(--font-dm-sans), sans-serif',
					fontSize: 9,
					color: '#0f766e',
					letterSpacing: '0.06em',
					fontWeight: 600,
				}}
			>
				DocGlasses AI
			</div>

			{/* Camera feed / X-ray content */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '32px 20px 12px',
					zIndex: 1,
				}}
			>
				{showXray ? (
					<div
						style={{
							width: '100%',
							height: '100%',
							borderRadius: 6,
							overflow: 'hidden',
						}}
					>
						<XRayImage glowing={false} fill />
					</div>
				) : (
					/* Camera noise texture */
					<div
						style={{
							width: '100%',
							height: '100%',
							background:
								'radial-gradient(ellipse at center, rgba(30,40,60,0.8) 0%, rgba(5,8,18,0.95) 100%)',
							borderRadius: 6,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<span
							style={{
								fontFamily: 'var(--font-dm-sans), sans-serif',
								fontSize: 10,
								color: 'rgba(148,163,184,0.3)',
								letterSpacing: '0.1em',
							}}
						>
							LIVE FEED
						</span>
					</div>
				)}
			</div>

			{/* CAPTURED flash overlay */}
			{capturedFlash && (
				<div
					style={{
						position: 'absolute',
						inset: 0,
						background: 'rgba(34,197,94,0.12)',
						border: '1px solid rgba(34,197,94,0.4)',
						borderRadius: 14,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 10,
						animation: 'capturedFadeOut 1.8s ease forwards',
					}}
				>
					<span
						style={{
							fontFamily: 'var(--font-dm-sans), sans-serif',
							fontSize: 12,
							fontWeight: 700,
							color: '#22C55E',
							letterSpacing: '0.1em',
						}}
					>
						CAPTURED ✓
					</span>
				</div>
			)}

			{/* Glasses frame decoration */}
			<div
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					height: 3,
					background:
						'linear-gradient(90deg, transparent 10%, rgba(15,118,110,0.3) 50%, transparent 90%)',
				}}
			/>

			<style>{`
        @keyframes scanLineAnim {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes capturedFadeOut {
          0% { opacity: 1; }
          60% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
		</div>
	);
}

// ─── Panel B: Live Transcript ─────────────────────────────────────────────────

function PanelTranscript({ messages }: { messages: Message[] }) {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTo({
				top: scrollRef.current.scrollHeight,
				behavior: 'smooth',
			});
		}
	}, [messages]);

	return (
		<div
			className='sarva-demo-panel-b'
			style={{
				background: 'rgba(10,14,28,0.7)',
				border: '1px solid rgba(255,255,255,0.07)',
				borderRadius: 14,
				display: 'flex',
				flexDirection: 'column',
				overflow: 'hidden',
				height: 280,
				minWidth: 0,
			}}
		>
			{/* Header */}
			<div
				style={{
					padding: '10px 14px',
					borderBottom: '1px solid rgba(255,255,255,0.06)',
					display: 'flex',
					alignItems: 'center',
					gap: 8,
					flexShrink: 0,
				}}
			>
				<span
					style={{
						display: 'inline-block',
						width: 7,
						height: 7,
						borderRadius: '50%',
						background: '#22C55E',
						animation: 'pulse 2s infinite',
						boxShadow: '0 0 6px rgba(34,197,94,0.6)',
					}}
				/>
				<span
					style={{
						fontFamily: 'var(--font-dm-sans), sans-serif',
						fontSize: 11,
						fontWeight: 600,
						color: '#F1F5F9',
						letterSpacing: '0.04em',
					}}
				>
					Live Consultation
				</span>
				<span
					style={{
						marginLeft: 'auto',
						fontFamily: 'var(--font-jetbrains-mono), monospace',
						fontSize: 9,
						color: '#475569',
					}}
				>
					LIVE
				</span>
			</div>

			{/* Messages */}
			<div
				ref={scrollRef}
				style={{
					flex: 1,
					overflowY: 'auto',
					padding: '10px 12px',
					display: 'flex',
					flexDirection: 'column',
					gap: 8,
					scrollbarWidth: 'none',
					minWidth: 0,
				}}
			>
				{messages.map((msg, i) => (
					<MessageBubble key={msg.id} msg={msg} index={i} />
				))}
			</div>
		</div>
	);
}

function MessageBubble({ msg, index }: { msg: Message; index: number }) {
	const isPatient = msg.sender === 'patient';
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: isPatient ? 'flex-start' : 'flex-end',
				animation: 'msgSlideIn 0.35s ease forwards',
				opacity: 0,
				minWidth: 0,
			}}
		>
			<span
				style={{
					fontFamily: 'var(--font-dm-sans), sans-serif',
					fontSize: 9,
					color: '#475569',
					marginBottom: 3,
					paddingLeft: 4,
					paddingRight: 4,
				}}
			>
				{isPatient ? 'Patient' : 'Doctor'} · {msg.timestamp}
			</span>
			<div
				style={{
					position: 'relative',
					maxWidth: '85%',
					padding: '7px 10px',
					borderRadius: isPatient ? '4px 12px 12px 12px' : '12px 4px 12px 12px',
					background: isPatient ? 'rgba(30,40,60,0.8)' : 'rgba(18,28,52,0.9)',
					border: isPatient
						? '1px solid rgba(255,255,255,0.06)'
						: '1px solid rgba(75,120,200,0.15)',
					fontFamily: 'var(--font-dm-sans), sans-serif',
					fontSize: 11,
					color: '#CBD5E1',
					lineHeight: 1.5,
					overflowWrap: 'anywhere',
					wordBreak: 'break-word',
				}}
			>
				{msg.text}
				{msg.isAI && (
					<span
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							marginLeft: 6,
							padding: '1px 6px',
							borderRadius: 9999,
							background: 'rgba(15,118,110,0.15)',
							border: '1px solid rgba(15,118,110,0.35)',
							fontSize: 9,
							fontWeight: 600,
							color: '#0f766e',
							letterSpacing: '0.04em',
							verticalAlign: 'middle',
						}}
					>
						AI Suggested ✦
					</span>
				)}
			</div>
			<style>{`
        @keyframes msgSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
		</div>
	);
}

// ─── Panel C: AI Analysis ─────────────────────────────────────────────────────

function PanelAnalysis({
	xrayCaptured,
	findingsVisible,
	findings,
	showDiagnosis,
	showTriage,
	showNextSteps,
	diagnoses,
	barsKey,
}: {
	xrayCaptured: boolean;
	findingsVisible: number;
	findings: string[];
	showDiagnosis: boolean;
	showTriage: boolean;
	showNextSteps: boolean;
	diagnoses: { label: string; pct: number; bars: number }[];
	barsKey: number;
}) {
	return (
		<div
			style={{
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				gap: 10,
				height: '100%',
				minWidth: 0,
			}}
		>
			{/* ── TOP: Captured Data ── */}
			<div
				style={{
					background: 'rgba(10,14,28,0.7)',
					border: '1px solid rgba(255,255,255,0.07)',
					borderRadius: 14,
					padding: '12px 14px',
					flex: '0 0 auto',
					minWidth: 0,
				}}
			>
				{/* Header */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 6,
						marginBottom: 10,
					}}
				>
					<span
						style={{
							display: 'inline-block',
							width: 7,
							height: 7,
							borderRadius: '50%',
							background: '#0f766e',
						}}
					/>
					<span
						style={{
							fontFamily: 'var(--font-dm-sans), sans-serif',
							fontSize: 11,
							fontWeight: 600,
							color: '#F1F5F9',
							letterSpacing: '0.04em',
						}}
					>
						Captured Data
					</span>
				</div>

				<div className='sarva-demo-captured-row'>
					{/* X-ray thumbnail */}
					<div
						style={{
							width: 80,
							minWidth: 80,
							height: 64,
							borderRadius: 8,
							border: xrayCaptured
								? '1px solid rgba(15,118,110,0.6)'
								: '1px solid rgba(255,255,255,0.07)',
							background: '#080C1A',
							overflow: 'hidden',
							flexShrink: 0,
							transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
							boxShadow: xrayCaptured
								? '0 0 12px rgba(15,118,110,0.3)'
								: 'none',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							padding: 4,
						}}
					>
						{xrayCaptured ? (
							<XRayImage glowing fill />
						) : (
							<span
								style={{
									fontSize: 9,
									color: 'rgba(148,163,184,0.2)',
									fontFamily: 'var(--font-dm-sans), sans-serif',
								}}
							>
								--
							</span>
						)}
					</div>

					<div className='sarva-demo-captured-copy'>
						<span
							style={{
								fontFamily: 'var(--font-jetbrains-mono), monospace',
								fontSize: 9,
								color: '#475569',
								display: 'block',
								marginBottom: 6,
							}}
						>
							X-Ray via Glasses
						</span>

						{/* Findings */}
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
							{findings.map((finding, i) => (
								<div
									key={i}
									style={{
										display: 'flex',
										alignItems: 'center',
										gap: 6,
										opacity: findingsVisible > i ? 1 : 0,
										transform:
											findingsVisible > i
												? 'translateX(0)'
												: 'translateX(-8px)',
										transition: 'opacity 0.4s ease, transform 0.4s ease',
										minWidth: 0,
									}}
								>
									<span
										style={{
											width: 4,
											height: 4,
											borderRadius: '50%',
											background: '#0f766e',
											flexShrink: 0,
										}}
									/>
									<span
										style={{
											fontFamily: 'var(--font-dm-sans), sans-serif',
											fontSize: 10,
											color: '#94A3B8',
											overflowWrap: 'anywhere',
											wordBreak: 'break-word',
										}}
									>
										{finding}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* ── BOTTOM: AI Suggestions ── */}
			<div
				style={{
					background: 'rgba(10,14,28,0.7)',
					border: '1px solid rgba(255,255,255,0.07)',
					borderRadius: 14,
					padding: '12px 14px',
					flex: 1,
					overflow: 'hidden',
					minWidth: 0,
				}}
			>
				{/* Header */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 6,
						marginBottom: 10,
					}}
				>
					<span
						style={{
							display: 'inline-block',
							width: 7,
							height: 7,
							borderRadius: '50%',
							background: '#0f766e',
							animation: 'pulse 1.5s infinite',
							boxShadow: '0 0 6px rgba(15,118,110,0.5)',
						}}
					/>
					<span
						style={{
							fontFamily: 'var(--font-dm-sans), sans-serif',
							fontSize: 11,
							fontWeight: 600,
							color: '#F1F5F9',
							letterSpacing: '0.04em',
						}}
					>
						AI Suggestions ✦
					</span>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 8,
						minWidth: 0,
					}}
				>
					{/* Card 1 — Differential Diagnosis */}
					<SuggestionCard visible={showDiagnosis}>
						<div
							style={{
								fontFamily: 'var(--font-dm-sans), sans-serif',
								fontSize: 9,
								fontWeight: 600,
								color: '#0f766e',
								letterSpacing: '0.08em',
								textTransform: 'uppercase',
								marginBottom: 7,
							}}
						>
							Differential Diagnosis
						</div>
						{diagnoses.map((d) => (
							<DiagnosisRow
								key={d.label}
								label={d.label}
								pct={d.pct}
								animKey={barsKey}
								visible={showDiagnosis}
							/>
						))}
					</SuggestionCard>

					{/* Card 2 — Triage Questions */}
					<SuggestionCard visible={showTriage}>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: 6,
								marginBottom: 7,
								flexWrap: 'wrap',
							}}
						>
							<span
								style={{
									fontFamily: 'var(--font-dm-sans), sans-serif',
									fontSize: 9,
									fontWeight: 600,
									color: '#0f766e',
									letterSpacing: '0.08em',
									textTransform: 'uppercase',
								}}
							>
								Triage Questions
							</span>
							<span
								style={{
									padding: '1px 6px',
									borderRadius: 9999,
									background: 'rgba(15,118,110,0.12)',
									border: '1px solid rgba(15,118,110,0.3)',
									fontSize: 8,
									color: '#0f766e',
									fontWeight: 600,
									whiteSpace: 'nowrap',
								}}
							>
								AI Suggested ✦
							</span>
						</div>
						{['Any recent travel?', 'Shortness of breath on exertion?'].map(
							(q) => (
								<div
									key={q}
									style={{
										display: 'flex',
										alignItems: 'flex-start',
										gap: 6,
										marginBottom: 4,
										minWidth: 0,
									}}
								>
									<span style={{ color: '#0f766e', fontSize: 9, marginTop: 1 }}>
										•
									</span>
									<span
										style={{
											fontFamily: 'var(--font-dm-sans), sans-serif',
											fontSize: 10,
											color: '#94A3B8',
											overflowWrap: 'anywhere',
											wordBreak: 'break-word',
										}}
									>
										{q}
									</span>
								</div>
							),
						)}
					</SuggestionCard>

					{/* Card 3 — Next Steps */}
					<SuggestionCard visible={showNextSteps}>
						<div
							style={{
								fontFamily: 'var(--font-dm-sans), sans-serif',
								fontSize: 9,
								fontWeight: 600,
								color: '#0f766e',
								letterSpacing: '0.08em',
								textTransform: 'uppercase',
								marginBottom: 7,
							}}
						>
							Next Steps
						</div>
						<div
							style={{ display: 'flex', gap: 6, flexWrap: 'wrap', minWidth: 0 }}
						>
							{['Order CBC', 'Chest CT', 'Refer Pulm'].map((step) => (
								<span
									key={step}
									style={{
										padding: '3px 10px',
										borderRadius: 9999,
										border: '1px solid rgba(15,118,110,0.4)',
										color: '#0f766e',
										fontFamily: 'var(--font-dm-sans), sans-serif',
										fontSize: 10,
										fontWeight: 500,
										background: 'rgba(15,118,110,0.06)',
										cursor: 'default',
										whiteSpace: 'normal',
										overflowWrap: 'anywhere',
									}}
								>
									{step}
								</span>
							))}
						</div>
					</SuggestionCard>
				</div>
			</div>
		</div>
	);
}

function SuggestionCard({
	visible,
	children,
}: {
	visible: boolean;
	children: React.ReactNode;
}) {
	return (
		<div
			style={{
				background: 'rgba(255,255,255,0.025)',
				border: '1px solid rgba(255,255,255,0.06)',
				borderRadius: 10,
				padding: '9px 11px',
				opacity: visible ? 1 : 0,
				transform: visible ? 'translateY(0)' : 'translateY(8px)',
				transition: 'opacity 0.45s ease, transform 0.45s ease',
				minWidth: 0,
			}}
		>
			{children}
		</div>
	);
}

function DiagnosisRow({
	label,
	pct,
	animKey,
	visible,
}: {
	label: string;
	pct: number;
	animKey: number;
	visible: boolean;
}) {
	return (
		<div style={{ marginBottom: 5, minWidth: 0 }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: 3,
					gap: 8,
					minWidth: 0,
				}}
			>
				<span
					style={{
						fontFamily: 'var(--font-dm-sans), sans-serif',
						fontSize: 10,
						color: '#CBD5E1',
						overflowWrap: 'anywhere',
						wordBreak: 'break-word',
					}}
				>
					{label}
				</span>
				<span
					style={{
						fontFamily: 'var(--font-jetbrains-mono), monospace',
						fontSize: 10,
						color: '#0f766e',
						flexShrink: 0,
					}}
				>
					{pct}%
				</span>
			</div>
			<div
				style={{
					width: '100%',
					height: 4,
					background: 'rgba(255,255,255,0.06)',
					borderRadius: 2,
					overflow: 'hidden',
				}}
			>
				<div
					key={`${animKey}-${label}`}
					style={{
						height: '100%',
						borderRadius: 2,
						background: 'linear-gradient(90deg, #0f766e, #2dd4bf)',
						width: visible ? `${pct}%` : '0%',
						transition: 'width 1s ease',
					}}
				/>
			</div>
		</div>
	);
}

// ─── SVG Connector Lines ──────────────────────────────────────────────────────

function ConnectorLines({ animating }: { animating: boolean }) {
	return (
		<svg
			className='sarva-demo-connector'
			style={{
				position: 'absolute',
				inset: 0,
				width: '100%',
				height: '100%',
				pointerEvents: 'none',
				zIndex: 10,
				overflow: 'visible',
			}}
			xmlns='http://www.w3.org/2000/svg'
		>
			<defs>
				<marker id='dot-a' markerWidth='6' markerHeight='6' refX='3' refY='3'>
					<circle cx='3' cy='3' r='2.5' fill='#0f766e' />
				</marker>
			</defs>

			{/* Line A → C (from top-right of Panel A to left of Panel C) */}
			<path
				d='M 300 100 C 340 100, 340 100, 360 100'
				stroke='rgba(15,118,110,0.35)'
				strokeWidth='1.5'
				strokeDasharray='5 4'
				fill='none'
				style={{
					strokeDashoffset: animating ? 0 : 200,
					transition: animating ? 'stroke-dashoffset 1.2s ease 0s' : 'none',
				}}
			/>

			{/* Travelling dot A → C */}
			{animating && (
				<circle r='3' fill='#0f766e' opacity='0.9'>
					<animateMotion
						path='M 300 100 C 340 100, 340 100, 360 100'
						dur='1.2s'
						begin='0s'
						fill='freeze'
					/>
					<animate
						attributeName='opacity'
						values='0;1;1;0'
						keyTimes='0;0.1;0.9;1'
						dur='1.2s'
						begin='0s'
						fill='freeze'
					/>
				</circle>
			)}

			{/* Line B → C (from right of Panel B to left of Panel C) */}
			<path
				d='M 300 350 C 330 350, 330 200, 360 200'
				stroke='rgba(15,118,110,0.25)'
				strokeWidth='1.5'
				strokeDasharray='5 4'
				fill='none'
				style={{
					strokeDashoffset: animating ? 0 : 200,
					transition: animating ? 'stroke-dashoffset 1.2s ease 0.5s' : 'none',
				}}
			/>

			{/* Travelling dot B → C */}
			{animating && (
				<circle r='3' fill='#0f766e' opacity='0.9'>
					<animateMotion
						path='M 300 350 C 330 350, 330 200, 360 200'
						dur='1.2s'
						begin='0.5s'
						fill='freeze'
					/>
					<animate
						attributeName='opacity'
						values='0;1;1;0'
						keyTimes='0;0.1;0.9;1'
						dur='1.2s'
						begin='0.5s'
						fill='freeze'
					/>
				</circle>
			)}
		</svg>
	);
}
