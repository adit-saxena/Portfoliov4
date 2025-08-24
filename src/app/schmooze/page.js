// src/app/schmooze/page.js
"use client";
import HeaderP from '../components/headerProjects';
import stylesw from '../stage/internal.module.css'; // Using stage styles
import Workrow from '../stage/workrow';
import SolutionBlock from '../components/SolutionBlock'; // <--- IMPORT THE NEW COMPONENT
import dynamic from 'next/dynamic';
// Import the Next.js Image component if you plan to use it
// import Image from 'next/image';
const Footer = dynamic(() => import('../components/Footer/footer2'), { ssr: false });


export default function SchmoozePage() {

    // --- Style Definitions ---
    // Keep styles needed outside the SolutionBlock component

    const heroImageStyle = {
        width: '100%',
        height: '30vh',
        objectFit: 'cover',
        display: 'block',
        borderRadius: '8px',
        border: '1px solid #eee',
        marginTop: '0px'
    };

    // This is now primarily defined WITHIN SolutionBlock, but keep if used elsewhere
     const otherImageStyle = {
        width: '70%',
        height: 'auto',
        maxHeight: '50vh',
        display: 'block',
        borderRadius: '8px',
        border: '1px solid #eee',
        margin: '0 auto'
    };

    // Keep figureStyle if used for non-solution images (like hero or comparison images)
    const figureStyle = {
        textAlign: 'center',
        margin: '3vh auto'
    };

    // Keep figcaptionStyle if used for non-solution images
    const figcaptionStyle = {
        marginTop: '0.5em',
        fontSize: '0.9em',
        color: '#555'
    };

    // Helper for list item styling
    const listItemStyle = { marginBottom: '0.5em' };

    return (
    <div>
        <div className={stylesw.container}>
            <HeaderP
                BGColor={"#ffffff"}
                DSColor={"rgba(0, 0, 0, 0.05 )"}
            />

            {/* --- Hero Section --- */}
            <div className={stylesw.hero}>
                 <div className={stylesw.herotext}>
                    <p>PRODUCT DESIGN CASE STUDY</p>
                    <h5>Schmooze Dating App: Enhancing User Experience Through Design</h5>
                 </div>
                 <div className={stylesw.heroimg}>
                   <figure style={figureStyle}>
                     <img
                         src="/schmoozecover.png"
                         alt="Schmooze Project Hero Banner"
                         style={heroImageStyle}
                     />
                     <figcaption style={figcaptionStyle}>
                          {/* Caption for hero banner */}
                     </figcaption>
                   </figure>
                 </div>
            </div>

            {/* --- Main Content Section --- */}
            <section className={stylesw.work}>
                <Workrow
                    serial="01"
                    heading="THE OPPORTUNITY"
                    description={<span>Schmooze is a dating app that matches users based on their meme preferences, moving away from traditional swiping methods. This project aimed to <strong>understand user perceptions of Schmooze and identify barriers </strong> hindering a smooth user experience , ultimately informing design improvements.</span>}
                />
                 <Workrow
                    serial="02" // Swapped order with Problem Statement based on your code
                    heading="USER RESEARCH: UNDERSTANDING THE USERS"
                    description={
                         <span>A multi-faceted research approach was employed:
                            <ul style={{ listStyleType: 'none', listStylePosition: 'inside', marginTop: '1em', paddingLeft: 0 }}>
                                <li style={listItemStyle}><strong>Competitive Audit:</strong> Analyzed how Schmooze's features and interface compared to other popular dating apps, noting Schmooze's distinct casual and "funky" design language.</li>
                                <li style={listItemStyle}><strong>Participant Observation:</strong> Used the app firsthand to understand the user flow and initial interactions.</li>
                                <li style={listItemStyle}><strong>User Interviews & Interactions:</strong> Directly engaged with users on the app to gather feedback. Initial interactions showed users were hesitant to share openly. To overcome this, researcher profiles were redesigned to be more welcoming and transparent about the research intentions, which successfully encouraged more participation.</li>
                             </ul>
                         </span>
                    }
                 />
                 {/* Standalone Image: Participant Recruitment */}
                 <figure style={figureStyle}>
                    <img src="/Schmooze2.png" alt="Profile for participant recruitment" style={otherImageStyle} />
                    <figcaption style={figcaptionStyle}>
                        Profile for participant recruitment
                    </figcaption>
                 </figure>
                <Workrow
                    serial="03" // Swapped order with User Research based on your code
                    heading="PROBLEM STATEMENT"
                    description={
                        <span>Initial research revealed several key challenges within the Schmooze user experience:
                            <ul style={{ listStyleType: 'none', listStylePosition: 'inside', marginTop: '1em', paddingLeft: 0 }}>
                                <li style={listItemStyle}><strong>Mindless Swiping:</strong> Users often swiped through memes and profiles without careful consideration, leading to matches lacking genuine connection. Some users seemed desperate to interact, regardless of match quality.</li>
                                <li style={listItemStyle}><strong>Fluctuating User Intent:</strong> Users' primary interest in the app varied; some were focused on memes, while their desire for dating fluctuated over time.</li>
                                <li style={listItemStyle}><strong>Misaligned Perceptions:</strong> Due to its casual branding, many users viewed Schmooze more as a general socializing app than a dedicated dating platform. This attracted users not necessarily seeking romantic connections, including minors and others just looking to socialize.</li>
                                <li style={listItemStyle}><strong>Chat Initiation Hurdles:</strong> Users found it difficult to start conversations with matches, often missing opportunities for meaningful interaction.</li>
                                <li style={listItemStyle}><strong>Technical Glitches:</strong> Frequent technical bugs, particularly within the chat system, frustrated users and sometimes led them to abandon the app.</li>
                            </ul>
                        </span>
                    }
                />

                 {/* Standalone Image: UI Comparison */}
                 {/* Note: Your code used heroImageStyle here, adjusted to otherImageStyle assuming it's not full width */}
                 <figure style={figureStyle}>
                    <img src="/Schmooze1.png" alt="UI Comparison with other dating apps" style={otherImageStyle} />
                    <figcaption style={figcaptionStyle}>
                        UI comparison with other dating apps.
                    </figcaption>
                 </figure>

                 {/* Removed empty Workrow */}

                 <Workrow
                    serial="04" // Renumbered assuming the empty one was a placeholder
                    heading="DESIGN SOLUTIONS: ADDRESSING CHALLENGES"
                    description={<span>Based on the research insights, the following design solutions were proposed:</span>}
                 />

                 {/* --- Use SolutionBlock Component --- */}
                 <SolutionBlock
                    solutionNumber="#1"
                    title="Separate Tabs for Memes and Profiles"
                    rationale="To help users differentiate between Browse content (memes) and evaluating potential matches (profiles), distinct tabs were introduced. This aimed to make users more mindful during profile swiping."
                    images={[
                        // Combined Before/After into one image based on your code
                        { src: "/Schmooze3.png", alt: "Actual vs Suggested UI for separate tabs", caption: "Suggested UI with separate 'Memes' and 'Profiles' tabs." }
                    ]}
                 />

                 <SolutionBlock
                    solutionNumber="#2"
                    title="Enhanced Profile Discovery"
                    rationale="For users wanting more control over matching beyond the algorithm, a new tab was proposed allowing them to find others who liked the same specific memes."
                    images={[
                        { src: "/Schmooze4.png", alt: "Suggested UI for Enhanced Profile Discovery (Solution 2)", caption: "Suggested UI for discovering profiles based on shared meme likes." }
                    ]}
                 />

                 <SolutionBlock
                    solutionNumber="#3"
                    title="Refining the UI Language"
                    rationale="To more clearly communicate Schmooze's intent as a dating platform, the design language was refined to balance the fun elements with a more elegant, serious aesthetic, akin to other dating apps."
                    images={[
                        // Note: Image sources might need updating if filenames changed
                        { src: "/Schmooze5.png", alt: "Redesigned Onboarding Flow ", description: "Redesigned Onboarding Flow", caption: "" },
                        { src: "/Schmooze6.png", alt: "Redesigned Base Flow ", description: "Redesigned Base Flow", caption: "Redesigned flows with refined UI language." }]}
                 />

                 <Workrow
                    serial="06" // Kept numbering from your original code
                    heading="CONCLUSION: BETTER MATCHMAKING EXPERIENCE"
                    description={<span>By understanding user behaviors and perceptions through research, key pain points like mindless swiping, unclear app intent, and interaction difficulties were identified. The proposed design solutions—introducing distinct tabs, offering tailored profile discovery, and refining the UI's visual language—aim to create a more intentional, effective, and satisfying dating experience on Schmooze.</span>}
                 />
            </section>
        </div>
        <Footer /> 
        </div>
    );
}