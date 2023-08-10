import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
// MUI allows us to use this useMediaQuery hook for responsive design
// and it will be applied to react components so we will not need to 
// write css.
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact : "",
    address1: "",
    address2: "",
}

const phoneRegExp = 
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// userSchema is going to define the validation logic for each input field.
const userSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email('Invalid email!').required('required'),
    contact: yup.string().matches(phoneRegExp, 'Phone number is not valid!').required('required'),
    address1: yup.string().required('required'),
    address2: yup.string().required('required'),    
});

const Form = () => {
    // if we had a minimum width of 600px, this boolean will be triggered
    const isNonMobile = useMediaQuery('(min-width:600px)')

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box m='20px'>
            <Header title='CREATE USER' subtitle='Create a New User Profile'/>

            <Formik 
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {/* all these values come from Formik component */}
                {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Box 
                            display="grid" 
                            gap="30px" 
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": {
                                    gridColumn: isNonMobile ? undefined : "span 4"
                                }
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                // we use the '!!' sign to force it to be a boolean
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: 'span 2 '}}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                // we use the '!!' sign to force it to be a boolean
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: 'span 2 '}}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                // we use the '!!' sign to force it to be a boolean
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: 'span 4'}}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                // we use the '!!' sign to force it to be a boolean
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: 'span 4'}}
                            />

                            <TextField 
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name="address1"
                                // we use the '!!' sign to force it to be a boolean
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{ gridColumn: 'span 4'}}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name="address2"
                                // we use the '!!' sign to force it to be a boolean
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{ gridColumn: 'span 4'}}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button 
                                type="submit"
                                color="secondary"
                                variant="contained"
                            >
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
}

export default Form;