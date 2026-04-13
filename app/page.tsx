/** @format */

import Hero from '@/components/hero';
import HowItWorks from '@/components/how-it-works';
import Nav from '@/components/nav';
// import Features from "@/components/features";
import Benefits from '@/components/benefits';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Science from '@/components/science';
import Team from '@/components/team';
import Advisors from '@/components/advisors';

export default function Home() {
	return (
		<main className='min-h-screen overflow-x-hidden'>
			<Nav />
			<Hero />
			<HowItWorks />
			{/* <Features /> */}
			<Benefits />
			<Science />
			<Advisors />
			<Team />
			<Contact />
			<Footer />
		</main>
	);
}
