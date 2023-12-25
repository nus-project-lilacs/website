import { Button } from '@mui/base';
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-heading'>
                <p className='footer-heading-h1'>
                    Project Lilacs
                </p>
                <p className='footer-text'>
                    A student-led community from NUS Nursing
                </p>


            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Who we are</Link>

                    </div>
                    <div class='footer-link-items'>
                        <h2>Resources</h2>
                        <Link to='/'>Articles</Link>
                        <Link to='/'>Videos</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='https://www.instagram.com/projectlilacs?igsh=MXFiYWNuYm1nNG51OA=='>Instagram</Link>
                        <Link to='https://linktr.ee/project_lilacs'>Linktree</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Support Us</h2>
                        <Link to='/Sponsor'>Become a sponsor</Link>

                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='social-icons'>

                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link linktree'
                            to='/'
                            target='_blank'
                            aria-label='Linktree'
                        >
                            <i class='fab fa-linktree' />
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer
