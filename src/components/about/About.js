import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function educationText() {
        return (
            <>
                <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd education</p>
                <p><span style={{ color: info.baseColor }}>education <span className={Style.green}>(main)</span> $</span> ls</p>
                <ul className={Style.skills}>
                    <li><strong>Master of Applied Computing</strong> | GPA - 3.5/4.0</li>
                    
                    
                    <li>University of Windsor, Windsor, ON</li>
                    <li>Jan 2023 - Present</li>
                </ul>
                <ul><li></li></ul>
                <ul className={Style.skills}>
                    <li><strong>Bachelor of Engineering (Computer Engineering)</strong> | CGPA - 9.6/10.0</li>
                    
                    <li>Gujarat Technological University - L.D. College of Engineering, Ahmedabad, India</li>
                    <li>Jul 2018 - May 2022</li>
                </ul>
            </>
        );
    }
 
    function experienceText() {
        return (
            <>
                <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd work experience</p>
                <p><span style={{ color: info.baseColor }}>work experience <span className={Style.green}>(main)</span> $</span> ls</p>
                
                <ul  className={Style.skills}>
                <li><strong>Full Stack Developer</strong>  | Jan 2022 - Dec 2022</li>
                </ul>
<ul>             <li>Unnati Informatics LLP, Ahmedabad, India </li>
                <li><b>Tools/Technologies:</b> MongoDB, Express, React, Node, Axios, Firebase, Postman, Visual Studio</li>
                <li><b>Responsibilities:</b></li>
                <ul>
                    <li>Developed eSociety Management System, a web application with the ability to authorize, validate, and manage visitors, support staff attendance tracking, and generate reports.</li>
                    <li>Incorporated OWASP-recommended input validation techniques to prevent SQL injection and other security vulnerabilities.</li>
                    <li>Implemented user authentication, including user role management and mobile number verification via OTP mechanism, using Google Firebase services.</li>
                    <li>Utilized node-mailer API to elevate security measures by incorporating ReCAPTCHA verification and email/mobile number validation features across the application, reducing unauthorized access incidents by 45%.</li>
                    <li>Employed Postman to test and validate the functionality of REST APIs, seeking proper alignment between frontend and backend components.</li>
                    <li>Applied security headers to prevent common web vulnerabilities like cross-site scripting (XSS) and clickjacking.</li>
                </ul>
            </ul>
            <ul className={Style.skills}>
                <li><strong>Android Developer</strong> | May 2021 - Dec 2021</li>
            </ul>
            <ul>
            <li>Vishwakarma1.0, L.D. College of Engineering, Ahmedabad, India</li>
                <li><b>Tools/Technologies:</b> Dart, Flutter, Android Studio, WAMP</li>
                <li><b>Responsibilities:</b></li>
                <ul>
                    <li>Designed a responsive user interface for an android-based application that acts as an intermediary between masons and contractors.</li>
                    <li>Facilitated a multilingual experience to accommodate evolving stakeholder needs, ensuring iterative design adjustments through continuous feedback loops.</li>
                    <li>Generated 100+ test cases and implemented regression testing methodologies to verify that code changes and updates did not negatively impact existing features.</li>
                    <li>Produced technical documentation, offering in-depth insights into the application's architecture, functionalities, and troubleshooting common issues.</li>
                </ul>
            </ul>
        </>
        );
    }
    
 
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={educationText()}/>
        <Terminal text = {experienceText()}/>
        </Box>
    )
}