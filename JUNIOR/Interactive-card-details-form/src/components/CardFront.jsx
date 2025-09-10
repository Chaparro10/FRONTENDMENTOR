import React from "react";

import cardFront from ".././assets/bg-card-front.png";

export const CardFront = ({ formik } = props) => {
    return (
        <div
            style={{
                backgroundImage: `url(${cardFront})`,
                width: "350px",
                display: "block",
                height: "230px",
                borderRadius: "10px",
                alignContent: "center",
                contain: "content",
                position: "relative",
                top: "100px",
                left: "200px",
            }}
        >
            <div style={{ padding: "15px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <div
                        style={{
                            borderRadius: "50%",
                            backgroundColor: "#FFF",
                            height: "50px",
                            width: "50px",
                        }}
                    />
                    <div
                        style={{
                            borderRadius: "50%",
                            border: "solid 1px #FFF",
                            height: "20px",
                            width: "20px",
                        }}
                    />
                </div>

                <p style={{ fontSize: "25px", textAlign: "justify" }}>
                    {formik.values.cardNumber || "0000 0000 0000 0000"}
                </p>
                <div style={{ display: "flex" }}>
                    <p style={{ width: "70%", textAlign: "left" }}>
                        {formik.values.cardName || "JANE APPLESSEED"}{" "}
                    </p>
                    <p style={{ width: "30%", textAlign: "right", paddingRight: "30px" }}>
                        {formik.values.expMMDate || "00"}/{formik.values.expYYDate || "00"}
                    </p>
                </div>
            </div>
        </div>
    );
};
