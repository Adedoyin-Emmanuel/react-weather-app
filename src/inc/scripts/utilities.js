import jQuery from "jquery";

jQuery(($)=>{
    $.noConflict();

    const navigate = page =>{
        location.href = `${page}`;
    }
    
});

export default navigate;