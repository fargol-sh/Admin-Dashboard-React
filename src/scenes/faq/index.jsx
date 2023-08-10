import { Box, Typography, useTheme } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Header from '../../components/Header';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

            <Accordion sx={{mt: "35px", mb: "15px"}} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident earum facere a, similique labore molestias enim. Repudiandae eaque debitis, obcaecati quidem omnis unde ullam molestias, eos voluptates sit voluptatibus?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{mb: "15px"}} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident earum facere a, similique labore molestias enim. Repudiandae eaque debitis, obcaecati quidem omnis unde ullam molestias, eos voluptates sit voluptatibus?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{mb: "15px"}} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Your Favorite Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident earum facere a, similique labore molestias enim. Repudiandae eaque debitis, obcaecati quidem omnis unde ullam molestias, eos voluptates sit voluptatibus?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{mb: "15px"}} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Some Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident earum facere a, similique labore molestias enim. Repudiandae eaque debitis, obcaecati quidem omnis unde ullam molestias, eos voluptates sit voluptatibus?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        The Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident earum facere a, similique labore molestias enim. Repudiandae eaque debitis, obcaecati quidem omnis unde ullam molestias, eos voluptates sit voluptatibus?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;

