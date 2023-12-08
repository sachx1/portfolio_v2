import React from 'react';
import './styles/containerOne.css';
import InfoIcon from '@mui/icons-material/Info';
import ArchiveIcon from '@mui/icons-material/Archive';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
    
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
                <button>
                    <Stack direction="row" alignItems="center" gap={1}>
                        <InfoIcon />
                        <Typography variant="body1">About</Typography>
                    </Stack>
                </button>
            </div>
            <div className='containerBtn'>
                <button>
                    <Stack direction="row" alignItems="center" gap={1}>
                        <ArchiveIcon />
                        <Typography variant="body1">Experience</Typography>
                    </Stack>
                </button>
            </div>
            <div className='containerBtn'>
                <button>
                    <Stack direction="row" alignItems="center" gap={1}>
                        <PermContactCalendarIcon />
                        <Typography variant="body1">Contact</Typography>
                    </Stack>
                </button>
            </div>
        </div>
    );
}
    
export default ContainerOne;