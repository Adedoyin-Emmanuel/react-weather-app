import jQuery from "jquery";

export function navigate(page){
    window.location.href=`${page}`;
}

function closeUtilityComponent(){
    jQuery(($)=>{
        $.noConflict();

        $(".utility-component").removeClass("add-utility-component-height");
    })
}

export default navigate;