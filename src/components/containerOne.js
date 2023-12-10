import React from 'react';
import './styles/containerOne.css';
import InfoIcon from '@mui/icons-material/Info';
import ArchiveIcon from '@mui/icons-material/Archive';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Link } from 'react-scroll';
    
const ContainerOne = () => {
    return (
        <div>
            <div className='containerTitle'>
                <h1>Sachin Khargie <br /> Full Stack Developer</h1> 
            </div>
            <div className='containerBlurb'>
                <p>Experience in both Front End and Back End Development using 
                    JavaScript, ReactJS and Python!
                </p>
            </div>
            <div className='containerBtn'>
                <Link to="about" smooth={true} duration={2000}>
                    <button className='buttons'>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <InfoIcon />
                            <Typography variant="body1">About</Typography>
                        </Stack>
                    </button>
                </Link>
            </div>
            <div className='containerBtn'>
                <button className='buttons'>
                    <Stack direction="row" alignItems="center" gap={1}>
                        <ArchiveIcon />
                        <Typography variant="body1">Experience</Typography>
                    </Stack>
                </button>
            </div>
            <div className='containerBtn'>
                <button className='buttons'>
                    <Stack direction="row" alignItems="center" gap={1}>
                        <PermContactCalendarIcon />
                        <Typography variant="body1">Contact</Typography>
                    </Stack>
                </button>
            </div>
            <div className='containerBtn'>
                <button className='buttons'>
                    <Stack direction="row" alignItems="center" gap={1}>
                        <PictureAsPdfIcon />
                        <Typography variant="body1">Resume</Typography>
                    </Stack>
                </button>
            </div>
            <div className='containerFooter'>
                <a href="https://github.com/sachx1" target="_blank" rel="noopener noreferrer">
                    <button className='buttonsFooter'>
                        <GitHubIcon />
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/sachin-khargie/" target="_blank" rel="noopener noreferrer">
                    <button className='buttonsFooter'>
                        <LinkedInIcon />
                    </button>
                </a>
            </div>
        </div>
    );
}
    
export default ContainerOne;