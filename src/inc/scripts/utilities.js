import jQuery from "jquery";

const navigate = page =>{
    window.location.href=`${page}`;
}

jQuery(($)=>{
    $.noConflict();

    
});

export default navigate;