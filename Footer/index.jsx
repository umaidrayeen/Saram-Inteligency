import social from '../images/socials.png';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer class="bg-black text-white py-12 px-16 ">

            <div>
                {/* <!-- Branding --> */}
                <div class="mb-10 mt-10">
                    <h1 class="text-5xl font-bold">SARAM</h1>
                    <p class="mt-2 text-xl font-semibold text-gray-300">Powering Conversations with Intelligence</p>
                    <img src={social} className='w-4/6 mt-6' />
                </div>
            </div>
            <div class="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 py-4">
                {/* <!-- Company Links --> */}
                <div>
                    <h3 class="font-semibold mb-2">Company</h3>
                    <ul class="space-y-1 text-sm text-gray-400">
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/features'>Features</Link></li>
                        <li><Link to='/why-saram'>Why Saram</Link></li>
                    </ul>
                </div>

                {/* <!-- Features --> */}
                <div>
                    <h3 class="font-semibold mb-2">Features</h3>
                    <ul class="space-y-1 text-sm text-gray-400">
                        <li><a href="#">AI Chatbot</a></li>
                        <li><a href="#">AI Voice Assistant</a></li>
                        <li><a href="#">AI Personalization Engine</a></li>
                        <li><a href="#">AI Email & Marketing Automation</a></li>
                    </ul>
                </div>

                {/* Learn More */}
                <div>
                    <h3 class="font-semibold mb-2">Learn More</h3>
                    <ul class="space-y-1 text-sm text-gray-400">
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/pricing'>Pricing</Link></li>
                    </ul>
                </div>

                {/* Others */}
                <div>
                    <h3 class="font-semibold mt-4 mb-2">Others</h3>
                    <ul class="space-y-1 text-sm text-gray-400">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                    </ul>
                </div>

            </div>

        {/* <!-- Copyright --> */}
        <div class="text-center text-sm text-gray-500 mt-10">
            © 2025 Patroon, Inc.
        </div>
    </footer>

    )
}

export default Footer