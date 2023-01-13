import jQuery from "jquery";

export const getCurrentWeather = () => {
  jQuery(($) => {
    let userSearch = $("#searchWeather").val();

    console.log(userSearch);
  });
};
