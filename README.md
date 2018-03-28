# demosg-ichild
DEMO iChild dot com dot sg


A little technical test for me from <a href="http://dploy.asia" target="_blank">dploy</a><br>
All I have to do is manage the code so the top part (Top Section) stays when scrolled down.

<img src="https://preview.ibb.co/eUV8kS/stay_on_top_section.jpg" alt="stay_on_top_section" border="0">

For the purpose of preview I made some changes on files

Change the top part (Top Section) stays when scrolled down

```html
<div id="wrap" class="parent">
  <div class="staywhenscroll child">
    <div class="select_row" onclick='loadingFrame("/IchildV3/contacts/iframe.html #receivePayment");'><em style="font-style:normal;float:left;margin-left:10px;">Selected: <strong style="font-size:16px;">8</strong></em><label style="float:right;margin-right:15px;">Total: <strong style="font-size:16px;">$82.00</strong></label>
    </div><!-- /.select_row -->
    <div class="setting_sub_menu">
        <a href="#" class="selected">All</a>
        <a href="#">Service</a>
        <a href="#">Product</a>
    </div><!-- /.setting_sub_menu -->
  </div><!-- /.staywhenscroll -->

</div><!-- /#wrap .wrap -->
```

Other supported codes are made in separated files, custom.css and custom.js
