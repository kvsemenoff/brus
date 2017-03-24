$(document).ready(function(){
    var s = new YMaps.Style();
    s.iconStyle = new YMaps.IconStyle();
    s.iconStyle.href = "/img/map-pin.png";
    s.iconStyle.size = new YMaps.Point(60, 70);
    s.iconStyle.offset = new YMaps.Point(-9, -29);
    var mapp = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
    mapp.setCenter(new YMaps.GeoPoint(82.938620, 55.038351), 15);
    var placemark = new YMaps.Placemark(new YMaps.GeoPoint(82.938620, 55.038351),{style: s});
    placemark.name = "Брус";
    mapp.addOverlay(placemark);
    mapp.addControl(new YMaps.ToolBar());
    mapp.addControl(new YMaps.Zoom());
    mapp.addControl(new YMaps.ScaleLine());
});