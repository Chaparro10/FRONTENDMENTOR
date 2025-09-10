import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const FormCard = ({ formik } = props) => {
    return (
        <form noValidate onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} sx={{ width: "280px" }}>
                <Grid size={12}>
                    <Typography
                        variant="body1"
                        color="initial"
                        sx={{ fontSize: "10px", textAlign: "justify", color: "#5d556c" }}
                    >
                        CARDHOLDER NAME
                    </Typography>
                    <TextField
                        sx={{ border: "solid 1px #FFF" }}
                        fullWidth
                        placeholder="e.g. Jane Appleseed"
                        id="cardName"
                        name="cardName"
                         value={formik.values.cardName}
                        inputProps={{ maxLength: 30}}
                        onChange={formik.handleChange}

                    />
                    {formik.errors.cardName && (
                        <small style={{ color: 'red' }}>{formik.errors.cardName}</small>
                    )}
                </Grid>

                <Grid size={12}>
                    <Typography
                        variant="body1"
                        color="initial"
                        sx={{ fontSize: "10px", textAlign: "justify", color: "#5d556c" }}
                    >
                        CARD NUMBER
                    </Typography>
                    <TextField
                        sx={{ border: "solid 1px #FFF" }}
                        fullWidth
                        placeholder="e.g. 1234 5678 9123 0000"
                         value={formik.values.cardNumber}
                        id="cardNumber"
                        name="cardNumber"
                        inputProps={{ maxLength: 19, inputMode: "numeric", pattern: "[0-9 ]*" }}
                        onChange={(e) => {
                            const raw = e.target.value.replace(/\D/g, "");
                            const pretty = raw.replace(/(.{4})/g, "$1 ").trim();
                            formik.setFieldValue("cardNumber", pretty);
                        }}
                        onBlur={formik.handleBlur}

                    />
                    {formik.errors.cardNumber && (
                        <small style={{ color: 'red' }}>{formik.errors.cardNumber}</small>
                    )}
                </Grid>

                <Grid container size={12} spacing={1}>
                    <Grid container size={6}>
                        <Grid size={12}>
                            <Typography
                                variant="body1"
                                color="initial"
                                sx={{
                                    fontSize: "10px",
                                    textAlign: "justify",
                                    color: "#5d556c",
                                }}
                            >
                                EXP. DATE (MM/YY)
                            </Typography>
                        </Grid>

                        <Grid container spacing={1}>
                            <Grid size={6}>
                                <TextField sx={{ border: "solid 1px #FFF" }} placeholder="MM"
                                    id="expYYDate"
                                    name="expYYDate"
                                      value={formik.values.expYYDate}
                                     inputProps={{ maxLength: 2, inputMode: "numeric", pattern: "\\d*" }}
                                    onChange={formik.handleChange} />
                            </Grid>

                            <Grid size={6}>
                                <TextField sx={{ border: "solid 1px #FFF" }} placeholder="YY"
                                    id="expMMDate"
                                    name="expMMDate"
                                       value={formik.values.expMMDate}
                                        inputProps={{ maxLength: 2, inputMode: "numeric", pattern: "\\d*" }}
                                    onChange={formik.handleChange}
                                />

                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container size={6}>
                        <Typography
                            variant="body1"
                            color="initial"
                            sx={{ fontSize: "10px", textAlign: "justify", color: "#5d556c" }}
                        >
                            CVC
                        </Typography>
                        <TextField
                            sx={{ border: "solid 1px #FFF" }}
                            id="cvc"
                            name="cvc"
                            value={formik.values.cvc}
                             inputProps={{ maxLength: 3, inputMode: "numeric", pattern: "[0-9 ]*" }}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.cvc && (
                            <small style={{ color: 'red' }}>{formik.errors.cvc}</small>
                        )}
                    </Grid>
                </Grid>

                <Grid size={12}>
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        sx={{ backgroundColor: "#1d0e2a" }}
                       
                    >
                        Confirm
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};
