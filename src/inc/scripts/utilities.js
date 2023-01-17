import jQuery from "jquery";

export function navigate(page){
    window.location.href=`${page}`;
}

const  closeUtilityComponent = ()=>{
    jQuery(($)=>{
        $.noConflict();

        $(".utility-component").removeClass("add-utility-component-height");
    })
}



export default navigate;