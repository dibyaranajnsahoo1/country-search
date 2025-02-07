import React from "react";

const FlagItems = ({ img, name }) => {
    return (
        <div className="countryCard" style={{ border: "1px solid #ccc", display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',height:'180px', width:'180px', padding:'10px',
            textAlign:'center' , borderRadius:'8px'}}>
            <img src={img} alt={`Flag of ${name}`} style={{ width: "100px", height: "60px" }} />
            <h3>{name}</h3>
        </div>
    );
};

export default FlagItems;
