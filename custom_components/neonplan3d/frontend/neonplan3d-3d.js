var mb=[{id:"speaker",parts:[{shape:"box",x:0,z:0,w:.94,d:.92,y:0,h:1,color:"body",top:"bodyTop",edges:!0},{shape:"cyl",axis:"z",x:0,z:.48,w:.6,d:.035,y:.18,h:.52,color:"dark",edges:!0,glow:!0},{shape:"cyl",axis:"z",x:0,z:.48,w:.24,d:.035,y:.73,h:.14,color:"accent",edges:!0}]},{id:"soundbar",parts:[{shape:"box",x:0,z:0,w:.98,d:.92,y:.04,h:.92,color:"body",edges:!0},{shape:"box",x:0,z:.46,w:.88,d:.04,y:.2,h:.56,color:"dark",glow:!0}]},{id:"echo_dot",parts:[{shape:"cyl",x:0,z:0,w:.94,d:.94,y:.04,h:.84,color:"body"},{shape:"cyl",x:0,z:0,w:.62,d:.62,y:.93,h:.04,color:"accent",glow:!0}]},{id:"display",parts:[{shape:"box",x:0,z:0,w:1,d:1,y:0,h:1,color:"body",top:"bodyTop",edges:!0},{shape:"box",x:0,z:.46,w:.9,d:.03,y:.08,h:.84,color:"dark",edges:!0,screen:!0},{shape:"box",x:0,z:-.12,w:.28,d:.18,y:.015,h:.06,color:"metal"}]},{id:"car",parts:[{shape:"loft",x:0,z:0,w:.96,d:.96,y:.13,h:.36,color:"body",top:"bodyTop",edges:!0},{shape:"loft",x:0,z:-.015,w:.7,d:.54,y:.47,h:.4,tx:0,tz:-.02,tw:.58,td:.5,color:"body",top:"bodyTop",edges:!0},{shape:"box",x:0,z:.265,w:.54,d:.025,y:.55,h:.22,color:"glass",edges:!0},{shape:"box",x:-.345,z:-.01,w:.025,d:.36,y:.57,h:.2,color:"glass",edges:!0},{shape:"box",x:.345,z:-.01,w:.025,d:.36,y:.57,h:.2,color:"glass",edges:!0},{shape:"cyl",axis:"x",x:-.45,z:-.31,w:.12,d:.13,y:.07,h:.23,color:"dark",edges:!0},{shape:"cyl",axis:"x",x:.45,z:-.31,w:.12,d:.13,y:.07,h:.23,color:"dark",edges:!0},{shape:"cyl",axis:"x",x:-.45,z:.31,w:.12,d:.13,y:.07,h:.23,color:"dark",edges:!0},{shape:"cyl",axis:"x",x:.45,z:.31,w:.12,d:.13,y:.07,h:.23,color:"dark",edges:!0},{shape:"box",x:-.34,z:.49,w:.16,d:.025,y:.32,h:.08,color:"#e8f4ff"},{shape:"box",x:.34,z:.49,w:.16,d:.025,y:.32,h:.08,color:"#e8f4ff"},{shape:"box",x:-.34,z:-.49,w:.16,d:.025,y:.32,h:.08,color:"#ff3b4f"},{shape:"box",x:.34,z:-.49,w:.16,d:.025,y:.32,h:.08,color:"#ff3b4f"}]},{id:"plant",parts:[{shape:"loft",x:0,z:0,w:.52,d:.52,y:0,h:.34,tw:.66,td:.66,color:"pot",edges:!0},{shape:"cyl",x:0,z:0,w:.09,d:.09,y:.3,h:.32,color:"wood"},{shape:"loft",x:-.17,z:0,w:.42,d:.4,y:.43,h:.48,tx:-.14,tz:0,tw:.18,td:.18,color:"plant",top:"plantTop",edges:"faint"},{shape:"loft",x:.17,z:-.02,w:.42,d:.4,y:.47,h:.44,tx:.14,tz:-.02,tw:.18,td:.18,color:"plant",top:"plantTop",edges:"faint"},{shape:"loft",x:0,z:.08,w:.46,d:.42,y:.62,h:.38,tz:.08,tw:.14,td:.14,color:"plant",top:"plantTop",edges:"faint"}]},{id:"aquarium",parts:[{shape:"box",x:0,z:0,w:1,d:1,y:0,h:.14,color:"body",top:"bodyTop",edges:!0},{shape:"box",x:0,z:0,w:.94,d:.92,y:.14,h:.66,color:"#123b52",edges:"faint",glow:!0},{shape:"box",x:0,z:-.46,w:.96,d:.08,y:.12,h:.76,color:"glass",edges:!0},{shape:"box",x:-.46,z:0,w:.08,d:.88,y:.12,h:.76,color:"glass",edges:"faint"},{shape:"box",x:.46,z:0,w:.08,d:.88,y:.12,h:.76,color:"glass",edges:"faint"},{shape:"box",x:0,z:.46,w:.96,d:.06,y:.12,h:.76,color:"glass",edges:"faint"},{shape:"box",x:0,z:0,w:1,d:1,y:.88,h:.12,color:"body",top:"bodyTop",edges:!0}]},{id:"aquarium_large",parts:[{shape:"box",x:0,z:0,w:1,d:1,y:0,h:.12,color:"body",top:"bodyTop",edges:!0},{shape:"box",x:0,z:0,w:.94,d:.92,y:.12,h:.76,color:"#123b52",edges:"faint",glow:!0},{shape:"box",x:0,z:-.46,w:.96,d:.08,y:.1,h:.82,color:"glass",edges:!0},{shape:"box",x:-.46,z:0,w:.08,d:.88,y:.1,h:.82,color:"glass",edges:"faint"},{shape:"box",x:.46,z:0,w:.08,d:.88,y:.1,h:.82,color:"glass",edges:"faint"},{shape:"box",x:0,z:.46,w:.96,d:.06,y:.1,h:.82,color:"glass",edges:"faint"},{shape:"box",x:0,z:0,w:1,d:1,y:.9,h:.1,color:"body",top:"bodyTop",edges:!0}]}],gt=(i,t,e,n,r,o,s="body",a={})=>({shape:"box",x:i,z:t,w:e,d:n,y:r,h:o,color:s,edges:!0,...a}),_e=(i,t,e,n,r,o,s="metal",a="y",l={})=>({shape:"cyl",axis:a,x:i,z:t,w:e,d:n,y:r,h:o,color:s,edges:!0,...l}),Yr=(i,t,e,n,r,o,s="body",a={})=>({shape:"loft",x:i,z:t,w:e,d:n,y:r,h:o,color:s,edges:!0,...a}),gb=[{id:"van",parts:[Yr(0,0,.88,.94,.1,.45,"body",{tz:-.03,tw:.78,td:.87}),gt(0,-.2,.78,.56,.52,.36,"bodyTop"),gt(0,.27,.7,.3,.47,.28,"glass",{edges:"faint"}),gt(0,-.16,.64,.03,.59,.2,"glass",{edges:"faint"}),...[-.31,.31].flatMap(i=>[-.3,.3].map(t=>_e(i,t,.15,.17,.06,.2,"dark","x"))),gt(-.32,.45,.12,.06,.25,.1,"white"),gt(.32,.45,.12,.06,.25,.1,"white")]},{id:"motorcycle",parts:[_e(-.02,.34,.12,.23,.04,.2,"dark","x"),_e(-.02,-.34,.12,.23,.04,.2,"dark","x"),Yr(0,0,.18,.4,.34,.18,"metal",{tz:-.04,tw:.14,td:.2}),gt(0,-.13,.34,.27,.48,.15,"bodyTop"),gt(0,-.29,.28,.27,.61,.08,"fabric"),_e(0,.12,.12,.18,.62,.07,"accent"),gt(0,.3,.55,.05,.74,.04,"metal"),gt(-.25,.3,.08,.08,.66,.16,"metal"),gt(.25,.3,.08,.08,.66,.16,"metal")]},{id:"projector",parts:[gt(0,0,.94,.88,.1,.8,"body"),_e(0,.46,.32,.12,.38,.28,"dark","z",{glow:!0}),gt(0,-.12,.56,.04,.72,.08,"metal")]},{id:"subwoofer",parts:[gt(0,0,.92,.92,.04,.92,"body"),_e(0,.48,.64,.045,.18,.64,"dark","z",{glow:!0}),_e(0,.49,.3,.05,.35,.28,"accent","z")]},{id:"receiver",parts:[gt(0,0,.96,.9,.08,.7,"body"),gt(0,.46,.88,.04,.18,.46,"dark",{glow:!0}),...[-.34,-.12,.14,.35].map(i=>_e(i,.49,.1,.05,.28,.18,"metal","z"))]},{id:"turntable",parts:[gt(0,0,.96,.94,.08,.18,"wood"),_e(-.05,-.02,.72,.72,.28,.1,"dark"),_e(-.05,-.02,.5,.5,.34,.035,"metal"),gt(.31,.04,.05,.34,.32,.05,"metal"),_e(.31,.2,.08,.08,.29,.08,"accent")]},{id:"screen_roll",parts:[_e(0,0,.98,.12,.91,.08,"metal","x"),gt(0,.46,.96,.03,.06,.82,"white",{screen:!0}),gt(0,.46,.99,.05,.03,.06,"dark")]},{id:"cinema_seat",parts:[gt(0,-.02,.76,.42,.06,.18,"metal"),gt(0,.14,.74,.46,.24,.2,"fabric"),gt(0,-.25,.72,.2,.43,.48,"fabric"),gt(-.43,-.02,.14,.82,.22,.2,"body"),gt(.43,-.02,.14,.82,.22,.2,"body")]},{id:"cat_tree",parts:[gt(0,0,.92,.92,.02,.08,"fabric"),...[-.28,.28].map(i=>_e(i,0,.16,.16,.1,.68,"wood")),gt(0,0,.86,.8,.42,.08,"fabric"),_e(0,0,.14,.14,.5,.4,"wood"),gt(0,-.04,.74,.62,.86,.08,"fabric"),_e(0,-.04,.13,.13,.94,.43,"wood"),gt(0,0,.68,.64,.91,.07,"fabric"),_e(.3,.2,.1,.1,.98,.08,"accent")]},{id:"dog_bed",parts:[gt(0,0,.96,.94,.03,.18,"fabric"),gt(0,0,.78,.72,.2,.14,"cushion"),gt(-.42,0,.12,.94,.18,.2,"fabric"),gt(.42,0,.12,.94,.18,.2,"fabric"),gt(0,-.42,.94,.1,.18,.2,"fabric"),gt(0,.42,.94,.1,.18,.2,"fabric")]},{id:"pet_feeder",parts:[gt(0,0,.72,.72,.03,.28,"body"),Yr(0,-.03,.68,.58,.32,.55,"bodyTop",{tw:.56,td:.45}),gt(0,-.34,.45,.05,.38,.26,"dark"),_e(0,.34,.78,.38,.26,.08,"metal")]},{id:"water_fountain",parts:[_e(0,0,.84,.84,.03,.28,"body"),_e(0,0,.62,.62,.28,.08,"metal"),_e(0,-.02,.2,.2,.36,.32,"accent","y",{glow:!0})]},{id:"litter_box",parts:[gt(0,0,.94,.92,.04,.18,"body"),gt(0,-.38,.94,.12,.2,.32,"bodyTop"),gt(-.44,.02,.1,.7,.2,.32,"bodyTop"),gt(.44,.02,.1,.7,.2,.32,"bodyTop"),Yr(0,.05,.88,.54,.38,.45,"body",{tw:.72,td:.42})]},{id:"pet_cage",parts:[gt(0,0,.94,.92,.02,.14,"body"),gt(0,0,.92,.04,.82,.08,"metal"),...[-.42,-.21,0,.21,.42].flatMap(i=>[gt(i,-.43,.018,.018,.12,.72,"metal"),gt(i,.43,.018,.018,.12,.72,"metal")]),...[-.3,0,.3].map(i=>gt(-.46,i,.018,.018,.12,.72,"metal")),...[-.3,0,.3].map(i=>gt(.46,i,.018,.018,.12,.72,"metal"))]},{id:"terrarium",parts:[gt(0,0,.96,.94,.04,.13,"wood"),gt(0,-.46,.94,.03,.17,.72,"glass",{edges:"faint"}),gt(-.46,0,.03,.9,.17,.72,"glass",{edges:"faint"}),gt(.46,0,.03,.9,.17,.72,"glass",{edges:"faint"}),gt(0,.44,.94,.03,.17,.72,"glass",{edges:"faint"}),gt(0,0,.96,.94,.9,.1,"body"),gt(0,-.42,.8,.025,.91,.06,"accent",{glow:!0})]},{id:"garden_bench",parts:[...[-.34,.34].flatMap(i=>[gt(i,0,.12,.78,.05,.48,"metal"),gt(i,-.3,.12,.12,.52,.42,"metal")]),gt(0,0,.96,.92,.5,.1,"wood"),gt(0,-.35,.96,.12,.68,.42,"wood"),gt(0,-.1,.96,.1,.78,.08,"wood"),gt(0,-.3,.96,.1,.96,.08,"wood")]},{id:"grill",parts:[gt(0,0,.88,.86,.48,.1,"metal"),Yr(0,.02,.86,.78,.57,.28,"dark",{tw:.8,td:.72}),...[-.34,.34].flatMap(i=>[-.31,.31].map(t=>gt(i,t,.07,.07,.06,.45,"metal"))),gt(0,.03,.84,.68,.78,.025,"white"),gt(0,0,.88,.08,.91,.05,"metal")]},{id:"workbench",parts:[gt(0,0,.98,.96,.86,.12,"wood"),...[-.42,.42].flatMap(i=>[-.4,.4].map(t=>gt(i,t,.09,.09,.08,.78,"metal"))),gt(0,-.34,.78,.12,.32,.08,"wood"),gt(0,.43,.98,.04,.86,.08,"body"),gt(-.28,.42,.24,.03,.67,.25,"bodyTop"),gt(.28,.42,.24,.03,.67,.25,"bodyTop")]},{id:"tool_cabinet",parts:[gt(0,0,.92,.9,.06,.84,"body"),gt(0,-.02,.96,.94,.9,.08,"metal"),...[.25,.48,.71].map(i=>gt(0,.46,.84,.03,i,.16,"bodyTop")),...[-.32,.32].map(i=>gt(i,.49,.06,.04,.42,.035,"accent")),...[-.35,.35].map(i=>_e(i,0,.14,.14,.01,.08,"dark"))]},{id:"treadmill",parts:[gt(0,.02,.52,.92,.08,.08,"dark"),gt(0,.02,.46,.84,.16,.05,"metal"),gt(-.4,-.22,.06,.06,.18,.62,"metal"),gt(.4,-.22,.06,.06,.18,.62,"metal"),gt(0,-.22,.82,.06,.78,.06,"body"),gt(0,-.32,.44,.05,.82,.16,"dark",{glow:!0})]},{id:"exercise_bike",parts:[_e(-.05,.22,.42,.1,.08,.28,"dark","x"),gt(0,0,.12,.12,.15,.57,"metal"),Yr(0,0,.12,.56,.58,.11,"metal",{tz:.15,tw:.12,td:.3}),gt(0,-.25,.3,.28,.67,.06,"fabric"),gt(0,.3,.42,.06,.83,.05,"metal"),gt(-.18,.31,.05,.05,.7,.18,"metal"),gt(.18,.31,.05,.05,.7,.18,"metal"),gt(0,-.29,.28,.04,.92,.12,"dark",{glow:!0})]},{id:"heat_pump",parts:[gt(0,0,.94,.9,.05,.9,"body"),gt(0,-.46,.84,.03,.1,.78,"metal"),_e(0,.47,.64,.05,.5,.46,"dark","z"),_e(0,.48,.12,.06,.5,.44,"metal","z"),...[.23,.32,.41,.59,.68,.77].map(i=>gt(0,.47,.82,.03,i,.025,"metal"))]},{id:"buffer_tank",parts:[_e(0,0,.78,.78,.04,.9,"metal"),_e(0,0,.82,.82,.04,.06,"dark"),_e(0,0,.82,.82,.91,.06,"dark"),...[.22,.5,.78].map(i=>_e(0,0,.86,.86,i,.035,"accent")),...[-.24,.24].map(i=>_e(i,-.08,.06,.06,.78,.18,"metal","z"))]},{id:"ventilation_unit",parts:[gt(0,0,.96,.94,.1,.78,"body"),gt(0,.48,.84,.03,.2,.55,"metal"),...[-.3,-.18,-.06,.06,.18,.3].map(i=>gt(i,.5,.035,.025,.22,.5,"dark")),_e(-.32,-.42,.24,.24,.82,.18,"metal","z"),_e(.32,-.42,.24,.24,.82,.18,"metal","z")]},{id:"column",parts:[gt(0,0,.94,.94,.02,.1,"bodyTop"),_e(0,0,.62,.62,.1,.8,"metal"),gt(0,0,.88,.88,.86,.08,"bodyTop")]},{id:"beam",parts:[gt(0,0,.96,.84,.16,.68,"wood"),gt(0,-.43,1,.06,.1,.12,"woodTop"),gt(0,.43,1,.06,.1,.12,"woodTop")]},{id:"glass_partition",parts:[gt(0,0,.98,.96,.02,.05,"metal"),gt(0,0,.98,.05,.08,.84,"metal"),...[-.31,0,.31].map(i=>gt(i,0,.3,.025,.08,.84,"glass",{edges:"faint"})),gt(0,0,.98,.05,.92,.05,"metal")]},{id:"sliding_wall",parts:[gt(0,0,.98,.96,.9,.04,"metal"),...[-.32,0,.32].map(i=>gt(i,0,.31,.04,.06,.86,"bodyTop")),...[-.32,0,.32].map(i=>gt(i+.1,.03,.02,.025,.12,.72,"glass",{edges:"faint"})),gt(0,0,.98,.04,.02,.04,"metal")]},{id:"light_cove",parts:[gt(0,0,.98,.9,.1,.8,"body"),gt(0,.42,.94,.12,.82,.1,"white",{glow:!0})]},{id:"led_niche",parts:[gt(0,0,.96,.9,.06,.88,"body"),gt(0,-.42,.78,.04,.12,.72,"dark"),gt(0,.42,.86,.06,.08,.82,"bodyTop"),gt(0,-.38,.76,.03,.86,.08,"accent",{glow:!0})]},{id:"platform",parts:[gt(0,0,.98,.96,.06,.72,"body"),gt(0,0,.94,.92,.78,.14,"bodyTop")]},{id:"railing",parts:[...[-.44,-.22,0,.22,.44].map(i=>gt(i,0,.045,.12,.08,.76,"metal")),gt(0,0,.98,.16,.83,.11,"wood"),gt(0,0,.98,.12,.12,.06,"metal")]},{id:"curtain_motor",parts:[gt(0,0,.98,.1,.92,.06,"metal"),_e(0,0,.96,.09,.96,.08,"dark","x"),...[-.4,-.2,0,.2,.4].map(i=>gt(i,.12,.19,.035,.08,.78,"fabric"))]}],jf=[...mb,...gb];var ki={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Vn(i){return i==="hedge"||i==="fence"||i==="pergola"}function su(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!Vn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function da(i){return[...i.rooms,...su(i)]}function bb(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,s=1/0,a=-1/0;for(let[c,h]of i.points){let u=o(c,h);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-s)/(a-s)));return n*l}function xb(i,t,e,n){return vi(i,t)+ki[t.type]-qo(i,t,e,n)}var au=-.2,fa={set:!1,level:au};function td(i){let t=i?.settings.terrain??null;fa={set:t?.level!=null,level:t?.level??au}}function qr(i,t){return fa.level}function ed(i){return i.elevation>.3?0:fa.set?fa.level-i.elevation:au}function vi(i,t){return ed(i)+(t.offset??0)}function qo(i,t,e,n){return t.type==="pool"?0:bb(t,e,n)}function pa(i,t,e){let n=(i.outdoor??[]).filter(o=>!Vn(o.type)&&o.type!=="pool"&&jt([t,e],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?xb(i,r,t,e):ed(i)}function ma(i,t){return vi(i,t)+(t.above?id(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function yb(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?id(i):1.5}function lu(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Vn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>jt(n,e.points)))}function nd(i,t){return!t.above&&!lu(i,t)?ga(i,t)-.05:ma(i,t)-yb(t)}function ga(i,t){return ma(i,t)-.15}function id(i){return i.height&&i.height>.3?i.height:1.2}var vb={type:"none",pitch:35,overhang:.4},rT={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...vb}};var rd=.3;var od=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),ba=1.75;var sd=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function ad(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var ld=new Set(["stairs","stairs_u"]);function cd(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:h,rise:e/n}}function ud(i){return od.has(i)||!!Te(i)?.light}var _b=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function mr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Qf=.04,Mb=1.2;function hd(i,t,e,n=0){let r=0;for(let o of i.furniture)!(_b.has(o.type)||Te(o.type)?.surface)||!jt([t,e],Gi(o))||o.type==="worktop"&&n>0&&o.h-Qf>=Mb&&n<=o.h-Qf-.02||(r=Math.max(r,o.h));return r}var xa=new Set(["wall_switch","wall_socket"]),wb=4;function fd(i){let t=(i.gangs??[]).slice(0,wb);return t.length?t:[{entity:null}]}function dd(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var Sb=new Set([...od,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var Tb=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Eb=["standard","bars","glass_wall"];function zi(i,t){return i.type==="door"?i.style&&Tb.includes(i.style)?i.style:t?"front":"interior":i.style&&Eb.includes(i.style)?i.style:"standard"}function pd(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=o-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function md(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function vn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[o,s]=i[(e+1)%i.length];t+=n*s-o*r}return t/2}function Gn(i){return Math.abs(vn(i))}function Vi(i){let t=vn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;e+=(o+a)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function cu(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,o]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function gd(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:t,z0:e,x1:n,z1:r}}function Gi(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*e-a*n,i.z+s*n+a*e])}function jt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[o,s]=t[n],[a,l]=t[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(e=!e)}return e}var ya="neonplan.generated";function ue(i,t,e,n,r={}){return{packId:ya,item:{id:i,name:{de:t,en:e},size:n,parts:[],symbol:[{shape:"rect",x:0,z:0,w:.9,d:.9}],...r}}}var uu=[ue("speaker","Lautsprecher","Speaker",[.42,.42,.96],{electric:!0,mount:"floor",symbol:[{shape:"circle",x:0,z:0,r:.28}]}),ue("soundbar","Soundbar","Soundbar",[.95,.14,.12],{electric:!0,mount:"surface",symbol:[{shape:"rect",x:0,z:0,w:.94,d:.24}]}),ue("echo_dot","Echo Dot","Echo Dot",[.1,.1,.045],{electric:!0,mount:"surface",symbol:[{shape:"circle",x:0,z:0,r:.44}]}),ue("display","Display","Display",[1.2,.16,.76],{electric:!0,mount:"floor",parts:[{shape:"box",x:0,z:.46,w:.9,d:.03,y:.08,h:.84,color:"dark",screen:!0}]}),ue("car","Pkw","Car",[1.9,4.5,1.6],{vehicle:!0,mount:"floor",symbol:[{shape:"rect",x:0,z:0,w:.82,d:.94},{shape:"circle",x:-.43,z:-.28,r:.07},{shape:"circle",x:.43,z:-.28,r:.07},{shape:"circle",x:-.43,z:.28,r:.07},{shape:"circle",x:.43,z:.28,r:.07}]}),ue("van","Transporter","Van",[2.05,5.2,2.15],{vehicle:!0,mount:"floor"}),ue("motorcycle","Motorrad","Motorcycle",[.92,2.25,1.35],{vehicle:!0,mount:"floor"}),ue("plant","Topfpflanze","Potted plant",[.5,.5,1.1],{group:"plant",mount:"floor",symbol:[{shape:"rect",x:0,z:.22,w:.42,d:.25,fill:!0},{shape:"line",x1:0,z1:-.22,x2:0,z2:.12},{shape:"circle",x:0,z:-.12,r:.18}]}),ue("aquarium","Aquarium","Aquarium",[.8,.35,.5],{electric:!0,mount:"floor",symbol:[{shape:"rect",x:0,z:0,w:.94,d:.92}]}),ue("aquarium_large","Gro\xDFes Aquarium","Large aquarium",[1.2,.45,1.4],{electric:!0,mount:"floor",symbol:[{shape:"rect",x:0,z:0,w:.94,d:.92}]}),ue("projector","Projektor","Projector",[.38,.3,.16],{electric:!0,mount:"surface"}),ue("subwoofer","Subwoofer","Subwoofer",[.42,.42,.48],{electric:!0,mount:"floor"}),ue("receiver","AV-Receiver","AV Receiver",[.44,.36,.14],{electric:!0,mount:"surface"}),ue("turntable","Plattenspieler","Turntable",[.44,.36,.13],{electric:!0,mount:"surface"}),ue("screen_roll","Motorleinwand","Motorized screen",[2.6,.12,1.75],{electric:!0,mount:"wall",wall_y:.5,parts:[{shape:"box",x:0,z:.46,w:.98,d:.03,y:.05,h:.82,color:"white",screen:!0}]}),ue("cinema_seat","Kinostuhl","Cinema seat",[.9,.95,1.2],{mount:"floor"}),ue("cat_tree","Kratzbaum","Cat tree",[.85,.75,1.8],{mount:"floor"}),ue("dog_bed","Hundebett","Dog bed",[.95,.72,.28],{mount:"floor"}),ue("pet_feeder","Futterautomat","Pet feeder",[.38,.38,.7],{electric:!0,mount:"floor"}),ue("water_fountain","Trinkbrunnen","Pet water fountain",[.34,.34,.28],{electric:!0,mount:"floor"}),ue("litter_box","Katzentoilette","Litter box",[.68,.52,.42],{mount:"floor"}),ue("pet_cage","Tierk\xE4fig","Pet cage",[.82,.62,1.05],{mount:"floor"}),ue("terrarium","Terrarium","Terrarium",[.95,.5,.9],{electric:!0,mount:"floor"}),ue("garden_bench","Gartenbank","Garden bench",[1.5,.58,.92],{mount:"floor",surface:!0}),ue("grill","Grill","Grill",[.95,.58,1.05],{mount:"floor"}),ue("workbench","Werkbank","Workbench",[1.6,.72,.92],{mount:"floor",surface:!0}),ue("tool_cabinet","Werkzeugschrank","Tool cabinet",[.9,.48,1.6],{mount:"floor",surface:!0}),ue("treadmill","Laufband","Treadmill",[.82,1.9,1.35],{electric:!0,mount:"floor"}),ue("exercise_bike","Ergometer","Exercise bike",[.65,1.25,1.35],{electric:!0,mount:"floor"}),ue("heat_pump","W\xE4rmepumpe","Heat pump",[.9,.52,1.3],{electric:!0,mount:"floor"}),ue("buffer_tank","Pufferspeicher","Buffer tank",[.85,.85,1.85],{electric:!0,mount:"floor"}),ue("ventilation_unit","L\xFCftungsger\xE4t","Ventilation unit",[1.15,.78,.48],{electric:!0,mount:"ceiling"}),ue("column","S\xE4ule","Column",[.42,.42,2.5],{mount:"floor"}),ue("beam","Tr\xE4ger","Beam",[2.6,.35,.35],{mount:"ceiling"}),ue("glass_partition","Glastrennwand","Glass partition",[2.3,.12,2.2],{mount:"floor"}),ue("sliding_wall","Schiebewand","Sliding wall",[2.4,.14,2.2],{mount:"floor"}),ue("light_cove","Lichtvoute","Light cove",[2.2,.22,.24],{light:"strip",mount:"ceiling"}),ue("led_niche","LED-Nische","LED niche",[.85,.24,1.45],{light:"wall",mount:"wall",wall_y:.9}),ue("platform","Podest","Platform",[2.1,1.6,.32],{mount:"floor",surface:!0}),ue("railing","Gel\xE4nder","Railing",[2.4,.14,1.05],{mount:"floor"}),ue("curtain_motor","Motorvorhang","Motorized curtain",[2.4,.15,2.3],{electric:!0,mount:"wall",wall_y:.1})],Ab=new Set(["combo","combination","set","bundle","lamp","mount","stand","holder","bracket","support","shelf","rack","cable","remote","adapter","dock","case","cover","accessory","filter","heater","pump","light"]),bd=[["soundbar","soundbar"],["echo_dot","echo_dot"],["subwoofer","subwoofer"],["receiver","receiver"],["amplifier","receiver"],["stereo","speaker"],["turntable","turntable"],["speaker","speaker"]],xd=[["screen_roll","screen_roll"],["roll_down_screen","screen_roll"],["projection_screen","screen_roll"],["projector_screen","screen_roll"],["display","display"],["screen","display"],["television","display"],["monitor","display"],["tv","display"]],Rb=[["motorcycle","motorcycle"],["motorbike","motorcycle"],["van","van"],["car","car"],["auto","car"],["vehicle","car"],["sedan","car"],["suv","car"],["truck","car"],["convertible","car"]],Pb=[["aquarium_large","aquarium_large"],["large_aquarium","aquarium_large"],["aquarium","aquarium"]],Cb=[["potted_plant","plant"],["bonsai","plant"],["flower","plant"],["succulent","plant"]],Ib=[...bd,...xd,["projector","projector"],["cinema_seat","cinema_seat"],["cinema_chair","cinema_seat"]];function Lb(i,t){let e=[],n=0;for(;n<i.length;){let r=i.indexOf(t,n);if(r<0)break;let o=r+t.length;(r===0||i[r-1]==="_")&&(o===i.length||i[o]==="_")&&e.push([r,o]),n=r+1}return e}function gr(i,t){if(i.split("_").some(o=>Ab.has(o)))return;let e=t.flatMap(([o,s])=>Lb(i,o).map(([a,l])=>({token:o,id:s,start:a,end:l}))),n=e.filter(o=>!e.some(s=>s.token.length>o.token.length&&s.start<=o.start&&s.end>=o.end)),r=new Set(n.map(({id:o})=>o));return r.size===1?r.values().next().value:void 0}function hu(i){let[,t,...e]=i.split(":"),n=e.join(":").toLowerCase();if(t===ya)return uu.some(({item:o})=>o.id===n)?n:void 0;let r;return t==="mastershort.vehicles"&&(r=gr(n,Rb)),t==="mastershort.pro_sound"&&(r=gr(n,bd)),t==="mastershort.pro_screens"&&(r=gr(n,xd)),t==="mastershort.cinema"&&(r=gr(n,Ib)),t==="mastershort.pets"&&(r=gr(n,Pb)),!r&&t?.startsWith("mastershort.")&&(r=n==="plant"?"plant":n.startsWith("plant_")?gr(n,[["plant","plant"]]):gr(n,Cb)),r}function vd(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var Fb=[],fu=new Map,Db=0;function $o(i){Fb=i,fu=new Map(i.flatMap(t=>t.items.map(e=>[Nb(t.id,e.id),e]))),Db++}function Nb(i,t){return`pack:${i}:${t}`}function du(i){return i.startsWith("pack:")}function va(i){return du(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function pu(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function _d(i){return i==="robot_vacuum"||du(i)&&i.endsWith(":robot_vacuum")}function Zo(i){return i.z>.05}function Md(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&Zo(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}var Ob={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"},yd,wd=new Map;function Sd(i){wd=new Map(i.flatMap(({id:t,parts:e})=>{let n=Td(t);return n?[[t,{...n,parts:e}]]:[]}))}function Td(i){return yd??=new Map(uu.map(({item:t})=>[t.id,t])),yd.get(i)}function Ub(i){return wd.get(i)??Td(i)}function Ed(i){return Te(i)?.parts.find(t=>t.screen)}function Te(i){if(!du(i))return;let t=fu.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=Ob[e],o=r?fu.get(`pack:${r}:${n.join(":")}`):void 0,s=hu(i);return o??(s?Ub(s):void 0)}function an(i,t){let e=Te(t.type);if(t.mount_y!=null)return t.mount_y;let n=dd(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return ba;if(sd.has(t.type))return Math.max(0,i.height-ad(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return br(i,t)+hd(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?br(i,t):mr(t)||br(i,t)}}function br(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>jt([t.x,t.z],n.points))?0:pa(i,t.x,t.z)}Sd(jf);var sp=0,Ku=1,ap=2;var As=1,lp=2,So=3,fi=0,ln=1,se=2,Un=0,Cn=1,Ie=2,Ju=3,Rs=4,cp=5;var Rr=100,up=101,hp=102,fp=103,dp=104,pp=200,mp=201,gp=202,bp=203,ju=204,Qu=205,xp=206,yp=207,vp=208,_p=209,Mp=210,wp=211,Sp=212,Tp=213,Ep=214,ja=0,Qa=1,tl=2,po=3,el=4,nl=5,il=6,rl=7,th=0,Ap=1,Rp=2,Zn=0,eh=1,nh=2,ih=3,rh=4,oh=5,sh=6,ah=7;var lh=300,er=301,Pr=302,Fl=303,Dl=304,Ps=306,wr=1e3,An=1001,ol=1002,rn=1003,Pp=1004;var Cs=1005;var $e=1006,Nl=1007;var nr=1008;var In=1009,ch=1010,uh=1011,To=1012,Ol=1013,Kn=1014,Jn=1015,jn=1016,Ul=1017,Bl=1018,Eo=1020,hh=35902,fh=35899,dh=1021,ph=1022,Bn=1023,si=1026,ir=1027,mh=1028,kl=1029,rr=1030,zl=1031;var Vl=1033,Is=33776,Ls=33777,Fs=33778,Ds=33779,Gl=35840,Wl=35841,Hl=35842,Xl=35843,Yl=36196,ql=37492,$l=37496,Zl=37488,Kl=37489,Ns=37490,Jl=37491,jl=37808,Ql=37809,tc=37810,ec=37811,nc=37812,ic=37813,rc=37814,oc=37815,sc=37816,ac=37817,lc=37818,cc=37819,uc=37820,hc=37821,fc=36492,dc=36494,pc=36495,mc=36283,gc=36284,Os=36285,bc=36286;var os=2300,sl=2301,Za=2302,ku=2303,zu=2400,Vu=2401,Gu=2402;var Cp=3200;var gh=0,Ip=1,Pi="",Ve="srgb",ss="srgb-linear",as="linear",Ee="srgb";var Ka=7680;var Lp=519,Fp=512,Dp=513,Np=514,xc=515,Op=516,Up=517,yc=518,Bp=519,bh=35044,xh=35048;var yh="300 es",qn=2e3,ls=2001;function Bb(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function kb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kp(){let i=mo("canvas");return i.style.display="block",i}var Ad={},go=null;function cs(...i){let t="THREE."+i.shift();go?go("log",t,...i):console.log(t,...i)}function zp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=zp(i);let t="THREE."+i.shift();if(go)go("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=zp(i);let t="THREE."+i.shift();if(go)go("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Mr(...i){let t=i.join(" ");t in Ad||(Ad[t]=!0,Kt(...i))}function Vp(i,t,e){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var Gp={[ja]:Qa,[tl]:il,[el]:rl,[po]:nl,[Qa]:ja,[il]:tl,[rl]:el,[nl]:po},ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mu=Math.PI/180,al=180/Math.PI;function $i(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function zb(i,t){return(i%t+t)%t}function gu(i,t,e){return(1-e)*i+e*t}function oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Sh=class Sh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*n-s*r+t.x,this.y=o*r+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sh.prototype.isVector2=!0;var ee=Sh,li=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,s,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=o[s+0],d=o[s+1],p=o[s+2],b=o[s+3];if(u!==b||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*b;m<0&&(f=-f,d=-d,p=-p,b=-b,m=-m);let g=1-a;if(m<.9995){let x=Math.acos(m),v=Math.sin(x);g=Math.sin(g*x)/v,a=Math.sin(a*x)/v,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+b*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+b*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=o[s],f=o[s+1],d=o[s+2],p=o[s+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,o=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(o/2),f=l(n/2),d=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],o=e[8],s=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(s-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(o+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(s-r)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-n*c,this._z=o*h+s*c+n*l-r*a,this._w=s*h-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Th=class Th{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=t.elements,s=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,o=t.x,s=t.y,a=t.z,l=t.w,c=2*(s*r-a*n),h=2*(a*e-o*r),u=2*(o*n-s*e);return this.x=e+l*c+s*u-a*h,this.y=n+l*h+a*c-o*u,this.z=r+l*u+o*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,o=t.z,s=e.x,a=e.y,l=e.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bu.copy(this).projectOnVector(t),this.sub(bu)}reflect(t){return this.sub(bu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Th.prototype.isVector3=!0;var q=Th,bu=new q,Rd=new li,Eh=class Eh{constructor(t,e,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c)}set(t,e,n,r,o,s,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],b=r[0],m=r[3],g=r[6],x=r[1],v=r[4],y=r[7],M=r[2],w=r[5],A=r[8];return o[0]=s*b+a*x+l*M,o[3]=s*m+a*v+l*w,o[6]=s*g+a*y+l*A,o[1]=c*b+h*x+u*M,o[4]=c*m+h*v+u*w,o[7]=c*g+h*y+u*A,o[2]=f*b+d*x+p*M,o[5]=f*m+d*v+p*w,o[8]=f*g+d*y+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*s*h-e*a*c-n*o*h+n*a*l+r*o*c-r*s*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*s-a*c,f=a*l-h*o,d=c*o-s*l,p=e*u+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return t[0]=u*b,t[1]=(r*c-h*n)*b,t[2]=(a*n-r*s)*b,t[3]=f*b,t[4]=(h*e-r*l)*b,t[5]=(r*o-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(s*e-n*o)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+t,-r*c,r*l,-r*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){return Mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xu.makeScale(t,e)),this}rotate(t){return Mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xu.makeRotation(-t)),this}translate(t,e){return Mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Eh.prototype.isMatrix3=!0;var re=Eh,xu=new re,Pd=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vb(){let i={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Ee&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ee&&(r.r=fo(r.r),r.g=fo(r.g),r.b=fo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pi?as:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ss]:{primaries:t,whitePoint:n,transfer:as,toXYZ:Pd,fromXYZ:Cd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:Ee,toXYZ:Pd,fromXYZ:Cd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}var me=Vb();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $r,ll=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$r===void 0&&($r=mo("canvas")),$r.width=t.width,$r.height=t.height;let r=$r.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=$r}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=mo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ai(o[s]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gb=0,bo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(yu(r[s].image)):o.push(yu(r[s]))}else o=yu(r);n.url=o}return e||(t.images[this.uuid]=n),n}};function yu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var Wb=0,vu=new q,mn=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=An,r=An,o=$e,s=nr,a=Bn,l=In,c=i.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=$i(),this.name="",this.source=new bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vu).x}get height(){return this.source.getSize(vu).y}get depth(){return this.source.getSize(vu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wr:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wr:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=lh;mn.DEFAULT_ANISOTROPY=1;var Ah=class Ah{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*e+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*e+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*e+s[7]*n+s[11]*r+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],b=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(d+1)/2,M=(g+1)/2,w=(h+f)/4,A=(u+b)/4,_=(p+m)/4;return v>y&&v>M?v<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(v),r=w/n,o=A/n):y>M?y<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),n=w/r,o=_/r):M<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),n=A/o,r=_/o),this.set(n,r,o,e),this}let x=Math.sqrt((m-p)*(m-p)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-b)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ah.prototype.isVector4=!0;var We=Ah,cl=class extends ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},o=new mn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new bo(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ze=class extends cl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},us=class extends mn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ul=class extends mn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ll=class Ll{constructor(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,m)}set(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=o,g[5]=s,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=b,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ll().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Zr.setFromMatrixColumn(t,0).length(),o=1/Zr.setFromMatrixColumn(t,1).length(),s=1/Zr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,o=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let f=s*h,d=s*u,p=a*h,b=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=p+d*c,e[10]=s*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f+b*a,e[4]=p*a-d,e[8]=s*c,e[1]=s*u,e[5]=s*h,e[9]=-a,e[2]=d*a-p,e[6]=b+f*a,e[10]=s*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f-b*a,e[4]=-s*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=s*h,e[9]=b-f*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){let f=s*h,d=s*u,p=a*h,b=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){let f=s*l,d=s*c,p=a*l,b=a*c;e[0]=l*h,e[4]=b-f*u,e[8]=p*u+d,e[1]=u,e[5]=s*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-b*u}else if(t.order==="XZY"){let f=s*l,d=s*c,p=a*l,b=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+b,e[5]=s*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hb,t,Xb)}lookAt(t,e,n){let r=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Wi.crossVectors(n,Tn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Wi.crossVectors(n,Tn)),Wi.normalize(),_a.crossVectors(Tn,Wi),r[0]=Wi.x,r[4]=_a.x,r[8]=Tn.x,r[1]=Wi.y,r[5]=_a.y,r[9]=Tn.y,r[2]=Wi.z,r[6]=_a.z,r[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],b=n[6],m=n[10],g=n[14],x=n[3],v=n[7],y=n[11],M=n[15],w=r[0],A=r[4],_=r[8],T=r[12],R=r[1],I=r[5],P=r[9],N=r[13],C=r[2],S=r[6],E=r[10],L=r[14],D=r[3],O=r[7],k=r[11],z=r[15];return o[0]=s*w+a*R+l*C+c*D,o[4]=s*A+a*I+l*S+c*O,o[8]=s*_+a*P+l*E+c*k,o[12]=s*T+a*N+l*L+c*z,o[1]=h*w+u*R+f*C+d*D,o[5]=h*A+u*I+f*S+d*O,o[9]=h*_+u*P+f*E+d*k,o[13]=h*T+u*N+f*L+d*z,o[2]=p*w+b*R+m*C+g*D,o[6]=p*A+b*I+m*S+g*O,o[10]=p*_+b*P+m*E+g*k,o[14]=p*T+b*N+m*L+g*z,o[3]=x*w+v*R+y*C+M*D,o[7]=x*A+v*I+y*S+M*O,o[11]=x*_+v*P+y*E+M*k,o[15]=x*T+v*N+y*L+M*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],s=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],b=t[7],m=t[11],g=t[15],x=l*d-c*f,v=a*d-c*u,y=a*f-l*u,M=s*d-c*h,w=s*f-l*h,A=s*u-a*h;return e*(b*x-m*v+g*y)-n*(p*x-m*M+g*w)+r*(p*v-b*M+g*A)-o*(p*y-b*w+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[1],s=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(s*h-a*c)-n*(o*h-a*l)+r*(o*c-s*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],b=t[13],m=t[14],g=t[15],x=e*a-n*s,v=e*l-r*s,y=e*c-o*s,M=n*l-r*a,w=n*c-o*a,A=r*c-o*l,_=h*b-u*p,T=h*m-f*p,R=h*g-d*p,I=u*m-f*b,P=u*g-d*b,N=f*g-d*m,C=x*N-v*P+y*I+M*R-w*T+A*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/C;return t[0]=(a*N-l*P+c*I)*S,t[1]=(r*P-n*N-o*I)*S,t[2]=(b*A-m*w+g*M)*S,t[3]=(f*w-u*A-d*M)*S,t[4]=(l*R-s*N-c*T)*S,t[5]=(e*N-r*R+o*T)*S,t[6]=(m*y-p*A-g*v)*S,t[7]=(h*A-f*y+d*v)*S,t[8]=(s*P-a*R+c*_)*S,t[9]=(n*R-e*P-o*_)*S,t[10]=(p*w-b*y+g*x)*S,t[11]=(u*y-h*w-d*x)*S,t[12]=(a*T-s*I-l*_)*S,t[13]=(e*I-n*T+r*_)*S,t[14]=(b*v-p*M-m*x)*S,t[15]=(h*M-u*v+f*x)*S,this}scale(t){let e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),o=1-n,s=t.x,a=t.y,l=t.z,c=o*s,h=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,s){return this.set(1,n,o,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,o=e._x,s=e._y,a=e._z,l=e._w,c=o+o,h=s+s,u=a+a,f=o*c,d=o*h,p=o*u,b=s*h,m=s*u,g=a*u,x=l*c,v=l*h,y=l*u,M=n.x,w=n.y,A=n.z;return r[0]=(1-(b+g))*M,r[1]=(d+y)*M,r[2]=(p-v)*M,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(f+g))*w,r[6]=(m+x)*w,r[7]=0,r[8]=(p+v)*A,r[9]=(m-x)*A,r[10]=(1-(f+b))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let s=Zr.set(r[0],r[1],r[2]).length(),a=Zr.set(r[4],r[5],r[6]).length(),l=Zr.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Wn.copy(this);let c=1/s,h=1/a,u=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,e.setFromRotationMatrix(Wn),n.x=s,n.y=a,n.z=l,this}makePerspective(t,e,n,r,o,s,a=qn,l=!1){let c=this.elements,h=2*o/(e-t),u=2*o/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,b;if(l)p=o/(s-o),b=s*o/(s-o);else if(a===qn)p=-(s+o)/(s-o),b=-2*s*o/(s-o);else if(a===ls)p=-s/(s-o),b=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,o,s,a=qn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,b;if(l)p=1/(s-o),b=s/(s-o);else if(a===qn)p=-2/(s-o),b=-(s+o)/(s-o);else if(a===ls)p=-1/(s-o),b=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ll.prototype.isMatrix4=!0;var Pe=Ll,Zr=new q,Wn=new Pe,Hb=new q(0,0,0),Xb=new q(1,1,1),Wi=new q,_a=new q,Tn=new q,Id=new Pe,Ld=new li,Zi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Id.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Id,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zi.DEFAULT_ORDER="XYZ";var xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yb=0,Fd=new q,Kr=new li,_i=new Pe,Ma=new q,Ko=new q,qb=new q,$b=new li,Dd=new q(1,0,0),Nd=new q(0,1,0),Od=new q(0,0,1),Ud={type:"added"},Zb={type:"removed"},Jr={type:"childadded",child:null},_u={type:"childremoved",child:null},Mn=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new q,e=new Zi,n=new li,r=new q(1,1,1);function o(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new re}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kr.setFromAxisAngle(t,e),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,e){return Kr.setFromAxisAngle(t,e),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(Dd,t)}rotateY(t){return this.rotateOnAxis(Nd,t)}rotateZ(t){return this.rotateOnAxis(Od,t)}translateOnAxis(t,e){return Fd.copy(t).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dd,t)}translateY(t){return this.translateOnAxis(Nd,t)}translateZ(t){return this.translateOnAxis(Od,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ma.copy(t):Ma.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ko,Ma,this.up):_i.lookAt(Ma,Ko,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(_i),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ud),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zb),_u.child=t,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ud),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,qb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,$b,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*r,o[13]+=n-o[1]*e-o[5]*n-o[9]*r,o[14]+=r-o[2]*e-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));r.material=a}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(t.animations,l))}}if(e){let a=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),u=s(t.shapes),f=s(t.skeletons),d=s(t.animations),p=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new q(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ne=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kb={type:"move"},yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,n),g=this._getHandJoint(c,b);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function Mu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var j=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=me.workingColorSpace){if(t=zb(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,s=2*n-o;this.r=Mu(s,o,t+1/3),this.g=Mu(s,o,t),this.b=Mu(s,o,t-1/3)}return me.colorSpaceToWorking(this,r),this}setStyle(t,e=Ve){function n(o){o!==void 0&&parseFloat(o)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(o,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let n=Wp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return me.workingToColorSpace(pn.copy(this),t),Math.round(xe(pn.r*255,0,255))*65536+Math.round(xe(pn.g*255,0,255))*256+Math.round(xe(pn.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(pn.copy(this),e);let n=pn.r,r=pn.g,o=pn.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,h=(a+s)/2;if(a===s)l=0,c=0;else{let u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case n:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-n)/u+2;break;case o:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Ve){me.workingToColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,r=pn.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(wa);let n=gu(Hi.h,wa.h,e),r=gu(Hi.s,wa.s,e),o=gu(Hi.l,wa.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new j;j.NAMES=Wp;var hs=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new j(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ci=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hn=new q,Mi=new q,wu=new q,wi=new q,jr=new q,Qr=new q,Bd=new q,Su=new q,Tu=new q,Eu=new q,Au=new We,Ru=new We,Pu=new We,Ei=class i{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Hn.subVectors(t,e),r.cross(Hn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){Hn.subVectors(r,e),Mi.subVectors(n,e),wu.subVectors(t,e);let s=Hn.dot(Hn),a=Hn.dot(Mi),l=Hn.dot(wu),c=Mi.dot(Mi),h=Mi.dot(wu),u=s*c-a*a;if(u===0)return o.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(s*h-a*l)*f;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,r,o,s,a,l){return this.getBarycoord(t,e,n,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,wi.x),l.addScaledVector(s,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,n,r,o,s){return Au.setScalar(0),Ru.setScalar(0),Pu.setScalar(0),Au.fromBufferAttribute(t,e),Ru.fromBufferAttribute(t,n),Pu.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(Au,o.x),s.addScaledVector(Ru,o.y),s.addScaledVector(Pu,o.z),s}static isFrontFacing(t,e,n,r){return Hn.subVectors(n,e),Mi.subVectors(t,e),Hn.cross(Mi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Hn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,o=this.c,s,a;jr.subVectors(r,n),Qr.subVectors(o,n),Su.subVectors(t,n);let l=jr.dot(Su),c=Qr.dot(Su);if(l<=0&&c<=0)return e.copy(n);Tu.subVectors(t,r);let h=jr.dot(Tu),u=Qr.dot(Tu);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),e.copy(n).addScaledVector(jr,s);Eu.subVectors(t,o);let d=jr.dot(Eu),p=Qr.dot(Eu);if(p>=0&&d<=p)return e.copy(o);let b=d*c-l*p;if(b<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Qr,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Bd.subVectors(o,r),a=(u-h)/(u-h+(d-p)),e.copy(r).addScaledVector(Bd,a);let g=1/(m+b+f);return s=b*g,a=f*g,e.copy(n).addScaledVector(jr,s).addScaledVector(Qr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wn=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Xn):Xn.fromBufferAttribute(o,s),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(t.matrixWorld),this.union(Sa)}let r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jo),Ta.subVectors(this.max,Jo),to.subVectors(t.a,Jo),eo.subVectors(t.b,Jo),no.subVectors(t.c,Jo),Xi.subVectors(eo,to),Yi.subVectors(no,eo),xr.subVectors(to,no);let e=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-xr.z,xr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,xr.z,0,-xr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-xr.y,xr.x,0];return!Cu(e,to,eo,no,Ta)||(e=[1,0,0,0,1,0,0,0,1],!Cu(e,to,eo,no,Ta))?!1:(Ea.crossVectors(Xi,Yi),e=[Ea.x,Ea.y,Ea.z],Cu(e,to,eo,no,Ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new q,new q,new q,new q,new q,new q,new q,new q],Xn=new q,Sa=new wn,to=new q,eo=new q,no=new q,Xi=new q,Yi=new q,xr=new q,Jo=new q,Ta=new q,Ea=new q,yr=new q;function Cu(i,t,e,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){yr.fromArray(i,o);let a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=t.dot(yr),c=e.dot(yr),h=n.dot(yr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qe=new q,Aa=new ee,Jb=0,Rn=class extends ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bh,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Aa.fromBufferAttribute(this,e),Aa.applyMatrix3(t),this.setXY(e,Aa.x,Aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),r=Re(r,this.array),o=Re(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var fs=class extends Rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Sr=class extends Rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ut=class extends Rn{constructor(t,e,n){super(new Float32Array(t),e,n)}},jb=new wn,jo=new q,Iu=new q,Ki=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jb.setFromPoints(t).getCenter(n);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jo.subVectors(t,this.center);let e=jo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(jo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Iu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jo.copy(t.center).add(Iu)),this.expandByPoint(jo.copy(t.center).sub(Iu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qb=0,Nn=new Pe,Lu=new Mn,io=new q,En=new wn,Qo=new wn,en=new q,Ht=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bb(t)?Sr:fs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new re().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return Lu.lookAt(t),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,o=t.length;r<o;r++){let s=t[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ut(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let o=e[n];En.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){let a=e[o];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(En.min,Qo.min),En.expandByPoint(en),en.addVectors(En.max,Qo.max),En.expandByPoint(en)):(En.expandByPoint(Qo.min),En.expandByPoint(Qo.max))}En.getCenter(n);let r=0;for(let o=0,s=t.count;o<s;o++)en.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(en));if(e)for(let o=0,s=e.length;o<s;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(io.fromBufferAttribute(t,c),en.add(io)),r=Math.max(r,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,o=e.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new Rn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new q,l[_]=new q;let c=new q,h=new q,u=new q,f=new ee,d=new ee,p=new ee,b=new q,m=new q;function g(_,T,R){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),f.fromBufferAttribute(o,_),d.fromBufferAttribute(o,T),p.fromBufferAttribute(o,R),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(b.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(I),a[_].add(b),a[T].add(b),a[R].add(b),l[_].add(m),l[T].add(m),l[R].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let _=0,T=x.length;_<T;++_){let R=x[_],I=R.start,P=R.count;for(let N=I,C=I+P;N<C;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new q,y=new q,M=new q,w=new q;function A(_){M.fromBufferAttribute(r,_),w.copy(M);let T=a[_];v.copy(T),v.sub(M.multiplyScalar(M.dot(T))).normalize(),y.crossVectors(w,T);let I=y.dot(l[_])<0?-1:1;s.setXYZW(_,v.x,v.y,v.z,I)}for(let _=0,T=x.length;_<T;++_){let R=x[_],I=R.start,P=R.count;for(let N=I,C=I+P;N<C;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new q,o=new q,s=new q,a=new q,l=new q,c=new q,h=new q,u=new q;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),b=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,b),s.fromBufferAttribute(e,m),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Rn(f,h,u)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},hl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bh,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},_n=new q,ds=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix4(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyNormalMatrix(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.transformDirection(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=oi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=oi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=oi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=oi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),r=Re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),r=Re(r,this.array),o=Re(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){cs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new Rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){cs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fu=new q,tx=new q,ex=new re,Yn=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Fu.subVectors(n,e).cross(tx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Fu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(r,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ex.getNormalMatrix(t),r=this.coplanarPoint(Fu).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},nx=0,ui=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Cn,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ju,this.blendDst=Qu,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ka,this.stencilZFail=Ka,this.stencilZPass=Ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(e){let o=r(t.textures),s=r(t.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new j().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ee().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vo=class extends ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ro,ts=new q,oo=new q,so=new q,ao=new ee,es=new ee,Hp=new Pe,Ra=new q,ns=new q,Pa=new q,kd=new ee,Du=new ee,zd=new ee,ps=class extends Mn{constructor(t=new vo){if(super(),this.isSprite=!0,this.type="Sprite",ro===void 0){ro=new Ht;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hl(e,5);ro.setIndex([0,1,2,0,2,3]),ro.setAttribute("position",new ds(n,3,0,!1)),ro.setAttribute("uv",new ds(n,2,3,!1))}this.geometry=ro,this.material=t,this.center=new ee(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oo.setFromMatrixScale(this.matrixWorld),Hp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),so.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oo.multiplyScalar(-so.z);let n=this.material.rotation,r,o;n!==0&&(o=Math.cos(n),r=Math.sin(n));let s=this.center;Ca(Ra.set(-.5,-.5,0),so,s,oo,r,o),Ca(ns.set(.5,-.5,0),so,s,oo,r,o),Ca(Pa.set(.5,.5,0),so,s,oo,r,o),kd.set(0,0),Du.set(1,0),zd.set(1,1);let a=t.ray.intersectTriangle(Ra,ns,Pa,!1,ts);if(a===null&&(Ca(ns.set(-.5,.5,0),so,s,oo,r,o),Du.set(0,1),a=t.ray.intersectTriangle(Ra,Pa,ns,!1,ts),a===null))return;let l=t.ray.origin.distanceTo(ts);l<t.near||l>t.far||e.push({distance:l,point:ts.clone(),uv:Ei.getInterpolation(ts,Ra,ns,Pa,kd,Du,zd,new ee),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ca(i,t,e,n,r,o){ao.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(es.x=o*ao.x-r*ao.y,es.y=r*ao.x+o*ao.y):es.copy(ao),i.copy(t),i.x+=es.x,i.y+=es.y,i.applyMatrix4(Hp)}var Ti=new q,Nu=new q,Ia=new q,La=new q,Tr=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Nu.copy(t).add(e).multiplyScalar(.5),Ia.copy(e).sub(t).normalize(),La.copy(this.origin).sub(Nu);let o=t.distanceTo(e)*.5,s=-this.direction.dot(Ia),a=La.dot(this.direction),l=-La.dot(Ia),c=La.lengthSq(),h=Math.abs(1-s*s),u,f,d,p;if(h>0)if(u=s*l-a,f=s*a-l,p=o*h,u>=0)if(f>=-p)if(f<=p){let b=1/h;u*=b,f*=b,d=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-s*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(s*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=s>0?-o:o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Nu).addScaledVector(Ia,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ti.subVectors(t.center,this.origin);let n=Ti.dot(this.direction),r=Ti.dot(Ti)-n*n,o=t.radius*t.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,s,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-s.x,f=t.y-s.y,d=t.z-s.z,p=e.x-s.x,b=e.y-s.y,m=e.z-s.z,g=n.x-s.x,x=n.y-s.y,v=n.z-s.z,y=Math.abs(l),M=Math.abs(c),w=Math.abs(h),A,_,T,R,I,P,N,C,S,E,L,D;if(y>=M&&y>=w?(T=l,P=u,S=p,D=g,l>=0?(A=c,_=h,R=f,I=d,N=b,C=m,E=x,L=v):(A=h,_=c,R=d,I=f,N=m,C=b,E=v,L=x)):M>=w?(T=c,P=f,S=b,D=x,c>=0?(A=h,_=l,R=d,I=u,N=m,C=p,E=v,L=g):(A=l,_=h,R=u,I=d,N=p,C=m,E=g,L=v)):(T=h,P=d,S=m,D=v,h>=0?(A=l,_=c,R=u,I=f,N=p,C=b,E=g,L=x):(A=c,_=l,R=f,I=u,N=b,C=p,E=x,L=g)),T===0)return null;let O=A/T,k=_/T,z=1/T,W=R-O*P,G=I-k*P,Y=N-O*S,Z=C-k*S,it=E-O*D,H=L-k*D,X=it*Z-H*Y,rt=W*H-G*it,at=Y*G-Z*W;if(r){if(X<0||rt<0||at<0)return null}else if((X<0||rt<0||at<0)&&(X>0||rt>0||at>0))return null;let st=X+rt+at;if(st===0)return null;let tt=z*(X*P+rt*S+at*D);return(st>0?tt<0:tt>0)?null:this.at(tt/st,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vd=new Pe,vr=new Tr,Fa=new Ki,Gd=new q,Da=new q,Na=new q,Oa=new q,Ou=new q,Ua=new q,Wd=new q,Ba=new q,It=class extends Mn{constructor(t=new Ht,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(o&&a){Ua.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],u=o[l];h!==0&&(Ou.fromBufferAttribute(u,t),s?Ua.addScaledVector(Ou,h):Ua.addScaledVector(Ou.sub(e),h))}e.add(Ua)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(o),vr.copy(t.ray).recast(t.near),!(Fa.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Fa,Gd)===null||vr.origin.distanceToSquared(Gd)>(t.far-t.near)**2))&&(Vd.copy(o).invert(),vr.copy(t.ray).applyMatrix4(Vd),!(n.boundingBox!==null&&vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vr)))}_computeIntersections(t,e,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,b=f.length;p<b;p++){let m=f[p],g=s[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){let w=a.getX(y),A=a.getX(y+1),_=a.getX(y+2);r=ka(this,g,t,n,c,h,u,w,A,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let m=p,g=b;m<g;m+=3){let x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=ka(this,s,t,n,c,h,u,x,v,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,b=f.length;p<b;p++){let m=f[p],g=s[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){let w=y,A=y+1,_=y+2;r=ka(this,g,t,n,c,h,u,w,A,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=p,g=b;m<g;m+=3){let x=m,v=m+1,y=m+2;r=ka(this,s,t,n,c,h,u,x,v,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function ix(i,t,e,n,r,o,s,a){let l;if(t.side===ln?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,t.side===fi,a),l===null)return null;Ba.copy(a),Ba.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ba);return c<e.near||c>e.far?null:{distance:c,point:Ba.clone(),object:i}}function ka(i,t,e,n,r,o,s,a,l,c){i.getVertexPosition(a,Da),i.getVertexPosition(l,Na),i.getVertexPosition(c,Oa);let h=ix(i,t,e,n,Da,Na,Oa,Wd);if(h){let u=new q;Ei.getBarycoord(Wd,Da,Na,Oa,u),r&&(h.uv=Ei.getInterpolatedAttribute(r,a,l,c,u,new ee)),o&&(h.uv1=Ei.getInterpolatedAttribute(o,a,l,c,u,new ee)),s&&(h.normal=Ei.getInterpolatedAttribute(s,a,l,c,u,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new q,materialIndex:0};Ei.getNormal(Da,Na,Oa,f.normal),h.face=f,h.barycoord=u}return h}var fl=class extends mn{constructor(t=null,e=1,n=1,r,o,s,a,l,c=rn,h=rn,u,f){super(null,s,a,l,c,h,r,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _r=new Ki,rx=new ee(.5,.5),za=new q,ms=class{constructor(t=new Yn,e=new Yn,n=new Yn,r=new Yn,o=new Yn,s=new Yn){this.planes=[t,e,n,r,o,s]}set(t,e,n,r,o,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn,n=!1){let r=this.planes,o=t.elements,s=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],f=o[6],d=o[7],p=o[8],b=o[9],m=o[10],g=o[11],x=o[12],v=o[13],y=o[14],M=o[15];if(r[0].setComponents(c-s,d-h,g-p,M-x).normalize(),r[1].setComponents(c+s,d+h,g+p,M+x).normalize(),r[2].setComponents(c+a,d+u,g+b,M+v).normalize(),r[3].setComponents(c-a,d-u,g-b,M-v).normalize(),n)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(c-l,d-f,g-m,M-y).normalize();else if(r[4].setComponents(c-l,d-f,g-m,M-y).normalize(),e===qn)r[5].setComponents(c+l,d+f,g+m,M+y).normalize();else if(e===ls)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);let e=rx.distanceTo(t.center);return _r.radius=.7071067811865476+e,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(za.x=r.normal.x>0?t.max.x:t.min.x,za.y=r.normal.y>0?t.max.y:t.min.y,za.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(za)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Je=class extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},dl=new q,pl=new q,Hd=new Pe,is=new Tr,Va=new Ki,Uu=new q,Xd=new q,ml=class extends Mn{constructor(t=new Ht,e=new Je){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)dl.fromBufferAttribute(e,r-1),pl.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=dl.distanceTo(pl);t.setAttribute("lineDistance",new Ut(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),Va.radius+=o,t.ray.intersectsSphere(Va)===!1)return;Hd.copy(r).invert(),is.copy(t.ray).applyMatrix4(Hd);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let b=d,m=p-1;b<m;b+=c){let g=h.getX(b),x=h.getX(b+1),v=Ga(this,t,is,l,g,x,b);v&&e.push(v)}if(this.isLineLoop){let b=h.getX(p-1),m=h.getX(d),g=Ga(this,t,is,l,b,m,p-1);g&&e.push(g)}}else{let d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let b=d,m=p-1;b<m;b+=c){let g=Ga(this,t,is,l,b,b+1,b);g&&e.push(g)}if(this.isLineLoop){let b=Ga(this,t,is,l,p-1,d,p-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Ga(i,t,e,n,r,o,s){let a=i.geometry.attributes.position;if(dl.fromBufferAttribute(a,r),pl.fromBufferAttribute(a,o),e.distanceSqToSegment(dl,pl,Uu,Xd)>n)return;Uu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Uu);if(!(c<t.near||c>t.far))return{distance:c,point:Xd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Yd=new q,qd=new q,Ke=class extends ml{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)Yd.fromBufferAttribute(e,r),qd.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Yd.distanceTo(qd);t.setAttribute("lineDistance",new Ut(n,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ri=class extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$d=new Pe,Wu=new Tr,Wa=new Ki,Ha=new q,Ji=class extends Mn{constructor(t=new Ht,e=new Ri){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(r),Wa.radius+=o,t.ray.intersectsSphere(Wa)===!1)return;$d.copy(r).invert(),Wu.copy(t.ray).applyMatrix4($d);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=f,b=d;p<b;p++){let m=c.getX(p);Ha.fromBufferAttribute(u,m),Zd(Ha,m,l,r,t,e,this)}}else{let f=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let p=f,b=d;p<b;p++)Ha.fromBufferAttribute(u,p),Zd(Ha,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Zd(i,t,e,n,r,o,s){let a=Wu.distanceSqToPoint(i);if(a<e){let l=new q;Wu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var gs=class extends mn{constructor(t=[],e=er,n,r,o,s,a,l,c,h){super(t,e,n,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sn=class extends mn{constructor(t,e,n,r,o,s,a,l,c){super(t,e,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hi=class extends mn{constructor(t,e,n=Kn,r,o,s,a=rn,l=rn,c,h=si,u=1){if(h!==si&&h!==ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,o,s,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},gl=class extends hi{constructor(t,e=Kn,n=er,r,o,s=rn,a=rn,l,c=si){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,o,s,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},bs=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},_o=class i extends Ht{constructor(t=1,e=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,s,o,0),p("z","y","x",1,-1,n,e,-t,s,o,1),p("x","z","y",1,1,t,n,e,r,s,2),p("x","z","y",1,-1,t,n,-e,r,s,3),p("x","y","z",1,-1,t,e,n,r,o,4),p("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(u,2));function p(b,m,g,x,v,y,M,w,A,_,T){let R=y/A,I=M/_,P=y/2,N=M/2,C=w/2,S=A+1,E=_+1,L=0,D=0,O=new q;for(let k=0;k<E;k++){let z=k*I-N;for(let W=0;W<S;W++){let G=W*R-P;O[b]=G*x,O[m]=z*v,O[g]=C,c.push(O.x,O.y,O.z),O[b]=0,O[m]=0,O[g]=w>0?1:-1,h.push(O.x,O.y,O.z),u.push(W/A),u.push(1-k/_),L+=1}}for(let k=0;k<_;k++)for(let z=0;z<A;z++){let W=f+z+S*k,G=f+z+S*(k+1),Y=f+(z+1)+S*(k+1),Z=f+(z+1)+S*k;l.push(W,G,Z),l.push(G,Y,Z),D+=6}a.addGroup(d,D,T),d+=D,f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var xs=class i extends Ht{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let o=[],s=[],a=[],l=[],c=new q,h=new ee;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),s.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(s[f]/t+1)/2,h.y=(s[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Ut(s,3)),this.setAttribute("normal",new Ut(a,3)),this.setAttribute("uv",new Ut(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function ox(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,o=Xp(i,0,r,e,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=ux(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ys(o,s,e,a,l,c,0),s}function Xp(i,t,e,n,r){let o;if(r===_x(i,t,e,n)>0)for(let s=t;s<e;s+=n)o=Kd(s/n|0,i[s],i[s+1],o);else for(let s=e-n;s>=t;s-=n)o=Kd(s/n|0,i[s],i[s+1],o);return o&&Mo(o,o.next)&&(_s(o),o=o.next),o}function Er(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Mo(e,e.next)||Ge(e.prev,e,e.next)===0)){if(_s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ys(i,t,e,n,r,o,s){if(!i)return;!s&&o&&mx(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?ax(i,n,r,o):sx(i)){t.push(l.i,i.i,c.i),_s(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=lx(Er(i),t),ys(i,t,e,n,r,o,2)):s===2&&cx(i,t,e,n,r,o):ys(Er(i),t,e,n,r,o,1);break}}}function sx(i){let t=i.prev,e=i,n=i.next;if(Ge(t,e,n)>=0)return!1;let r=t.x,o=e.x,s=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,o,s),u=Math.min(a,l,c),f=Math.max(r,o,s),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&rs(r,a,o,l,s,c,p.x,p.y)&&Ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ax(i,t,e,n){let r=i.prev,o=i,s=i.next;if(Ge(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,h=r.y,u=o.y,f=s.y,d=Math.min(a,l,c),p=Math.min(h,u,f),b=Math.max(a,l,c),m=Math.max(h,u,f),g=Hu(d,p,t,e,n),x=Hu(b,m,t,e,n),v=i.prevZ,y=i.nextZ;for(;v&&v.z>=g&&y&&y.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=p&&v.y<=m&&v!==r&&v!==s&&rs(a,h,l,u,c,f,v.x,v.y)&&Ge(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=b&&y.y>=p&&y.y<=m&&y!==r&&y!==s&&rs(a,h,l,u,c,f,y.x,y.y)&&Ge(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=b&&v.y>=p&&v.y<=m&&v!==r&&v!==s&&rs(a,h,l,u,c,f,v.x,v.y)&&Ge(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=b&&y.y>=p&&y.y<=m&&y!==r&&y!==s&&rs(a,h,l,u,c,f,y.x,y.y)&&Ge(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function lx(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Mo(n,r)&&qp(n,e,e.next,r)&&vs(n,r)&&vs(r,n)&&(t.push(n.i,e.i,r.i),_s(e),_s(e.next),e=i=r),e=e.next}while(e!==i);return Er(e)}function cx(i,t,e,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&xx(s,a)){let l=$p(s,a);s=Er(s,s.next),l=Er(l,l.next),ys(s,t,e,n,r,o,0),ys(l,t,e,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function ux(i,t,e,n){let r=[];for(let o=0,s=t.length;o<s;o++){let a=t[o]*n,l=o<s-1?t[o+1]*n:i.length,c=Xp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(bx(c))}r.sort(hx);for(let o=0;o<r.length;o++)e=fx(r[o],e);return e}function hx(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function fx(i,t){let e=dx(i,t);if(!e)return t;let n=$p(e,i);return Er(n,n.next),Er(e,e.next)}function dx(i,t){let e=t,n=i.x,r=i.y,o=-1/0,s;if(Mo(i,e))return e;do{if(Mo(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,s=e.x<e.next.x?e:e.next,u===n))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0;e=s;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Yp(r<c?n:o,r,l,c,r<c?o:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);vs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&px(s,e)))&&(s=e,h=u)}e=e.next}while(e!==a);return s}function px(i,t){return Ge(i.prev,i,t.prev)<0&&Ge(t.next,i,i.next)<0}function mx(i,t,e,n){let r=i;do r.z===0&&(r.z=Hu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,gx(r)}function gx(i){let t,e=1;do{let n=i,r;i=null;let o=null;for(t=0;n;){t++;let s=n,a=0;for(let c=0;c<e&&(a++,s=s.nextZ,!!s);c++);let l=e;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,e*=2}while(t>1);return i}function Hu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function bx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yp(i,t,e,n,r,o,s,a){return(r-s)*(t-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(e-s)*(t-a)&&(e-s)*(o-a)>=(r-s)*(n-a)}function rs(i,t,e,n,r,o,s,a){return!(i===s&&t===a)&&Yp(i,t,e,n,r,o,s,a)}function xx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!yx(i,t)&&(vs(i,t)&&vs(t,i)&&vx(i,t)&&(Ge(i.prev,i,t.prev)||Ge(i,t.prev,t))||Mo(i,t)&&Ge(i.prev,i,i.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Mo(i,t){return i.x===t.x&&i.y===t.y}function qp(i,t,e,n){let r=Ya(Ge(i,t,e)),o=Ya(Ge(i,t,n)),s=Ya(Ge(e,n,i)),a=Ya(Ge(e,n,t));return!!(r!==o&&s!==a||r===0&&Xa(i,e,t)||o===0&&Xa(i,n,t)||s===0&&Xa(e,i,n)||a===0&&Xa(e,t,n))}function Xa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ya(i){return i>0?1:i<0?-1:0}function yx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&qp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function vs(i,t){return Ge(i.prev,i,i.next)<0?Ge(i,t,i.next)>=0&&Ge(i,i.prev,t)>=0:Ge(i,t,i.prev)<0||Ge(i,i.next,t)<0}function vx(i,t){let e=i,n=!1,r=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&r<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $p(i,t){let e=Xu(i.i,i.x,i.y),n=Xu(t.i,t.x,t.y),r=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Kd(i,t,e,n){let r=Xu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function _s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _x(i,t,e,n){let r=0;for(let o=t,s=e-n;o<e;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var Yu=class{static triangulate(t,e,n=2){return ox(t,e,n)}},Ms=class i{static area(t){let e=t.length,n=0;for(let r=e-1,o=0;o<e;r=o++)n+=t[r].x*t[o].y-t[o].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],o=[];Jd(t),jd(n,t);let s=t.length;e.forEach(Jd);for(let l=0;l<e.length;l++)r.push(s),s+=e[l].length,jd(n,e[l]);let a=Yu.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function Jd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function jd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var $n=class i extends Ht{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let o=t/2,s=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],b=[],m=[];for(let g=0;g<h;g++){let x=g*f-s;for(let v=0;v<c;v++){let y=v*u-o;p.push(y,-x,0),b.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){let v=x+c*g,y=x+c*(g+1),M=x+1+c*(g+1),w=x+1+c*g;d.push(v,y,w),d.push(y,M,w)}this.setIndex(d),this.setAttribute("position",new Ut(p,3)),this.setAttribute("normal",new Ut(b,3)),this.setAttribute("uv",new Ut(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ws=class i extends Ht{constructor(t=.5,e=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new q,p=new ee;for(let b=0;b<=r;b++){for(let m=0;m<=n;m++){let g=o+m/n*s;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let b=0;b<r;b++){let m=b*(n+1);for(let g=0;g<n;g++){let x=g+m,v=x,y=x+n+1,M=x+n+2,w=x+1;a.push(v,y,w),a.push(y,M,w)}}this.setIndex(a),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(c,3)),this.setAttribute("uv",new Ut(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Cr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Qd(r))r.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Qd(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();t[e][n]=o}else t[e][n]=r.slice();else t[e][n]=r}}return t}function bn(i){let t={};for(let e=0;e<i.length;e++){let n=Cr(i[e]);for(let r in n)t[r]=n[r]}return t}function Qd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var Zp={clone:Cr,merge:bn},wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wx,this.fragmentShader=Sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=Mx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new j().setHex(r.value);break;case"v2":this.uniforms[n].value=new ee().fromArray(r.value);break;case"v3":this.uniforms[n].value=new q().fromArray(r.value);break;case"v4":this.uniforms[n].value=new We().fromArray(r.value);break;case"m3":this.uniforms[n].value=new re().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Pe().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},bl=class extends gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var xl=class extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yl=class extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function lo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Bu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ji=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],o=e[n-1];n:{t:{let s;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=e[++n],t<r)break t}s=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=e[--n-1],t>=o)break t}s=n,n=0;break e}break n}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(r=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=t*r;for(let s=0;s!==r;++s)e[s]=n[o+s];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vl=class extends ji{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zu,endingEnd:zu}}intervalChanged_(t,e,n){let r=this.parameterPositions,o=t-2,s=t+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Vu:o=t,a=2*e-n;break;case Gu:o=r.length-2,a=e+r[o]-r[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vu:s=t,l=2*n-e;break;case Gu:s=1,l=n+r[1]-r[0];break;default:s=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=s*h}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),b=p*p,m=b*p,g=-f*m+2*f*b-f*p,x=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*p+1,v=(-1-d)*m+(1.5+d)*b+.5*p,y=d*m-d*b;for(let M=0;M!==a;++M)o[M]=g*s[h+M]+x*s[c+M]+v*s[l+M]+y*s[u+M];return o}},_l=class extends ji{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)o[f]=s[c+f]*u+s[l+f]*h;return o}},Ml=class extends ji{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},wl=class extends ji{interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(r-e),b=1-p;for(let m=0;m!==a;++m)o[m]=s[c+m]*b+s[l+m]*p;return o}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let b=s[c+p],m=s[l+p],g=d*f+p*2,x=u[g],v=u[g+1],y=t*f+p*2,M=h[y],w=h[y+1],A=Ex(n,e,x,M,r);o[p]=Kp(A,b,v,w,m)}return o}};function Kp(i,t,e,n,r){let o=1-i;return o*o*o*t+3*o*o*i*e+3*o*i*i*n+i*i*i*r}function Tx(i,t,e,n,r){let o=1-i;return 3*o*o*(e-t)+6*o*i*(n-e)+3*i*i*(r-n)}function Ex(i,t,e,n,r){let o=(i-t)/(r-t);for(let s=0;s<8;s++){let a=Kp(o,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Tx(o,t,e,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var Pn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lo(e,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lo(t.times,Array),values:lo(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Bu(t.settings)&&(n.settings={inTangents:lo(t.settings.inTangents,Array),outTangents:lo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case os:e=this.InterpolantFactoryMethodDiscrete;break;case sl:e=this.InterpolantFactoryMethodLinear;break;case Za:e=this.InterpolantFactoryMethodSmooth;break;case ku:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return os;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return Za;case this.InterpolantFactoryMethodBezier:return ku}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Bu(this.settings)&&(tp(this.settings.inTangents,t),tp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<t;)++o;for(;s!==-1&&n[s]>e;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,o=n.length;o===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(s!==null&&s>l){Jt("KeyframeTrack: Out of order keys.",this,a,l,s),t=!1;break}s=l}if(r!==void 0&&kb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Za,o=t.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let b=e[u+p];if(b!==e[f+p]||b!==e[d+p]){l=!0;break}}}if(l){if(a!==s){t[s]=t[a];let u=a*n,f=s*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++s}}if(o>0){t[s]=t[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)e[l+c]=e[a+c];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Bu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function tp(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=sl;var Qi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=os;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends Pn{constructor(t,e,n,r){super(t,e,n,r)}};Sl.prototype.ValueTypeName="color";var Tl=class extends Pn{constructor(t,e,n,r){super(t,e,n,r)}};Tl.prototype.ValueTypeName="number";var El=class extends ji{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)li.slerpFlat(o,0,s,c-a,s,c,l);return o}},Ss=class extends Pn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}};Ss.prototype.ValueTypeName="quaternion";Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var tr=class extends Pn{constructor(t,e,n){super(t,e,n)}};tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=os;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Pn{constructor(t,e,n,r){super(t,e,n,r)}};Al.prototype.ValueTypeName="vector";var Ja={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(ep(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!ep(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ep(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Rl=class{constructor(t,e,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&r.onStart!==void 0&&r.onStart(h,s,a),o=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jp=new Rl,wo=class{constructor(t){this.manager=t!==void 0?t:Jp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,o){n.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var co=new WeakMap,Pl=class extends wo{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let o=this,s=Ja.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(s),o.manager.itemEnd(t)},0);else{let u=co.get(s);u===void 0&&(u=[],co.set(s,u)),u.push({onLoad:e,onError:r})}return s}let a=mo("img");function l(){h(),e&&e(this);let u=co.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}co.delete(this),o.manager.itemEnd(t)}function c(u){h(),r&&r(u),Ja.remove(`image:${t}`);let f=co.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}co.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ja.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}};var Ar=class extends wo{constructor(t){super(t)}load(t,e,n,r){let o=new mn,s=new Pl(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,r),o}};var qa=new q,$a=new li,ri=new q,Ts=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qa,$a,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,$a,ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(qa,$a,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,$a,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new q,np=new ee,ip=new ee,nn=class extends Ts{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=al*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return al*2*Math.atan(Math.tan(mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,np,ip),e.subVectors(ip,np)}setViewOffset(t,e,n,r,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mu*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,e-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var On=class extends Ts{constructor(t=-1,e=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-t,s=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var uo=-90,ho=1,Cl=class extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new nn(uo,ho,t,e);r.layers=this.layers,this.add(r);let o=new nn(uo,ho,t,e);o.layers=this.layers,this.add(o);let s=new nn(uo,ho,t,e);s.layers=this.layers,this.add(s);let a=new nn(uo,ho,t,e);a.layers=this.layers,this.add(a);let l=new nn(uo,ho,t,e);l.layers=this.layers,this.add(l);let c=new nn(uo,ho,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,o,s,a,l]=e;for(let c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Il=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var _h="\\[\\]\\.:\\/",Ax=new RegExp("["+_h+"]","g"),Mh="[^"+_h+"]",Rx="[^"+_h.replace("\\.","")+"]",Px=/((?:WC+[\/:])*)/.source.replace("WC",Mh),Cx=/(WCOD+)?/.source.replace("WCOD",Rx),Ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),Lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),Fx=new RegExp("^"+Px+Cx+Ix+Lx+"$"),Dx=["material","materials","bones","map"],qu=class{constructor(t,e,n){let r=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ax,"")}static parseTrackName(t){let e=Fx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);Dx.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[r];if(s===void 0){let c=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=qu;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yT=new Float32Array(1);var rp=new Pe,Es=class{constructor(t,e,n=0,r=1/0){this.ray=new Tr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rp),this}intersectObject(t,e=!0,n=[]){return $u(t,this,n,e),n.sort(op),n}intersectObjects(t,e=!0,n=[]){for(let r=0,o=t.length;r<o;r++)$u(t[r],this,n,e);return n.sort(op),n}};function op(i,t){return i.distance-t.distance}function $u(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)$u(o[s],t,e,!0)}}var Rh=class Rh{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=r,this}};Rh.prototype.isMatrix2=!0;var Zu=Rh;function wh(i,t,e,n){let r=Nx(n);switch(e){case dh:return i*t;case mh:return i*t/r.components*r.byteLength;case kl:return i*t/r.components*r.byteLength;case rr:return i*t*2/r.components*r.byteLength;case zl:return i*t*2/r.components*r.byteLength;case ph:return i*t*3/r.components*r.byteLength;case Bn:return i*t*4/r.components*r.byteLength;case Vl:return i*t*4/r.components*r.byteLength;case Is:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fs:case Ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wl:case Xl:return Math.max(i,16)*Math.max(t,8)/4;case Gl:case Hl:return Math.max(i,8)*Math.max(t,8)/2;case Yl:case ql:case Zl:case Kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $l:case Ns:case Jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fc:case dc:case pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mc:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Os:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nx(i){switch(i){case In:case ch:return{byteLength:1,components:1};case To:case uh:case jn:return{byteLength:2,components:1};case Ul:case Bl:return{byteLength:2,components:4};case Kn:case Ol:case Jn:return{byteLength:4,components:1};case hh:case fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function y0(){let i=null,t=!1,e=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),e(o,s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Ux(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],b=u[d];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let b=u[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var Bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,r1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,a1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p1="gl_FragColor = linearToOutputTexel( gl_FragColor );",m1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,C1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,I1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,V1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ty=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ey=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ay=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,my=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,by=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_y=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,My=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ty=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ey=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ay=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ly=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,By=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ky=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ev=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ov=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,av=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:Bx,alphahash_pars_fragment:kx,alphamap_fragment:zx,alphamap_pars_fragment:Vx,alphatest_fragment:Gx,alphatest_pars_fragment:Wx,aomap_fragment:Hx,aomap_pars_fragment:Xx,batching_pars_vertex:Yx,batching_vertex:qx,begin_vertex:$x,beginnormal_vertex:Zx,bsdfs:Kx,iridescence_fragment:Jx,bumpmap_pars_fragment:jx,clipping_planes_fragment:Qx,clipping_planes_pars_fragment:t1,clipping_planes_pars_vertex:e1,clipping_planes_vertex:n1,color_fragment:i1,color_pars_fragment:r1,color_pars_vertex:o1,color_vertex:s1,common:a1,cube_uv_reflection_fragment:l1,defaultnormal_vertex:c1,displacementmap_pars_vertex:u1,displacementmap_vertex:h1,emissivemap_fragment:f1,emissivemap_pars_fragment:d1,colorspace_fragment:p1,colorspace_pars_fragment:m1,envmap_fragment:g1,envmap_common_pars_fragment:b1,envmap_pars_fragment:x1,envmap_pars_vertex:y1,envmap_physical_pars_fragment:C1,envmap_vertex:v1,fog_vertex:_1,fog_pars_vertex:M1,fog_fragment:w1,fog_pars_fragment:S1,gradientmap_pars_fragment:T1,lightmap_pars_fragment:E1,lights_lambert_fragment:A1,lights_lambert_pars_fragment:R1,lights_pars_begin:P1,lights_toon_fragment:I1,lights_toon_pars_fragment:L1,lights_phong_fragment:F1,lights_phong_pars_fragment:D1,lights_physical_fragment:N1,lights_physical_pars_fragment:O1,lights_fragment_begin:U1,lights_fragment_maps:B1,lights_fragment_end:k1,lightprobes_pars_fragment:z1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:G1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:H1,map_fragment:X1,map_pars_fragment:Y1,map_particle_fragment:q1,map_particle_pars_fragment:$1,metalnessmap_fragment:Z1,metalnessmap_pars_fragment:K1,morphinstance_vertex:J1,morphcolor_vertex:j1,morphnormal_vertex:Q1,morphtarget_pars_vertex:ty,morphtarget_vertex:ey,normal_fragment_begin:ny,normal_fragment_maps:iy,normal_pars_fragment:ry,normal_pars_vertex:oy,normal_vertex:sy,normalmap_pars_fragment:ay,clearcoat_normal_fragment_begin:ly,clearcoat_normal_fragment_maps:cy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:hy,opaque_fragment:fy,packing:dy,premultiplied_alpha_fragment:py,project_vertex:my,dithering_fragment:gy,dithering_pars_fragment:by,roughnessmap_fragment:xy,roughnessmap_pars_fragment:yy,shadowmap_pars_fragment:vy,shadowmap_pars_vertex:_y,shadowmap_vertex:My,shadowmask_pars_fragment:wy,skinbase_vertex:Sy,skinning_pars_vertex:Ty,skinning_vertex:Ey,skinnormal_vertex:Ay,specularmap_fragment:Ry,specularmap_pars_fragment:Py,tonemapping_fragment:Cy,tonemapping_pars_fragment:Iy,transmission_fragment:Ly,transmission_pars_fragment:Fy,uv_pars_fragment:Dy,uv_pars_vertex:Ny,uv_vertex:Oy,worldpos_vertex:Uy,background_vert:By,background_frag:ky,backgroundCube_vert:zy,backgroundCube_frag:Vy,cube_vert:Gy,cube_frag:Wy,depth_vert:Hy,depth_frag:Xy,distance_vert:Yy,distance_frag:qy,equirect_vert:$y,equirect_frag:Zy,linedashed_vert:Ky,linedashed_frag:Jy,meshbasic_vert:jy,meshbasic_frag:Qy,meshlambert_vert:tv,meshlambert_frag:ev,meshmatcap_vert:nv,meshmatcap_frag:iv,meshnormal_vert:rv,meshnormal_frag:ov,meshphong_vert:sv,meshphong_frag:av,meshphysical_vert:lv,meshphysical_frag:cv,meshtoon_vert:uv,meshtoon_frag:hv,points_vert:fv,points_frag:dv,shadow_vert:pv,shadow_frag:mv,sprite_vert:gv,sprite_frag:bv},Rt={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},pi={basic:{uniforms:bn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:bn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new j(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:bn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:bn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:bn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new j(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:bn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:bn([Rt.points,Rt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:bn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:bn([Rt.common,Rt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:bn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:bn([Rt.sprite,Rt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:bn([Rt.common,Rt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:bn([Rt.lights,Rt.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};pi.physical={uniforms:bn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var vc={r:0,b:0,g:0},xv=new Pe,v0=new re;v0.set(-1,0,0,0,1,0,0,0,1);function yv(i,t,e,n,r,o){let s=new j(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let y=x.backgroundBlurriness>0;v=t.get(v,y)}return v}function p(x){let v=!1,y=d(x);y===null?m(s,a):y&&y.isColor&&(m(y,1),v=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,v){let y=d(v);y&&(y.isCubeTexture||y.mapping===Ps)?(c===void 0&&(c=new It(new _o(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Cr(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xv.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(v0),c.material.toneMapped=me.getTransfer(y.colorSpace)!==Ee,(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new It(new $n(2,2),new gn({name:"BackgroundMaterial",uniforms:Cr(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=me.getTransfer(y.colorSpace)!==Ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,v){x.getRGB(vc,vh(i)),e.buffers.color.setClear(vc.r,vc.g,vc.b,v,o)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,v=1){s.set(x),a=v,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(s,a)},render:p,addToRenderList:b,dispose:g}}function vv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),o=r,s=!1;function a(I,P,N,C,S){let E=!1,L=u(I,C,N,P);o!==L&&(o=L,c(o.object)),E=d(I,C,N,S),E&&p(I,C,N,S),S!==null&&t.update(S,i.ELEMENT_ARRAY_BUFFER),(E||s)&&(s=!1,y(I,P,N,C),S!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(S).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,P,N,C){let S=C.wireframe===!0,E=n[P.id];E===void 0&&(E={},n[P.id]=E);let L=I.isInstancedMesh===!0?I.id:0,D=E[L];D===void 0&&(D={},E[L]=D);let O=D[N.id];O===void 0&&(O={},D[N.id]=O);let k=O[S];return k===void 0&&(k=f(l()),O[S]=k),k}function f(I){let P=[],N=[],C=[];for(let S=0;S<e;S++)P[S]=0,N[S]=0,C[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:C,object:I,attributes:{},index:null}}function d(I,P,N,C){let S=o.attributes,E=P.attributes,L=0,D=N.getAttributes();for(let O in D)if(D[O].location>=0){let z=S[O],W=E[O];if(W===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),z===void 0||z.attribute!==W||W&&z.data!==W.data)return!0;L++}return o.attributesNum!==L||o.index!==C}function p(I,P,N,C){let S={},E=P.attributes,L=0,D=N.getAttributes();for(let O in D)if(D[O].location>=0){let z=E[O];z===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(z=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(z=I.instanceColor));let W={};W.attribute=z,z&&z.data&&(W.data=z.data),S[O]=W,L++}o.attributes=S,o.attributesNum=L,o.index=C}function b(){let I=o.newAttributes;for(let P=0,N=I.length;P<N;P++)I[P]=0}function m(I){g(I,0)}function g(I,P){let N=o.newAttributes,C=o.enabledAttributes,S=o.attributeDivisors;N[I]=1,C[I]===0&&(i.enableVertexAttribArray(I),C[I]=1),S[I]!==P&&(i.vertexAttribDivisor(I,P),S[I]=P)}function x(){let I=o.newAttributes,P=o.enabledAttributes;for(let N=0,C=P.length;N<C;N++)P[N]!==I[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function v(I,P,N,C,S,E,L){L===!0?i.vertexAttribIPointer(I,P,N,S,E):i.vertexAttribPointer(I,P,N,C,S,E)}function y(I,P,N,C){b();let S=C.attributes,E=N.getAttributes(),L=P.defaultAttributeValues;for(let D in E){let O=E[D];if(O.location>=0){let k=S[D];if(k===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){let z=k.normalized,W=k.itemSize,G=t.get(k);if(G===void 0)continue;let Y=G.buffer,Z=G.type,it=G.bytesPerElement,H=Z===i.INT||Z===i.UNSIGNED_INT||k.gpuType===Ol;if(k.isInterleavedBufferAttribute){let X=k.data,rt=X.stride,at=k.offset;if(X.isInstancedInterleavedBuffer){for(let st=0;st<O.locationSize;st++)g(O.location+st,X.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let st=0;st<O.locationSize;st++)m(O.location+st);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let st=0;st<O.locationSize;st++)v(O.location+st,W/O.locationSize,Z,z,rt*it,(at+W/O.locationSize*st)*it,H)}else{if(k.isInstancedBufferAttribute){for(let X=0;X<O.locationSize;X++)g(O.location+X,k.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let X=0;X<O.locationSize;X++)m(O.location+X);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let X=0;X<O.locationSize;X++)v(O.location+X,W/O.locationSize,Z,z,W*it,W/O.locationSize*X*it,H)}}else if(L!==void 0){let z=L[D];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(O.location,z);break;case 3:i.vertexAttrib3fv(O.location,z);break;case 4:i.vertexAttrib4fv(O.location,z);break;default:i.vertexAttrib1fv(O.location,z)}}}}x()}function M(){T();for(let I in n){let P=n[I];for(let N in P){let C=P[N];for(let S in C){let E=C[S];for(let L in E)h(E[L].object),delete E[L];delete C[S]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let P=n[I.id];for(let N in P){let C=P[N];for(let S in C){let E=C[S];for(let L in E)h(E[L].object),delete E[L];delete C[S]}}delete n[I.id]}function A(I){for(let P in n){let N=n[P];for(let C in N){let S=N[C];if(S[I.id]===void 0)continue;let E=S[I.id];for(let L in E)h(E[L].object),delete E[L];delete S[I.id]}}}function _(I){for(let P in n){let N=n[P],C=I.isInstancedMesh===!0?I.id:0,S=N[C];if(S!==void 0){for(let E in S){let L=S[E];for(let D in L)h(L[D].object),delete L[D];delete S[E]}delete N[C],Object.keys(N).length===0&&delete n[P]}}}function T(){R(),s=!0,o!==r&&(o=r,c(o.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function _v(i,t,e){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function s(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function Mv(i,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==Bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==In&&A!==Jn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,maxSamples:M,samples:w}}function wv(i){let t=this,e=null,n=0,r=!1,o=!1,s=new Yn,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!r||p===null||p.length===0||o&&!m)o?h(null):c();else{let x=o?0:n,v=x*4,y=g.clippingState||null;l.value=y,y=h(p,f,v,d);for(let M=0;M!==v;++M)y[M]=e[M];g.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=l.value,p!==!0||m===null){let g=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,y=d;v!==b;++v,y+=4)s.copy(u[v]).applyMatrix4(x,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var Ro=4,Sv=6,Tv=20,Ev=256,Us=new On,jp=new j,Ph=null,Ch=0,Ih=0,Lh=!1,Av=new q,Ir=new q,Mc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,o={}){let{size:s=256,position:a=Av}=o;Ph=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,Ch,Ih),this._renderer.xr.enabled=Lh,t.scissorTest=!1,Ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===er||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:jn,format:Bn,colorSpace:ss,depthBuffer:!1},r=Qp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Rv(o)),this._blurMaterial=Cv(o,t,e),this._ggxMaterial=Pv(o,t,e)}return r}_compileMaterial(t){let e=new It(new Ht,t);this._renderer.compile(e,Us)}_sceneToCubeUV(t,e,n,r,o){let l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(jp),u.toneMapping=Zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new _o,new $t({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,g=!1,x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,g=!0):(m.color.copy(jp),g=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[v],o.y,o.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[v],o.z)):(l.up.set(0,c[v],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[v]));let M=this._cubeSize;Ao(r,y*M,v>2?M:0,M,M),u.setRenderTarget(r),g&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===er||t.mapping===Pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t0());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;Ao(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,Us)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,b=this._sizeLods[n],m=3*b*(n>p-Ro?n-p+Ro:0),g=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Ao(o,m,g,3*b,2*b),r.setRenderTarget(o),r.render(a,Us),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,Ao(t,m,g,3*b,2*b),r.setRenderTarget(t),r.render(a,Us)}_blur(t,e,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,s),this._blurPass(o,t,n,n,s)}_blurPass(t,e,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-Ro?r-this._lodMax+Ro:0),f=4*(this._cubeSize-h);Ao(e,u,f,3*h,2*h),s.setRenderTarget(e),s.render(l,Us)}};function Rv(i){let t=[],e=[],n=i,r=i-Ro+1+Sv;for(let o=0;o<r;o++){let s=Math.pow(2,n);t.push(s);let a=1/(s-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let g=0;g<u;g++){let x=g%3*2/3-1,v=g>2?0:-1,y=[x,v,0,x+2/3,v,0,x+2/3,v+1,0,x,v,0,x+2/3,v+1,0,x,v+1,0];p.set(y,d*f*g);for(let M=0;M<f;M++){let w=h[M*2]*2-1,A=h[M*2+1]*2-1;g===0?Ir.set(1,A,w):g===1?Ir.set(-w,1,-A):g===2?Ir.set(-w,A,1):g===3?Ir.set(-1,A,-w):g===4?Ir.set(-w,-1,A):Ir.set(w,A,-1),Ir.toArray(b,(g*f+M)*d)}}let m=new Ht;m.setAttribute("position",new Rn(p,d)),m.setAttribute("outputDirection",new Rn(b,d)),e.push(new It(m,null)),n>Ro&&n--}return{lodMeshes:e,sizeLods:t}}function Qp(i,t,e){let n=new Ze(i,t,e);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Pv(i,t,e){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ev,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Cv(i,t,e){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:Tv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function t0(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function e0(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Sc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var wc=class extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new gs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _o(5,5,5),o=new gn({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Un});o.uniforms.tEquirect.value=e;let s=new It(r,o),a=e.minFilter;return e.minFilter===nr&&(e.minFilter=$e),new Cl(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,r);t.setRenderTarget(o)}};function Iv(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?s(f):o(f)}function o(f){if(f&&f.isTexture){let d=f.mapping;if(d===Fl||d===Dl)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let b=new wc(p.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,p=d===Fl||d===Dl,b=d===er||d===Pr;if(p||b){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Mc(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let x=f.image;return p&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new Mc(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Fl?f.mapping=er:d===Dl&&(f.mapping=Pr),f}function l(f){let d=0,p=6;for(let b=0;b<p;b++)f[b]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Lv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Mr("WebGLRenderer: "+n+" extension not supported."),r}}}function Fv(i,t,e,n){let r={},o=new WeakMap;function s(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",s),delete r[f.id];let d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,b=0;if(p===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let v=0,y=x.length;v<y;v+=3){let M=x[v+0],w=x[v+1],A=x[v+2];f.push(M,w,w,A,A,M)}}else{let x=p.array;b=p.version;for(let v=0,y=x.length/3-1;v<y;v+=3){let M=v+0,w=v+1,A=v+2;f.push(M,w,w,A,A,M)}}let m=new(p.count>=65535?Sr:fs)(f,1);m.version=b;let g=o.get(u);g&&t.remove(g),o.set(u,m)}function h(u){let f=o.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Dv(i,t,e){let n;function r(u){n=u}let o,s;function a(u){o=u.type,s=u.bytesPerElement}function l(u,f){i.drawElements(n,f,o,u*s),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,o,u*s,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,d);let b=0;for(let m=0;m<d;m++)b+=f[m];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Nv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:Jt("WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ov(i,t,e){let n=new WeakMap,r=new We;function o(s,a,l){let c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),b===!0&&(v=3);let y=a.attributes.position.count*v,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*M*4*u),A=new us(w,y,M,u);A.type=Jn,A.needsUpdate=!0;let _=v*4;for(let R=0;R<u;R++){let I=m[R],P=g[R],N=x[R],C=y*M*4*R;for(let S=0;S<I.count;S++){let E=S*_;d===!0&&(r.fromBufferAttribute(I,S),w[C+E+0]=r.x,w[C+E+1]=r.y,w[C+E+2]=r.z,w[C+E+3]=0),p===!0&&(r.fromBufferAttribute(P,S),w[C+E+4]=r.x,w[C+E+5]=r.y,w[C+E+6]=r.z,w[C+E+7]=0),b===!0&&(r.fromBufferAttribute(N,S),w[C+E+8]=r.x,w[C+E+9]=r.y,w[C+E+10]=r.z,w[C+E+11]=N.itemSize===4?r.w:1)}}f={count:u,texture:A,size:new ee(y,M)},n.set(a,f),a.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function Uv(i,t,e,n,r){let o=new WeakMap;function s(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(o.get(f)!==h&&(t.update(f),o.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return f}function a(){o=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}var Bv={[eh]:"LINEAR_TONE_MAPPING",[nh]:"REINHARD_TONE_MAPPING",[ih]:"CINEON_TONE_MAPPING",[rh]:"ACES_FILMIC_TONE_MAPPING",[sh]:"AGX_TONE_MAPPING",[ah]:"NEUTRAL_TONE_MAPPING",[oh]:"CUSTOM_TONE_MAPPING"};function kv(i,t,e,n,r,o){let s=new Ze(t,e,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ht;c.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ut([0,2,0,0,2,0],2));let h=new bl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new It(c,h),f=new On(-1,1,1,-1,0,1),d=null,p=null,b=!1,m,g=null,x=[],v=!1;this.setSize=function(y,M){s.setSize(y,M),a!==null&&a.setSize(y,M),l!==null&&l.setSize(y,M);for(let w=0;w<x.length;w++){let A=x[w];A.setSize&&A.setSize(y,M)}},this.setEffects=function(y){x=y,v=x.length>0&&x[0].isRenderPass===!0;let M=s.width,w=s.height;x.length>0&&a===null&&(a=new Ze(M,w,{type:jn,depthBuffer:!1,stencilBuffer:!1}),l=new Ze(M,w,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let _=x[A];_.setSize&&_.setSize(M,w)}},this.begin=function(y,M){if(b||y.toneMapping===Zn&&x.length===0)return!1;if(g=M,M!==null){let w=M.width,A=M.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return v===!1&&y.setRenderTarget(s),m=y.toneMapping,y.toneMapping=Zn,!0},this.hasRenderPass=function(){return v},this.end=function(y,M){y.toneMapping=m,b=!0;let w=s,A=a;for(let _=0;_<x.length;_++){let T=x[_];T.enabled!==!1&&(T.render(y,A,w,M),T.needsSwap!==!1&&(w=A,A=A===a?l:a))}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,h.defines={},me.getTransfer(d)===Ee&&(h.defines.SRGB_TRANSFER="");let _=Bv[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(g),y.render(u,f),g=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var _0=new mn,Nh=new hi(1,1),M0=new us,w0=new ul,S0=new gs,n0=[],i0=[],r0=new Float32Array(16),o0=new Float32Array(9),s0=new Float32Array(4);function Co(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,o=n0[r];if(o===void 0&&(o=new Float32Array(r),n0[r]=o),t!==0){n.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=e,i[s].toArray(o,a)}return o}function je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tc(i,t){let e=i0[t];e===void 0&&(e=new Int32Array(t),i0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function Gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function Wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function Hv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;s0.set(n),i.uniformMatrix2fv(this.addr,!1,s0),Qe(e,n)}}function Xv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;o0.set(n),i.uniformMatrix3fv(this.addr,!1,o0),Qe(e,n)}}function Yv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;r0.set(n),i.uniformMatrix4fv(this.addr,!1,r0),Qe(e,n)}}function qv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $v(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function Zv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function Kv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function Jv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function Qv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function e_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Nh.compareFunction=e.isReversedDepthBuffer()?yc:xc,o=Nh):o=_0,e.setTexture2D(t||o,r)}function n_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||w0,r)}function i_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||S0,r)}function r_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||M0,r)}function o_(i){switch(i){case 5126:return zv;case 35664:return Vv;case 35665:return Gv;case 35666:return Wv;case 35674:return Hv;case 35675:return Xv;case 35676:return Yv;case 5124:case 35670:return qv;case 35667:case 35671:return $v;case 35668:case 35672:return Zv;case 35669:case 35673:return Kv;case 5125:return Jv;case 36294:return jv;case 36295:return Qv;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return r_}}function s_(i,t){i.uniform1fv(this.addr,t)}function a_(i,t){let e=Co(t,this.size,2);i.uniform2fv(this.addr,e)}function l_(i,t){let e=Co(t,this.size,3);i.uniform3fv(this.addr,e)}function c_(i,t){let e=Co(t,this.size,4);i.uniform4fv(this.addr,e)}function u_(i,t){let e=Co(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function h_(i,t){let e=Co(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function f_(i,t){let e=Co(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function d_(i,t){i.uniform1iv(this.addr,t)}function p_(i,t){i.uniform2iv(this.addr,t)}function m_(i,t){i.uniform3iv(this.addr,t)}function g_(i,t){i.uniform4iv(this.addr,t)}function b_(i,t){i.uniform1uiv(this.addr,t)}function x_(i,t){i.uniform2uiv(this.addr,t)}function y_(i,t){i.uniform3uiv(this.addr,t)}function v_(i,t){i.uniform4uiv(this.addr,t)}function __(i,t,e){let n=this.cache,r=t.length,o=Tc(e,r);je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=Nh:s=_0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||s,o[a])}function M_(i,t,e){let n=this.cache,r=t.length,o=Tc(e,r);je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||w0,o[s])}function w_(i,t,e){let n=this.cache,r=t.length,o=Tc(e,r);je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||S0,o[s])}function S_(i,t,e){let n=this.cache,r=t.length,o=Tc(e,r);je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||M0,o[s])}function T_(i){switch(i){case 5126:return s_;case 35664:return a_;case 35665:return l_;case 35666:return c_;case 35674:return u_;case 35675:return h_;case 35676:return f_;case 5124:case 35670:return d_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return b_;case 36294:return x_;case 36295:return y_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return S_}}var Oh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=o_(e.type)}},Uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T_(e.type)}},Bh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(t,e[a.id],n)}}},Fh=/(\w+)(\])?(\[|\.)?/g;function a0(i,t){i.seq.push(t),i.map[t.id]=t}function E_(i,t,e){let n=i.name,r=n.length;for(Fh.lastIndex=0;;){let o=Fh.exec(n),s=Fh.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){a0(e,c===void 0?new Oh(a,i,t):new Uh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Bh(a),a0(e,u)),e=u}}}var Po=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);E_(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,n,r){let o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,s=e.length;o!==s;++o){let a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,o=t.length;r!==o;++r){let s=t[r];s.id in e&&n.push(s)}return n}};function l0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var A_=37297,R_=0;function P_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}var c0=new re;function C_(i){me._getMatrix(c0,me.workingColorSpace,i);let t=`mat3( ${c0.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case as:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function u0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+P_(i.getShaderSource(t),a)}else return o}function I_(i,t){let e=C_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var L_={[eh]:"Linear",[nh]:"Reinhard",[ih]:"Cineon",[rh]:"ACESFilmic",[sh]:"AgX",[ah]:"Neutral",[oh]:"Custom"};function F_(i,t){let e=L_[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _c=new q;function D_(){me.getLuminanceCoefficients(_c);let i=_c.x.toFixed(4),t=_c.y.toFixed(4),e=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function O_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function U_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(t,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[s]={type:o.type,location:i.getAttribLocation(t,s),locationSize:a}}return e}function ks(i){return i!==""}function h0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function f0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(i){return i.replace(B_,z_)}var k_=new Map;function z_(i,t){let e=de[t];if(e===void 0){let n=k_.get(t);if(n!==void 0)e=de[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return kh(e)}var V_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d0(i){return i.replace(V_,G_)}function G_(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function p0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var W_={[As]:"SHADOWMAP_TYPE_PCF",[So]:"SHADOWMAP_TYPE_VSM"};function H_(i){return W_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var X_={[er]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE_UV"};function Y_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":X_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var q_={[Pr]:"ENVMAP_MODE_REFRACTION"};function $_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":q_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Z_={[th]:"ENVMAP_BLENDING_MULTIPLY",[Ap]:"ENVMAP_BLENDING_MIX",[Rp]:"ENVMAP_BLENDING_ADD"};function K_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Z_[i.combine]||"ENVMAP_BLENDING_NONE"}function J_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function j_(i,t,e,n){let r=i.getContext(),o=e.defines,s=e.vertexShader,a=e.fragmentShader,l=H_(e),c=Y_(e),h=$_(e),u=K_(e),f=J_(e),d=N_(e),p=O_(o),b=r.createProgram(),m,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ks).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ks).join(`
`),g.length>0&&(g+=`
`)):(m=[p0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),g=[p0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?de.tonemapping_pars_fragment:"",e.toneMapping!==Zn?F_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,I_("linearToOutputTexel",e.outputColorSpace),D_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),s=kh(s),s=h0(s,e),s=f0(s,e),a=kh(a),a=h0(a,e),a=f0(a,e),s=d0(s),a=d0(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=x+m+s,y=x+g+a,M=l0(r,r.VERTEX_SHADER,v),w=l0(r,r.FRAGMENT_SHADER,y);r.attachShader(b,M),r.attachShader(b,w),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function A(I){if(i.debug.checkShaderErrors){let P=r.getProgramInfoLog(b)||"",N=r.getShaderInfoLog(M)||"",C=r.getShaderInfoLog(w)||"",S=P.trim(),E=N.trim(),L=C.trim(),D=!0,O=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,w);else{let k=u0(r,M,"vertex"),z=u0(r,w,"fragment");Jt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+S+`
`+k+`
`+z)}else S!==""?Kt("WebGLProgram: Program Info Log:",S):(E===""||L==="")&&(O=!1);O&&(I.diagnostics={runnable:D,programLog:S,vertexShader:{log:E,prefix:m},fragmentShader:{log:L,prefix:g}})}r.deleteShader(M),r.deleteShader(w),_=new Po(r,b),T=U_(r,b)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(b,A_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=R_++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=w,this}var Q_=0,zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Vh(t),e.set(t,n)),n}},Vh=class{constructor(t){this.id=Q_++,this.code=t,this.usedTimes=0}};function tM(i){return i===rr||i===Ns||i===Os}function eM(i,t,e,n,r,o){let s=new xo,a=new zh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,T,R,I,P,N){let C=I.fog,S=P.geometry,E=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,L=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,D=t.get(_.envMap||E,L),O=D&&D.mapping===Ps?D.image.height:null,k=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Kt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let z=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,W=z!==void 0?z.length:0,G=0;S.morphAttributes.position!==void 0&&(G=1),S.morphAttributes.normal!==void 0&&(G=2),S.morphAttributes.color!==void 0&&(G=3);let Y,Z,it,H;if(k){let Fe=pi[k];Y=Fe.vertexShader,Z=Fe.fragmentShader}else{Y=_.vertexShader,Z=_.fragmentShader;let Fe=a.getVertexShaderStage(_),we=a.getFragmentShaderStage(_);a.update(_,Fe,we),it=Fe.id,H=we.id}let X=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),at=P.isInstancedMesh===!0,st=P.isBatchedMesh===!0,tt=!!_.map,ft=!!_.matcap,dt=!!D,ct=!!_.aoMap,_t=!!_.lightMap,yt=!!_.bumpMap&&_.wireframe===!1,Pt=!!_.normalMap,Ft=!!_.displacementMap,Qt=!!_.emissiveMap,be=!!_.metalnessMap,he=!!_.roughnessMap,$=_.anisotropy>0,Me=_.clearcoat>0,le=_.dispersion>0,V=_.retroreflectivity>0,F=_.iridescence>0,Q=_.sheen>0,ot=_.transmission>0,ut=$&&!!_.anisotropyMap,vt=Me&&!!_.clearcoatMap,Mt=Me&&!!_.clearcoatNormalMap,ht=Me&&!!_.clearcoatRoughnessMap,mt=F&&!!_.iridescenceMap,wt=F&&!!_.iridescenceThicknessMap,Xt=Q&&!!_.sheenColorMap,At=Q&&!!_.sheenRoughnessMap,St=!!_.specularMap,Yt=!!_.specularColorMap,Zt=!!_.specularIntensityMap,ce=ot&&!!_.transmissionMap,J=ot&&!!_.thicknessMap,Tt=!!_.gradientMap,pt=!!_.alphaMap,Et=_.alphaTest>0,Dt=!!_.alphaHash,xt=!!_.extensions,qt=Zn;_.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qt=i.toneMapping);let Vt={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:Y,fragmentShader:Z,defines:_.defines,customVertexShaderID:it,customFragmentShaderID:H,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:st,batchingColor:st&&P._colorsTexture!==null,instancing:at,instancingColor:at&&P.instanceColor!==null,instancingMorph:at&&P.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:tt,matcap:ft,envMap:dt,envMapMode:dt&&D.mapping,envMapCubeUVHeight:O,aoMap:ct,lightMap:_t,bumpMap:yt,normalMap:Pt,displacementMap:Ft,emissiveMap:Qt,normalMapObjectSpace:Pt&&_.normalMapType===Ip,normalMapTangentSpace:Pt&&_.normalMapType===gh,packedNormalMap:Pt&&_.normalMapType===gh&&tM(_.normalMap.format),metalnessMap:be,roughnessMap:he,anisotropy:$,anisotropyMap:ut,clearcoat:Me,clearcoatMap:vt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:ht,dispersion:le,retroreflection:V,iridescence:F,iridescenceMap:mt,iridescenceThicknessMap:wt,sheen:Q,sheenColorMap:Xt,sheenRoughnessMap:At,specularMap:St,specularColorMap:Yt,specularIntensityMap:Zt,transmission:ot,transmissionMap:ce,thicknessMap:J,gradientMap:Tt,opaque:_.transparent===!1&&_.blending===Cn&&_.alphaToCoverage===!1,alphaMap:pt,alphaTest:Et,alphaHash:Dt,combine:_.combine,mapUv:tt&&p(_.map.channel),aoMapUv:ct&&p(_.aoMap.channel),lightMapUv:_t&&p(_.lightMap.channel),bumpMapUv:yt&&p(_.bumpMap.channel),normalMapUv:Pt&&p(_.normalMap.channel),displacementMapUv:Ft&&p(_.displacementMap.channel),emissiveMapUv:Qt&&p(_.emissiveMap.channel),metalnessMapUv:be&&p(_.metalnessMap.channel),roughnessMapUv:he&&p(_.roughnessMap.channel),anisotropyMapUv:ut&&p(_.anisotropyMap.channel),clearcoatMapUv:vt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:At&&p(_.sheenRoughnessMap.channel),specularMapUv:St&&p(_.specularMap.channel),specularColorMapUv:Yt&&p(_.specularColorMap.channel),specularIntensityMapUv:Zt&&p(_.specularIntensityMap.channel),transmissionMapUv:ce&&p(_.transmissionMap.channel),thicknessMapUv:J&&p(_.thicknessMap.channel),alphaMapUv:pt&&p(_.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(Pt||$),vertexNormals:!!S.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!S.attributes.uv&&(tt||pt),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||S.attributes.normal===void 0&&Pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:rt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:S.attributes.position!==void 0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:G,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:tt&&_.map.isVideoTexture===!0&&me.getTransfer(_.map.colorSpace)===Ee,decodeVideoTextureEmissive:Qt&&_.emissiveMap.isVideoTexture===!0&&me.getTransfer(_.emissiveMap.colorSpace)===Ee,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===se,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&_.extensions.multiDraw===!0||st)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(g(T,_),x(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function x(_,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.retroreflection&&s.enable(24),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function v(_){let T=d[_.type],R;if(T){let I=pi[T];R=Zp.clone(I.uniforms)}else R=_.uniforms;return R}function y(_,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new j_(i,T,_,r),c.push(R),h.set(T,R)),R}function M(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function A(){a.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:A}}function nM(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:o}}function iM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function m0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function g0(){let i=[],t=0,e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,b,m,g){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:s(f),groupOrder:b,renderOrder:f.renderOrder,z:m,group:g},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=s(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=m,x.group=g),t++,x}function l(f,d,p,b,m,g,x){x.reversedDepth===!0&&(m=-m);let v=a(f,d,p,b,m,g);p.transmission>0?n.push(v):p.transparent===!0?r.push(v):e.push(v)}function c(f,d,p,b,m,g){let x=a(f,d,p,b,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||iM),n.length>1&&n.sort(d||m0),r.length>1&&r.sort(d||m0)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:u,sort:h}}function rM(){let i=new WeakMap;function t(n,r){let o=i.get(n),s;return o===void 0?(s=new g0,i.set(n,[s])):r>=o.length?(s=new g0,o.push(s)):s=o[r],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function oM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new j};break;case"SpotLight":e={position:new q,direction:new q,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new j,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new j,groundColor:new j};break;case"RectAreaLight":e={color:new j,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function sM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var aM=0;function lM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cM(i){let t=new oM,e=sM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);let r=new q,o=new Pe,s=new Pe;function a(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,p=0,b=0,m=0,g=0,x=0,v=0,y=0,M=0,w=0,A=0,_=0,T=0,R=0;c.sort(lM);for(let P=0,N=c.length;P<N;P++){let C=c[P],S=C.color,E=C.intensity,L=C.distance,D=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===rr?D=C.shadow.map.texture:D=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=S.r*E,u+=S.g*E,f+=S.b*E;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],E);R++}else if(C.isSunLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,z=e.get(C);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[p]=z,n.sunShadowMap[p]=D;let W=k.getViewportCount();for(let G=0;G<W;G++)n.sunShadowMatrix[b+G]=k.getMatrix(G),n.sunShadowCascade[b+G]=k._cascadeData[G];b+=W,p++}n.sun[d]=O,d++}else if(C.isDirectionalLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,z=e.get(C);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=D,n.directionalShadowMatrix[m]=C.shadow.matrix,M++}n.directional[m]=O,m++}else if(C.isSpotLight){let O=t.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(S).multiplyScalar(E),O.distance=L,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[x]=O;let k=C.shadow;if(C.map&&(n.spotLightMap[_]=C.map,_++,k.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[x]=k.matrix,C.castShadow){let z=e.get(C);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=D,A++}x++}else if(C.isRectAreaLight){let O=t.get(C);O.color.copy(S).multiplyScalar(E),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[v]=O,v++}else if(C.isPointLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let k=C.shadow,z=e.get(C);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=C.shadow.matrix,w++}n.point[g]=O,g++}else if(C.isHemisphereLight){let O=t.get(C);O.skyColor.copy(C.color).multiplyScalar(E),O.groundColor.copy(C.groundColor).multiplyScalar(E),n.hemi[y]=O,y++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==v||I.hemiLength!==y||I.numSunShadows!==p||I.numDirectionalShadows!==M||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=x,n.rectArea.length=v,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.sunLength=d,I.directionalLength=m,I.pointLength=g,I.spotLength=x,I.rectAreaLength=v,I.hemiLength=y,I.numSunShadows=p,I.numDirectionalShadows=M,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=R,n.version=aM++)}function l(c,h){let u=0,f=0,d=0,p=0,b=0,m=0,g=h.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){let y=c[x];if(y.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),s.identity(),o.copy(y.matrixWorld),o.premultiply(g),s.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),b++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function b0(i){let t=new cM(i),e=[],n=[],r=[];function o(f){u.camera=f,e.length=0,n.length=0,r.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function uM(i){let t=new WeakMap;function e(r,o=0){let s=t.get(r),a;return s===void 0?(a=new b0(i),t.set(r,[a])):o>=s.length?(a=new b0(i),s.push(a)):a=s[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var hM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dM=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],pM=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],x0=new Pe,Bs=new q,Dh=new q;function mM(i,t,e){let n=new ms,r=new ee,o=new ee,s=new We,a=new xl,l=new yl,c={},h=e.maxTextureSize,u={[fi]:ln,[ln]:fi,[se]:se},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:hM,fragmentShader:fM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ht;p.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new It(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=As;let g=this.type;this.render=function(w,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===lp&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=As);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Un),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let N=g!==this.type;N&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(S=>S.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,S=w.length;C<S;C++){let E=w[C],L=E.shadow;if(L===void 0){Kt("WebGLShadowMap:",E,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);let D=L.getFrameExtents();r.multiply(D),o.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/D.x),r.x=o.x*D.x,L.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/D.y),r.y=o.y*D.y,L.mapSize.y=o.y));let O=i.state.buffers.depth.getReversed();if(L.camera._reversedDepth=O,L.map===null||N===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===So){if(E.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Ze(r.x,r.y,{format:rr,type:jn,minFilter:$e,magFilter:$e,generateMipmaps:!1}),L.map.texture.name=E.name+".shadowMap",L.map.depthTexture=new hi(r.x,r.y,Jn),L.map.depthTexture.name=E.name+".shadowMapDepth",L.map.depthTexture.format=si,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=rn,L.map.depthTexture.magFilter=rn}else E.isPointLight?(L.map=new wc(r.x),L.map.depthTexture=new gl(r.x,Kn)):(L.map=new Ze(r.x,r.y),L.map.depthTexture=new hi(r.x,r.y,Kn)),L.map.depthTexture.name=E.name+".shadowMap",L.map.depthTexture.format=si,this.type===As?(L.map.depthTexture.compareFunction=O?yc:xc,L.map.depthTexture.minFilter=$e,L.map.depthTexture.magFilter=$e):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=rn,L.map.depthTexture.magFilter=rn);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==r.x||L.map.height!==r.y)&&L.map.setSize(r.x,r.y);let k=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();E.isPointLight!==!0&&L.updateMatrices(E,_);for(let z=0;z<k;z++){let W=L.getCamera(z);if(E.isPointLight){let G=L.camera,Y=L.matrix,Z=E.distance||G.far;Z!==G.far&&(G.far=Z,G.updateProjectionMatrix()),Bs.setFromMatrixPosition(E.matrixWorld),G.position.copy(Bs),Dh.copy(G.position),Dh.add(dM[z]),G.up.copy(pM[z]),G.lookAt(Dh),G.updateMatrixWorld(),Y.makeTranslation(-Bs.x,-Bs.y,-Bs.z),x0.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),L._frustum.setFromProjectionMatrix(x0,G.coordinateSystem,G.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,z),i.clear();else{z===0&&(i.setRenderTarget(L.map),i.clear());let G=L.getViewport(z);s.set(o.x*G.x,o.y*G.y,o.x*G.z,o.y*G.w),P.viewport(s)}n=L.getFrustum(z),y(A,_,W,E,this.type)}L.isPointLightShadow!==!0&&this.type===So&&x(L,_),L.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,I)};function x(w,A){let _=t.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ze(r.x,r.y,{format:rr,type:jn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,_,f,b,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,_,d,b,null)}function v(w,A,_,T){let R=null,I=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let P=R.uuid,N=A.uuid,C=c[P];C===void 0&&(C={},c[P]=C);let S=C[N];S===void 0&&(S=R.clone(),C[N]=S,A.addEventListener("dispose",M)),R=S}if(R.visible=A.visible,R.wireframe=A.wireframe,T===So?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=i.properties.get(R);P.light=_}return R}function y(w,A,_,T,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===So)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let N=t.update(w),C=w.material;if(Array.isArray(C)){let S=N.groups;for(let E=0,L=S.length;E<L;E++){let D=S[E],O=C[D.materialIndex];if(O&&O.visible){let k=v(w,O,T,R);w.onBeforeShadow(i,w,A,_,N,k,D),i.renderBufferDirect(_,null,N,k,w,D),w.onAfterShadow(i,w,A,_,N,k,D)}}}else if(C.visible){let S=v(w,C,T,R);w.onBeforeShadow(i,w,A,_,N,S,null),i.renderBufferDirect(_,null,N,S,w,null),w.onAfterShadow(i,w,A,_,N,S,null)}}let P=w.children;for(let N=0,C=P.length;N<C;N++)y(P[N],A,_,T,R)}function M(w){w.target.removeEventListener("dispose",M);for(let _ in c){let T=c[_],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function gM(i,t){function e(){let J=!1,Tt=new We,pt=null,Et=new We(0,0,0,0);return{setMask:function(Dt){pt!==Dt&&!J&&(i.colorMask(Dt,Dt,Dt,Dt),pt=Dt)},setLocked:function(Dt){J=Dt},setClear:function(Dt,xt,qt,Vt,Fe){Fe===!0&&(Dt*=Vt,xt*=Vt,qt*=Vt),Tt.set(Dt,xt,qt,Vt),Et.equals(Tt)===!1&&(i.clearColor(Dt,xt,qt,Vt),Et.copy(Tt))},reset:function(){J=!1,pt=null,Et.set(-1,0,0,0)}}}function n(){let J=!1,Tt=!1,pt=null,Et=null,Dt=null;return{setReversed:function(xt){if(Tt!==xt){let qt=t.get("EXT_clip_control");xt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Tt=xt;let Vt=Dt;Dt=null,this.setClear(Vt)}},getReversed:function(){return Tt},setTest:function(xt){xt?X(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(xt){pt!==xt&&!J&&(i.depthMask(xt),pt=xt)},setFunc:function(xt){if(Tt&&(xt=Gp[xt]),Et!==xt){switch(xt){case ja:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case po:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case nl:i.depthFunc(i.GEQUAL);break;case il:i.depthFunc(i.GREATER);break;case rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=xt}},setLocked:function(xt){J=xt},setClear:function(xt){Dt!==xt&&(Dt=xt,Tt&&(xt=1-xt),i.clearDepth(xt))},reset:function(){J=!1,pt=null,Et=null,Dt=null,Tt=!1}}}function r(){let J=!1,Tt=null,pt=null,Et=null,Dt=null,xt=null,qt=null,Vt=null,Fe=null;return{setTest:function(we){J||(we?X(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(we){Tt!==we&&!J&&(i.stencilMask(we),Tt=we)},setFunc:function(we,zn,ni){(pt!==we||Et!==zn||Dt!==ni)&&(i.stencilFunc(we,zn,ni),pt=we,Et=zn,Dt=ni)},setOp:function(we,zn,ni){(xt!==we||qt!==zn||Vt!==ni)&&(i.stencilOp(we,zn,ni),xt=we,qt=zn,Vt=ni)},setLocked:function(we){J=we},setClear:function(we){Fe!==we&&(i.clearStencil(we),Fe=we)},reset:function(){J=!1,Tt=null,pt=null,Et=null,Dt=null,xt=null,qt=null,Vt=null,Fe=null}}}let o=new e,s=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],b=null,m=!1,g=null,x=null,v=null,y=null,M=null,w=null,A=null,_=new j(0,0,0),T=0,R=!1,I=null,P=null,N=null,C=null,S=null,E=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,D=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=D>=1):O.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=D>=2);let k=null,z={},W=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),Y=new We().fromArray(W),Z=new We().fromArray(G);function it(J,Tt,pt,Et){let Dt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(J,xt),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<pt;qt++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Tt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return xt}let H={};H[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),X(i.DEPTH_TEST),s.setFunc(po),yt(!1),Pt(Ku),X(i.CULL_FACE),ct(Un);function X(J){h[J]!==!0&&(i.enable(J),h[J]=!0)}function rt(J){h[J]!==!1&&(i.disable(J),h[J]=!1)}function at(J,Tt){return f[J]!==Tt?(i.bindFramebuffer(J,Tt),f[J]=Tt,J===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Tt),J===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function st(J,Tt){let pt=p,Et=!1;if(J){pt=d.get(Tt),pt===void 0&&(pt=[],d.set(Tt,pt));let Dt=J.textures;if(pt.length!==Dt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,qt=Dt.length;xt<qt;xt++)pt[xt]=i.COLOR_ATTACHMENT0+xt;pt.length=Dt.length,Et=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(pt)}function tt(J){return b!==J?(i.useProgram(J),b=J,!0):!1}let ft={[Rr]:i.FUNC_ADD,[up]:i.FUNC_SUBTRACT,[hp]:i.FUNC_REVERSE_SUBTRACT};ft[fp]=i.MIN,ft[dp]=i.MAX;let dt={[pp]:i.ZERO,[mp]:i.ONE,[gp]:i.SRC_COLOR,[ju]:i.SRC_ALPHA,[Mp]:i.SRC_ALPHA_SATURATE,[vp]:i.DST_COLOR,[xp]:i.DST_ALPHA,[bp]:i.ONE_MINUS_SRC_COLOR,[Qu]:i.ONE_MINUS_SRC_ALPHA,[_p]:i.ONE_MINUS_DST_COLOR,[yp]:i.ONE_MINUS_DST_ALPHA,[wp]:i.CONSTANT_COLOR,[Sp]:i.ONE_MINUS_CONSTANT_COLOR,[Tp]:i.CONSTANT_ALPHA,[Ep]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(J,Tt,pt,Et,Dt,xt,qt,Vt,Fe,we){if(J===Un){m===!0&&(rt(i.BLEND),m=!1);return}if(m===!1&&(X(i.BLEND),m=!0),J!==cp){if(J!==g||we!==R){if((x!==Rr||M!==Rr)&&(i.blendEquation(i.FUNC_ADD),x=Rr,M=Rr),we)switch(J){case Cn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ie:i.blendFunc(i.ONE,i.ONE);break;case Ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",J);break}else switch(J){case Cn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ie:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ju:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rs:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",J);break}v=null,y=null,w=null,A=null,_.set(0,0,0),T=0,g=J,R=we}return}Dt=Dt||Tt,xt=xt||pt,qt=qt||Et,(Tt!==x||Dt!==M)&&(i.blendEquationSeparate(ft[Tt],ft[Dt]),x=Tt,M=Dt),(pt!==v||Et!==y||xt!==w||qt!==A)&&(i.blendFuncSeparate(dt[pt],dt[Et],dt[xt],dt[qt]),v=pt,y=Et,w=xt,A=qt),(Vt.equals(_)===!1||Fe!==T)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Fe),_.copy(Vt),T=Fe),g=J,R=!1}function _t(J,Tt){J.side===se?rt(i.CULL_FACE):X(i.CULL_FACE);let pt=J.side===ln;Tt&&(pt=!pt),yt(pt),J.blending===Cn&&J.transparent===!1?ct(Un):ct(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),s.setFunc(J.depthFunc),s.setTest(J.depthTest),s.setMask(J.depthWrite),o.setMask(J.colorWrite);let Et=J.stencilWrite;a.setTest(Et),Et&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Qt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(J){I!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),I=J)}function Pt(J){J!==sp?(X(i.CULL_FACE),J!==P&&(J===Ku?i.cullFace(i.BACK):J===ap?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),P=J}function Ft(J){J!==N&&(L&&i.lineWidth(J),N=J)}function Qt(J,Tt,pt){J?(X(i.POLYGON_OFFSET_FILL),(C!==Tt||S!==pt)&&(C=Tt,S=pt,s.getReversed()&&(Tt=-Tt),i.polygonOffset(Tt,pt))):rt(i.POLYGON_OFFSET_FILL)}function be(J){J?X(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function he(J){J===void 0&&(J=i.TEXTURE0+E-1),k!==J&&(i.activeTexture(J),k=J)}function $(J,Tt,pt){pt===void 0&&(k===null?pt=i.TEXTURE0+E-1:pt=k);let Et=z[pt];Et===void 0&&(Et={type:void 0,texture:void 0},z[pt]=Et),(Et.type!==J||Et.texture!==Tt)&&(k!==pt&&(i.activeTexture(pt),k=pt),i.bindTexture(J,Tt||H[J]),Et.type=J,Et.texture=Tt)}function Me(){let J=z[k];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function le(){try{i.compressedTexImage2D(...arguments)}catch(J){Jt("WebGLState:",J)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(J){Jt("WebGLState:",J)}}function F(){try{i.texSubImage2D(...arguments)}catch(J){Jt("WebGLState:",J)}}function Q(){try{i.texSubImage3D(...arguments)}catch(J){Jt("WebGLState:",J)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(J){Jt("WebGLState:",J)}}function ut(){try{i.compressedTexSubImage3D(...arguments)}catch(J){Jt("WebGLState:",J)}}function vt(){try{i.texStorage2D(...arguments)}catch(J){Jt("WebGLState:",J)}}function Mt(){try{i.texStorage3D(...arguments)}catch(J){Jt("WebGLState:",J)}}function ht(){try{i.texImage2D(...arguments)}catch(J){Jt("WebGLState:",J)}}function mt(){try{i.texImage3D(...arguments)}catch(J){Jt("WebGLState:",J)}}function wt(J){return u[J]!==void 0?u[J]:i.getParameter(J)}function Xt(J,Tt){u[J]!==Tt&&(i.pixelStorei(J,Tt),u[J]=Tt)}function At(J){Y.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),Y.copy(J))}function St(J){Z.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),Z.copy(J))}function Yt(J,Tt){let pt=c.get(Tt);pt===void 0&&(pt=new WeakMap,c.set(Tt,pt));let Et=pt.get(J);Et===void 0&&(Et=i.getUniformBlockIndex(Tt,J.name),pt.set(J,Et))}function Zt(J,Tt){let Et=c.get(Tt).get(J);l.get(Tt)!==Et&&(i.uniformBlockBinding(Tt,Et,J.__bindingPointIndex),l.set(Tt,Et))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},k=null,z={},f={},d=new WeakMap,p=[],b=null,m=!1,g=null,x=null,v=null,y=null,M=null,w=null,A=null,_=new j(0,0,0),T=0,R=!1,I=null,P=null,N=null,C=null,S=null,Y.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:X,disable:rt,bindFramebuffer:at,drawBuffers:st,useProgram:tt,setBlending:ct,setMaterial:_t,setFlipSided:yt,setCullFace:Pt,setLineWidth:Ft,setPolygonOffset:Qt,setScissorTest:be,activeTexture:he,bindTexture:$,unbindTexture:Me,compressedTexImage2D:le,compressedTexImage3D:V,texImage2D:ht,texImage3D:mt,pixelStorei:Xt,getParameter:wt,updateUBOMapping:Yt,uniformBlockBinding:Zt,texStorage2D:vt,texStorage3D:Mt,texSubImage2D:F,texSubImage3D:Q,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:At,viewport:St,reset:ce}}function bM(i,t,e,n,r,o,s){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(V,F){return p?new OffscreenCanvas(V,F):mo("canvas")}function m(V,F,Q){let ot=1,ut=le(V);if((ut.width>Q||ut.height>Q)&&(ot=Q/Math.max(ut.width,ut.height)),ot<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let vt=Math.floor(ot*ut.width),Mt=Math.floor(ot*ut.height);f===void 0&&(f=b(vt,Mt));let ht=F?b(vt,Mt):f;return ht.width=vt,ht.height=Mt,ht.getContext("2d").drawImage(V,0,0,vt,Mt),Kt("WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+vt+"x"+Mt+")."),ht}else return"data"in V&&Kt("WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),V;return V}function g(V){return V.generateMipmaps}function x(V){i.generateMipmap(V)}function v(V){return V.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?i.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(V,F,Q,ot,ut,vt=!1){if(V!==null){if(i[V]!==void 0)return i[V];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let Mt;ot&&(Mt=t.get("EXT_texture_norm16"),Mt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=F;if(F===i.RED&&(Q===i.FLOAT&&(ht=i.R32F),Q===i.HALF_FLOAT&&(ht=i.R16F),Q===i.UNSIGNED_BYTE&&(ht=i.R8),Q===i.UNSIGNED_SHORT&&Mt&&(ht=Mt.R16_EXT),Q===i.SHORT&&Mt&&(ht=Mt.R16_SNORM_EXT)),F===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ht=i.R8UI),Q===i.UNSIGNED_SHORT&&(ht=i.R16UI),Q===i.UNSIGNED_INT&&(ht=i.R32UI),Q===i.BYTE&&(ht=i.R8I),Q===i.SHORT&&(ht=i.R16I),Q===i.INT&&(ht=i.R32I)),F===i.RG&&(Q===i.FLOAT&&(ht=i.RG32F),Q===i.HALF_FLOAT&&(ht=i.RG16F),Q===i.UNSIGNED_BYTE&&(ht=i.RG8),Q===i.UNSIGNED_SHORT&&Mt&&(ht=Mt.RG16_EXT),Q===i.SHORT&&Mt&&(ht=Mt.RG16_SNORM_EXT)),F===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ht=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ht=i.RG16UI),Q===i.UNSIGNED_INT&&(ht=i.RG32UI),Q===i.BYTE&&(ht=i.RG8I),Q===i.SHORT&&(ht=i.RG16I),Q===i.INT&&(ht=i.RG32I)),F===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ht=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ht=i.RGB16UI),Q===i.UNSIGNED_INT&&(ht=i.RGB32UI),Q===i.BYTE&&(ht=i.RGB8I),Q===i.SHORT&&(ht=i.RGB16I),Q===i.INT&&(ht=i.RGB32I)),F===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ht=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ht=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ht=i.RGBA32UI),Q===i.BYTE&&(ht=i.RGBA8I),Q===i.SHORT&&(ht=i.RGBA16I),Q===i.INT&&(ht=i.RGBA32I)),F===i.RGB&&(Q===i.UNSIGNED_SHORT&&Mt&&(ht=Mt.RGB16_EXT),Q===i.SHORT&&Mt&&(ht=Mt.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ht=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ht=i.R11F_G11F_B10F)),F===i.RGBA){let mt=vt?as:me.getTransfer(ut);Q===i.FLOAT&&(ht=i.RGBA32F),Q===i.HALF_FLOAT&&(ht=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ht=mt===Ee?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&Mt&&(ht=Mt.RGBA16_EXT),Q===i.SHORT&&Mt&&(ht=Mt.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ht=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ht=i.RGB5_A1)}return(ht===i.R16F||ht===i.R32F||ht===i.RG16F||ht===i.RG32F||ht===i.RGBA16F||ht===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function M(V,F){let Q;return V?F===null||F===Kn||F===Eo?Q=i.DEPTH24_STENCIL8:F===Jn?Q=i.DEPTH32F_STENCIL8:F===To&&(Q=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===Kn||F===Eo?Q=i.DEPTH_COMPONENT24:F===Jn?Q=i.DEPTH_COMPONENT32F:F===To&&(Q=i.DEPTH_COMPONENT16),Q}function w(V,F){return g(V)===!0||V.isFramebufferTexture&&V.minFilter!==rn&&V.minFilter!==$e?Math.log2(Math.max(F.width,F.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?F.mipmaps.length:1}function A(V){let F=V.target;F.removeEventListener("dispose",A),T(F),F.isVideoTexture&&h.delete(F),F.isHTMLTexture&&u.delete(F)}function _(V){let F=V.target;F.removeEventListener("dispose",_),I(F)}function T(V){let F=n.get(V);if(F.__webglInit===void 0)return;let Q=V.source,ot=d.get(Q);if(ot){let ut=ot[F.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&R(V),Object.keys(ot).length===0&&d.delete(Q)}n.remove(V)}function R(V){let F=n.get(V);i.deleteTexture(F.__webglTexture);let Q=V.source,ot=d.get(Q);delete ot[F.__cacheKey],s.memory.textures--}function I(V){let F=n.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),n.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(F.__webglFramebuffer[ot]))for(let ut=0;ut<F.__webglFramebuffer[ot].length;ut++)i.deleteFramebuffer(F.__webglFramebuffer[ot][ut]);else i.deleteFramebuffer(F.__webglFramebuffer[ot]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ot])}else{if(Array.isArray(F.__webglFramebuffer))for(let ot=0;ot<F.__webglFramebuffer.length;ot++)i.deleteFramebuffer(F.__webglFramebuffer[ot]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ot=0;ot<F.__webglColorRenderbuffer.length;ot++)F.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ot]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let Q=V.textures;for(let ot=0,ut=Q.length;ot<ut;ot++){let vt=n.get(Q[ot]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),s.memory.textures--),n.remove(Q[ot])}n.remove(V)}let P=0;function N(){P=0}function C(){return P}function S(V){P=V}function E(){let V=P;return V>=r.maxTextures&&Kt("WebGLTextures: Trying to use "+(V+1)+" texture units while this GPU supports only "+r.maxTextures),P+=1,V}function L(V){let F=[];return F.push(V.wrapS),F.push(V.wrapT),F.push(V.wrapR||0),F.push(V.magFilter),F.push(V.minFilter),F.push(V.anisotropy),F.push(V.internalFormat),F.push(V.format),F.push(V.type),F.push(V.generateMipmaps),F.push(V.premultiplyAlpha),F.push(V.flipY),F.push(V.unpackAlignment),F.push(V.colorSpace),F.join()}function D(V,F){let Q=n.get(V);if(V.isVideoTexture&&$(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&Q.__version!==V.version){let ot=V.image;if(ot===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(Q,V,F);return}}else V.isExternalTexture&&(Q.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+F)}function O(V,F){let Q=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&Q.__version!==V.version){rt(Q,V,F);return}else V.isExternalTexture&&(Q.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+F)}function k(V,F){let Q=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&Q.__version!==V.version){rt(Q,V,F);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+F)}function z(V,F){let Q=n.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&Q.__version!==V.version){at(Q,V,F);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+F)}let W={[wr]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[ol]:i.MIRRORED_REPEAT},G={[rn]:i.NEAREST,[Pp]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[Nl]:i.LINEAR_MIPMAP_NEAREST,[nr]:i.LINEAR_MIPMAP_LINEAR},Y={[Fp]:i.NEVER,[Bp]:i.ALWAYS,[Dp]:i.LESS,[xc]:i.LEQUAL,[Np]:i.EQUAL,[yc]:i.GEQUAL,[Op]:i.GREATER,[Up]:i.NOTEQUAL};function Z(V,F){if(F.type===Jn&&t.has("OES_texture_float_linear")===!1&&(F.magFilter===$e||F.magFilter===Nl||F.magFilter===Cs||F.magFilter===nr||F.minFilter===$e||F.minFilter===Nl||F.minFilter===Cs||F.minFilter===nr)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(V,i.TEXTURE_WRAP_S,W[F.wrapS]),i.texParameteri(V,i.TEXTURE_WRAP_T,W[F.wrapT]),(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)&&i.texParameteri(V,i.TEXTURE_WRAP_R,W[F.wrapR]),i.texParameteri(V,i.TEXTURE_MAG_FILTER,G[F.magFilter]),i.texParameteri(V,i.TEXTURE_MIN_FILTER,G[F.minFilter]),F.compareFunction&&(i.texParameteri(V,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(V,i.TEXTURE_COMPARE_FUNC,Y[F.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===rn||F.minFilter!==Cs&&F.minFilter!==nr||F.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||n.get(F).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(V,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,r.getMaxAnisotropy())),n.get(F).__currentAnisotropy=F.anisotropy}}}function it(V,F){let Q=!1;V.__webglInit===void 0&&(V.__webglInit=!0,F.addEventListener("dispose",A));let ot=F.source,ut=d.get(ot);ut===void 0&&(ut={},d.set(ot,ut));let vt=L(F);if(vt!==V.__cacheKey){ut[vt]===void 0&&(ut[vt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Q=!0),ut[vt].usedTimes++;let Mt=ut[V.__cacheKey];Mt!==void 0&&(ut[V.__cacheKey].usedTimes--,Mt.usedTimes===0&&R(F)),V.__cacheKey=vt,V.__webglTexture=ut[vt].texture}return Q}function H(V,F,Q){return Math.floor(Math.floor(V/Q)/F)}function X(V,F,Q,ot){let vt=V.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,Q,ot,F.data);else{vt.sort((Xt,At)=>Xt.start-At.start);let Mt=0;for(let Xt=1;Xt<vt.length;Xt++){let At=vt[Mt],St=vt[Xt],Yt=At.start+At.count,Zt=H(St.start,F.width,4),ce=H(At.start,F.width,4);St.start<=Yt+1&&Zt===ce&&H(St.start+St.count-1,F.width,4)===Zt?At.count=Math.max(At.count,St.start+St.count-At.start):(++Mt,vt[Mt]=St)}vt.length=Mt+1;let ht=e.getParameter(i.UNPACK_ROW_LENGTH),mt=e.getParameter(i.UNPACK_SKIP_PIXELS),wt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,F.width);for(let Xt=0,At=vt.length;Xt<At;Xt++){let St=vt[Xt],Yt=Math.floor(St.start/4),Zt=Math.ceil(St.count/4),ce=Yt%F.width,J=Math.floor(Yt/F.width),Tt=Zt,pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),e.pixelStorei(i.UNPACK_SKIP_ROWS,J),e.texSubImage2D(i.TEXTURE_2D,0,ce,J,Tt,pt,Q,ot,F.data)}V.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ht),e.pixelStorei(i.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt)}}function rt(V,F,Q){let ot=i.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),F.isData3DTexture&&(ot=i.TEXTURE_3D);let ut=it(V,F),vt=F.source;e.bindTexture(ot,V.__webglTexture,i.TEXTURE0+Q);let Mt=n.get(vt);if(vt.version!==Mt.__version||ut===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&F.image instanceof ImageBitmap)===!1){let pt=me.getPrimaries(me.workingColorSpace),Et=F.colorSpace===Pi?null:me.getPrimaries(F.colorSpace),Dt=F.colorSpace===Pi||pt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment);let mt=m(F.image,!1,r.maxTextureSize);mt=Me(F,mt);let wt=o.convert(F.format,F.colorSpace),Xt=o.convert(F.type),At=y(F.internalFormat,wt,Xt,F.normalized,F.colorSpace,F.isVideoTexture);Z(ot,F);let St,Yt=F.mipmaps,Zt=F.isVideoTexture!==!0,ce=Mt.__version===void 0||ut===!0,J=vt.dataReady,Tt=w(F,mt);if(F.isDepthTexture)At=M(F.format===ir,F.type),ce&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,At,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,At,mt.width,mt.height,0,wt,Xt,null));else if(F.isDataTexture)if(Yt.length>0){Zt&&ce&&e.texStorage2D(i.TEXTURE_2D,Tt,At,Yt[0].width,Yt[0].height);for(let pt=0,Et=Yt.length;pt<Et;pt++)St=Yt[pt],Zt?J&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,St.width,St.height,wt,Xt,St.data):e.texImage2D(i.TEXTURE_2D,pt,At,St.width,St.height,0,wt,Xt,St.data);F.generateMipmaps=!1}else Zt?(ce&&e.texStorage2D(i.TEXTURE_2D,Tt,At,mt.width,mt.height),J&&X(F,mt,wt,Xt)):e.texImage2D(i.TEXTURE_2D,0,At,mt.width,mt.height,0,wt,Xt,mt.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){Zt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,At,Yt[0].width,Yt[0].height,mt.depth);for(let pt=0,Et=Yt.length;pt<Et;pt++)if(St=Yt[pt],F.format!==Bn)if(wt!==null)if(Zt){if(J)if(F.layerUpdates.size>0){let Dt=wh(St.width,St.height,F.format,F.type);for(let xt of F.layerUpdates){let qt=St.data.subarray(xt*Dt/St.data.BYTES_PER_ELEMENT,(xt+1)*Dt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,xt,St.width,St.height,1,wt,qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,St.width,St.height,mt.depth,wt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,At,St.width,St.height,mt.depth,0,St.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?J&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,St.width,St.height,mt.depth,wt,Xt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,At,St.width,St.height,mt.depth,0,wt,Xt,St.data);F.layerUpdates.size>0&&F.clearLayerUpdates()}else{Zt&&ce&&e.texStorage2D(i.TEXTURE_2D,Tt,At,Yt[0].width,Yt[0].height);for(let pt=0,Et=Yt.length;pt<Et;pt++)St=Yt[pt],F.format!==Bn?wt!==null?Zt?J&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,St.width,St.height,wt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,At,St.width,St.height,0,St.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?J&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,St.width,St.height,wt,Xt,St.data):e.texImage2D(i.TEXTURE_2D,pt,At,St.width,St.height,0,wt,Xt,St.data)}else if(F.isDataArrayTexture)if(Zt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,At,mt.width,mt.height,mt.depth),J)if(F.layerUpdates.size>0){let pt=wh(mt.width,mt.height,F.format,F.type);for(let Et of F.layerUpdates){let Dt=mt.data.subarray(Et*pt/mt.data.BYTES_PER_ELEMENT,(Et+1)*pt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,mt.width,mt.height,1,wt,Xt,Dt)}F.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,wt,Xt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,mt.width,mt.height,mt.depth,0,wt,Xt,mt.data);else if(F.isData3DTexture)Zt?(ce&&e.texStorage3D(i.TEXTURE_3D,Tt,At,mt.width,mt.height,mt.depth),J&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,wt,Xt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,At,mt.width,mt.height,mt.depth,0,wt,Xt,mt.data);else if(F.isFramebufferTexture){if(ce)if(Zt)e.texStorage2D(i.TEXTURE_2D,Tt,At,mt.width,mt.height);else{let pt=mt.width,Et=mt.height;for(let Dt=0;Dt<Tt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,At,pt,Et,0,wt,Xt,null),pt>>=1,Et>>=1}}else if(F.isHTMLTexture){if("texElementImage2D"in i){let pt=i.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),mt.parentNode!==pt){pt.appendChild(mt),u.add(F),pt.onpaint=Et=>{let Dt=Et.changedElements;for(let xt of u)Dt.includes(xt.image)&&(xt.needsUpdate=!0)},pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,mt);else{let Dt=i.RGBA,xt=i.RGBA,qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Dt,xt,qt,mt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(Zt&&ce){let pt=le(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,At,pt.width,pt.height)}for(let pt=0,Et=Yt.length;pt<Et;pt++)St=Yt[pt],Zt?J&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,wt,Xt,St):e.texImage2D(i.TEXTURE_2D,pt,At,wt,Xt,St);F.generateMipmaps=!1}else if(Zt){if(ce){let pt=le(mt);e.texStorage2D(i.TEXTURE_2D,Tt,At,pt.width,pt.height)}J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Xt,mt)}else e.texImage2D(i.TEXTURE_2D,0,At,wt,Xt,mt);g(F)&&x(ot),Mt.__version=vt.version,F.onUpdate&&F.onUpdate(F)}V.__version=F.version}function at(V,F,Q){if(F.image.length!==6)return;let ot=it(V,F),ut=F.source;e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+Q);let vt=n.get(ut);if(ut.version!==vt.__version||ot===!0){e.activeTexture(i.TEXTURE0+Q);let Mt=me.getPrimaries(me.workingColorSpace),ht=F.colorSpace===Pi?null:me.getPrimaries(F.colorSpace),mt=F.colorSpace===Pi||Mt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let wt=F.isCompressedTexture||F.image[0].isCompressedTexture,Xt=F.image[0]&&F.image[0].isDataTexture,At=[];for(let xt=0;xt<6;xt++)!wt&&!Xt?At[xt]=m(F.image[xt],!0,r.maxCubemapSize):At[xt]=Xt?F.image[xt].image:F.image[xt],At[xt]=Me(F,At[xt]);let St=At[0],Yt=o.convert(F.format,F.colorSpace),Zt=o.convert(F.type),ce=y(F.internalFormat,Yt,Zt,F.normalized,F.colorSpace),J=F.isVideoTexture!==!0,Tt=vt.__version===void 0||ot===!0,pt=ut.dataReady,Et=w(F,St);Z(i.TEXTURE_CUBE_MAP,F);let Dt;if(wt){J&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ce,St.width,St.height);for(let xt=0;xt<6;xt++){Dt=At[xt].mipmaps;for(let qt=0;qt<Dt.length;qt++){let Vt=Dt[qt];F.format!==Bn?Yt!==null?J?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,0,0,Vt.width,Vt.height,Yt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,ce,Vt.width,Vt.height,0,Vt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,0,0,Vt.width,Vt.height,Yt,Zt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,ce,Vt.width,Vt.height,0,Yt,Zt,Vt.data)}}}else{if(Dt=F.mipmaps,J&&Tt){Dt.length>0&&Et++;let xt=le(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ce,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Xt){J?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,At[xt].width,At[xt].height,Yt,Zt,At[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,At[xt].width,At[xt].height,0,Yt,Zt,At[xt].data);for(let qt=0;qt<Dt.length;qt++){let Fe=Dt[qt].image[xt].image;J?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,0,0,Fe.width,Fe.height,Yt,Zt,Fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,ce,Fe.width,Fe.height,0,Yt,Zt,Fe.data)}}else{J?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Yt,Zt,At[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,Yt,Zt,At[xt]);for(let qt=0;qt<Dt.length;qt++){let Vt=Dt[qt];J?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,0,0,Yt,Zt,Vt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,ce,Yt,Zt,Vt.image[xt])}}}g(F)&&x(i.TEXTURE_CUBE_MAP),vt.__version=ut.version,F.onUpdate&&F.onUpdate(F)}V.__version=F.version}function st(V,F,Q,ot,ut,vt){let Mt=o.convert(Q.format,Q.colorSpace),ht=o.convert(Q.type),mt=y(Q.internalFormat,Mt,ht,Q.normalized,Q.colorSpace),wt=n.get(F),Xt=n.get(Q);if(Xt.__renderTarget=F,!wt.__hasExternalTextures){let At=Math.max(1,F.width>>vt),St=Math.max(1,F.height>>vt);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,vt,mt,At,St,F.depth,0,Mt,ht,null):e.texImage2D(ut,vt,mt,At,St,0,Mt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,V),he(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,ut,Xt.__webglTexture,0,be(F)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,ut,Xt.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(V,F,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,V),F.depthBuffer){let ot=F.depthTexture,ut=ot&&ot.isDepthTexture?ot.type:null,vt=M(F.stencilBuffer,ut),Mt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be(F),vt,F.width,F.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,be(F),vt,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,vt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,V)}else{let ot=F.textures;for(let ut=0;ut<ot.length;ut++){let vt=ot[ut],Mt=o.convert(vt.format,vt.colorSpace),ht=o.convert(vt.type),mt=y(vt.internalFormat,Mt,ht,vt.normalized,vt.colorSpace);he(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be(F),mt,F.width,F.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,be(F),mt,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,mt,F.width,F.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(V,F,Q){let ot=F.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,V),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ut=n.get(F.depthTexture);if(ut.__renderTarget=F,(!ut.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),ot){if(ut.__webglInit===void 0&&(ut.__webglInit=!0,F.depthTexture.addEventListener("dispose",A)),ut.__webglTexture===void 0){ut.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Z(i.TEXTURE_CUBE_MAP,F.depthTexture);let wt=o.convert(F.depthTexture.format),Xt=o.convert(F.depthTexture.type),At;F.depthTexture.format===si?At=i.DEPTH_COMPONENT24:F.depthTexture.format===ir&&(At=i.DEPTH24_STENCIL8);for(let St=0;St<6;St++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,At,F.width,F.height,0,wt,Xt,null)}}else D(F.depthTexture,0);let vt=ut.__webglTexture,Mt=be(F),ht=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,mt=F.depthTexture.format===ir?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(F.depthTexture.format===si)he(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ht,vt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,mt,ht,vt,0);else if(F.depthTexture.format===ir)he(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ht,vt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,mt,ht,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(V){let F=n.get(V),Q=V.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==V.depthTexture){let ot=V.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),ot){let ut=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,ot.removeEventListener("dispose",ut)};ot.addEventListener("dispose",ut),F.__depthDisposeCallback=ut}F.__boundDepthTexture=ot}if(V.depthTexture&&!F.__autoAllocateDepthBuffer)if(Q)for(let ot=0;ot<6;ot++)ft(F.__webglFramebuffer[ot],V,ot);else{let ot=V.texture.mipmaps;ot&&ot.length>0?ft(F.__webglFramebuffer[0],V,0):ft(F.__webglFramebuffer,V,0)}else if(Q){F.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[ot]),F.__webglDepthbuffer[ot]===void 0)F.__webglDepthbuffer[ot]=i.createRenderbuffer(),tt(F.__webglDepthbuffer[ot],V,!1);else{let ut=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=F.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,vt)}}else{let ot=V.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=i.createRenderbuffer(),tt(F.__webglDepthbuffer,V,!1);else{let ut=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=F.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,vt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(V,F,Q){let ot=n.get(V);F!==void 0&&st(ot.__webglFramebuffer,V,V.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&dt(V)}function _t(V){let F=V.texture,Q=n.get(V),ot=n.get(F);V.addEventListener("dispose",_);let ut=V.textures,vt=V.isWebGLCubeRenderTarget===!0,Mt=ut.length>1;if(Mt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=F.version,s.memory.textures++),vt){Q.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(F.mipmaps&&F.mipmaps.length>0){Q.__webglFramebuffer[ht]=[];for(let mt=0;mt<F.mipmaps.length;mt++)Q.__webglFramebuffer[ht][mt]=i.createFramebuffer()}else Q.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ht=0;ht<F.mipmaps.length;ht++)Q.__webglFramebuffer[ht]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ht=0,mt=ut.length;ht<mt;ht++){let wt=n.get(ut[ht]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),s.memory.textures++)}if(V.samples>0&&he(V)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ht=0;ht<ut.length;ht++){let mt=ut[ht];Q.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ht]);let wt=o.convert(mt.format,mt.colorSpace),Xt=o.convert(mt.type),At=y(mt.internalFormat,wt,Xt,mt.normalized,mt.colorSpace,V.isXRRenderTarget===!0),St=be(V);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,At,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),V.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(Q.__webglDepthRenderbuffer,V,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Z(i.TEXTURE_CUBE_MAP,F);for(let ht=0;ht<6;ht++)if(F.mipmaps&&F.mipmaps.length>0)for(let mt=0;mt<F.mipmaps.length;mt++)st(Q.__webglFramebuffer[ht][mt],V,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else st(Q.__webglFramebuffer[ht],V,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(F)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,mt=ut.length;ht<mt;ht++){let wt=ut[ht],Xt=n.get(wt),At=i.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(At=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,Xt.__webglTexture),Z(At,wt),st(Q.__webglFramebuffer,V,wt,i.COLOR_ATTACHMENT0+ht,At,0),g(wt)&&x(At)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(ht=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,ot.__webglTexture),Z(ht,F),F.mipmaps&&F.mipmaps.length>0)for(let mt=0;mt<F.mipmaps.length;mt++)st(Q.__webglFramebuffer[mt],V,F,i.COLOR_ATTACHMENT0,ht,mt);else st(Q.__webglFramebuffer,V,F,i.COLOR_ATTACHMENT0,ht,0);g(F)&&x(ht),e.unbindTexture()}V.depthBuffer&&dt(V)}function yt(V){let F=V.textures;for(let Q=0,ot=F.length;Q<ot;Q++){let ut=F[Q];if(g(ut)){let vt=v(V),Mt=n.get(ut).__webglTexture;e.bindTexture(vt,Mt),x(vt),e.unbindTexture()}}}let Pt=[],Ft=[];function Qt(V){if(V.samples>0){if(he(V)===!1){let F=V.textures,Q=V.width,ot=V.height,ut=i.COLOR_BUFFER_BIT,vt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(V),ht=F.length>1;if(ht)for(let wt=0;wt<F.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let mt=V.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let wt=0;wt<F.length;wt++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[wt]);let Xt=n.get(F[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,Q,ot,0,0,Q,ot,ut,i.NEAREST),l===!0&&(Pt.length=0,Ft.length=0,Pt.push(i.COLOR_ATTACHMENT0+wt),V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&(Pt.push(vt),Ft.push(vt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let wt=0;wt<F.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[wt]);let Xt=n.get(F[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&l){let F=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[F])}}}function be(V){return Math.min(r.maxSamples,V.samples)}function he(V){let F=n.get(V);return V.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function $(V){let F=s.render.frame;h.get(V)!==F&&(h.set(V,F),V.update())}function Me(V,F){let Q=V.colorSpace,ot=V.format,ut=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||Q!==ss&&Q!==Pi&&(me.getTransfer(Q)===Ee?(ot!==Bn||ut!==In)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",Q)),F}function le(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(c.width=V.naturalWidth||V.width,c.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(c.width=V.displayWidth,c.height=V.displayHeight):(c.width=V.width,c.height=V.height),c}this.allocateTextureUnit=E,this.resetTextureUnits=N,this.getTextureUnits=C,this.setTextureUnits=S,this.setTexture2D=D,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=ct,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function xM(i,t){function e(n,r=Pi){let o,s=me.getTransfer(r);if(n===In)return i.UNSIGNED_BYTE;if(n===Ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ch)return i.BYTE;if(n===uh)return i.SHORT;if(n===To)return i.UNSIGNED_SHORT;if(n===Ol)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===dh)return i.ALPHA;if(n===ph)return i.RGB;if(n===Bn)return i.RGBA;if(n===si)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===mh)return i.RED;if(n===kl)return i.RED_INTEGER;if(n===rr)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===Vl)return i.RGBA_INTEGER;if(n===Is||n===Ls||n===Fs||n===Ds)if(s===Ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Is)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Is)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gl||n===Wl||n===Hl||n===Xl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Gl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===ql||n===$l||n===Zl||n===Kl||n===Ns||n===Jl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Yl||n===ql)return s===Ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===$l)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zl)return o.COMPRESSED_R11_EAC;if(n===Kl)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Ns)return o.COMPRESSED_RG11_EAC;if(n===Jl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===rc||n===oc||n===sc||n===ac||n===lc||n===cc||n===uc||n===hc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===jl)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ql)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sc)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fc||n===dc||n===pc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===fc)return s===Ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mc||n===gc||n===Os||n===bc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===mc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Os)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Eo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var yM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new bs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gn({vertexShader:yM,fragmentShader:vM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new It(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends ai{constructor(t,e){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,b=typeof XRWebGLBinding<"u",m=new Gh,g={},x=e.getContextAttributes(),v=null,y=null,M=[],w=[],A=new ee,_=null,T=null,R=new nn;R.viewport=new We;let I=new nn;I.viewport=new We;let P=[R,I],N=new Il,C=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=M[H];return X===void 0&&(X=new yo,M[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=M[H];return X===void 0&&(X=new yo,M[H]=X),X.getGripSpace()},this.getHand=function(H){let X=M[H];return X===void 0&&(X=new yo,M[H]=X),X.getHandSpace()};function E(H){let X=w.indexOf(H.inputSource);if(X===-1)return;let rt=M[X];rt!==void 0&&(rt.update(H.inputSource,H.frame,c||s),rt.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",D);for(let H=0;H<M.length;H++){let X=w[H];X!==null&&(w[H]=null,M[H].disconnect(X))}C=null,S=null,m.reset();for(let H in g)delete g[H];if(t.setRenderTarget(v),d=null,f=null,u=null,r=null,y=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),T!==null){let H=T.camera;H.fov=T.fov,H.zoom=T.zoom,H.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",L),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,at=null,st=null;x.depth&&(st=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=x.stencil?ir:si,at=x.stencil?Eo:Kn);let tt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(tt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ze(f.textureWidth,f.textureHeight,{format:Bn,type:In,depthTexture:new hi(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let rt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ze(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function D(H){for(let X=0;X<H.removed.length;X++){let rt=H.removed[X],at=w.indexOf(rt);at>=0&&(w[at]=null,M[at].disconnect(rt))}for(let X=0;X<H.added.length;X++){let rt=H.added[X],at=w.indexOf(rt);if(at===-1){for(let tt=0;tt<M.length;tt++)if(tt>=w.length){w.push(rt),at=tt;break}else if(w[tt]===null){w[tt]=rt,at=tt;break}if(at===-1)break}let st=M[at];st&&st.connect(rt)}}let O=new q,k=new q;function z(H,X,rt){O.setFromMatrixPosition(X.matrixWorld),k.setFromMatrixPosition(rt.matrixWorld);let at=O.distanceTo(k),st=X.projectionMatrix.elements,tt=rt.projectionMatrix.elements,ft=st[14]/(st[10]-1),dt=st[14]/(st[10]+1),ct=(st[9]+1)/st[5],_t=(st[9]-1)/st[5],yt=(st[8]-1)/st[0],Pt=(tt[8]+1)/tt[0],Ft=ft*yt,Qt=ft*Pt,be=at/(-yt+Pt),he=be*-yt;if(X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(he),H.translateZ(be),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),st[10]===-1)H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let $=ft+be,Me=dt+be,le=Ft-he,V=Qt+(at-he),F=ct*dt/Me*$,Q=_t*dt/Me*$;H.projectionMatrix.makePerspective(le,V,F,Q,$,Me),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function W(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let X=H.near,rt=H.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),N.near=I.near=R.near=X,N.far=I.far=R.far=rt,(C!==N.near||S!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),C=N.near,S=N.far),N.layers.mask=H.layers.mask|6,R.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;let at=H.parent,st=N.cameras;W(N,at);for(let tt=0;tt<st.length;tt++)W(st[tt],at);st.length===2?z(N,R,I):N.projectionMatrix.copy(R.projectionMatrix),T===null&&H.isPerspectiveCamera&&(T={camera:H,fov:H.fov,zoom:H.zoom}),G(H,N,at)};function G(H,X,rt){rt===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(rt.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=al*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(H){return g[H]};let Y=null;function Z(H,X){if(h=X.getViewerPose(c||s),p=X,h!==null){let rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let at=!1;rt.length!==N.cameras.length&&(N.cameras.length=0,at=!0);for(let dt=0;dt<rt.length;dt++){let ct=rt[dt],_t=null;if(d!==null)_t=d.getViewport(ct);else{let Pt=u.getViewSubImage(f,ct);_t=Pt.viewport,dt===0&&(t.setRenderTargetTextures(y,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(y))}let yt=P[dt];yt===void 0&&(yt=new nn,yt.layers.enable(dt),yt.viewport=new We,P[dt]=yt),yt.matrix.fromArray(ct.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(ct.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(_t.x,_t.y,_t.width,_t.height),dt===0&&(N.matrix.copy(yt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),at===!0&&N.cameras.push(yt)}let st=r.enabledFeatures;if(st&&st.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let dt=u.getDepthInformation(rt[0]);dt&&dt.isValid&&dt.texture&&m.init(dt,r.renderState)}if(st&&st.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let dt=0;dt<rt.length;dt++){let ct=rt[dt].camera;if(ct){let _t=g[ct];_t||(_t=new bs,g[ct]=_t);let yt=u.getCameraImage(ct);_t.sourceTexture=yt}}}}for(let rt=0;rt<M.length;rt++){let at=w[rt],st=M[rt];at!==null&&st!==void 0&&st.update(at,X,c||s)}Y&&Y(H,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),p=null}let it=new y0;it.setAnimationLoop(Z),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}},_M=new Pe,T0=new re;T0.set(-1,0,0,0,1,0,0,0,1);function MM(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,vh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,x,v,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?o(m,g):g.isMeshLambertMaterial?(o(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(o(m,g),u(m,g)):g.isMeshPhongMaterial?(o(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(o(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(o(m,g),p(m,g)):g.isMeshDepthMaterial?o(m,g):g.isMeshDistanceMaterial?(o(m,g),b(m,g)):g.isMeshNormalMaterial?o(m,g):g.isLineBasicMaterial?(s(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ln&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ln&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=t.get(g),v=x.envMap,y=x.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(_M.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(T0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function s(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=v*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ln&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function b(m,g){let x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function wM(i,t,e,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let w=M.program;n.uniformBlockBinding(y,w)}function c(y,M){let w=r[y.id];w===void 0&&(m(y),w=h(y),r[y.id]=w,y.addEventListener("dispose",x));let A=M.program;n.updateUBOMapping(y,A);let _=t.render.frame;o[y.id]!==_&&(f(y),o[y.id]=_)}function h(y){let M=u();y.__bindingPointIndex=M;let w=i.createBuffer(),A=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let y=0;y<a;y++)if(s.indexOf(y)===-1)return s.push(y),y;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let M=r[y.id],w=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,T=w.length;_<T;_++){let R=w[_];if(Array.isArray(R))for(let I=0,P=R.length;I<P;I++)d(R[I],_,I,A);else d(R,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,w,A){if(b(y,M,w,A)===!0){let _=y.__offset,T=y.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){let P=T[I],N=g(P);p(P,y.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function p(y,M,w){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,w)}function b(y,M,w,A){let _=y.value,T=M+"_"+w;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let R=A[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(y){let M=y.uniforms,w=0,A=16;for(let T=0,R=M.length;T<R;T++){let I=Array.isArray(M[T])?M[T]:[M[T]];for(let P=0,N=I.length;P<N;P++){let C=I[P],S=Array.isArray(C.value)?C.value:[C.value];for(let E=0,L=S.length;E<L;E++){let D=S[E],O=g(D),k=w%A,z=k%O.boundary,W=k+z;w+=z,W!==0&&A-W<O.storage&&(w+=A-W),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=O.storage}}}let _=w%A;return _>0&&(w+=A-_),y.__size=w,y.__cache={},this}function g(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",y),M}function x(y){let M=y.target;M.removeEventListener("dispose",x);let w=s.indexOf(M.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function v(){for(let y in r)i.deleteBuffer(r[y]);s=[],r={},o={}}return{bind:l,update:c,dispose:v}}var SM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function TM(){return di===null&&(di=new fl(SM,16,16,rr,jn),di.name="DFG_LUT",di.minFilter=$e,di.magFilter=$e,di.wrapS=An,di.wrapT=An,di.generateMipmaps=!1,di.needsUpdate=!0),di}var Lr=class{constructor(t={}){let{canvas:e=kp(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=In}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let b=d,m=new Set([Vl,zl,kl]),g=new Set([In,Kn,To,Eo,Ul,Bl]),x=new Uint32Array(4),v=new Int32Array(4),y=new q,M=null,w=null,A=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,P=null,N=null,C=null,S=null;this._outputColorSpace=Ve;let E=0,L=0,D=null,O=-1,k=null,z=new We,W=new We,G=null,Y=new j(0),Z=0,it=e.width,H=e.height,X=1,rt=null,at=null,st=new We(0,0,it,H),tt=new We(0,0,it,H),ft=!1,dt=new ms,ct=!1,_t=!1,yt=new Pe,Pt=new q,Ft=new We,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function he(){return D===null?X:1}let $=n;function Me(B,K){return e.getContext(B,K)}let le,V,F,Q,ot,ut,vt,Mt,ht,mt,wt,Xt,At,St,Yt,Zt,ce,J,Tt,pt,Et,Dt,xt;try{let B={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",zn,!1),$===null){let K="webgl2";if($=Me(K,B),$===null)throw Me(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(B){throw e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),Jt("WebGLRenderer: "+B.message),B}function qt(){le=new Lv($),le.init(),Et=new xM($,le),V=new Mv($,le,t,Et),F=new gM($,le),V.reversedDepthBuffer&&f&&F.buffers.depth.setReversed(!0),N=$.createFramebuffer(),C=$.createFramebuffer(),S=$.createFramebuffer(),Q=new Nv($),ot=new nM,ut=new bM($,le,F,ot,V,Et,Q),vt=new Iv(R),Mt=new Ux($),Dt=new vv($,Mt),ht=new Fv($,Mt,Q,Dt),mt=new Uv($,ht,Mt,Dt,Q),J=new Ov($,V,ut),Yt=new wv(ot),wt=new eM(R,vt,le,V,Dt,Yt),Xt=new MM(R,ot),At=new rM,St=new uM(le),ce=new yv(R,vt,F,mt,p,l),Zt=new mM(R,mt,V),xt=new wM($,Q,V,F),Tt=new _v($,le,Q),pt=new Dv($,le,Q),Q.programs=wt.programs,R.capabilities=V,R.extensions=le,R.properties=ot,R.renderLists=At,R.shadowMap=Zt,R.state=F,R.info=Q}b!==In&&(T=new kv(b,e.width,e.height,a,r,o));let Vt=new Wh(R,$);this.xr=Vt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let B=le.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=le.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(B){B!==void 0&&(X=B,this.setSize(it,H,!1))},this.getSize=function(B){return B.set(it,H)},this.setSize=function(B,K,lt=!0){if(Vt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}it=B,H=K,e.width=Math.floor(B*X),e.height=Math.floor(K*X),lt===!0&&(e.style.width=B+"px",e.style.height=K+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,B,K)},this.getDrawingBufferSize=function(B){return B.set(it*X,H*X).floor()},this.setDrawingBufferSize=function(B,K,lt){it=B,H=K,X=lt,e.width=Math.floor(B*lt),e.height=Math.floor(K*lt),this.setViewport(0,0,B,K)},this.setEffects=function(B){if(b===In){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let K=0;K<B.length;K++)if(B[K].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(z)},this.getViewport=function(B){return B.copy(st)},this.setViewport=function(B,K,lt,et){B.isVector4?st.set(B.x,B.y,B.z,B.w):st.set(B,K,lt,et),F.viewport(z.copy(st).multiplyScalar(X).round())},this.getScissor=function(B){return B.copy(tt)},this.setScissor=function(B,K,lt,et){B.isVector4?tt.set(B.x,B.y,B.z,B.w):tt.set(B,K,lt,et),F.scissor(W.copy(tt).multiplyScalar(X).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(B){F.setScissorTest(ft=B)},this.setOpaqueSort=function(B){rt=B},this.setTransparentSort=function(B){at=B},this.getClearColor=function(B){return B.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(B=!0,K=!0,lt=!0){let et=0;if(B){let nt=!1;if(D!==null){let Lt=D.texture.format;nt=m.has(Lt)}if(nt){let Lt=D.texture.type,Ot=g.has(Lt),Ct=ce.getClearColor(),kt=ce.getClearAlpha(),Gt=Ct.r,fe=Ct.g,pe=Ct.b;Ot?(x[0]=Gt,x[1]=fe,x[2]=pe,x[3]=kt,$.clearBufferuiv($.COLOR,0,x)):(v[0]=Gt,v[1]=fe,v[2]=pe,v[3]=kt,$.clearBufferiv($.COLOR,0,v))}else et|=$.COLOR_BUFFER_BIT}K&&(et|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(et|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&$.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),P=B},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),ce.dispose(),At.dispose(),St.dispose(),ot.dispose(),vt.dispose(),mt.dispose(),Dt.dispose(),xt.dispose(),wt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Wf),Vt.removeEventListener("sessionend",Hf),pr.stop()};function Fe(B){B.preventDefault(),cs("WebGLRenderer: Context Lost."),I=!0}function we(){cs("WebGLRenderer: Context Restored."),I=!1;let B=Q.autoReset,K=Zt.enabled,lt=Zt.autoUpdate,et=Zt.needsUpdate,nt=Zt.type;qt(),Q.autoReset=B,Zt.enabled=K,Zt.autoUpdate=lt,Zt.needsUpdate=et,Zt.type=nt}function zn(B){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function ni(B){let K=B.target;K.removeEventListener("dispose",ni),lb(K)}function lb(B){cb(B),ot.remove(B)}function cb(B){let K=ot.get(B).programs;K!==void 0&&(K.forEach(function(lt){wt.releaseProgram(lt)}),B.isShaderMaterial&&wt.releaseShaderCache(B))}this.renderBufferDirect=function(B,K,lt,et,nt,Lt){K===null&&(K=Qt);let Ot=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Ct=fb(B,K,lt,et,nt);F.setMaterial(et,Ot);let kt=lt.index,Gt=1;if(et.wireframe===!0){if(kt=ht.getWireframeAttribute(lt),kt===void 0)return;Gt=2}let fe=lt.drawRange,pe=lt.attributes.position,zt=fe.start*Gt,Se=(fe.start+fe.count)*Gt;Lt!==null&&(zt=Math.max(zt,Lt.start*Gt),Se=Math.min(Se,(Lt.start+Lt.count)*Gt)),kt!==null?(zt=Math.max(zt,0),Se=Math.min(Se,kt.count)):pe!=null&&(zt=Math.max(zt,0),Se=Math.min(Se,pe.count));let Ye=Se-zt;if(Ye<0||Ye===1/0)return;Dt.setup(nt,et,Ct,lt,kt);let Oe,Ce=Tt;if(kt!==null&&(Oe=Mt.get(kt),Ce=pt,Ce.setIndex(Oe)),nt.isMesh)et.wireframe===!0?(F.setLineWidth(et.wireframeLinewidth*he()),Ce.setMode($.LINES)):Ce.setMode($.TRIANGLES);else if(nt.isLine){let fn=et.linewidth;fn===void 0&&(fn=1),F.setLineWidth(fn*he()),nt.isLineSegments?Ce.setMode($.LINES):nt.isLineLoop?Ce.setMode($.LINE_LOOP):Ce.setMode($.LINE_STRIP)}else nt.isPoints?Ce.setMode($.POINTS):nt.isSprite&&Ce.setMode($.TRIANGLES);if(nt.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Ce.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let fn=nt._multiDrawStarts,Nt=nt._multiDrawCounts,yn=nt._multiDrawCount,ve=kt?Mt.get(kt).bytesPerElement:1,Dn=ot.get(et).currentProgram.getUniforms();for(let ii=0;ii<yn;ii++)Dn.setValue($,"_gl_DrawID",ii),Ce.render(fn[ii]/ve,Nt[ii])}else if(nt.isInstancedMesh)Ce.renderInstances(zt,Ye,nt.count);else if(lt.isInstancedBufferGeometry){let fn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Nt=Math.min(lt.instanceCount,fn);Ce.renderInstances(zt,Ye,Nt)}else Ce.render(zt,Ye)};function Gf(B,K,lt,et){P!==null&&B.isNodeMaterial&&P.setObject(et,B),ct===!0&&Yt.setState(B,lt,!1),B.transparent===!0&&B.side===se&&B.forceSinglePass===!1?(B.side=ln,B.needsUpdate=!0,ha(B,K,et),B.side=fi,B.needsUpdate=!0,ha(B,K,et),B.side=se):ha(B,K,et)}this.compile=function(B,K,lt=null){lt===null&&(lt=B),P!==null&&P.renderStart(B,K,lt),w=St.get(lt),w.init(K),_.push(w),lt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),B!==lt&&B.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),w.setupLights(),P!==null&&P.updateLights(w.state.lightsArray),_t=this.localClippingEnabled,ct=Yt.init(this.clippingPlanes,_t),ct===!0&&Yt.setGlobalState(this.clippingPlanes,K),P!==null&&Zt.render(w.state.shadowsArray,lt,K);let et=new Set;return B.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Lt=nt.material;if(Lt)if(Array.isArray(Lt))for(let Ot=0;Ot<Lt.length;Ot++){let Ct=Lt[Ot];Gf(Ct,lt,K,nt),et.add(Ct)}else Gf(Lt,lt,K,nt),et.add(Lt)}),w=_.pop(),P!==null&&P.renderEnd(),et},this.compileAsync=function(B,K,lt=null){let et=this.compile(B,K,lt);return new Promise(nt=>{function Lt(){if(et.forEach(function(Ot){let kt=ot.get(Ot).currentProgram;(kt===void 0||kt.isReady())&&et.delete(Ot)}),et.size===0){nt(B);return}setTimeout(Lt,10)}le.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let ru=null;function ub(B){ru&&ru(B)}function Wf(){pr.stop()}function Hf(){pr.start()}let pr=new y0;pr.setAnimationLoop(ub),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(B){ru=B,Vt.setAnimationLoop(B),B===null?pr.stop():pr.start()},Vt.addEventListener("sessionstart",Wf),Vt.addEventListener("sessionend",Hf),this.render=function(B,K){if(K!==void 0&&K.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(B,K);let lt=Vt.enabled===!0&&Vt.isPresenting===!0,et=T!==null&&(D===null||lt)&&T.begin(R,D);if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(K),K=Vt.getCamera()),B.isScene===!0&&B.onBeforeRender(R,B,K,D),w=St.get(B,_.length),w.init(K),w.state.textureUnits=ut.getTextureUnits(),_.push(w),yt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),dt.setFromProjectionMatrix(yt,qn,K.reversedDepth),_t=this.localClippingEnabled,ct=Yt.init(this.clippingPlanes,_t),M=At.get(B,A.length),M.init(),A.push(M),Vt.enabled===!0&&Vt.isPresenting===!0){let Ot=R.xr.getDepthSensingMesh();Ot!==null&&ou(Ot,K,-1/0,R.sortObjects)}ou(B,K,0,R.sortObjects),M.finish(),P!==null&&P.updateLights(w.state.lightsArray),R.sortObjects===!0&&M.sort(rt,at),be=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,be&&ce.addToRenderList(M,B),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Yt.beginShadows();let nt=w.state.shadowsArray;if(Zt.render(nt,B,K),ct===!0&&Yt.endShadows(),(et&&T.hasRenderPass())===!1){let Ot=M.opaque,Ct=M.transmissive;if(w.setupLights(),K.isArrayCamera){let kt=K.cameras;if(Ct.length>0)for(let Gt=0,fe=kt.length;Gt<fe;Gt++){let pe=kt[Gt];Yf(Ot,Ct,B,pe)}be&&ce.render(B);for(let Gt=0,fe=kt.length;Gt<fe;Gt++){let pe=kt[Gt];Xf(M,B,pe,pe.viewport)}}else Ct.length>0&&Yf(Ot,Ct,B,K),be&&ce.render(B),Xf(M,B,K)}D!==null&&L===0&&(ut.updateMultisampleRenderTarget(D),ut.updateRenderTargetMipmap(D)),et&&T.end(R),B.isScene===!0&&B.onAfterRender(R,B,K),Dt.resetDefaultState(),O=-1,k=null,_.pop(),_.length>0?(w=_[_.length-1],ut.setTextureUnits(w.state.textureUnits),ct===!0&&Yt.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,P!==null&&P.renderEnd()};function ou(B,K,lt,et){if(B.visible===!1)return;if(B.layers.test(K.layers)){if(B.isGroup)lt=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(K);else if(B.isLightProbeGrid)w.pushLightProbeGrid(B);else if(B.isLight)w.pushLight(B),B.castShadow&&w.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(dt)){et&&Ft.setFromMatrixPosition(B.matrixWorld).applyMatrix4(yt);let Ot=mt.update(B),Ct=B.material;Ct.visible&&M.push(B,Ot,Ct,lt,Ft.z,null,K)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||B.intersectsFrustum(dt))){let Ot=mt.update(B),Ct=B.material;if(et&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),Ft.copy(B.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Ft.copy(Ot.boundingSphere.center)),Ft.applyMatrix4(B.matrixWorld).applyMatrix4(yt)),Array.isArray(Ct)){let kt=Ot.groups;for(let Gt=0,fe=kt.length;Gt<fe;Gt++){let pe=kt[Gt],zt=Ct[pe.materialIndex];zt&&zt.visible&&M.push(B,Ot,zt,lt,Ft.z,pe,K)}}else Ct.visible&&M.push(B,Ot,Ct,lt,Ft.z,null,K)}}let Lt=B.children;for(let Ot=0,Ct=Lt.length;Ot<Ct;Ot++)ou(Lt[Ot],K,lt,et)}function Xf(B,K,lt,et){let{opaque:nt,transmissive:Lt,transparent:Ot}=B;w.setupLightsView(lt),ct===!0&&Yt.setGlobalState(R.clippingPlanes,lt),et&&F.viewport(z.copy(et)),nt.length>0&&ua(nt,K,lt),Lt.length>0&&ua(Lt,K,lt),Ot.length>0&&ua(Ot,K,lt),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Yf(B,K,lt,et){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[et.id]===void 0){let zt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[et.id]=new Ze(1,1,{generateMipmaps:!0,type:zt?jn:In,minFilter:nr,samples:Math.max(4,V.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let Lt=w.state.transmissionRenderTarget[et.id],Ot=et.viewport||z;Lt.setSize(Ot.z*R.transmissionResolutionScale,Ot.w*R.transmissionResolutionScale);let Ct=R.getRenderTarget(),kt=R.getActiveCubeFace(),Gt=R.getActiveMipmapLevel();R.setRenderTarget(Lt),R.getClearColor(Y),Z=R.getClearAlpha(),Z<1&&R.setClearColor(16777215,.5),R.clear(),be&&ce.render(lt);let fe=R.toneMapping;R.toneMapping=Zn;let pe=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),w.setupLightsView(et),ct===!0&&Yt.setGlobalState(R.clippingPlanes,et),ua(B,lt,et),ut.updateMultisampleRenderTarget(Lt),ut.updateRenderTargetMipmap(Lt),le.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Se=0,Ye=K.length;Se<Ye;Se++){let Oe=K[Se],{object:Ce,geometry:fn,material:Nt,group:yn}=Oe;if(Nt.side===se&&Ce.layers.test(et.layers)){let ve=Nt.side;Nt.side=ln,Nt.needsUpdate=!0,qf(Ce,lt,et,fn,Nt,yn),Nt.side=ve,Nt.needsUpdate=!0,zt=!0}}zt===!0&&(ut.updateMultisampleRenderTarget(Lt),ut.updateRenderTargetMipmap(Lt))}R.setRenderTarget(Ct,kt,Gt),R.setClearColor(Y,Z),pe!==void 0&&(et.viewport=pe),R.toneMapping=fe}function ua(B,K,lt){let et=K.isScene===!0?K.overrideMaterial:null;for(let nt=0,Lt=B.length;nt<Lt;nt++){let Ot=B[nt],{object:Ct,geometry:kt,group:Gt}=Ot,fe=Ot.material;fe.allowOverride===!0&&et!==null&&(fe=et),Ct.layers.test(lt.layers)&&qf(Ct,K,lt,kt,fe,Gt)}}function qf(B,K,lt,et,nt,Lt){P!==null&&nt.isNodeMaterial&&P.setObject(B,nt),B.onBeforeRender(R,K,lt,et,nt,Lt),B.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),nt.onBeforeRender(R,K,lt,et,B,Lt),nt.transparent===!0&&nt.side===se&&nt.forceSinglePass===!1?(nt.side=ln,nt.needsUpdate=!0,R.renderBufferDirect(lt,K,et,nt,B,Lt),nt.side=fi,nt.needsUpdate=!0,R.renderBufferDirect(lt,K,et,nt,B,Lt),nt.side=se):R.renderBufferDirect(lt,K,et,nt,B,Lt),B.onAfterRender(R,K,lt,et,nt,Lt)}function ha(B,K,lt){K.isScene!==!0&&(K=Qt);let et=ot.get(B),nt=w.state.lights,Lt=w.state.shadowsArray,Ot=nt.state.version,Ct=wt.getParameters(B,nt.state,Lt,K,lt,w.state.lightProbeGridArray),kt=wt.getProgramCacheKey(Ct),Gt=et.programs;et.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?K.environment:null,et.fog=K.fog;let fe=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;et.envMap=vt.get(B.envMap||et.environment,fe),et.envMapRotation=et.environment!==null&&B.envMap===null?K.environmentRotation:B.envMapRotation,Gt===void 0&&(B.addEventListener("dispose",ni),Gt=new Map,et.programs=Gt);let pe=Gt.get(kt);if(pe!==void 0){if(et.currentProgram===pe&&et.lightsStateVersion===Ot)return Zf(B,Ct),pe}else Ct.uniforms=wt.getUniforms(B),P!==null&&B.isNodeMaterial&&P.build(B,lt,Ct),B.onBeforeCompile(Ct,R),pe=wt.acquireProgram(Ct,kt),Gt.set(kt,pe),et.uniforms=Ct.uniforms;let zt=et.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(zt.clippingPlanes=Yt.uniform),Zf(B,Ct),et.needsLights=pb(B),et.lightsStateVersion=Ot,et.needsLights&&(zt.ambientLightColor.value=nt.state.ambient,zt.lightProbe.value=nt.state.probe,zt.sunLights.value=nt.state.sun,zt.sunLightShadows.value=nt.state.sunShadow,zt.directionalLights.value=nt.state.directional,zt.directionalLightShadows.value=nt.state.directionalShadow,zt.spotLights.value=nt.state.spot,zt.spotLightShadows.value=nt.state.spotShadow,zt.rectAreaLights.value=nt.state.rectArea,zt.ltc_1.value=nt.state.rectAreaLTC1,zt.ltc_2.value=nt.state.rectAreaLTC2,zt.pointLights.value=nt.state.point,zt.pointLightShadows.value=nt.state.pointShadow,zt.hemisphereLights.value=nt.state.hemi,zt.sunShadowMatrix.value=nt.state.sunShadowMatrix,zt.sunShadowCascade.value=nt.state.sunShadowCascade,zt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,zt.spotLightMatrix.value=nt.state.spotLightMatrix,zt.spotLightMap.value=nt.state.spotLightMap,zt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=w.state.lightProbeGridArray.length>0,et.currentProgram=pe,et.uniformsList=null,pe}function $f(B){if(B.uniformsList===null){let K=B.currentProgram.getUniforms();B.uniformsList=Po.seqWithValue(K.seq,B.uniforms)}return B.uniformsList}function Zf(B,K){let lt=ot.get(B);lt.outputColorSpace=K.outputColorSpace,lt.batching=K.batching,lt.batchingColor=K.batchingColor,lt.instancing=K.instancing,lt.instancingColor=K.instancingColor,lt.instancingMorph=K.instancingMorph,lt.skinning=K.skinning,lt.morphTargets=K.morphTargets,lt.morphNormals=K.morphNormals,lt.morphColors=K.morphColors,lt.morphTargetsCount=K.morphTargetsCount,lt.numClippingPlanes=K.numClippingPlanes,lt.numIntersection=K.numClipIntersection,lt.vertexAlphas=K.vertexAlphas,lt.vertexTangents=K.vertexTangents,lt.toneMapping=K.toneMapping}function hb(B,K){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;y.setFromMatrixPosition(K.matrixWorld);for(let lt=0,et=B.length;lt<et;lt++){let nt=B[lt];if(nt.texture!==null&&nt.boundingBox.containsPoint(y))return nt}return null}function fb(B,K,lt,et,nt){K.isScene!==!0&&(K=Qt),ut.resetTextureUnits();let Lt=K.fog,Ot=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?K.environment:null,Ct=D===null?R.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:me.workingColorSpace,kt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Gt=vt.get(et.envMap||Ot,kt),fe=et.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pe=!!lt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),zt=!!lt.morphAttributes.position,Se=!!lt.morphAttributes.normal,Ye=!!lt.morphAttributes.color,Oe=Zn;et.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Oe=R.toneMapping);let Ce=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,fn=Ce!==void 0?Ce.length:0,Nt=ot.get(et),yn=w.state.lights;if(ct===!0&&(_t===!0||B!==k)){let De=B===k&&et.id===O;Yt.setState(et,B,De)}let ve=!1;et.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==yn.state.version||Nt.outputColorSpace!==Ct||nt.isBatchedMesh&&Nt.batching===!1||!nt.isBatchedMesh&&Nt.batching===!0||nt.isBatchedMesh&&Nt.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&Nt.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&Nt.instancing===!1||!nt.isInstancedMesh&&Nt.instancing===!0||nt.isSkinnedMesh&&Nt.skinning===!1||!nt.isSkinnedMesh&&Nt.skinning===!0||nt.isInstancedMesh&&Nt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Nt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Nt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Nt.instancingMorph===!1&&nt.morphTexture!==null||Nt.envMap!==Gt||et.fog===!0&&Nt.fog!==Lt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Yt.numPlanes||Nt.numIntersection!==Yt.numIntersection)||Nt.vertexAlphas!==fe||Nt.vertexTangents!==pe||Nt.morphTargets!==zt||Nt.morphNormals!==Se||Nt.morphColors!==Ye||Nt.toneMapping!==Oe||Nt.morphTargetsCount!==fn||!!Nt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,Nt.__version=et.version);let Dn=Nt.currentProgram;ve===!0&&(Dn=ha(et,K,nt),P&&et.isNodeMaterial&&P.onUpdateProgram(et,Dn,Nt));let ii=!1,Oi=!1,Hr=!1,Ae=Dn.getUniforms(),He=Nt.uniforms;if(F.useProgram(Dn.program)&&(ii=!0,Oi=!0,Hr=!0),et.id!==O&&(O=et.id,Oi=!0),Nt.needsLights){let De=hb(w.state.lightProbeGridArray,nt);Nt.lightProbeGrid!==De&&(Nt.lightProbeGrid=De,Oi=!0)}if(ii||k!==B){F.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),Ae.setValue($,"projectionMatrix",B.projectionMatrix),Ae.setValue($,"viewMatrix",B.matrixWorldInverse);let Bi=Ae.map.cameraPosition;Bi!==void 0&&Bi.setValue($,Pt.setFromMatrixPosition(B.matrixWorld)),V.logarithmicDepthBuffer&&Ae.setValue($,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ae.setValue($,"isOrthographic",B.isOrthographicCamera===!0),k!==B&&(k=B,Oi=!0,Hr=!0)}if(Nt.needsLights&&(yn.state.sunShadowMap.length>0&&Ae.setValue($,"sunShadowMap",yn.state.sunShadowMap,ut),yn.state.directionalShadowMap.length>0&&Ae.setValue($,"directionalShadowMap",yn.state.directionalShadowMap,ut),yn.state.spotShadowMap.length>0&&Ae.setValue($,"spotShadowMap",yn.state.spotShadowMap,ut),yn.state.pointShadowMap.length>0&&Ae.setValue($,"pointShadowMap",yn.state.pointShadowMap,ut)),nt.isSkinnedMesh){Ae.setOptional($,nt,"bindMatrix"),Ae.setOptional($,nt,"bindMatrixInverse");let De=nt.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ae.setValue($,"boneTexture",De.boneTexture,ut))}nt.isBatchedMesh&&(Ae.setOptional($,nt,"batchingTexture"),Ae.setValue($,"batchingTexture",nt._matricesTexture,ut),Ae.setOptional($,nt,"batchingIdTexture"),Ae.setValue($,"batchingIdTexture",nt._indirectTexture,ut),Ae.setOptional($,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Ae.setValue($,"batchingColorTexture",nt._colorsTexture,ut));let Ui=lt.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&J.update(nt,lt,Dn),(Oi||Nt.receiveShadow!==nt.receiveShadow)&&(Nt.receiveShadow=nt.receiveShadow,Ae.setValue($,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&K.environment!==null&&(He.envMapIntensity.value=K.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=TM()),Oi){if(Ae.setValue($,"toneMappingExposure",R.toneMappingExposure),Nt.needsLights&&db(He,Hr),Lt&&et.fog===!0&&Xt.refreshFogUniforms(He,Lt),Xt.refreshMaterialUniforms(He,et,X,H,w.state.transmissionRenderTarget[B.id]),Nt.needsLights&&Nt.lightProbeGrid){let De=Nt.lightProbeGrid;He.probesSH.value=De.texture,He.probesMin.value.copy(De.boundingBox.min),He.probesMax.value.copy(De.boundingBox.max),He.probesResolution.value.copy(De.resolution)}Po.upload($,$f(Nt),He,ut)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Po.upload($,$f(Nt),He,ut),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ae.setValue($,"center",nt.center),Ae.setValue($,"modelViewMatrix",nt.modelViewMatrix),Ae.setValue($,"normalMatrix",nt.normalMatrix),Ae.setValue($,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){let De=et.uniformsGroups;for(let Bi=0,Xr=De.length;Bi<Xr;Bi++){let Jf=De[Bi];xt.update(Jf,Dn),xt.bind(Jf,Dn)}}return Dn}function db(B,K){B.ambientLightColor.needsUpdate=K,B.lightProbe.needsUpdate=K,B.sunLights.needsUpdate=K,B.sunLightShadows.needsUpdate=K,B.directionalLights.needsUpdate=K,B.directionalLightShadows.needsUpdate=K,B.pointLights.needsUpdate=K,B.pointLightShadows.needsUpdate=K,B.spotLights.needsUpdate=K,B.spotLightShadows.needsUpdate=K,B.rectAreaLights.needsUpdate=K,B.hemisphereLights.needsUpdate=K}function pb(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(B,K,lt){let et=ot.get(B);et.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),ot.get(B.texture).__webglTexture=K,ot.get(B.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:lt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,K){let lt=ot.get(B);lt.__webglFramebuffer=K,lt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(B,K=0,lt=0){D=B,E=K,L=lt;let et=null,nt=!1,Lt=!1;if(B){let Ct=ot.get(B);if(Ct.__useDefaultFramebuffer!==void 0){F.bindFramebuffer($.FRAMEBUFFER,Ct.__webglFramebuffer),z.copy(B.viewport),W.copy(B.scissor),G=B.scissorTest,F.viewport(z),F.scissor(W),F.setScissorTest(G),O=-1;return}else if(Ct.__webglFramebuffer===void 0)ut.setupRenderTarget(B);else if(Ct.__hasExternalTextures)ut.rebindTextures(B,ot.get(B.texture).__webglTexture,ot.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let fe=B.depthTexture;if(Ct.__boundDepthTexture!==fe){if(fe!==null&&ot.has(fe)&&(B.width!==fe.image.width||B.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(B)}}let kt=B.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Lt=!0);let Gt=ot.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(Gt[K])?et=Gt[K][lt]:et=Gt[K],nt=!0):B.samples>0&&ut.useMultisampledRTT(B)===!1?et=ot.get(B).__webglMultisampledFramebuffer:Array.isArray(Gt)?et=Gt[lt]:et=Gt,z.copy(B.viewport),W.copy(B.scissor),G=B.scissorTest}else z.copy(st).multiplyScalar(X).floor(),W.copy(tt).multiplyScalar(X).floor(),G=ft;if(lt!==0&&(et=N),F.bindFramebuffer($.FRAMEBUFFER,et)&&F.drawBuffers(B,et),F.viewport(z),F.scissor(W),F.setScissorTest(G),nt){let Ct=ot.get(B.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ct.__webglTexture,lt)}else if(Lt){let Ct=K;for(let kt=0;kt<B.textures.length;kt++){let Gt=ot.get(B.textures[kt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+kt,Gt.__webglTexture,lt,Ct)}}else if(B!==null&&lt!==0){let Ct=ot.get(B.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ct.__webglTexture,lt)}O=-1};function Kf(B){let K=ot.get(B);return(K.__readFormat!==B.format||K.__readType!==B.type)&&(K.__readFormat=B.format,K.__readType=B.type,K.__formatReadable=V.textureFormatReadable(B.format),K.__typeReadable=V.textureTypeReadable(B.type)),K}this.readRenderTargetPixels=function(B,K,lt,et,nt,Lt,Ot,Ct=0){if(!(B&&B.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=ot.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ot!==void 0&&(kt=kt[Ot]),kt){F.bindFramebuffer($.FRAMEBUFFER,kt);try{let Gt=B.textures[Ct],fe=Gt.format,pe=Gt.type;B.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ct);let zt=Kf(Gt);if(zt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=B.width-et&&lt>=0&&lt<=B.height-nt&&$.readPixels(K,lt,et,nt,Et.convert(fe),Et.convert(pe),Lt)}finally{let Gt=D!==null?ot.get(D).__webglFramebuffer:null;F.bindFramebuffer($.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(B,K,lt,et,nt,Lt,Ot,Ct=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=ot.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ot!==void 0&&(kt=kt[Ot]),kt)if(K>=0&&K<=B.width-et&&lt>=0&&lt<=B.height-nt){F.bindFramebuffer($.FRAMEBUFFER,kt);let Gt=B.textures[Ct],fe=Gt.format,pe=Gt.type;B.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ct);let zt=Kf(Gt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Se),$.bufferData($.PIXEL_PACK_BUFFER,Lt.byteLength,$.STREAM_READ),$.readPixels(K,lt,et,nt,Et.convert(fe),Et.convert(pe),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let Ye=D!==null?ot.get(D).__webglFramebuffer:null;F.bindFramebuffer($.FRAMEBUFFER,Ye);let Oe=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Vp($,Oe,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Se),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Lt),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(Se),$.deleteSync(Oe),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,K=null,lt=0){let et=Math.pow(2,-lt),nt=Math.floor(B.image.width*et),Lt=Math.floor(B.image.height*et),Ot=K!==null?K.x:0,Ct=K!==null?K.y:0;ut.setTexture2D(B,0),$.copyTexSubImage2D($.TEXTURE_2D,lt,0,0,Ot,Ct,nt,Lt),F.unbindTexture()},this.copyTextureToTexture=function(B,K,lt=null,et=null,nt=0,Lt=0){let Ot,Ct,kt,Gt,fe,pe,zt,Se,Ye,Oe=B.isCompressedTexture?B.mipmaps[Lt]:B.image;if(lt!==null)Ot=lt.max.x-lt.min.x,Ct=lt.max.y-lt.min.y,kt=lt.isBox3?lt.max.z-lt.min.z:1,Gt=lt.min.x,fe=lt.min.y,pe=lt.isBox3?lt.min.z:0;else{let He=Math.pow(2,-nt);Ot=Math.floor(Oe.width*He),Ct=Math.floor(Oe.height*He),B.isDataArrayTexture?kt=Oe.depth:B.isData3DTexture?kt=Math.floor(Oe.depth*He):kt=1,Gt=0,fe=0,pe=0}et!==null?(zt=et.x,Se=et.y,Ye=et.z):(zt=0,Se=0,Ye=0);let Ce=Et.convert(K.format),fn=Et.convert(K.type),Nt;K.isData3DTexture?(ut.setTexture3D(K,0),Nt=$.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ut.setTexture2DArray(K,0),Nt=$.TEXTURE_2D_ARRAY):(ut.setTexture2D(K,0),Nt=$.TEXTURE_2D),F.activeTexture($.TEXTURE0),F.pixelStorei($.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei($.UNPACK_ALIGNMENT,K.unpackAlignment);let yn=F.getParameter($.UNPACK_ROW_LENGTH),ve=F.getParameter($.UNPACK_IMAGE_HEIGHT),Dn=F.getParameter($.UNPACK_SKIP_PIXELS),ii=F.getParameter($.UNPACK_SKIP_ROWS),Oi=F.getParameter($.UNPACK_SKIP_IMAGES);F.pixelStorei($.UNPACK_ROW_LENGTH,Oe.width),F.pixelStorei($.UNPACK_IMAGE_HEIGHT,Oe.height),F.pixelStorei($.UNPACK_SKIP_PIXELS,Gt),F.pixelStorei($.UNPACK_SKIP_ROWS,fe),F.pixelStorei($.UNPACK_SKIP_IMAGES,pe);let Hr=B.isDataArrayTexture||B.isData3DTexture,Ae=K.isDataArrayTexture||K.isData3DTexture;if(B.isDepthTexture){let He=ot.get(B),Ui=ot.get(K),De=ot.get(He.__renderTarget),Bi=ot.get(Ui.__renderTarget);F.bindFramebuffer($.READ_FRAMEBUFFER,De.__webglFramebuffer),F.bindFramebuffer($.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Xr=0;Xr<kt;Xr++)Hr&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ot.get(B).__webglTexture,nt,pe+Xr),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ot.get(K).__webglTexture,Lt,Ye+Xr)),$.blitFramebuffer(Gt,fe,Ot,Ct,zt,Se,Ot,Ct,$.DEPTH_BUFFER_BIT,$.NEAREST);F.bindFramebuffer($.READ_FRAMEBUFFER,null),F.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(nt!==0||B.isRenderTargetTexture||ot.has(B)){let He=ot.get(B),Ui=ot.get(K);F.bindFramebuffer($.READ_FRAMEBUFFER,C),F.bindFramebuffer($.DRAW_FRAMEBUFFER,S);for(let De=0;De<kt;De++)Hr?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,He.__webglTexture,nt,pe+De):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,He.__webglTexture,nt),Ae?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ui.__webglTexture,Lt,Ye+De):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ui.__webglTexture,Lt),nt!==0?$.blitFramebuffer(Gt,fe,Ot,Ct,zt,Se,Ot,Ct,$.COLOR_BUFFER_BIT,$.NEAREST):Ae?$.copyTexSubImage3D(Nt,Lt,zt,Se,Ye+De,Gt,fe,Ot,Ct):$.copyTexSubImage2D(Nt,Lt,zt,Se,Gt,fe,Ot,Ct);F.bindFramebuffer($.READ_FRAMEBUFFER,null),F.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Ae?B.isDataTexture||B.isData3DTexture?$.texSubImage3D(Nt,Lt,zt,Se,Ye,Ot,Ct,kt,Ce,fn,Oe.data):K.isCompressedArrayTexture?$.compressedTexSubImage3D(Nt,Lt,zt,Se,Ye,Ot,Ct,kt,Ce,Oe.data):$.texSubImage3D(Nt,Lt,zt,Se,Ye,Ot,Ct,kt,Ce,fn,Oe):B.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Lt,zt,Se,Ot,Ct,Ce,fn,Oe.data):B.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Lt,zt,Se,Oe.width,Oe.height,Ce,Oe.data):$.texSubImage2D($.TEXTURE_2D,Lt,zt,Se,Ot,Ct,Ce,fn,Oe);F.pixelStorei($.UNPACK_ROW_LENGTH,yn),F.pixelStorei($.UNPACK_IMAGE_HEIGHT,ve),F.pixelStorei($.UNPACK_SKIP_PIXELS,Dn),F.pixelStorei($.UNPACK_SKIP_ROWS,ii),F.pixelStorei($.UNPACK_SKIP_IMAGES,Oi),Lt===0&&K.generateMipmaps&&$.generateMipmap(Nt),F.unbindTexture()},this.initRenderTarget=function(B){ot.get(B).__webglFramebuffer===void 0&&ut.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?ut.setTextureCube(B,0):B.isData3DTexture?ut.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?ut.setTexture2DArray(B,0):ut.setTexture2D(B,0),F.unbindTexture()},this.resetState=function(){E=0,L=0,D=null,F.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};function E0(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function A0(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let o=t[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function cn(i,t){if(i.length===0)return 0;if(t<=i[0][0])return i[0][1];let e=i[i.length-1];if(t>=e[0])return e[1];for(let n=0;n+1<i.length;n++){let r=i[n],o=i[n+1];if(t>o[0])continue;let s=(t-r[0])/(o[0]-r[0]);return r[1]+(o[1]-r[1])*s}return e[1]}function zs(i,t){if(!i.length)return;let e=R0([0,t,...i.flatMap(o=>o.map(([s])=>s))],t),n=[];for(let o=0;o+1<e.length;o++){let s=e[o],a=e[o+1];if(a-s<1e-9)continue;let l=i.filter(c=>c[0][0]<=s+1e-7&&c[c.length-1][0]>=a-1e-7);for(let c=0;c<l.length;c++)for(let h=c+1;h<l.length;h++){let u=cn(l[c],s)-cn(l[h],s),f=cn(l[c],a)-cn(l[h],a);if(u*f>=-1e-12||Math.abs(u-f)<1e-12)continue;let d=s+(a-s)*u/(u-f);d>s+1e-8&&d<a-1e-8&&n.push(d)}}let r=R0([...e,...n],t).map(o=>{let s=i.filter(a=>o>=a[0][0]-1e-7&&o<=a[a.length-1][0]+1e-7).map(a=>cn(a,o));return[o,Math.min(...s)]});return r.length>=2?r:void 0}function P0(i,t){let e=i[i.length-1]?.[0]??0;return i.map(([n,r],o)=>[o===i.length-1?t:n/e*t,r])}function R0(i,t){let e=i.map(n=>Math.abs(n)<=1e-8?0:Math.abs(n-t)<=1e-8?t:Math.min(t,Math.max(0,n))).sort((n,r)=>n-r);return e.filter((n,r)=>r===0||n-e[r-1]>1e-8)}function Qn(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],o=n*n+r*r,s=o>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/o)):0;return i.h0+(i.h1-i.h0)*s}var Le=(i,t)=>[i[0]-t[0],i[1]-t[1]],mi=(i,t)=>[i[0]+t[0],i[1]+t[1]],Ln=(i,t)=>[i[0]*t,i[1]*t],Fr=(i,t)=>i[0]*t[0]+i[1]*t[1],Io=(i,t)=>i[0]*t[1]-i[1]*t[0],Ci=i=>Math.hypot(i[0],i[1]),Fn=i=>{let t=Ci(i)||1;return[i[0]/t,i[1]/t]},Xh=i=>[-i[1],i[0]],C0=i=>[i[1],-i[0]];function gi(i,t,e=[]){let n=t.eps??.005,r=[],o=e.filter(P=>Math.hypot(P.b[0]-P.a[0],P.b[1]-P.a[1])>.05),s=[],a=P=>{for(let N=0;N<s.length;N++)if(Math.abs(s[N][0]-P[0])<=n&&Math.abs(s[N][1]-P[1])<=n)return N;return s.push([P[0],P[1]]),s.length-1},l=[];for(let P of i){let N=P.points;if(N.length<3||Math.abs(vn(N))<1e-6)continue;let C=vn(N)>0,S=N.map(a);for(let E=0;E<N.length;E++){let L=S[E],D=S[(E+1)%N.length];L!==D&&l.push(C?{u:L,v:D,room:P.id,edge:E,forward:!0}:{u:D,v:L,room:P.id,edge:E,forward:!1})}}let c=o.map(P=>[a(P.a),a(P.b)]),h=new Set;for(let P of i){let N=P.points;N.length<3||(P.wall_splits??[]).forEach((C,S)=>{if(!C||S>=N.length)return;let E=N[S],L=Le(N[(S+1)%N.length],E),D=Ci(L);for(let O of C)O>n&&O<D-n&&h.add(a(mi(E,Ln(L,O/D))))})}let u=[];for(let P of l){let N=s[P.u],C=s[P.v],S=Le(C,N),E=Ci(S),L=Ln(S,1/E),D=[];for(let k=0;k<s.length;k++){if(k===P.u||k===P.v)continue;let z=Le(s[k],N),W=Fr(z,L);W<=n||W>=E-n||Math.abs(Io(L,z))<=n&&D.push({t:W,id:k})}D.sort((k,z)=>k.t-z.t);let O=[{t:0,id:P.u},...D,{t:E,id:P.v}];for(let k=0;k+1<O.length;k++){let z=O[k],W=O[k+1],G=P.forward?z.t:E-W.t,Y=P.forward?W.t:E-z.t;u.push({u:z.id,v:W.id,room:P.room,edge:P.edge,t0:G,t1:Y})}}let f=new Map;for(let P of u){let N=P.u<P.v?`${P.u}-${P.v}`:`${P.v}-${P.u}`,C=f.get(N);C||f.set(N,C=[]),C.push(P)}let d=P=>({room_id:P.room,edge:P.edge,t0:P.t0,t1:P.t1}),p=new Map;for(let P of u){let N=`${P.room}:${P.edge}`;p.set(N,[...p.get(N)??[],P.t0].sort((C,S)=>C-S))}let b=P=>{let N=i.find(S=>S.id===P.room)?.wall_heights?.[P.edge];if(!Array.isArray(N))return N;let C=p.get(`${P.room}:${P.edge}`)??[];return N[C.indexOf(P.t0)]??null},m=new Map(i.map(P=>[P.id,P])),g=(P,N,C)=>{let S=Le(C,N),E=Ci(S);if(E<=1e-8)return;let L=Ln(S,1/E),D=[],O=!1;for(let k of P){let z=m.get(k.room);if(!z)continue;let W=z.points[k.edge],G=z.points[(k.edge+1)%z.points.length],Y=Le(G,W),Z=Ci(Y),it=z.wall_profiles?.[k.edge];if(it&&Math.abs(it[it.length-1][0]-Z)<=1e-4){O=!0;let rt=[k.t0,k.t1,...it.map(([at])=>at).filter(at=>at>k.t0+1e-8&&at<k.t1-1e-8)].map(at=>{let st=[W[0]+Y[0]*at/Z,W[1]+Y[1]*at/Z];return[Math.max(0,Math.min(E,Fr(Le(st,N),L))),cn(it,at)]});rt.sort((at,st)=>at[0]-st[0]),rt.length>=2&&(rt[0]=[0,rt[0][1]],rt[rt.length-1]=[E,rt[rt.length-1][1]],D.push(rt))}let H=b(k);typeof H=="number"&&H>0&&D.push(Hh(E,H)),typeof z.ceiling_height=="number"&&z.ceiling_height>0&&D.push(Hh(E,z.ceiling_height))}return O?zs(D,E):void 0},x=P=>{let N=P.map(b).filter(S=>typeof S=="number"&&S>0);if(N.length)return Math.min(...N);let C=P.map(S=>i.find(E=>E.id===S.room)?.ceiling_height);return C.every(S=>typeof S=="number"&&S>0)?Math.max(...C):void 0},v=P=>{let N=P.map(C=>i.find(S=>S.id===C.room)?.wall_thickness?.[C.edge]).filter(C=>typeof C=="number"&&C>0);return N.length?Math.max(...N):void 0},y=P=>{for(let N of P){let C=i.find(D=>D.id===N.room),S=C?.wall_slopes?.[N.edge];if(!C||!S)continue;let E=C.points[N.edge],L=C.points[(N.edge+1)%C.points.length];return{p:[E[0],E[1]],q:[L[0],L[1]],h0:Math.max(.05,S[0]),h1:Math.max(.05,S[1])}}},M=P=>P.some(N=>b(N)===0),w=P=>{let N=y(P);return N?{height:Math.max(N.h0,N.h1),slope:N}:{height:x(P)}},A=[],_=[];for(let P of f.values()){let N=P[0],C=P.find(S=>S!==N&&S.u===N.v&&S.v===N.u&&S.room!==N.room);for(let S of P)S!==N&&S!==C&&S.room!==N.room&&r.push(`overlap:${N.room}:${S.room}`);if(M(C?[N,C]:[N])){C&&A.push([N.room,C.room]);continue}if(C){let S=v([N,C])??t.interior;_.push({a:N.u,b:N.v,left:S/2,right:S/2,exterior:!1,roomLeft:N.room,roomRight:C.room,sources:[d(N),d(C)],...w([N,C]),profile:g([N,C],s[N.u],s[N.v])})}else _.push({a:N.u,b:N.v,left:0,right:v([N])??t.exterior,exterior:!0,roomLeft:N.room,roomRight:null,sources:[d(N)],...w([N]),profile:g([N],s[N.u],s[N.v])})}let T=P=>Fn(Le(s[P.b],s[P.a]));for(let P of _){if(P.exterior||P.free)continue;let N=new Set;for(let S of[P.a,P.b])for(let E of _)!E.exterior||E.free||E.a!==S&&E.b!==S||Math.abs(Io(T(P),T(E)))>1e-6||(E.roomLeft===P.roomLeft?N.add("left"):E.roomLeft===P.roomRight&&N.add("right"));if(N.size!==1)continue;let C=P.left+P.right;N.has("left")?(P.left=0,P.right=C):(P.left=C,P.right=0)}o.forEach((P,N)=>{let[C,S]=c[N];if(C===S)return;let E=[(P.a[0]+P.b[0])/2,(P.a[1]+P.b[1])/2],L=i.find(W=>W.points.length>=3&&jt(E,W.points))?.id??null,D=(P.thickness??t.interior)/2,O=typeof P.height=="number"&&P.height>0?P.height:void 0,k=Ci(Le(s[S],s[C])),z=P.wall_profile?zs([P0(P.wall_profile,k),...O!==void 0?[Hh(k,O)]:[]],k):void 0;_.push({free:P.id,a:C,b:S,left:D,right:D,exterior:!1,roomLeft:L,roomRight:L,sources:[],height:O,profile:z})}),_=AM(_,s,h);let R=PM(_,s);return{walls:_.map((P,N)=>{let C=s[P.a],S=s[P.b],E=R.get(`${N}:a`),L=R.get(`${N}:b`),D=CM([E.right,L.left,S,L.right,E.left,C],1e-6);return{id:EM(C,S),a:[C[0],C[1]],b:[S[0],S[1]],left:P.left,right:P.right,exterior:P.exterior,roomLeft:P.roomLeft,roomRight:P.roomRight,sources:P.sources,footprint:D,...P.free?{free:P.free}:{},...P.height!==void 0?{height:P.height}:{},...P.profile?{profile:P.profile}:{},...P.slope?{slope:P.slope}:{}}}),warnings:[...new Set(r)],open:A}}function EM(i,t){let e=o=>Math.round(o*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function Hh(i,t){return[[0,t],[i,t]]}function I0(i){let t=i.profile?.[i.profile.length-1]?.[0]??0,e=i.profile?[...i.profile].reverse().map(([n,r])=>[t-n,r]):void 0;return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft,profile:e}}function AM(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||e.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=I0(l)),c.a!==s&&(c=I0(c)),l.a===c.b)continue;let h=Fn(Le(t[l.b],t[l.a])),u=Fn(Le(t[c.b],t[c.a]));if(Math.abs(Io(h,u))>1e-6||Fr(h,u)<=0||l.free||c.free||!!l.profile!=!!c.profile||l.profile&&c.profile&&Math.abs(l.profile[l.profile.length-1][1]-c.profile[0][1])>1e-6||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f=Ci(Le(t[l.b],t[l.a])),d=l.profile&&c.profile?[...l.profile,...c.profile.slice(1).map(([m,g])=>[f+m,g])]:void 0,p={...l,b:c.b,sources:RM(l.sources,c.sources),profile:d},b=n.filter((m,g)=>g!==a[0]&&g!==a[1]);b.push(p),n.length=0,n.push(...b),r=!0;break}}return n}function RM(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function PM(i,t){let e=new Map;i.forEach((r,o)=>{let s=Fn(Le(t[r.b],t[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:Ln(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,o]of e){let s=t[r];o.sort((c,h)=>c.angle-h.angle);let a=c=>({left:mi(s,Ln(Xh(c.d),c.left)),right:mi(s,Ln(C0(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let h=o[c],u=o[(c+1)%o.length],f=mi(s,Ln(Xh(h.d),h.left)),d=mi(s,Ln(C0(u.d),u.right)),p=Io(h.d,u.d);if(Math.abs(p)<1e-4)continue;let b=Io(Le(d,f),u.d)/p,m=mi(f,Ln(h.d,b));Ci(Le(m,s))>l||(n.get(h.key).left=m,n.get(u.key).right=m)}}return n}function CM(i,t){let e=i.filter((r,o)=>Ci(Le(r,i[(o+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let o=e[(r+e.length-1)%e.length],s=e[r],a=e[(r+1)%e.length],l=Le(s,o),c=Le(a,s);if(Math.abs(Io(Fn(l),Fn(c)))<1e-7&&Fr(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function Yh(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],o=Fn(Le(r,n));return mi(n,Ln(o,e))}function L0(i,t){let e=Le(i.b,i.a),n=Xh(Fn(e)),r=a=>t.some(l=>l.points.length>=3&&jt(a,l.points)),o=0,s=0;for(let a of[.2,.5,.8]){let l=mi(i.a,Ln(e,a));r(mi(l,Ln(n,i.left+.2)))&&o++,r(Le(l,Ln(n,i.right+.2)))&&s++}return o>=2&&s===0?!0:s>=2&&o===0?!1:null}function Lo(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=Fn(Le(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,mi(r.a,[-o[1],o[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Fo(i,t,e){if(!t.wall)return IM(i,e.room,e.edge,t.offset);let n=i.find(o=>o.free===t.wall);if(!n)return null;let r=Yh(e.room,0,t.offset);return{wall:n,s:Fr(Le(r,n.a),Fn(Le(n.b,n.a)))}}function qh(i,t,e){if(t.free)return null;let n=e?t.b:t.a,r=Fn(Le(t.b,t.a)),o=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,s=null;for(let a of i)if(!(a===t||!(o(a.a)||o(a.b)))){if(s||a.exterior!==t.exterior||a.free||!o(e?a.a:a.b)||Fr(Fn(Le(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;s=a}return s}function IM(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Yh(t,e,n);return{wall:r,s:Fr(Le(s,r.a),Fn(Le(r.b,r.a)))}}return null}function Ec(i,t,e,n){let r=t.rotation*Math.PI/180,o=[-Math.sin(r),Math.cos(r)],s=Math.max(.005,t.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(t.x-c.a[0])*u[0]+(t.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],p=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=o[0]*d[0]+o[1]*d[1]>=0?1:-1;if(Math.abs(o[0]*d[0]+o[1]*d[1])<.5)continue;let m=b>0?c.left:-c.right,g=p>-c.right-1e-4&&p<c.left+1e-4,x=Math.abs(p-(m+b*(s/2)));if(!g&&x>.03||a&&x>=a.off)continue;let v=c.a[0]+u[0]*f,y=c.a[1]+u[1]*f,M=g?m+b*(s/2):p,w=c.slope?Qn(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:v+d[0]*M,z:y+d[1]*M,top:w,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var or=Math.PI/180;function Dr(i){let t=i.rotation??0;if(!t||i.points&&i.points.length>=3)return null;let e=t*or;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Rc(i,t,e=!1){if(!i)return t;let n=t[0]-i.p[0],r=t[1]-i.p[1],o=e?-i.s:i.s;return[i.p[0]+n*i.c-r*o,i.p[1]+n*o+r*i.c]}function hn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),o=Dr(i),s=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?e-c:t+c,l],a=o?(l,c)=>Rc(o,s(l,c)):s;return i.axis==="x"?{u0:t,u1:e,w:r-n,at:a}:{u0:n,u1:r,w:e-t,at:a}}function Zh(i,t,e,n=1e-6){let[r,o]=xi(i,t,e),s=hn({...i,rotation:0});return r>=s.u0-n&&r<=s.u1+n&&o>=-n&&o<=s.w+n}function un(i){let t=hn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*or),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*or);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=B0(t,e,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(r+o))):t/2,a=e+s*r;return{vr:s,rh:a,y:l=>l<=s?e+l*r:n+(t-l)*o}}function Kh(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var Jh=.14;function D0(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function jh(i,t){return un(i).rh-Jh>t+.01}function N0(i,t,e,n){let r=null,o=Math.max(0,i.settings.roof.overhang??0);for(let s of Kh(i)){if(s.open||n!==void 0&&!jh(s,n)||!Zh(s,t,e)||s.points&&s.points.length>=3&&!jt([t,e],s.points))continue;let[a,l]=xi(s,t,e),c=s.shape==="flat"||s.shape==="parapet",h=Math.max(0,s.overhang??o),f=((c?null:Ws(Or(s,{u0:h,u1:h,a:h,b:h}),a,l))??un(s).y(l))-Jh;r=r===null?f:Math.max(r,f)}return r}function Pc(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(o=>[o[0],o[1]]);let n=Gn(i)>=0?1:-1,r=[];for(let o=0;o<e;o++){let s=i[(o+e-1)%e],a=i[o],l=i[(o+1)%e],c=F0([a[0]-s[0],a[1]-s[1]]),h=F0([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],p=u[1]+f[1],b=Math.hypot(d,p);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let m=(d*u[0]+p*u[1])/b,g=Math.min(4,1/Math.max(.25,m));r.push([a[0]+d/b*t*g,a[1]+p/b*t*g])}return r}function F0(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function O0(i,t){if(i.points&&i.points.length>=3)return Pc(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,o=Math.max(i.z0,i.z1)+t,s=Dr(i);return[[e,r],[n,r],[n,o],[e,o]].map(a=>Rc(s,a))}function U0(i,t,e,n){let r=gi(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])s.set(o(f),[...s.get(o(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let p=(s.get(o(d))??[]).find(b=>!l.has(b));if(!p||(l.add(p),d=o(p.a)===o(d)?p.b:p.a,o(d)===o(f[0])))break;f.push(d)}f.length>=3&&o(d)===o(f[0])&&(!c||Math.abs(Gn(f))>Math.abs(Gn(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],p=c[(u+1)%c.length],b=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(b)>1e-6&&h.push(d)}return h.length>=3?Pc(h,e):null}var Vs=Math.tan(30*or);function B0(i,t,e,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+o*n,l=e+s*r,c=Math.min(i-s,Math.max(o,(l-a+Vs*(i-s+o))/(2*Vs))),h=a+(c-o)*Vs;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=o?t+f*n:f<=c?a+(f-o)*Vs:f<=i-s?l+(i-s-f)*Vs:e+(i-f)*r}}function Or(i,t){let e=hn(i),n=un(i),r=e.w,o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(D,O)=>[D,O,n.y(O)],h=c(a,-o),u=c(l,-o),f=c(l,r+s),d=c(a,r+s),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*or),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*or);if(i.shape==="pent"){let D=[h,u,f,d],O=[[0,n.y(0)],[r,n.y(r)]];return{faces:[D],rim:D,ridges:[[f,d]],gable:O,gables:[O,O]}}if(i.shape==="pyramid"){let D=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[h,u,D],[u,f,D],[f,d,D],[d,h,D]],rim:[h,u,f,d],ridges:[[h,D],[d,D],[u,D],[f,D]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let D=B0(r,i.eave_a,i.eave_b,p,b),O=[[0,n.y(0)],[D.vla,D.yla],[D.vr,D.rh],[r-D.vlb,D.ylb],[r,n.y(r)]],k=[a,D.vla,D.yla],z=[l,D.vla,D.yla],W=[a,r-D.vlb,D.ylb],G=[l,r-D.vlb,D.ylb],Y=[a,D.vr,D.rh],Z=[l,D.vr,D.rh];return{faces:[[h,u,z,k],[k,z,Z,Y],[Y,Z,G,W],[W,G,f,d]],rim:[h,u,z,Z,G,f,d,W,Y,k],ridges:[[Y,Z],[k,z],[W,G]],gable:O,gables:[O,O]}}let[m,g]=Cc(i)??["gable","gable"],x=Qh(i,[m,g]),v=m==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],y=g==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],w=[a,x.vbh,x.yh],A=[l,x.vah,x.yh],_=[l,x.vbh,x.yh],T=m==="halfhip",R=g==="halfhip",I=[[h,u,...R?[A]:[],y,v,...T?[M]:[]],[v,y,...R?[_]:[],f,d,...T?[w]:[]]];m==="hip"&&I.push([d,h,v]),T&&I.push([w,M,v]),g==="hip"&&I.push([u,f,y]),R&&I.push([A,_,y]);let P=[h,u,...g==="gable"?[y]:R?[A,_]:[],f,d,...m==="gable"?[v]:T?[w,M]:[]],N=[[v,y]];m==="hip"&&N.push([h,v],[d,v]),T&&N.push([M,v],[w,v]),g==="hip"&&N.push([u,y],[f,y]),R&&N.push([A,y],[_,y]);let C=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],S=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],E=D=>D==="gable"?C:D==="halfhip"?S:null,L=[E(m),E(g)];return{faces:I,rim:P,ridges:N,gable:L[0]??L[1],gables:L}}function Cc(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function Qh(i,t){let e=hn(i),n=un(i),r=e.w,o=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*or),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*or),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=o>1e-6?Math.min(n.vr,(h-i.eave_a)/o):n.vr,f=s>1e-6?Math.max(n.vr,r-(h-i.eave_b)/s):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-h)/Math.max(.2,o)),b=m=>m==="hip"?d:m==="halfhip"?p:0;return{d0:b(t[0]),d1:b(t[1]),yh:h,vah:u,vbh:f}}function Ws(i,t,e){let n=null;for(let r of i.faces){if(!jt([t,e],r.map(x=>[x[0],x[1]])))continue;let[o,s]=r,a=r.slice(2).find(x=>Math.abs((s[0]-o[0])*(x[1]-o[1])-(s[1]-o[1])*(x[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],h=s[1]-o[1],u=a[0]-o[0],f=a[2]-o[2],d=a[1]-o[1],p=c*d-h*f,b=h*u-l*d,m=l*f-c*u;if(Math.abs(b)<1e-9)continue;let g=o[2]-(p*(t-o[0])+m*(e-o[1]))/b;n=n===null?g:Math.min(n,g)}return n}function xi(i,t,e){let[n,r]=Rc(Dr(i),[t,e],!0),o=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?s-n:n-o]}function $h(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Nr(i,t){let[e,n]=Rc(Dr(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i)s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(t)*1.5||Zh(s,e,n)&&(!o||r(s)<r(o))&&(o=s);return o}function tf(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=hn(t),n=un(t).rh,r=Or(i,{u0:0,u1:0,a:0,b:0}),o=un(i),s=b=>{let[m,g]=e.at(b,e.w/2),[x,v]=xi(i,m,g);return Ws(r,x,v)??o.y(v)},a=s(e.u0)<=s(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let b=.5;b<u;b+=.05)if(s(l+h*b)>=n-.02){f=l+h*b;break}if(Math.abs(f-c)<.05)return t;let d=Dr(t),p={...t,...d?{pivot:d.p}:{}};return t.axis==="x"?c===e.u1?p.x1=f:p.x0=f:c===e.u1?p.z1=f:p.z0=f,p}function k0(i,t){let e=tf(i,t),n=hn(e),r=un(e),o=Or(i,{u0:0,u1:0,a:0,b:0}),s=un(i),a=f=>{let[d,p]=n.at(f,n.w/2),[b,m]=xi(i,d,p);return Ws(o,b,m)??s.y(m)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,p=c*(f+1)/u,b=l?n.u0+d:n.u1-d,m=l?n.u0+p:n.u1-p,g=a(m),x=1/0,v=-1/0;for(let _=0;_<=40;_++){let T=n.w*_/40;r.y(T)>g+.02&&(x=Math.min(x,T),v=Math.max(v,T))}if(!(v-x>.05))continue;let y=n.at(b,x),M=n.at(m,v),w=xi(i,y[0],y[1]),A=xi(i,M[0],M[1]);h.push({u0:Math.min(w[0],A[0]),u1:Math.max(w[0],A[0]),v0:Math.min(w[1],A[1]),v1:Math.max(w[1],A[1])})}return h}function bi(i,t,e,n){let r=s=>n?s[t]<=e+1e-9:s[t]>=e-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c&&o.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function ef(i,t){let e=bi(i,0,t.u0,!0),n=bi(i,0,t.u1,!1),r=bi(bi(i,0,t.u0,!1),0,t.u1,!0),o=bi(r,1,t.v0,!0),s=bi(r,1,t.v1,!1);return[e,n,o,s].filter(a=>a.length>=3&&Math.abs(Gn(a.map(l=>[l[0],l[1]])))>1e-6)}function Ic(i,t,e){let n=hn(t),r=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>t.base+.05)),o=c=>c.some(h=>r.some(u=>jt(h,u.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:e,b:o(a.map(c=>n.at(c,n.w+s)))?0:e,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:e,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:e}}function z0(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function LM(i){return un(i).rh}function V0(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Nr(n,l)??l);if(!r.length)return t.id;let o=Math.max(...r.map(l=>LM(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return Zh(h,u,f)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function Ac(i,[t,e,n]){let r=s=>t*s[0]+e*s[1]+n,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&o.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function Gs(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],o=t,s=0;for(let d of i){let p=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(p)>Math.abs(s)&&(s=p,o=d)}if(Math.abs(s)<1e-9)return null;let a=o[0]-t[0],l=o[1]-t[1],c=e[2]-t[2],h=o[2]-t[2],u=(c*l-h*r)/s,f=(n*h-a*c)/s;return[u,f,t[2]-u*t[0]-f*t[1]]}var Do=i=>Math.abs(Gn(i.map(t=>[t[0],t[1]])));function Lc(i){let t=vn(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=Math.hypot(o[0]-r[0],o[1]-r[1]);if(s<1e-7)continue;let a=-(o[1]-r[1])*t/s,l=(o[0]-r[0])*t/s;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function FM(i,t){let e=Gs(i),n=Gs(t.poly);if(!e||!n||Do(t.poly)<1e-6)return null;let r=[...Lc(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function G0(i,t){let e=[i];for(let n of t){let r=[];for(let o of e){let s=FM(o,n),a=s?o:[];for(let c of s??[])a=Ac(a,c);if(a.length<3||Do(a)<1e-6){r.push(o);continue}let l=o;for(let[c,h,u]of Lc(a)){let f=Ac(l,[-c,-h,-u]);if(f.length>=3&&Do(f)>1e-6&&r.push(f),l=Ac(l,[c,h,u]),l.length<3)break}}e=r}return e}function nf(i,t,e){let n=[[0,1]],r=o=>[i[0]+(t[0]-i[0])*o,i[1]+(t[1]-i[1])*o,i[2]+(t[2]-i[2])*o];for(let o of e){let s=Gs(o.poly);if(!s||Do(o.poly)<1e-6)continue;let a=Lc(o.poly).map(([d,p,b])=>[d*i[0]+p*i[1]+b,d*(t[0]-i[0])+p*(t[1]-i[1])]),l=d=>s[0]*d[0]+s[1]*d[1]+s[2]-d[2],c=l(i),h=l(t)-c;a.push([c-.01,h]),Number.isFinite(o.depth)&&a.push([o.depth-c,-h]);let u=0,f=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/p;p>0?u=Math.max(u,b):f=Math.min(f,b)}f-u<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,u)],[Math.max(d,f),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([o,s])=>[r(o),r(s)])}function W0(i,t){let e=Gs(i),n=Gs(t);if(!e||!n||Do(t)<1e-6)return null;let r=[...i];for(let c of Lc(t))r=Ac(r,c);if(r.length<3)return null;let o=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),s=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=o(h),d=o(u);if(f<0!=d<0){let p=f/(f-d);s.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p,h[2]+(u[2]-h[2])*p])}}if(s.length<2)return null;let a=s[0],l=s[s.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function H0(i,t){let e=hn(i),n=o=>o.map(([s,a,l])=>{let[c,h]=e.at(s,a);return[c,h,l]}),r=[];for(let o of t){let s=bi(bi(bi(bi(o,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);s.length>=3&&Do(s)>1e-6&&r.push({poly:n(s),depth:1/0});for(let a of ef(o,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:Jh})}return r}function rf(i,t){return t.map(e=>({poly:e.poly.map(([n,r,o])=>[...xi(i,n,r),o]),depth:e.depth}))}function X0(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:Nr(i,t)!==e&&Nr(i,e)!==t}function Y0(i,t){if(t.dormer||t.open||!Cc(t)||Dr(t)||Nr(i,t))return null;let e=hn(t),n=un(t).rh,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===t||s.dormer||s.open||Dr(s)||s.axis===t.axis||s.shape==="flat"||s.shape==="parapet"||s.shape==="pent")continue;let a=un(s).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(s)>r(t)||r(s)===r(t)&&i.indexOf(s)<i.indexOf(t))))continue;let c=$h(s),[h,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=$h(t),[b,m]=t.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(b<f-.05||m>d+.05)continue;let g=q0(t,s),x=null;e.u0<h-.05&&e.u1>=h-.05&&e.u1<=g+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=g-.05&&(x=0),x!==null&&(!o||r(s)>r(o.host))&&(o={host:s,end:x})}return o}function q0(i,t){let e=hn(t),n=e.at(e.u0,un(t).vr);return i.axis==="x"?n[0]:n[1]}function $0(i,t){let e=q0(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=$h(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}function of(i,t){return t.rooms.some(e=>e.points.length>=3)?U0(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function sf(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=of(i,t);return!!e&&e.some(([n,r])=>qr(n,r)-t.elevation>-.15)}function Z0(i,t,e,n,r){return!e||!sf(i,t)?!1:n<Math.min(t.height,qr(r[0],r[1])-t.elevation)-.05}function No(i,t){let e=vn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let o=t[r],s=t[(r+1)%t.length],a=c=>e*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let p=f/(f-d);n.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p])}}}return n}function K0(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],o=i[(e+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(t&&Math.sign(s)!==t)return!1;t=Math.sign(s)}}return!0}var ti=1e-4;function af(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function J0(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],o=[n[0]-e[0],n[1]-e[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((e[0]-i[0])*o[1]-(e[1]-i[1])*o[0])/s,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/s;return a>ti&&a<1-ti&&l>-ti&&l<1+ti?a:null}function lf(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-t[0])*n+(i[1]-t[1])*r)/o;return s<=ti||s>=1-ti?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(o)<ti?s:null}function DM(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let o=0;o<t.length;o++){let s=t[o],a=t[(o+1)%t.length];if(J0(n,r,s,a)!==null||lf(s,n,r)!==null||lf(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<ti)return!0}}return jt(i[0],t)||jt(t[0],i)}function NM(i){let t=i.map(o=>af(o)>=0?o:[...o].reverse()),e=[];t.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],h=[0,1];t.forEach((u,f)=>{if(f!==s)for(let d=0;d<u.length;d++){let p=u[d],b=u[(d+1)%u.length],m=J0(l,c,p,b)??lf(p,l,c);m!==null&&h.push(m)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<ti)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((m,g)=>g!==s&&jt(b,m))||e.some(([m,g])=>Math.hypot(m[0]-f[0],m[1]-f[1])<ti&&Math.hypot(g[0]-d[0],g[1]-d[1])<ti)||e.push([f,d])}}});let n=[],r=new Set;for(let o=0;o<e.length;o++){if(r.has(o))continue;r.add(o);let s=[e[o][0]],a=e[o][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(e[c][0]),a=e[c][1]}s.length>=3&&af(s)>1e-6&&n.push(s)}return n}function j0(i){let t=i.filter(o=>o.length>=3),e=t.map((o,s)=>s),n=o=>e[o]===o?o:e[o]=n(e[o]);for(let o=0;o<t.length;o++)for(let s=o+1;s<t.length;s++)n(o)!==n(s)&&DM(t[o],t[s])&&(e[n(s)]=n(o));let r=new Map;return t.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:NM(o))}function OM(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o)):0;return Math.hypot(i[0]-t[0]-n*s,i[1]-t[1]-r*s)}function Q0(i,t,e=.03){return i.every(n=>jt(n,t)||t.some((r,o)=>OM(n,r,t[(o+1)%t.length])<=e))}function tm(i,t){let e=af(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return e.map((r,o)=>{let s=n(e[(o-1+e.length)%e.length],r),a=n(r,e[(o+1)%e.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*t,r[1]+(s[1]+a[1])/l*t]})}function uf(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var Oo=(i,t)=>!!i.fix&&i.fix.includes(t);function cf(i,t,e,n){let r=new Map,o=i.filter(c=>Oo(c,t)).map(c=>({p:c,e:uf(c,t,e)})),s=Math.min(.05,.1*e);for(let{p:c,e:h}of o)t!=="h"&&Math.abs((h[0]+h[1])/2-e/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||u[0]>a+(a===0?s:.001)||t==="h"&&u[1]>=e-.01&&u[0]>.01||(r.set(h,"lo"),a=Math.max(a,u[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||e-u[1]>l+(l>0?.001:t==="h"?.01:s)||(r.set(h,"hi"),l=Math.max(l,e-u[0]),c=!0)}for(let{p:c}of o)r.has(c)||r.set(c,"free");return a+l>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0,side:r}:{s0:e,s:n,lo:a,hi:l,side:r}}function Ur(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function em(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!Fc(n))return[Ur(t,n),Ur(e,n)];let r=n.side.get(i)??"lo",o=e-t;if(r==="mid")return[n.s/2-o/2,n.s/2+o/2];if(r==="free"){let s=Ur((t+e)/2,n);return[s-o/2,s+o/2]}return r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function Fc(i){return i.lo>0||i.hi>0}function Dc(i,t,e,n){let[r,o,s]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-o)<.001&&Math.abs(n-s)<.001)return i.parts;let a={w:cf(i.parts,"w",r,t),d:cf(i.parts,"d",o,e),h:cf(i.parts,"h",s,n)},l={w:!Fc(a.w)&&i.parts.some(c=>Oo(c,"w")),d:!Fc(a.d)&&i.parts.some(c=>Oo(c,"d")),h:!Fc(a.h)&&i.parts.some(c=>Oo(c,"h"))};return i.parts.map(c=>{let h=x=>{let v=a[x],[y,M]=uf(c,x,v.s0);return Oo(c,x)&&!l[x]?em(c,y,M,v):[Ur(y,v),Ur(M,v)]},[u,f]=h("w"),[d,p]=h("d"),[b,m]=h("h"),g={...c,x:(u+f)/2/t-.5,w:(f-u)/t,z:(d+p)/2/e-.5,d:(p-d)/e,y:b/n,h:(m-b)/n};if(c.shape==="loft"){let x=(A,_,T,R,I)=>{let P=a[A],N=_??R,C=T??I,S=(N-C/2+.5)*P.s0,E=(N+C/2+.5)*P.s0;if(!Oo(c,A)||l[A])return[Ur(S,P),Ur(E,P)];let[L,D]=uf(c,A,P.s0),[O]=em(c,L,D,P),k=O-L;return[S+k,E+k]},[v,y]=x("w",c.tx,c.tw,c.x,c.w),[M,w]=x("d",c.tz,c.td,c.z,c.d);g.tx=(v+y)/2/t-.5,g.tw=(y-v)/t,g.tz=(M+w)/2/e-.5,g.td=(w-M)/e}return g})}var UM=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var BM=["wall","pole","pillar","parcel","bank"];function im(i){return UM.includes(i.variant??"")?i.variant:"bin240"}function rm(i){return BM.includes(i.variant??"")?i.variant:"wall"}var Xe=["#3a3f47","#3a3f47"],Br=["#23262b","#23262b"],ei=["#5a3b25","#5a3b25"],ke=["#1f4fa8","#1f4fa8"],sr=["#e3b616","#e3b616"],ge=["#2f7d3b","#2f7d3b"],nm={default:{rest:Xe,bio:ei,paper:ke,plastic:sr,glass:ge,garden:ge,recycling:sr,other:Xe},DE:{rest:Br,bio:ei,paper:ke,plastic:sr,glass:ge,garden:ge,recycling:sr},AT:{rest:Xe,bio:ei,paper:[Xe[0],"#c0262d"],plastic:sr,glass:ge,garden:ge},CH:{rest:["#d8d8d8","#d8d8d8"],bio:ge,paper:ke,plastic:Xe,glass:ge,garden:ge},NL:{rest:Xe,bio:ge,paper:ke,plastic:["#3a3f47","#e57a1f"],glass:ge,garden:ge},BE:{rest:Xe,bio:ge,paper:ke,plastic:ke,glass:ge,garden:ge},GB:{rest:Br,bio:["#3a3f47","#5a3b25"],paper:ke,plastic:ke,glass:Br,garden:ei,recycling:ke},US:{rest:Br,bio:ge,paper:ke,plastic:ke,glass:ke,garden:ge,recycling:ke},CA:{rest:Br,bio:ge,paper:ke,plastic:ke,glass:ke,garden:ge,recycling:ke},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Xe,bio:ei,paper:[Xe[0],"#e3b616"],plastic:[Xe[0],"#e3b616"],recycling:[Xe[0],"#e3b616"],glass:ge,garden:ge},IT:{rest:Xe,bio:ei,paper:ke,plastic:sr,glass:ge,garden:ge},ES:{rest:Xe,bio:ei,paper:ke,plastic:sr,glass:ge,garden:ge},PT:{rest:Xe,bio:ei,paper:ke,plastic:sr,glass:ge,garden:ge},DK:{rest:Br,bio:ge,paper:ke,plastic:Xe,glass:ge,garden:ge},SE:{rest:Br,bio:ei,paper:ke,plastic:Xe,glass:ge,garden:ge},NO:{rest:Xe,bio:ei,paper:ke,plastic:Xe,glass:ge,garden:ge},FI:{rest:Xe,bio:ei,paper:ke,plastic:Xe,glass:ge,garden:ge}},om="DE";function sm(){return om}function kM(i,t){return nm[t]?.[i]??nm.default[i]??Xe}function am(i,t=om){let e=kM(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var ar=Wt(3662079,.95),hf=Wt(3662079,1),Ii=Wt(5995775,.34),lm=Wt(5995775,.22),Nc=[-.55,.83],te=-1,Oc=16,lr=32,cm=48,ff=64,ne=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,o=r,s=r,a,l=te,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Ht;return t.setAttribute("position",new Ut(this.p,3)),t.setAttribute("color",new Ut(this.c,3)),t.setAttribute("fold",new Ut(this.f,1)),this.uv&&t.setAttribute("uv",new Ut(this.uv,2)),this.tile&&t.setAttribute("tile",new Ut(this.tile,2)),t.computeBoundingSphere(),t}},ze=class{p=[];c=[];f=[];seg(t,e,n=ar,r=te){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,o){let[s,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,te);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,te),this.seg(c,a,n,o)}geometry(){let t=new Ht;return t.setAttribute("position",new Ut(this.p,3)),t.setAttribute("color",new Ut(this.c,3)),t.setAttribute("fold",new Ut(this.f,1)),t}};function um(i,t,e,n){let o=i.uv?2:0,s=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((p,b)=>p+(f.p[b]-p)*d),c:u.c.map((p,b)=>p+(f.c[b]-p)*d),uv:u.uv&&f.uv?u.uv.map((p,b)=>p+(f.uv[b]-p)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let p=0;p<3;p++){let b=u*3+p;for(let m=0;m<3;m++)i.p[b*3+m]=f[p].p[m],i.c[b*3+m]=f[p].c[m];if(i.uv&&f[p].uv)for(let m=0;m<o;m++)i.uv[b*2+m]=f[p].uv[m];if(i.tile&&f[p].tile)for(let m=0;m<2;m++)i.tile[b*2+m]=f[p].tile[m];i.f[b]=d}},c=(u,f)=>{let d=i.p.length/9;for(let p of u)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[s(u,0),s(u,1),s(u,2)],d=f.map(_=>_.p[1]>e+1e-6),p=f.map(_=>_.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let _=0;_<3;_++)i.f[u*3+_]=n;continue}let b=i.f[u*3],m=(_,T)=>a(_,T,(e-_.p[1])/(T.p[1]-_.p[1])),g=d.filter(Boolean).length,x=g===1?d.indexOf(!0):d.indexOf(!1),v=f[x],y=f[(x+1)%3],M=f[(x+2)%3],w=m(v,y),A=m(M,v);g===1?(l(u,[v,w,A],n),c([w,y,M],b),c([w,M,A],b)):(l(u,[v,w,A],b),c([w,y,M],n),c([w,M,A],n))}}function hm(i,t,e,n){let r=i.p.length/6;for(let o=t;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[o*6+d]=l[d],i.p[o*6+3+d]=u[d];let f=i.c.slice(o*6,o*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var oe=Math.PI/180;function Wt(i,t){let e=new j(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function zM(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function xn(i,t=[]){let e=i.map(([n,r])=>new ee(n,r));return Ms.triangulateShape(e,t.map(n=>n.map(([r,o])=>new ee(r,o))))}function fm(i,t,e,n,r,o,s){let a=new j(s),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],b=t[(d+1)%4],m=e[d],g=e[(d+1)%4],x=b[0]-p[0],v=b[1]-p[1],y=Math.hypot(x,v);if(y<1e-6)continue;let w=.8+.28*((v/y*Nc[0]-x/y*Nc[1]+1)/2),A=(m[0]+g[0]-p[0]-b[0])/2*(-v/y)+(m[1]+g[1]-p[1]-b[1])/2*(x/y),_=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),T=Wt(o,l(n)*w).lerp(a,_),R=Wt(o,l(r)*w).lerp(a,_);i.tri([p[0],n,p[1]],[m[0],r,m[1]],[g[0],r,g[1]],T,R,R),i.tri([p[0],n,p[1]],[g[0],r,g[1]],[b[0],n,b[1]],T,R,T)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function dm(i,t,e,n,r,o,s,a,l,c){let h=new j(l),u=[];for(let m=0;m<c;m++){let g=m/c*Math.PI*2;u.push({y:o+Math.cos(g)*s,s:r+Math.sin(g)*s})}let f=(m,g)=>{let x=t(m,u[g%c].s);return[x[0],u[g%c].y,x[1]]},d=t(e,r),p=t(n,r),b=(m,g,x,v,y)=>{let M=(g[1]-m[1])*(x[2]-m[2])-(g[2]-m[2])*(x[1]-m[1]),w=(g[2]-m[2])*(x[0]-m[0])-(g[0]-m[0])*(x[2]-m[2]),A=(g[0]-m[0])*(x[1]-m[1])-(g[1]-m[1])*(x[0]-m[0]);M*v[0]+w*v[1]+A*v[2]<0?i.tri(m,x,g,y):i.tri(m,g,x,y)};for(let m=0;m<c;m++){let g=(m+.5)/c*Math.PI*2,x=Wt(a,.62+.4*Math.max(0,Math.cos(g))),v=t((e+n)/2,r+Math.sin(g)*s),y=t((e+n)/2,r),M=[v[0]-y[0],Math.cos(g)*s,v[1]-y[1]];b(f(e,m),f(n,m+1),f(n,m),M,x),b(f(e,m),f(e,m+1),f(n,m+1),M,x)}for(let[m,g,x]of[[e,p,d],[n,d,p]]){let v=t(m,r),y=[v[0],o,v[1]],M=[x[0]-g[0],0,x[1]-g[1]];for(let w=0;w<c;w++)b(y,f(m,w),f(m,w+1),M,h)}}function Be(i,t,e,n,r,o,s={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=s.aoFrom??e,c=s.fold??te,h=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),u=(s.holes??[]).map(p=>zM(p)>0?[...p].reverse():p),f=u.length?[...t,...u.flat()]:t,d=s.topFace===!1&&!s.bottom?[]:xn(t,u);if(s.topFace!==!1){let p=new j(o);for(let[b,m,g]of d){let x=f[b],v=f[m],y=f[g];i.tri([x[0],a(x),x[1]],[y[0],a(y),y[1]],[v[0],a(v),v[1]],p,p,p,void 0,s.topFold??c)}}if(s.bottom){let p=Wt(r,.55);for(let[b,m,g]of d){let x=f[b],v=f[m],y=f[g];i.tri([x[0],e,x[1]],[v[0],e,v[1]],[y[0],e,y[1]],p,p,p,void 0,c)}}for(let p of[t,...u])for(let b=0;b<p.length;b++){let m=p[b],g=p[(b+1)%p.length],x=g[0]-m[0],v=g[1]-m[1],y=Math.hypot(x,v);if(y<1e-6||s.skipSide?.(m,g))continue;let w=.8+.28*((v/y*Nc[0]-x/y*Nc[1]+1)/2),A=a(m),_=a(g),T=Wt(r,h(e)*w),R=Wt(r,h(A)*w),I=Wt(r,h(_)*w);i.tri([m[0],e,m[1]],[m[0],A,m[1]],[g[0],_,g[1]],T,R,I,void 0,c),i.tri([m[0],e,m[1]],[g[0],_,g[1]],[g[0],e,g[1]],T,I,T,void 0,c)}}var U={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},bt=Wt(5995775,.3),Bt=Wt(5995775,.17),ie=Wt(3662079,.45),ur=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=mf(n)}rotated(t,e,n){let r=n*oe,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*o-(c-e)*s,e+(l-t)*s+(c-e)*o))}box(t,e,n,r,o,s,a,l=a,c=null){if(e-t<1e-4||s-o<1e-4||r-n<1e-4)return;let h=[this.tf(t,o),this.tf(t,s),this.tf(e,s),this.tf(e,o)];Be(this.buf,df(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}loft(t,e,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==df(l)&&(l.reverse(),c.reverse()),fm(this.buf,l,c,n,r,o,s),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,o,s,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,o,s,a,l,h);this.loft([t+c,e-c,o+c,s-c],[t,e,o,s],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,o,s,a,a,h),this.loft([t,e,o,s],[t+c,e-c,o+c,s-c],r-c,r,a,l)}lyingCyl(t,e,n,r,o,s,a,l,c=l,h=12,u=null){let f=Math.min(a,o-r)/2;if(f<1e-4||s<1e-4)return;let d=(r+o)/2,p=t==="x"?e:n,b=t==="x"?n:e,m=(g,x)=>t==="x"?this.tf(g,x):this.tf(x,g);if(dm(this.buf,m,p-s/2,p+s/2,b,d,f,l,c,h),u)for(let g of[p-s/2,p+s/2])for(let x=0;x<h;x++){let v=x/h*Math.PI*2,y=(x+1)/h*Math.PI*2;this.line(m(g,b+Math.sin(v)*f),m(g,b+Math.sin(y)*f),d+Math.cos(v)*f,d+Math.cos(y)*f,u)}}cyl(t,e,n,r,o,s,a=s,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Be(this.buf,df(h),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],o,o,c)}seg(t,e,n,r,o,s,a=bt){this.line(this.tf(t,n),this.tf(r,s),e,o,a)}line(t,e,n,r,o){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],o,te)}outline(t,e,n,r){for(let o=0;o<4;o++){let s=t[o],a=t[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,e,n,r)}}};function mf(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function df(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function kr(i,t,e,n,r,o,s=U.metal,a=!1){let l=t/2-o-r,c=e/2-o-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,s):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,s)}}function Xs(i,t,e,n,r,o,s,a=null,l=!1){let c=(e-t)/s;for(let h=1;h<s;h++){let u=t+c*h;i.seg(u,n,o,u,r,o,Bt)}for(let h=0;h<s;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,o+.012,u+Math.min(.1,c/4),f,o+.012,ie);else{let d=s>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,o+.012,d,f+.08,o+.012,ie)}}}function pm(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);kr(i,t,e,.07,.05,.05,U.wood,!0),i.pad(o,s,.07,h-.08,a+.02,l,U.fabric,U.fabricTop,.04,bt),i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],h-.08,n,U.fabric,U.fabricTop,bt),i.pad(o,o+c,h-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,bt),i.pad(s-c,s,h-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,bt);let d=(s-c-(o+c))/r;for(let p=0;p<r;p++){let b=o+c+d*p+.02,m=b+d-.04;i.pad(b,m,h-.08,h+.05,a+u+.02,l-.06,U.cushion,U.cushion,.04),i.loft([b+.01,m-.01,a+u*.55,a+u+.14],[b+.03,m-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,U.cushion)}}function mm(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=r?[-1,1]:[-1],b=(_,T)=>i.loft([_-.015,_+.015,T-.015,T+.015],[_-.025,_+.025,T-.025,T+.025],0,.07,U.wood);b(o+.06,a+.06),b(s-.06,a+.06),r||b(s-.06,a+c-.06);for(let _ of p)b(_*(t/2-.06),l-.06),b(_*(t/2-c+.06),l-.06);i.pad(o,s,.07,f-.08,a+.02,a+c,U.fabric,U.fabricTop,.04,bt);for(let _ of p){let[T,R]=_<0?[o+.02,o+c]:[s-c,s-.02];i.pad(T,R,.07,f-.08,a+c-.02,l,U.fabric,U.fabricTop,.04,bt)}i.loft([o,s,a,a+h],[o+.01,s-.01,a,a+h*.5],f-.08,n,U.fabric,U.fabricTop,bt);for(let _ of p)_<0?i.loft([o,o+h,a+h,l],[o,o+h*.5,a+h,l-.01],f-.08,n,U.fabric,U.fabricTop,bt):i.loft([s-h,s,a+h,l],[s-h*.5,s,a+h,l-.01],f-.08,n,U.fabric,U.fabricTop,bt);for(let _ of p){let[T,R]=_<0?[o+h,o+c]:[s-c,s-h];i.pad(T,R,f-.08,d,l-u,l,U.fabric,U.fabricTop,.04,bt)}r||i.pad(s-u,s,f-.08,d,a+.02,a+c-.02,U.fabric,U.fabricTop,.04,bt);let m=o+h,g=r?s-h:s-u,x=Math.max(1,Math.round((g-m)/.62)),v=(g-m)/x;for(let _=0;_<x;_++){let T=m+v*_+.02,R=T+v-.04;i.pad(T,R,f-.08,f+.05,a+h+.02,a+c-.04,U.cushion,U.cushion,.04),i.loft([T+.01,R-.01,a+h*.55,a+h+.14],[T+.03,R-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,U.cushion)}let y=a+c,M=l-u;if(M-y<.2)return;let w=Math.max(1,Math.round((M-y)/.62)),A=(M-y)/w;for(let _ of p)for(let T=0;T<w;T++){let R=y+A*T+.02,I=R+A-.04;_<0?(i.pad(o+h+.02,o+c-.04,f-.08,f+.05,R,I,U.cushion,U.cushion,.04),i.loft([o+h*.55,o+h+.14,R+.01,I-.01],[o+h*.4,o+h*.4+.06,R+.03,I-.03],f+.03,n*.93,U.cushion)):(i.pad(s-c+.04,s-h-.02,f-.08,f+.05,R,I,U.cushion,U.cushion,.04),i.loft([s-h-.14,s-h*.55,R+.01,I-.01],[s-h*.4-.06,s-h*.4,R+.03,I-.03],f+.03,n*.93,U.cushion))}}function VM(i,t,e,n){let r=-e/2,o=e/2,s=-t/2,a=t/2,l=Math.min(.32,n*.36);kr(i,t,e,.08,.06,.03,U.wood,!0),i.box(s,a,.08,l,r+.06,o,U.wood,U.woodTop,bt),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,U.white,U.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,U.wood,U.woodTop,bt),i.box(s,a,n-.05,n,r,r+.09,U.wood,U.woodTop,Bt);let c=l+.2,h=r+(e-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,h,o-.01,U.cushion,U.fabricTop,.025,Bt),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,U.cushion,U.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let p=s+.1+f*d,b=r+.12,m=Math.min(.42,e*.2),g=.1;i.loft([p+.03+g,p+f-.03-g,b+g*.5,b+m-g*.5],[p+.03,p+f-.03,b,b+m],c,c+.06,U.whiteTop),i.loft([p+.03,p+f-.03,b,b+m],[p+.03+g,p+f-.03-g,b+g*.5,b+m-g*.5],c+.06,c+.12,U.whiteTop,U.whiteTop,Bt)}}function GM(i,t,e,n){let r=Math.min(.46,n*.52);kr(i,t,e,r-.04,.035,.02,U.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,U.wood,U.woodTop,bt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,U.cushion,U.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,U.wood,U.woodTop,bt)}function WM(i,t,e,n){kr(i,t,e,n-.04,.06,.05,U.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,ie),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,U.body)}function HM(i,t,e,n){let r=-t/2,o=t/2;i.box(r,o,n-.035,n,-e/2,e/2,U.wood,U.woodTop,bt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,U.metal);let s=Math.min(.42,t*.32);i.box(o-s,o,0,n-.035,-e/2+.03,e/2-.02,U.body,U.bodyTop,bt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,Bt);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,ie);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,U.dark,U.dark,ie),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,U.metal)}function cr(i,t,e,n,r,o=null,s=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,bt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),Xs(i,-t/2,t/2,.08,n,e/2-.02,r,o,s)}function XM(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,U.wood,U.woodTop,bt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,U.wood,U.woodTop,bt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,U.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,U.wood,U.woodTop,Bt),s<o){let l=-t/2+.025+.04,c=s*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?U.fabric:U.cushion,U.fabricTop),l+=h+.006,c++}}}}function YM(i,t,e,n){let r=Math.max(1,Math.round(t/.6));cr(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,bt)}function qM(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,bt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Bt);let o=t/2-.06;i.seg(o,r+.08,e/2+.015,o,r+.4,e/2+.015,ie),i.seg(o,r-.4,e/2+.015,o,r-.08,e/2+.015,ie)}var Uc=(i,t)=>Wt(parseInt(i.slice(1),16),t).getHex(),Hs=!1;function ym(i){Hs=i}function vm(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let o=.62/n;i[e]*=o,i[e+1]*=o,i[e+2]*=o}}function $M(i,t,e,n,r,o){let s=f=>{let d=Math.max(...new j(f).toArray());return Uc(f,d>.05?Math.max(1,.62/d):1)},a=Hs?s(o[0]):Uc(o[0],.55),l=Hs?s(o[1]):Uc(o[1],.8),c=Uc(o[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Bt),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Bt),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,bt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Bt),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let f=Math.min(t,e)*.32;i.cyl(0,0,f,0,n*.9,a,a,16,bt),i.cyl(0,0,f*1.08,n*.9,n,l,c,16,Bt),i.box(-f*.5,f*.5,n*.62,n*.8,f*.7,f*1.02,U.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,U.metal,U.metal,Bt);return}if(r==="bin1100"){for(let d of[-1,1])for(let p of[-1,1])i.cyl(d*(t/2-.12),p*(e/2-.12),.05,0,.14,U.dark,U.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,bt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Bt),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Bt);return}let h=Math.min(.2,n*.19),u=-e/2;for(let f of[-1,1])i.lyingCyl("x",f*(t/2-.05),u+h/2+.01,0,h,.05,h,U.dark,U.metal,12);i.loft([-t*.42,t*.42,u+.07,e/2-.05],[-t/2+.01,t/2-.01,u+.05,e/2-.01],.03,n-.05,a,a,bt),i.box(-t/2,t/2,n-.05,n,u+.03,e/2,l,c,Bt),i.box(-t*.42,t*.42,n-.1,n-.02,u,u+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(u+e/2)/2,t/2,n+.002,(u+e/2)/2,ie),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Bt))}function ZM(i,t,e,n,r,o,s){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,s?U.metal:U.white,s?U.metal:U.whiteTop,bt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Bt),!o)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,U.white,U.whiteTop,Bt),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Bt);else if(s)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,U.metal,U.metal,Bt),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Bt);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-h,n/2+h,.004,h*2,U.dark,U.dark,14,Bt),i.seg(c-h*.45,n/2,e/2+.0045,c-h*.45+.004,n/2,e/2+.0045,bt),i.seg(c+h*.45-.004,n/2,e/2+.0045,c+h*.45,n/2,e/2+.0045,bt)}}}function KM(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,bt);let s=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*s,n/2+Math.sin(l)*s,e/2+.002,Math.cos(c)*s,n/2+Math.sin(c)*s,e/2+.002,Bt)}return}let o=Math.min(t,e)/2;i.cyl(0,0,o,0,n,U.white,U.whiteTop,24,bt),i.cyl(0,0,o*.5,n,n+.01,U.metal,U.metal,12)}function JM(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,.05,bt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,U.dark);for(let s of[-t*.2,t*.2])i.cyl(s,0,.012,-.12,0,U.metal,U.metal,6);return}let o=Math.min(t,e)/2;i.cyl(0,0,o,.04,n-.05,U.white,U.whiteTop,20,bt),i.cyl(0,0,o*.85,n-.05,n,U.white,U.whiteTop,20);for(let s=0;s<3;s++){let a=s/3*Math.PI*2;i.cyl(Math.cos(a)*o*.7,Math.sin(a)*o*.7,.03,0,.04,U.dark,U.dark,6)}i.box(-o*.3,o*.3,n*.55,n*.65,o-.01,o+.01,U.dark)}function jM(i,t,e,n,r){let o=U.metal,s=Wt(U.metal,1.25).getHex(),a=Wt(U.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,U.wood,U.woodTop,Bt),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,o,s,bt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,o,s,14,bt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,U.dark,U.dark,Bt),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,o,s,12,Bt),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,o,s,bt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,U.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,bt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,s,Bt),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,U.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,bt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,s,Bt),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,U.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,o,s,bt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,o,s,bt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,U.dark)}function QM(i,t,e,n){let r=e/2-_m;i.box(-t/2,t/2,.02,n,-e/2,r,U.body,U.bodyTop,bt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,U.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-t/2+.03,o,r+.001,-.03,o,r+.001,Bt),i.seg(.03,o,r+.001,t/2-.03,o,r+.001,Bt))}var _m=.06;function Mm(i,t,e,n){let r=t.rotation*oe,o=Math.cos(r),s=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(C,S,E)=>[t.x+C*o-E*s,S,t.z+C*s+E*o],c=(C,S,E,L,D)=>{i.tri(C,S,E,D),i.tri(C,E,L,D),i.tri(C,E,S,D),i.tri(C,L,E,D)},h=(C,S,E,L)=>{let D=l(C[0],C[1],C[2]),O=l(S[0],S[1],S[2]),k=O[0]-D[0],z=O[1]-D[1],W=O[2]-D[2],G=Math.hypot(k,z,W)||1,Y=[k/G,z/G,W/G],Z=Math.abs(Y[1])>.9?[1,0,0]:[0,1,0],it=[Y[1]*Z[2]-Y[2]*Z[1],Y[2]*Z[0]-Y[0]*Z[2],Y[0]*Z[1]-Y[1]*Z[0]],H=Math.hypot(it[0],it[1],it[2])||1,X=[it[0]/H*E,it[1]/H*E,it[2]/H*E],rt=[Y[1]*X[2]-Y[2]*X[1],Y[2]*X[0]-Y[0]*X[2],Y[0]*X[1]-Y[1]*X[0]],at=[[1,1],[-1,1],[-1,-1],[1,-1]],st=(tt,ft)=>[tt[0]+X[0]*at[ft][0]+rt[0]*at[ft][1],tt[1]+X[1]*at[ft][0]+rt[1]*at[ft][1],tt[2]+X[2]*at[ft][0]+rt[2]*at[ft][1]];for(let tt=0;tt<4;tt++){let ft=(tt+1)%4;i.tri(st(D,tt),st(O,tt),st(O,ft),L),i.tri(st(D,tt),st(O,ft),st(D,ft),L)}},u=(C,S,E,L,D,O,k,z)=>{c(l(C,L,D),l(S,L,D),l(S,L,O),l(C,L,O),z),c(l(C,E,O),l(S,E,O),l(S,L,O),l(C,L,O),k),c(l(C,E,D),l(S,E,D),l(S,E,O),l(C,E,O),k),c(l(C,E,D),l(C,E,O),l(C,L,O),l(C,L,D),k),c(l(S,E,D),l(S,E,O),l(S,L,O),l(S,L,D),k)},f=new j(U.body),d=new j(U.bodyTop),p=new j(U.accent),b=new j(1929098),m=new j(995141),g=(C,S,E,L,D)=>{let O=(k,z,W)=>[k[0]+(z[0]-k[0])*W,k[1]+(z[1]-k[1])*W,k[2]+(z[2]-k[2])*W];for(let k=0;k<D;k++){let z=O(C,S,k/D),W=O(C,S,(k+1)/D),G=O(E,L,(k+1)/D),Y=O(E,L,k/D);c(l(z[0],z[1],z[2]),l(W[0],W[1],W[2]),l(G[0],G[1],G[2]),l(Y[0],Y[1],Y[2]),k%2?b:m)}},x=t.w/2,v=-t.d/2,y=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),w=(t.awning_pitch??12)*Math.PI/180,A=(C,S)=>{t.awning_valance!==!1&&g([-x+.04,C,S+.01],[x-.04,C,S+.01],[-x+.04,C-.2,S+.01],[x-.04,C-.2,S+.01],M)},_=t.variant??"arm";if(_==="side"){let C=e,S=.05,E=0,L=-x+.08+a*(t.w-.16);u(-x,-x+.1,0,C+.05,E-.05,E+.05,f,d),u(x-.06,x,0,C+.05,E-.03,E+.03,f,d),a>.01&&g([-x+.1,C,E],[-x+.1,S,E],[L,C,E],[L,S,E],Math.max(4,Math.round((C-S)/.3))),h([L,S,E],[L,C,E],.02,p);return}if(_==="vertical"){let C=v,S=Math.min(t.d/2,v+y);u(-x,x,e,e+y,C,S,f,d);let E=(C+S)/2;for(let D of[-x+.02,x-.02])h([D,.02,E],[D,e,E],.02,p);let L=e-a*Math.max(0,e-.04);a>.01&&g([-x+.04,e,E],[x-.04,e,E],[-x+.04,L,E],[x-.04,L,E],M),h([-x+.03,L,E],[x-.03,L,E],.025,p);return}if(_==="pergola"){let C=t.d/2-.05,S=e+y,E=S-(C-v)*Math.tan(w);u(-x,x,e,S,v,v+y,f,d);for(let O of[-x+.05,x-.05])h([O,S,v+y],[O,E,C],.035,p),h([O,0,C],[O,E,C],.045,f);h([-x+.05,E,C],[x-.05,E,C],.035,p);let L=v+y+a*(C-v-y),D=S-(L-v)*Math.tan(w)+.04;a>.01&&g([-x+.08,S+.04,v+y],[x-.08,S+.04,v+y],[-x+.08,D,L],[x-.08,D,L],M),h([-x+.08,D,L],[x-.08,D,L],.025,p);return}let T=v,R=v+y;u(-x,x,e,e+y,T,R,f,d);let I=[R-.02,e+y*.35];if(_==="drop"){let C=Math.max(.3,t.d-y),S=[R,I[1]-C],E=a*(Math.PI/2+w),L=[S[0]+Math.sin(E)*C,S[1]+Math.cos(E)*C];for(let D of[-x+.08,x-.08])h([D,S[1],S[0]],[D,L[1],L[0]],.018,p);a>.01&&g([-x+.04,I[1],I[0]],[x-.04,I[1],I[0]],[-x+.04,L[1],L[0]],[x-.04,L[1],L[0]],M),h([-x+.02,L[1],L[0]],[x-.02,L[1],L[0]],.03,p),a>.05&&A(L[1],L[0]);return}let P=Math.max(0,t.d-y)*a,N=[I[0]+P,I[1]-P*Math.tan(w)];if(P>.01){g([-x+.04,I[1],I[0]],[x-.04,I[1],I[0]],[-x+.04,N[1],N[0]],[x-.04,N[1],N[0]],M);let C=Math.max(.3,(t.d-y)/2+.05);for(let S of[-1,1]){let E=S*(x-.12),L=[E,e+.02,R-.04],D=[E,N[1]-.02,N[0]],O=Math.hypot(D[2]-L[2],D[1]-L[1]),k=Math.sqrt(Math.max(0,C*C-(O/2)**2)),z=[E-S*Math.min(k,x-.15),(L[1]+D[1])/2,(L[2]+D[2])/2];h(L,z,.018,p),h(z,D,.018,p)}}h([-x+.02,N[1],N[0]],[x-.02,N[1],N[0]],.03,p),P>.05&&A(N[1],N[0])}function wm(i,t,e,n,r){let o=i.p.length;t2(i,t,e,n,r),t.mirror&&xf(i,o)}function t2(i,t,e,n,r){let o=t.rotation*oe,s=Math.cos(o),a=Math.sin(o),l=t.mirror?-1:1,c=(y,M)=>[t.x+l*y*s-M*a,t.z+l*y*a+M*s],h=e+.05,u=e+t.h-.02,f=new j(.75,.1,.14),d=new j(U.dark),p=new j(U.accent),b=t.w/2-.006,m=(y,M,w)=>{let A=w/g,_=new j(2043212).lerp(f,A),T=new j(U.body).lerp(f,A*.8),R=Math.cos(w),I=Math.sin(w),P=(S,E)=>c(y+M*(S*R-E*I),t.d/2+S*I+E*R),N=(S,E,L,D)=>{let[O,k,z,W]=S;i.tri([O[0],E,O[1]],[k[0],E,k[1]],[z[0],L,z[1]],D),i.tri([O[0],E,O[1]],[z[0],L,z[1]],[W[0],L,W[1]],D)},C=(S,E,L,D,O,k,z,W=z)=>{let G=[P(S,k),P(E,k),P(E,O),P(S,O)];N([G[0],G[1],G[1],G[0]],L,D,W),N([G[3],G[2],G[2],G[3]],L,D,z),N([G[0],G[3],G[3],G[0]],L,D,z),N([G[1],G[2],G[2],G[1]],L,D,z),N([G[0],G[1],G[2],G[3]],D,D,z),N([G[3],G[2],G[1],G[0]],L,L,z)};return C(0,b,h,u,-_m,0,T,_),C(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),C},g=1.83;m(-t.w/2,1,n*g)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),m(t.w/2,-1,r*g)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function e2(i,t,e,n){cr(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.dark,U.dark,bt);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=o*e/.62;i.cyl(a,l,s,n,n+.004,U.dark,1451583,12,ie)}}function n2(i,t,e,n){cr(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,bt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,bt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,U.metal,U.metal,ie),i.cyl(0,-e/2+.05,.02,n,n+.28,U.metal,U.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,U.metal)}function i2(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,U.white,U.whiteTop,bt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,U.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,U.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,U.glass,U.glass,ie),i.cyl(-t/2+.04,0,.02,n,n+.12,U.metal,U.metal,8)}function r2(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,U.whiteTop,U.whiteTop,bt),i.cyl(0,0,.04,.05,.052,U.metal,U.metal,8);for(let[r,o,s,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,o,s,.05,a,ie),i.seg(r,n,o,s,n,a,ie),i.seg(s,.05,a,s,n,a,ie);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,U.metal,U.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,U.metal,U.metal,12,ie)}function o2(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,U.white,U.whiteTop,bt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,U.white,U.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,U.white,U.whiteTop,12,bt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,U.whiteTop)}function s2(i,t,e,n){cr(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,U.white,U.whiteTop,bt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,U.glass,U.glass,ie),i.cyl(0,-e/2+.06,.018,n,n+.2,U.metal,U.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,U.glass,U.glass,ie)}function a2(i,t,e,n){cr(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,U.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,U.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-e/2+.12,-e/2+.16,U.dark,U.dark,ie)}function l2(i,t,e,n){let r=Math.min(t,e)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,U.pot,U.pot,10,bt),i.cyl(0,0,r*.08,o,n*.55,U.wood,U.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),h=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-o)*.16,U.plant,U.plantTop,8,a===s-1?Bt:null)}}function c2(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,U.fabric,U.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,o,s,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,o,s,.014,a,bt)}function u2(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),o=n/r,s=e/r;for(let h=0;h<r;h++){let u=e/2-s*h,f=u-s,d=o*(h+1);i.box(-t/2,t/2,0,d,f,u,U.wood,U.woodTop),i.seg(-t/2,d,u,t/2,d,u,bt)}i.seg(-t/2,0,e/2,-t/2,o,e/2,bt);for(let h of[-t/2,t/2])i.seg(h,o,e/2,h,n,-e/2+s,Bt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,o+a,e/2-s/2,l,o*c+a,e/2-s*(c-.5),ie);for(let h=0;h<c;h+=3){let u=e/2-s*(h+.5),f=o*(h+1);i.seg(l,f,u,l,f+a,u,Bt)}}function h2(i,t,e,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:h}=cd(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,p=t/2,b=-e/2+l;for(let A=0;A<o;A++){let _=e/2-c*A,T=h*(A+1);i.box(u,f,0,T,_-c,_,U.wood,U.woodTop),i.seg(u,T,_,f,T,_,bt)}i.seg(u,0,e/2,u,h,e/2,bt);let m=h*r,g=.2;i.box(u,f,0,m,-e/2,b,U.wood,U.woodTop),i.box(f,p,Math.max(0,m-g),m,-e/2,b,U.wood,U.woodTop),i.seg(u,m,b,f,m,b,bt);for(let A=0;A<s;A++){let _=b+c*A,T=h*(r+1+A);i.box(d,p,Math.max(0,T-h-g),T,_,_+c,U.wood,U.woodTop),i.seg(d,T,_,p,T,_,bt)}i.seg(u,h,e/2,u,m,b,Bt),i.seg(p,m,b,p,n,b+c*(s-1),Bt);let x=.9,v=f-.03,y=d+.03,M=b-.03,w=Math.max(1,s-4);i.seg(v,h+x,e/2-c/2,v,m+x,M,ie),i.seg(v,m+x,M,y,m+x,M,ie),i.seg(y,m+x,M,y,h*(r+w)+x,b+c*(w-.5),ie);for(let A=0;A<o;A+=3){let _=e/2-c*(A+.5);i.seg(v,h*(A+1),_,v,h*(A+1)+x,_,Bt)}for(let A of[v,y])i.seg(A,m,M,A,m+x,M,Bt);for(let A=2;A<w;A+=3){let _=b+c*(A+.5);i.seg(y,h*(r+1+A),_,y,h*(r+1+A)+x,_,Bt)}}function f2(i,t,e,n){kr(i,t,e,.12,.03,.04,U.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,U.wood,U.woodTop,bt),Xs(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function d2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,U.wood,U.woodTop,bt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,U.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=e/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-t/2,a,o,t/2,a,o,Bt)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,ie)}}function p2(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,U.wood,U.woodTop,bt),Xs(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,U.body,U.bodyTop,bt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,bt);let r=Math.max(2,Math.round(t/.25));for(let o=0;o<r;o++){let s=-t/2+t/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,U.metal,U.metal)}}function gm(i,t,e,n,r){let s=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+s,U.wood,U.woodTop,bt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,U.wood,U.woodTop,bt),i.box(-t/2+(r?s:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+s,U.cushion,U.cushion,Bt),r&&(i.box(-t/2,-t/2+s,0,.45-.06,-e/2+s,e/2,U.wood,U.woodTop,bt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,U.wood,U.woodTop,bt),i.box(-t/2+a,-t/2+s,.45-.06,.45+.02,-e/2+a,e/2-.02,U.cushion,U.cushion,Bt))}function m2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,U.metal,U.metal,12),i.cyl(0,0,.025,.02,n-.05,U.metal,U.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,U.metal,U.metal,12,Bt),i.cyl(0,0,r,n-.05,n,U.cushion,U.fabricTop,14,bt)}function g2(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,U.metal),i.box(-.03,.03,.04,.08,-r,r,U.metal),i.cyl(0,0,.06,.02,.1,U.dark,U.dark,8),i.cyl(0,0,.025,.1,.44,U.metal,U.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,U.fabric,U.cushion,bt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,U.fabric,U.fabricTop,bt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,U.metal)}function b2(i,t,e,n){kr(i,t,e,.08,.04,.05,U.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,U.fabric,U.cushion,bt)}function x2(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,U.body,U.bodyTop,bt),Xs(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function y2(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,bt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,U.dark,U.dark,ie),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,ie);for(let o of[.85,1.45])i.seg(-t/2,o,r,t/2,o,r,Bt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,ie),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,ie)}function v2(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,U.body,U.bodyTop,bt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,U.dark),Xs(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,bt)}function _2(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,U.body,U.bodyTop,bt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,ie),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,bt)}function bm(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,U.white,U.whiteTop,bt);let o=e/2-.012;i.seg(-t/2,n-.14,o,t/2,n-.14,o,Bt),i.seg(t/2-.16,n-.07,o,t/2-.08,n-.07,o,ie);let s=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,s+Math.sin(h)*a,o,Math.cos(u)*a,s+Math.sin(u)*a,o,ie),r||i.seg(Math.cos(h)*a*.72,s+Math.sin(h)*a*.72,o,Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Bt)}}function M2(i,t,e,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(t/2)-(s>0?.05:0),s*(t/2)+(s<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),U.wood,U.woodTop);for(let s of[.25,n-.55])i.box(-t/2,t/2,s,s+.08,-e/2,e/2,U.wood,U.woodTop,bt),i.box(-t/2+.04,t/2-.04,s+.08,s+.24,-e/2+.05,e/2-.05,U.white,U.whiteTop,Bt),i.box(-t/2+.05,t/2-.05,s+.24,s+.33,-e/2+.08,-e/2+.4,U.whiteTop,U.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,U.wood,U.woodTop);let o=t/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,e/2+.02,s,n-.15,e/2+.02,bt);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,e/2+.02,o+.18,s,e/2+.02,Bt)}function w2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,U.metal,U.metal,12),i.cyl(0,0,.05,.03,n-.04,U.wood,U.wood,8),i.cyl(0,0,r,n-.04,n,U.wood,U.woodTop,20,bt)}function S2(i,t,e,n){kr(i,t,e,n-.03,.04,.03,U.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,U.wood,U.woodTop,bt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,U.body,U.bodyTop,Bt)}function T2(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,U.dark,U.dark,ie)}function E2(i,t,e,n){let r=gf;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,U.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,U.white,U.whiteTop,bt);let o=Math.max(3,Math.round(t/.1));for(let s=1;s<o;s++){let a=-t/2+t/o*s;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Bt)}}function A2(i,t,e,n){let r=bf;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,U.white,U.whiteTop,bt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,U.white,U.white,bt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,U.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Bt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,ie)}function Uo(i,t,e,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,ie)}}function R2(i,t,e,n,r){let s=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.dark,U.body,bt),i.seg(-t*.25,1.1+n*.15,s+.004,-t*.25,1.1+n*.85,s+.004,ie),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,s,s+.005,U.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,bt),Uo(i,0,1.1+n*.66,Math.min(t,n)*.22,s+.004),i.seg(-t*.08,1.1+n*.66,s+.005,t*.08,1.1+n*.66,s+.005,ie);for(let a of[-1,1])Uo(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,bt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,U.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,ie);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Bt)}function P2(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,U.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,U.metal,U.metal,bt);for(let s of[-t*.4,-t*.25,-t*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,Bt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,U.dark,U.body,14,bt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,U.glass,U.glass,14);let o=Math.min(t*.2,e*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,t*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,ie)}}function C2(i,t,e,n,r){let o=Math.min(t,e)/2;if(i.cyl(0,0,o*.95,0,n*.08,U.dark,U.dark,16),i.cyl(0,0,o,n*.08,n*.78,U.dark,U.body,18,bt),i.cyl(0,0,o*.75,n*.78,n*.84,U.dark,U.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,U.dark,U.metal,bt),Uo(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,U.dark,U.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,U.dark,U.metal,16,bt);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,ie)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,U.dark,U.body)}function I2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,U.white,U.whiteTop,bt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,U.dark);let r=Math.min(n*.38,t*.3),o=-t*.15,s=n*.53;Uo(i,o,s,r,e/2+.004,24),Uo(i,o,s,r*.55,e/2+.004,16),i.seg(o-r,s,e/2+.005,o+r,s,e/2+.005,Bt),i.seg(o,s-r,e/2+.005,o,s+r,e/2+.005,Bt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,U.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,ie);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Bt)}function L2(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,U.white,U.whiteTop,bt);for(let o of[-1,1])Uo(i,o*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,ie);for(let o of[-1,1])i.box(o*t*.25-t*.18,o*t*.25+t*.18,0,n*.5,-e/2,e/2,U.white,U.glass,Bt)}function F2(i,t,e,n){let r=rd-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,U.metal,U.metal,bt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,U.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,U.accent,U.accent)}function D2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.dark,U.body,bt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,U.dark,U.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,ie),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Bt)}function N2(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,U.dark,U.body,bt);let o=Math.min(t,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,e/2+.003,Math.cos(h)*o,s+Math.sin(h)*o,e/2+.003,ie)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,U.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,U.dark,U.body)}function O2(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,U.white,U.whiteTop,bt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Bt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Bt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,U.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,U.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,ie)}function U2(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,U.white,U.whiteTop,bt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,ie),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Bt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,U.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,U.dark,U.body,bt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,ie),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,U.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,U.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-t/2,t/2,.06+a*s+.004,.06+(a+1)*s,-e/2,e/2,U.white,U.whiteTop,bt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,ie)}}var gf=.12,bf=2.05;function Sm(i,t,e){let n=Math.min(.04,.08*Math.min(i,t)),r=Math.min(i-n,(t-n)*e);return{w:r,h:r/e}}function yf(i,t){let e=B2(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function B2(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=Ed(i.type);if(o){let l=t?an(t,i):0,c=(o.x-o.w/2)*e,h=(o.x+o.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+o.y*r+u,y1:l+(o.y+o.h)*r-u,z:(o.z+o.d/2)*n}}let s=t&&i.type!=="fridge_smart"?an(t,i)-mr(i):0,a=k2(i,e,n,r,t);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function k2(i,t,e,n,r){if(i.type==="pool_pump"){let o=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let o=Math.min(t,e)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let o=Math.min(t*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-e/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:o+.02,y1:o+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let o=r?an(r,i):0;return{x0:.06,x1:t/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:gf+.02,y1:gf+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:bf+.015,y1:bf+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function z2(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=Te(i.type);if(!t?.parts.length)return!1;let e=t.parts.reduce((n,r)=>r.w*r.d>n.w*n.d?r:n,t.parts[0]);return e.shape==="cyl"&&(e.axis??"y")==="y"&&e.w>=.85&&e.d>=.85}function V2(i,t,e,n,r,o=!1,s=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new j(1-r,1-r,1-r),c=new j(1,1,1),h=s+.003;if(o){let b=y=>[y[0],h,y[1]],g=(y,M,w)=>t(Math.cos(y/24*2*Math.PI)*M,Math.sin(y/24*2*Math.PI)*w),x=i.p.length,v=b(t(0,0));for(let y=0;y<24;y++){let M=b(g(y,e/2,n/2)),w=b(g(y+1,e/2,n/2)),A=b(g(y,e/2+a,n/2+a)),_=b(g(y+1,e/2+a,n/2+a));i.tri(v,M,w,l),i.tri(M,A,_,l,c,c),i.tri(M,_,w,l,c,l)}mf(t)&&xf(i,x);return}let u=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=b=>[b[0],h,b[1]],p=i.p.length;i.tri(d(u[0]),d(u[1]),d(u[2]),l),i.tri(d(u[0]),d(u[2]),d(u[3]),l);for(let b=0;b<4;b++){let m=(b+1)%4;i.tri(d(u[b]),d(f[b]),d(f[m]),l,c,c),i.tri(d(u[b]),d(f[m]),d(u[m]),l,c,l)}mf(t)&&xf(i,p)}function Bc(i,t,e,n,r=0,o=!1){G2(i,t,e,n,r,o)}function xf(i,t){let e=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function G2(i,t,e,n,r,o=!1){let s=Te(n.type)?0:r-mr(n);if(Te(n.type)||Math.abs(s)<.001)return xm(i,t,e,n,r,o);let a=i.p.length,l=t.p.length,c=e.p.length;xm(i,t,r<.05?e:new ne,n,0);for(let h=a+1;h<i.p.length;h+=3)i.p[h]+=s;for(let h=l+1;h<t.p.length;h+=3)t.p[h]+=s;if(r<0)for(let h=c+1;h<e.p.length;h+=3)e.p[h]+=s}function xm(i,t,e,n,r,o=!1){let s=n.rotation*oe,a=Math.cos(s),l=Math.sin(s),c=n.mirror?-1:1,h=(b,m)=>[n.x+c*b*a-m*l,n.z+c*b*l+m*a],u=new ur(i,t,h),f=Math.max(.05,n.w),d=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":pm(u,f,d,p,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":pm(u,f,d,p,1);break;case"sofa_l":mm(u,f,d,p,!1);break;case"sofa_u":mm(u,f,d,p,!0);break;case"bed":VM(u,f,d,p);break;case"chair":GM(u,f,d,p);break;case"table":WM(u,f,d,p);break;case"desk":HM(u,f,d,p);break;case"nightstand":cr(u,f,d,p,1,p*.72,!0),u.seg(-f/2,p*.5,d/2-.02,f/2,p*.5,d/2-.02,Bt);break;case"wardrobe":cr(u,f,d,p,Math.max(2,Math.round(f/.5)),p*.5);break;case"shelf":XM(u,f,d,p);break;case"kitchen":YM(u,f,d,p);break;case"fridge":qM(u,f,d,p);break;case"fridge_smart":QM(u,f,d,p);break;case"waste_bin":{let b=i.c.length;$M(u,f,d,p,im(n),am(n,sm())),Hs&&vm(i.c,b);break}case"mailbox":{let b=i.p.length,m=t.p.length;jM(u,f,d,p,rm(n));let g=mr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=g;for(let x=m+1;x<t.p.length;x+=3)t.p[x]+=g;if(g>0)return;break}case"wifi_ap":KM(u,f,d,p,n.variant==="wall");return;case"water_heater":if(JM(u,f,d,p,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,m=t.p.length;ZM(u,f,d,p,fd(n).length,n.type==="wall_socket",n.variant==="outdoor");let g=mr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=g;for(let x=m+1;x<t.p.length;x+=3)t.p[x]+=g;return}case"awning":return;case"stove":e2(u,f,d,p);break;case"sink":n2(u,f,d,p);break;case"bathtub":i2(u,f,d,p);break;case"shower":r2(u,f,d,p);break;case"wc":o2(u,f,d,p);break;case"washbasin":s2(u,f,d,p);break;case"tv_board":a2(u,f,d,p);break;case"plant":l2(u,f,d,p);break;case"rug":c2(u,f,d);return;case"stairs":u2(u,f,d,p);break;case"stairs_u":h2(u,f,d,p);break;case"stairwell":return;case"sideboard":f2(u,f,d,p);break;case"dresser":d2(u,f,d,p);break;case"tall_cabinet":cr(u,f,d,p,1,p*.5);break;case"coat_rack":p2(u,f,d,p);break;case"bench":gm(u,f,d,p,!1);break;case"corner_bench":gm(u,f,d,p,!0);break;case"bar_stool":m2(u,f,d,p);break;case"office_chair":g2(u,f,d,p);break;case"stool":b2(u,f,d,p);break;case"kitchen_wall":x2(u,f,d,p);return;case"kitchen_tall":y2(u,f,d,p);break;case"island":v2(u,f,d,p);break;case"worktop":u.box(-f/2,f/2,Math.max(0,p-.04),p,-d/2,d/2,U.whiteTop,U.whiteTop,bt);return;case"dishwasher":_2(u,f,d,p);break;case"washer":bm(u,f,d,p,!1);break;case"dryer":bm(u,f,d,p,!0);break;case"bunk_bed":M2(u,f,d,p);break;case"table_round":w2(u,f,d,p);break;case"coffee_table":S2(u,f,d,p);break;case"tv_wall":T2(u,f,d,p);return;case"parking":{let m=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let g=0;g<4;g++)u.seg(m[g][0],.012,m[g][1],m[(g+1)%4][0],.012,m[(g+1)%4][1],Bt);u.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,bt),u.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,bt);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,p,-d/2,-d/2+d*.3,U.white,U.whiteTop,bt),u.box(-f*.2,f*.2,p*.5,p*.62,-d/2+d*.3,-d/2+d*.31,U.accent);return;case"radiator":E2(u,f,d,p);return;case"ac_unit":A2(u,f,d,p);return;case"inverter":R2(u,f,d,p,n.variant??null);return;case"grid_point":D2(u,f,d,p);break;case"wallbox":N2(u,f,d,p);return;case"pool_pump":P2(u,f,d,p);break;case"pool_filter":C2(u,f,d,p,n.variant??null);break;case"pool_heat_pump":I2(u,f,d,p);break;case"pool_dosing":L2(u,f,d,p);break;case"pool_valve":F2(u,f,d,p);return;case"meter":O2(u,f,d,p);return;case"home_battery":if(U2(u,f,d,p,n.variant??null),n.variant==="wall")return;break;default:{let b=Te(n.type);if(b){let m=va(n.type),g=m?x=>pu(m,x):_d(n.type)&&!o?Zo:null;if(Ys(u,b,f,d,p,r,null,null,g),r>.05)return}else u.box(-f/2,f/2,0,p,-d/2,d/2,U.body,U.bodyTop,bt)}}V2(e,h,f,d,n.type==="plant"?.35:.5,z2(n),Math.min(0,r))}function Tm(i){return!!Te(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function pf(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=U;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Ys(i,t,e,n,r,o,s,a=null,l=null){let c=!!a;for(let h of Dc(t,e,n,r)){if(l?.(h)||a&&!a(h))continue;let u=c?{...h,glow:!0,w:h.w+.006/e,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=u.glow&&s!==null,d=f?s:pf(u.color,!1)??U.body,p=f?s:pf(u.top,!1)??pf(u.color,!0)??Wt(d,1.25).getHex(),b=o+u.y*r,m=o+Math.min(r,(u.y+u.h)*r),g=i.colors.length,x=u.edges==="glow"?ar:u.edges==="faint"?Bt:u.edges?bt:null,v=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))v.lyingCyl(u.axis,u.x*e,u.z*n,b,m,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,d,p,14,x);else if(u.shape==="cyl")v.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,b,m,d,p,14,x);else if(u.shape==="loft"){let y=u.tx??u.x,M=u.tz??u.z,w=u.tw??u.w,A=u.td??u.d;v.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(y-w/2)*e,(y+w/2)*e,(M-A/2)*n,(M+A/2)*n],b,m,d,p,x)}else v.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,b,m,(u.z-u.d/2)*n,(u.z+u.d/2)*n,d,p,x);Hs&&!f&&!c&&(u.color?.startsWith("#")||u.top?.startsWith("#"))&&vm(i.colors,g)}}function Em(i,t,e,n,r,o){let s=o*oe,a=Math.cos(s),l=Math.sin(s),c=(p,b)=>[e+p*a-b*l,r+p*l+b*a],h=new ur(i,new ze,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,U.accent,U.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,U.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Am(i,t,e,n,r){let o=Md(t)*n,s=new ur(i,new ze,(c,h)=>[c,h-o]);Ys(s,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,Zo);let a=0,l=0;for(let c of Dc(t,e,n,r)){if(!Zo(c))continue;let h=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function qs(i,t,e,n,r,o=s=>!!s.glow){let s=e.rotation*oe,a=Math.cos(s),l=Math.sin(s),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];Ys(new ur(i,new ze,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,o)}function Rm(i,t,e,n,r,o){let s=W2(t,e,o,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*oe,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];Ys(new ur(i,new ze,u),{...t,parts:s},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function W2(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),o=i.parts.filter(a=>pu(t,a)),s;if(t==="curtain")s=o.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...o.map(c=>c.y+c.h)),l=Math.max(.02,1-r);s=o.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return s}function Pm(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),o=Math.max(.005,t.h),s=0,a=0,l=0,c=0;for(let m of Dc(i,n,r,o)){if(!m.glow)continue;let g=(m.x+(m.shape==="loft"?m.tx??m.x:m.x))/2*n,x=(m.z+(m.shape==="loft"?m.tz??m.z:m.z))/2*r,v=m.y*o,y=Math.min(o,(m.y+m.h)*o),M=Math.max(1e-6,m.w*n*m.d*r*Math.max(0,y-v));s+=M,a+=g*M,l+=(v+y)/2*M,c+=x*M}if(!s)return null;let h=a/s,u=c/s,f=t.rotation*oe,d=Math.cos(f),p=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*h*d-u*p,e+l/s,t.z+b*h*p+u*d]}function kc(i,t,e,n,r){let o=e.rotation*oe,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*s-u*a,e.z+l*h*a+u*s];Ys(new ur(i,new ze,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}function H2(i){let t=i.point_ids;return!!t&&t.length===i.points.length&&t.every(e=>typeof e=="string"&&e.length>0)&&new Set(t).size===t.length}function X2(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],o=e[1]-t[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-o*u)/(s*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*p-n[0],l[1]+f*p-n[1])<.4}))}function zc(i,t){if(t.type!=="balcony"||t.points.length<3)return[];let e=H2(t)?t.point_ids:void 0,n=i.elevation+vi(i,t)+ki.balcony,r=t.height&&t.height>.3?t.height:1,o=[];for(let s=0;s<t.points.length;s++){let a=(s+1)%t.points.length,l=t.points[s],c=t.points[a];X2(i,l,c)||o.push({floorId:i.id,areaId:t.id,index:s,startIndex:s,endIndex:a,start:l,end:c,...e?{startId:e[s],endId:e[a]}:{},surfaceY:n,height:r})}return o}var Y2={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function Im(i,t){return t.type==="pool"?ga(i,t):vi(i,t)+(Vn(t.type)?.01:ki[t.type])}function $s(i){return vn(i)>=0?i:[...i].reverse()}function q2(i,t){let e=i[t];if(Vn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===t||!(o.cut&&r>t||o.type==="pool")||o.points.length<3||o.points.every(s=>jt(s,e.points))&&n.push($s(o.points))}return n}function Cm(i,t,e,n,r,o,s,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Be(i,$s([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,o,s,a,{aoFrom:r-1});return}let p=(y,M)=>[t[0]+f*M,y,t[1]+d*M],b=(y,M)=>[e[0]+f*M,y+l,e[1]+d*M],m=(y,M)=>{i.tri(y[0],y[1],y[2],M,M,M,void 0,te),i.tri(y[0],y[2],y[3],M,M,M,void 0,te),i.tri(y[0],y[2],y[1],M,M,M,void 0,te),i.tri(y[0],y[3],y[2],M,M,M,void 0,te)},g=new j(a),x=new j(Wt(s,.9)),v=new j(Wt(s,.6));m([p(o,1),b(o,1),b(o,-1),p(o,-1)],g),m([p(r,1),b(r,1),b(r,-1),p(r,-1)],v),m([p(r,1),b(r,1),b(o,1),p(o,1)],x),m([p(r,-1),b(r,-1),b(o,-1),p(o,-1)],x),m([p(r,1),p(r,-1),p(o,-1),p(o,1)],x),m([b(r,1),b(r,-1),b(o,-1),b(o,1)],x)}function Lm(i,t,e,n){let r=e.outdoor??[];r.forEach((o,s)=>{if(o.points.length<3)return;let a=vi(e,o),l=(x,v)=>a-qo(e,o,x,v),c=a-(o.type==="pool"?0:o.slope??0),h=Vn(o.type)&&o.height?o.height:ki[o.type],u={...Y2[o.type],top:h},f=$s(o.points),d=Wt(u.edge,u.edgeAlpha),p=o.open&&(o.type==="fence"||o.type==="pergola")?f.length-1:-1,b=x=>{if(o.outline!==!1)for(let v=0;v<f.length;v++){if(v===p)continue;let y=f[v],M=f[(v+1)%f.length];t.seg([y[0],x(y[0],y[1]),y[1]],[M[0],x(M[0],M[1]),M[1]],d,te)}},m=n??i,g=new j(n?1734832:u.color);switch(o.type){case"pool":{let x=new j(u.side),v=new j(Wt(u.side,.55)),y=new j(932440),M=ga(e,o),w=ma(e,o),A=nd(e,o);for(let[_,T,R]of xn(f)){let I=f[_],P=f[T],N=f[R];(n?m:i).tri([I[0],M,I[1]],[N[0],M,N[1]],[P[0],M,P[1]],g,g,g,void 0,te),i.tri([I[0],A,I[1]],[N[0],A,N[1]],[P[0],A,P[1]],y,y,y,void 0,te)}for(let _=0;_<f.length;_++){let T=f[_],R=f[(_+1)%f.length];i.tri([R[0],A,R[1]],[R[0],w,R[1]],[T[0],w,T[1]],v,x,x,void 0,te),i.tri([R[0],A,R[1]],[T[0],w,T[1]],[T[0],A,T[1]],v,x,v,void 0,te)}if(!o.above&&lu(e,o)){let _=new j(660258),T=new j(396054),R=A-.2,I=Math.min(a,w);for(let P=0;P<f.length;P++){let N=f[P],C=f[(P+1)%f.length];i.tri([N[0],R,N[1]],[N[0],I,N[1]],[C[0],I,C[1]],T,_,_,void 0,te),i.tri([N[0],R,N[1]],[C[0],I,C[1]],[C[0],R,C[1]],T,_,T,void 0,te)}for(let[P,N,C]of xn(f)){let S=f[P],E=f[N],L=f[C];i.tri([S[0],R,S[1]],[E[0],R,E[1]],[L[0],R,L[1]],T,T,T,void 0,te)}if(o.outline!==!1)for(let P=0;P<f.length;P++){let N=f[P],C=f[(P+1)%f.length];t.seg([N[0],R,N[1]],[C[0],R,C[1]],Wt(u.edge,u.edgeAlpha*.35),te),t.seg([N[0],R,N[1]],[N[0],I,N[1]],Wt(u.edge,u.edgeAlpha*.25),te)}}if(w>a+.02){let _=new j(2044240),T=new j(1187123);for(let R=0;R<f.length;R++){let I=f[R],P=f[(R+1)%f.length];i.tri([I[0],a,I[1]],[I[0],w,I[1]],[P[0],w,P[1]],T,_,_,void 0,te),i.tri([I[0],a,I[1]],[P[0],w,P[1]],[P[0],a,P[1]],T,_,T,void 0,te)}b(()=>a+.005)}if(b(()=>w),b(()=>M+.005),o.outline!==!1)for(let _=0;_<f.length;_++){let T=f[_],R=f[(_+1)%f.length];t.seg([T[0],A+.005,T[1]],[R[0],A+.005,R[1]],Wt(u.edge,u.edgeAlpha*.4),te)}break}case"fence":{for(let x=0;x<f.length;x++){if(x===p)continue;let v=f[x],y=f[(x+1)%f.length],M=Math.hypot(y[0]-v[0],y[1]-v[1]),w=Math.max(1,Math.round(M/2)),A=p>=0&&x===p-1?w:w-1;for(let _=0;_<=A;_++){let T=_/w,R=v[0]+(y[0]-v[0])*T,I=v[1]+(y[1]-v[1])*T,P=l(R,I);Be(i,$s([[R-.04,I-.04],[R+.04,I-.04],[R+.04,I+.04],[R-.04,I+.04]]),P,P+u.top,u.side,u.color)}for(let _ of[.35,.85])t.seg([v[0],l(v[0],v[1])+_*u.top,v[1]],[y[0],l(y[0],y[1])+_*u.top,y[1]],d,te)}break}case"pergola":{let x=u.top;for(let[v,y]of f){let M=l(v,y);Be(i,$s([[v-.06,y-.06],[v+.06,y-.06],[v+.06,y+.06],[v-.06,y+.06]]),M,M+x,u.side,u.color)}for(let v=0;v<f.length;v++){if(v===p)continue;let y=f[v],M=f[(v+1)%f.length],w=l(y[0],y[1])+x;if(Cm(i,y,M,.12,w-.16,w,u.side,u.color,l(M[0],M[1])-l(y[0],y[1])),o.bracing){let A=l(y[0],y[1]),_=l(M[0],M[1]);t.seg([y[0],A+.25,y[1]],[M[0],_+x-.25,M[1]],d,te),t.seg([M[0],_+.25,M[1]],[y[0],A+x-.25,y[1]],d,te)}}if(cu(f)){let v=gd(f),y=v.x1-v.x0,M=v.z1-v.z0,w=y>=M,A=w?y:M,_=Math.max(1,Math.round(A/.6));for(let T=1;T<_;T++){let R=(w?v.x0:v.z0)+A*T/_,I=w?[R,v.z0+.06]:[v.x0+.06,R],P=w?[R,v.z1-.06]:[v.x1-.06,R],N=l(I[0],I[1])+x;Cm(i,I,P,.06,N-.04,N+.08,u.side,u.color,l(P[0],P[1])-l(I[0],I[1]))}}b((v,y)=>l(v,y)+x+.004);break}case"balcony":{Be(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let v=Wt(9417983,.42),y=Wt(3662079,.55);for(let M of zc(e,o)){let w=M.start,A=M.end,_=Math.hypot(A[0]-w[0],A[1]-w[1]),T=M.surfaceY-e.elevation;t.seg([w[0],T+M.height,w[1]],[A[0],T+M.height,A[1]],y,te),t.seg([w[0],T+.1,w[1]],[A[0],T+.1,A[1]],v,te);let R=Math.max(1,Math.round(_/.12));for(let I=0;I<=R;I++){let P=I/R,N=w[0]+(A[0]-w[0])*P,C=w[1]+(A[1]-w[1])*P;t.seg([N,T,C],[N,T+M.height,C],I===0||I===R?y:v,te)}}break}default:{let x=(y,M)=>l(y,M)+u.top,v=q2(r,s);if(Be(i,f,c,o.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:v}),b((y,M)=>x(y,M)+.004),o.type==="hedge"&&b((y,M)=>l(y,M)+.004),o.outline!==!1)for(let y of v)for(let M=0;M<y.length;M++){let w=y[M],A=y[(M+1)%y.length];t.seg([w[0],x(w[0],w[1])+.004,w[1]],[A[0],x(A[0],A[1])+.004,A[1]],d,te)}}}})}var Gc=Math.PI/180,$2=1.13,Z2=1.72,vf=.025,zr=.07,Fm=.25;function Dm(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=gi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,h=-s/l,u=o.slope?[[0,Qn(o.slope,o.a[0],o.a[1])],[l,Qn(o.slope,o.b[0],o.b[1])]]:void 0,f=o.profile&&u?zs([o.profile,u],l)??o.profile:o.profile??u,d=f?.length?Math.max(...f.map(([,g])=>g)):Math.min(n.height,o.height??n.height),p=o.sources.find(g=>g.room_id===o.roomLeft)?.edge??null,b={floorId:n.id,room:o.roomLeft,edge:p,free:!!o.free},m=(g,x,v,y,M)=>e.push({key:g,section:null,side:"top",flat:!1,o:x,eu:v,es:[0,1,0],n:y,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[y[0],y[2]],wall:{...b,...M?{profile:M}:{}}});m(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+h*o.right],[s/l,0,a/l],[c,0,h],f),o.free&&m(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-h*o.left],[-s/l,0,-a/l],[-c,0,-h],f?sw(f,l):void 0)}}return e}var _f="ground";function Bo(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Nm(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],o=Bo(i),s=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:pa(o,s,a)):t.base??0;return{key:_f,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function K2(i,t){let e=[];for(let n of i.floors)if(!(t&&n.id!==t))for(let r of n.outdoor??[])for(let o of zc(n,r)){if(!o.startId||!o.endId)continue;let s=o.end[0]-o.start[0],a=o.end[1]-o.start[1],l=Math.hypot(s,a);if(l<1e-9)continue;let c=[s/l,0,a/l],h=vn(r.points)>=0?1:-1,u=[h*a/l,0,-h*s/l],f=o.startId,d=o.endId,p={floorId:n.id,balconyId:r.id,pointAId:f,pointBId:d,height:o.height};e.push({key:`balcony:${n.id}:${r.id}:${f}:${d}`,section:null,side:"top",flat:!1,o:[o.start[0],o.surfaceY,o.start[1]],eu:c,es:[0,1,0],n:u,lu:l,ls:o.height,pitch:90,span:()=>[0,l],facing:[u[0],u[2]],rail:p})}return e}function J2(i,t){let e=i.rail;if(e.pointAId===t.point_a_id&&e.pointBId===t.point_b_id)return i;let n=[i.o[0]+i.eu[0]*i.lu,i.o[1]+i.eu[1]*i.lu,i.o[2]+i.eu[2]*i.lu];return{...i,key:`balcony:${e.floorId}:${e.balconyId}:${t.point_a_id}:${t.point_b_id}`,o:n,eu:[-i.eu[0],-i.eu[1],-i.eu[2]],rail:{...e,pointAId:t.point_a_id,pointBId:t.point_b_id}}}function Om(i,t){let e=K2(i,t);return(i.settings.roof.solar??[]).flatMap(n=>{let r=n.balcony_mount;if(!r||r.floor_id!==t)return[];let o=e.find(s=>{let a=s.rail;return!!a&&a.balconyId===r.balcony_id&&(a.pointAId===r.point_a_id&&a.pointBId===r.point_b_id||a.pointAId===r.point_b_id&&a.pointBId===r.point_a_id)});return o?[{face:J2(o,r),field:n}]:[]})}function j2(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Gr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>Q2(x,Ic(i,x,x.overhang??t.overhang)));let e=j2(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(v=>v[0])),r=e.rooms.flatMap(x=>x.points.map(v=>v[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=e.elevation+e.height;if(t.type==="flat")return[Um("main",null,s,l,a,c,h+Fm)];let u=a-s>=c-l,f=t.ridge==="short"?!u:u,d=(f?c-l:a-s)/2,p=d*Math.tan(t.pitch*Gc),b=(x,v,y)=>f?[x,h+y,(l+c)/2+v]:[(s+a)/2+v,h+y,x],[m,g]=f?[s,a]:[l,c];return[-1,1].map(x=>Vc(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(m,x*d,0),b(g,x*d,0),b(m,0,p),t.pitch,()=>[0,g-m]))}function Q2(i,t){let e=hn(i),n=un(i),r=(v,y,M)=>{let[w,A]=e.at(v,y);return[w,M,A]},o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let v=e.at(a,-o),y=e.at(l,e.w+s);return[Um(i.id,i.id,Math.min(v[0],y[0]),Math.min(v[1],y[1]),Math.max(v[0],y[0]),Math.max(v[1],y[1]),i.eave_a+Fm)]}if(i.shape==="pent")return[Vc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,e.w+s,n.y(e.w+s)),i.pitch_a,()=>[0,c])];let h=Cc(i),u=h?Qh(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",p=i.shape==="pyramid"?(e.u1-e.u0)/2:f?u.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,m=f?e.u0+p-a:0,g=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let v=Math.hypot(n.vr+o,n.rh-n.y(-o));x.push(Vc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,y=>[m*(y/v),c-g*(y/v)]))}if(e.w-n.vr>.3){let v=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));x.push(Vc(`${i.id}:b`,i.id,"b",r(l,e.w+s,n.y(e.w+s)),r(a,e.w+s,n.y(e.w+s)),r(l,n.vr,n.rh),i.pitch_b,y=>[g*(y/v),c-m*(y/v)]))}if(f||d){let v=n.y(-o),y=n.y(e.w+s),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+s,y),r(a,-o,v),r(e.u0+p,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-o,v),r(l,e.w+s,y),r(e.u1-b,n.vr,n.rh)]);for(let[w,A,_,T,R]of M){let I=tw(w,i.id,A,_,T,R);I&&x.push(I)}}return x}function tw(i,t,e,n,r,o){let s=Zs(Vr(r,n));if(s<.3)return null;let a=hr(Vr(r,n)),l=Vr(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=Zs(h);if(u<.3)return null;let f=hr(h),d=hr(zm(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=hr([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Gc;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:s,ls:u,pitch:b,span:g=>{let x=Math.min(1,Math.max(0,g/u));return[c*x,s-(s-c)*x]},facing:[p[0],p[2]]}}function Vc(i,t,e,n,r,o,s,a){let l=hr(Vr(r,n)),c=hr(Vr(o,n)),h=hr(zm(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=hr([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:Zs(Vr(r,n)),ls:Zs(Vr(o,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function Um(i,t,e,n,r,o,s){let a=r-e>=o-n,l=a?r-e:o-n,c=a?o-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Bm(i){let t=i.module_w||$2,e=i.module_h||Z2;return i.portrait===!1?[e,t]:[t,e]}function ew(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function km(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Gc:i.wall||i.rail?Math.min(90,Math.max(0,t.tilt??0))*Gc:0}function nw(i,t){let[,e]=Bm(t),n=km(i,t);return i.wall||i.rail?e*Math.cos(n)+vf:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+vf}function Ks(i,t,e=!1){let[n,r]=Bm(t),o=[],s=km(i,t),a=r*Math.cos(s),l=nw(i,t),c=ew(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,m,g)=>[i.o[0]+i.eu[0]*b+i.es[0]*m+i.n[0]*g,i.o[1]+i.eu[1]*b+i.es[1]*m+i.n[1]*g,i.o[2]+i.eu[2]*b+i.es[2]*m+i.n[2]*g],p=(b,m)=>{if(i.rail||i.unbounded)return!0;if(m<-1e-6||m>i.ls+1e-6||i.wall?.profile&&m>cn(i.wall.profile,b)+1e-6)return!1;let[g,x]=i.span(m);return b>=g-1e-6&&b<=x+1e-6};return c.forEach((b,m)=>{let g=t.align==="right"?h-b:t.align==="center"?(h-b)/2:0;for(let x=0;x<b;x++){let v=`${m}:${x}`,y=u.has(v);if(y&&!e)continue;let M=t.u+(x+g)*(n+vf),w=t.v+m*l,A=M+n,_=w+(i.flat||i.wall||i.rail?a:r);if(f){if(!(p((M+A)/2,w)&&p((M+A)/2,_)))continue}else if(![[M,w],[A,w],[A,_],[M,_]].every(([C,S])=>p(C,S)))continue;if(i.wall?.profile&&!aw(i.wall.profile,M,A,_))continue;if((i.wall||i.rail)&&s>.001){let C=zr+r*Math.sin(s),[S,E]=t.flip?[C,zr]:[zr,C],L=[d(M,w,S),d(A,w,S),d(A,_,E),d(M,_,E)],D=t.flip?w:_,O=[M+.05,A-.05].map(k=>[d(k,D,0),d(k,D,C)]);o.push({corners:L,posts:O,cell:v,skipped:y});continue}if(!i.flat){o.push({corners:[d(M,w,zr),d(A,w,zr),d(A,_,zr),d(M,_,zr)],posts:[],cell:v,skipped:y});continue}let T=.15,R=T+r*Math.sin(s),[I,P]=t.flip?[_,w]:[w,_],N=[d(M,I,T),d(A,I,T),d(A,P,R),d(M,P,R)];o.push({corners:N,posts:[M+.05,A-.05].flatMap(C=>[[d(C,I,0),d(C,I,T)],[d(C,P,0),d(C,P,R)]]),cell:v,skipped:y})}}),o}function Vr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Zs(i){return Math.hypot(i[0],i[1],i[2])}function hr(i){let t=Zs(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function zm(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var iw=.78,rw=1.18;function ow(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||iw,module_h:i.h||rw}}function Wc(i,t){let e=Ks(i,ow(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Hc(i,t,e){let n=t?Wc(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,o=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>o)continue;let l=a.rooms.find(c=>jt([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}function sw(i,t){return[...i].reverse().map(([e,n])=>[t-e,n])}function aw(i,t,e,n){let r=i[i.length-1][0],o=Math.max(0,Math.min(r,Math.min(t,e))),s=Math.max(0,Math.min(r,Math.max(t,e)));return cn(i,o)<n-1e-6||cn(i,s)<n-1e-6?!1:i.every(([a,l])=>a<=o+1e-6||a>=s-1e-6||l>=n-1e-6)}var Js=1712952,js=2239816,Hm=1318193,fr=Wt(3662079,.9),ko=Wt(5995775,.45),tn=.14,lw=9427199,cw=13226982,uw=14936565,hw={black:{glass:new j(329483),edge:Wt(9082544,.32),cells:Wt(2766160,.22)},blue:{glass:new j(1386842),edge:Wt(10467583,.55),cells:Wt(4025599,.35)}},fw=Wt(13226982,.5),dw=Wt(13226982,.85),pw=Wt(16757575,.95),Vm=new j(2845583),Gm=new j(1713986),mw=new j(3662079).multiplyScalar(.35),Wm=new j(4871791);function gw(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Xm(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:yw(i),r=e?.type==="custom"?vw(i,e.sections??[],e.overhang):n?[n]:[];return xw(i,r),bw(i,r,t),r}function bw(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Gr(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?Wc(s,o):null;if(!s||!a)continue;let l=s.section?t.find(E=>E.sections?.includes(s.section)):t[0];if(!l)continue;let c=o.float?Hc(i,s,o):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=E=>[E[0],E[1]-u,E[2]],[d,p,b,m]=a.map(f),g=e.get(o.id)??{open:0,tilt:0,cover:0},x=!!c&&(h!==null||c.floor.id===l.floor.id),v=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new ne,lines:new ze,glass:new ne}).get(h.id):x?l.win??={solid:new ne,lines:new ze,glass:new ne}:l.winRoof??={solid:new ne,lines:new ze,glass:new ne},y=(E,L)=>[E[0]+s.n[0]*L,E[1]+s.n[1]*L,E[2]+s.n[2]*L],M=(E,L,D)=>[E[0]+(L[0]-E[0])*D,E[1]+(L[1]-E[1])*D,E[2]+(L[2]-E[2])*D],w=g.open>.02||g.tilt>.02?pw:dw,A=[d,p,b,m].map(E=>y(E,.06)),_=[d,p,b,m].map(E=>y(E,-.02));for(let E=0;E<4;E++){v.lines.seg(A[E],A[(E+1)%4],w);let L=(E+1)%4;v.solid.tri(_[E],_[L],A[L],Wm),v.solid.tri(_[E],A[L],A[E],Wm)}let T=(g.open>.02?30*Math.min(1,g.open):g.tilt>.5?12:0)*oe,R=Math.hypot(b[0]-p[0],b[1]-p[1],b[2]-p[2]),I=E=>{let L=s.es;return[E[0]-L[0]*R*Math.cos(T)+s.n[0]*R*Math.sin(T),E[1]-L[1]*R*Math.cos(T)+s.n[1]*R*Math.sin(T),E[2]-L[2]*R*Math.cos(T)+s.n[2]*R*Math.sin(T)]},P=y(m,.065),N=y(b,.065),C=I(P),S=I(N);v.glass.tri(C,S,N,Vm),v.glass.tri(C,N,P,Vm);for(let[E,L]of[[C,S],[S,N],[N,P],[P,C]])v.lines.seg(E,L,w);if(g.cover>.02){let E=Math.min(1,g.cover),L=y(M(P,C,E),.01),D=y(M(N,S,E),.01),O=y(P,.01),k=y(N,.01);v.solid.tri(L,D,k,Gm),v.solid.tri(L,k,O,Gm);let z=Math.max(1,Math.round(R*E/.05));for(let W=1;W<=z;W++){let G=W/z;v.lines.seg(y(M(O,L,G),.004),y(M(k,D,G),.004),mw)}}}}function xw(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Gr(i).map(r=>[r.key,r]));for(let r of e){let o=n.get(r.face);if(!o)continue;let s=o.section?t.find(a=>a.sections?.includes(o.section)):t[0];s&&Mf(s.solid,s.lines,o,r,s.floor.elevation+s.base)}}function Mf(i,t,e,n,r){let o=c=>[c[0],c[1]-r,c[2]],s=hw[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Ks(e,n)){let[h,u,f,d]=c.corners.map(o);i.tri(h,u,f,s.glass),i.tri(h,f,d,s.glass),i.tri(h,f,u,s.glass),i.tri(h,d,f,s.glass);let p=(g,x=.004)=>[g[0]+e.n[0]*x,g[1]+e.n[1]*x,g[2]+e.n[2]*x],b=(g,x,v)=>[g[0]+(x[0]-g[0])*v,g[1]+(x[1]-g[1])*v,g[2]+(x[2]-g[2])*v],m=[h,u,f,d].map(g=>p(g));for(let g=0;g<4;g++)t.seg(m[g],m[(g+1)%4],s.edge);for(let g=1;g<a;g++)t.seg(p(b(h,u,g/a)),p(b(d,f,g/a)),s.cells);for(let g=1;g<l;g++)t.seg(p(b(h,d,g/l)),p(b(u,f,g/l)),s.cells);for(let[g,x]of c.posts)t.seg(o(g),o(x),fw)}}function yw(i){let t=i.settings.roof,e=gw(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(R=>R.points.map(I=>I[0])),r=e.rooms.flatMap(R=>R.points.map(I=>I[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=new ne,u=new ze;if(t.type==="flat"){Be(h,[[s,l],[a,l],[a,c],[s,c]],0,.25,Js,js,{bottom:!0});let R=.252;for(let[I,P]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])u.seg([I[0],R,I[1]],[P[0],R,P[1]],fr),u.seg([I[0],0,I[1]],[P[0],0,P[1]],ko);return{floor:e,base:e.height,solid:h,lines:u,glass:new ne}}let f=a-s>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-s)/2,b=p*Math.tan(t.pitch*oe),m=(R,I,P)=>d?[R,P,(l+c)/2+I]:[(s+a)/2+I,P,R],[g,x]=d?[s,a]:[l,c],v=new j(js),y=new j(Js),M=(R,I,P,N,C)=>{h.tri(R,I,P,C),h.tri(R,P,N,C)};for(let R of[-1,1]){M(m(g,R*p,0),m(x,R*p,0),m(x,0,b),m(g,0,b),v),M(m(g,R*p,-tn),m(g,0,b-tn),m(x,0,b-tn),m(x,R*p,-tn),y),M(m(g,R*p,-tn),m(x,R*p,-tn),m(x,R*p,0),m(g,R*p,0),y);for(let I of[g,x])M(m(I,R*p,-tn),m(I,R*p,0),m(I,0,b),m(I,0,b-tn),y);u.seg(m(g,R*p,0),m(x,R*p,0),ko);for(let I of[g,x])u.seg(m(I,R*p,0),m(I,0,b),ko)}let w=t.overhang,A=new j(Hm),_=p-w,T=_*Math.tan(t.pitch*oe);for(let R of[g+w,x-w])h.tri(m(R,-_,-tn),m(R,_,-tn),m(R,0,T-tn),A),h.tri(m(R,_,-tn),m(R,-_,-tn),m(R,0,T-tn),A);return u.seg(m(g,0,b+.004),m(x,0,b+.004),fr),{floor:e,base:e.height,solid:h,lines:u,glass:new ne}}function vw(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,o=new Map(Gr(i).map(l=>[l.key,l])),s=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(s.map(l=>{let c=Nr(t,l),h=c?null:Y0(t,l),u=c?tf(c,l):h?$0(l,h):l,f=Ic(i,c?u:l,u.overhang??e),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,p=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:p?H0(u,Or(u,d).faces):[]}]}));for(let l of s){let c=a.get(l),h=z0(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new ne,lines:new ze,glass:new ne,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,p=h.elevation+h.height>l.base+.05&&!l.dormer&&!d,b=t.filter(y=>y!==l&&Nr(t,y)===l).flatMap(y=>k0(l,y));for(let y of i.settings.roof.windows??[]){let M=o.get(y.face),w=M&&M.section===l.id?Wc(M,y):null;if(!w)continue;let A=w.map(_=>xi(l,_[0],_[2]));b.push({u0:Math.min(...A.map(_=>_[0])),u1:Math.max(...A.map(_=>_[0])),v0:Math.min(...A.map(_=>_[1])),v1:Math.max(...A.map(_=>_[1]))})}let m=c.drawn,g=c.junction?1-c.junction.end:null;if(d){let y=hn(m),M=Or(d,{u0:0,u1:0,a:0,b:0}),w=A=>{let[_,T]=y.at(A,y.w/2),[R,I]=xi(d,_,T);return Ws(M,R,I)??un(d).y(I)};g=w(y.u0)<=w(y.u1)?0:1}let x=s.filter(y=>X0(t,l,y)),v=x.length?{covers:rf(m,x.flatMap(y=>a.get(y).covers)),lines:rf(m,x.filter(y=>s.indexOf(y)>s.indexOf(l)).flatMap(y=>a.get(y).covers)),wallU:c.junction?[hn(l).u0,hn(l).u1]:null}:null;_w(f.solid,f.lines,m,c.ov,h.elevation,f.glass,p,b,g,v)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function _w(i,t,e,n,r,o=i,s=!1,a=[],l=null,c=null){let h=hn(e),u=un(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),p=Math.max(0,f.b),b=h.w,m=h.u0-Math.max(0,f.u0),g=h.u1+Math.max(0,f.u1),x=(E,L,D)=>{let[O,k]=h.at(E,L);return[O,D-r,k]},v=new j(js),y=new j(Js),M=new j(Hm),w=(E,L)=>{for(let D=1;D+1<E.length;D++)i.tri(E[0],E[D],E[D+1],L)},A=[],_=[],T=[],R=[null,null],I=[];if(e.shape==="flat"||e.shape==="parapet"){let E=e.eave_a,L=e.shape==="parapet",D=e.points&&e.points.length>=3?O0(e,L?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):L?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,b),h.at(h.u0,b)]:[h.at(m,-d),h.at(g,-d),h.at(g,b+p),h.at(m,b+p)];Be(i,D,E-r,E-r+.25,Js,js,{bottom:!0});for(let O=0;O<D.length;O++){let k=D[O],z=D[(O+1)%D.length];t.seg([k[0],E-r+.252,k[1]],[z[0],E-r+.252,z[1]],fr),t.seg([k[0],E-r,k[1]],[z[0],E-r,z[1]],ko)}if(L){let O=G=>Gn(G)>=0?G:[...G].reverse(),k=O(D),z=Pc(k,-.2),W=k.length;for(let G=0;G<W;G++){let Y=O([k[G],k[(G+1)%W],z[(G+1)%W],z[G]]);Be(i,Y,E-r+.25,E-r+.65,Js,js),t.seg([k[G][0],E-r+.652,k[G][1]],[k[(G+1)%W][0],E-r+.652,k[(G+1)%W][1]],fr),t.seg([z[G][0],E-r+.652,z[G][1]],[z[(G+1)%W][0],E-r+.652,z[(G+1)%W][1]],fr)}}}else{let E=Or(e,f);A=E.faces;for(let L of a)A=A.flatMap(D=>ef(D,L));if(_=E.rim,T=E.ridges,R=E.gables,c){for(let L of A)for(let D of c.lines){let O=W0(L,D.poly);if(O)for(let[k,z]of nf(O[0],O[1],c.covers.filter(W=>W!==D)))I.push([k,z])}A=A.flatMap(L=>G0(L,c.covers))}}let P=!!e.open,N=new j(lw);for(let E of A){if(P){for(let L=1;L+1<E.length;L++)o.tri(x(E[0][0],E[0][1],E[0][2]),x(E[L][0],E[L][1],E[L][2]),x(E[L+1][0],E[L+1][1],E[L+1][2]),N);continue}w(E.map(([L,D,O])=>x(L,D,O)),v),w(E.map(([L,D,O])=>x(L,D,O-tn)),y)}let C=(E,L)=>c?nf(E,L,c.covers):[[E,L]];for(let E=0;E<_.length;E++)for(let[[L,D,O],[k,z,W]]of C(_[E],_[(E+1)%_.length]))P||w([x(L,D,O),x(k,z,W),x(k,z,W-tn),x(L,D,O-tn)],y),t.seg(x(L,D,O),x(k,z,W),P?fr:ko);if(P){Mw(i,t,h,u,f,x,r);return}for(let[E,L]of T)for(let[[D,O,k],[z,W,G]]of C(E,L))t.seg(x(D,O,k+.004),x(z,W,G+.004),fr);for(let[[E,L,D],[O,k,z]]of I)t.seg(x(E,L,D+.004),x(O,k,z+.004),fr);let S=e.base;if(!s){for(let E of[0,1]){let L=R[E];if(!L||l!==null&&l!==E)continue;let D=ww(L,S-tn),O=E===0?h.u0:h.u1;D.length>=3&&w(D.map(([k,z])=>x(O,k,z)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[E,L]=c?.wallU??[h.u0,h.u1];for(let D of[0,b]){let O=u.y(D)-tn;O>S+.02&&w([x(E,D,S),x(L,D,S),x(L,D,O),x(E,D,O)],M)}}else if(e.eave_a>S+.02)for(let[E,L,D,O]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,b],[h.u1,b,h.u0,b],[h.u0,b,h.u0,0]])w([x(E,L,S),x(D,O,S),x(D,O,e.eave_a),x(E,L,e.eave_a)],M)}}function Mw(i,t,e,n,r,o,s){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,p=(g,x,v,y,M,w)=>{let A=[e.at(g,v),e.at(x,v),e.at(x,y),e.at(g,y)],_=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);Be(i,_<0?[...A].reverse():A,M-s,w-s,cw,uw,{bottom:!0})},b=s;for(let[g,x]of[[0,h],[a,u]]){if(!x)continue;let v=n.y(g)-.03,y=g===0?0:a-l;p(e.u0,e.u1,y,y+l,v-c,v),t.seg(o(e.u0,g,v-c),o(e.u1,g,v-c),ko)}for(let[g,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let v=0;v<6;v++){let y=a*v/6,M=a*(v+1)/6,w=Math.min(n.y(y),n.y(M))-.03;p(g,g+l,y,M,w-c,w)}let m=[];for(let[g,x]of[[0,h],[a-l,u]]){if(!x)continue;let v=e.u1-e.u0-l,y=Math.max(1,Math.ceil(v/3.5));for(let M=0;M<=y;M++){let w=e.u0+v*M/y;M===0&&!f||M===y&&!d||m.push([w,g])}}if(!h&&!u)for(let g of[e.u0,e.u1-l])(g===e.u0&&f||g!==e.u0&&d)&&m.push([g,a/2-l/2]);for(let[g,x]of m){let v=n.y(x+l/2)-.03-c;p(g,g+l,x,x+l,b,v)}}function ww(i,t){let e=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=t&&e.push([s,a]);let l=i[o+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([s+(l[0]-s)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Qs={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Ym={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},on=.2,Sw=-.06,Tw=.01,ta=8,Xc=.42,wf=.42;function Jm(i,t,e,n=[],r=[],o){let{walls:s,open:a}=gi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(S,E,L,D)=>{let O=L;if(D?.profile){let z=D.b[0]-D.a[0],W=D.b[1]-D.a[1],G=Math.hypot(z,W)||1,Y=Math.max(0,Math.min(G,((S-D.a[0])*z+(E-D.a[1])*W)/G));O=Math.min(O,cn(D.profile,Y))}D?.slope&&(O=Math.min(O,Qn(D.slope,S,E)));let k=o?o(S,E):null;return Math.max(.05,k===null?O:Math.min(O,k))},c=(S,E)=>{let L=o?o(S,E):null;return L!==null&&L<Sw},h=(S,E,L,D,O,k)=>{if(!o&&!k?.profile&&!k?.slope)return O;let z=O,W=[L,D];if(o||k?.slope){let G=Math.max(2,Math.ceil((D-L)/.25)+1);for(let Y=0;Y<G;Y++)W.push(L+(D-L)*Y/(G-1))}k?.profile&&W.push(...k.profile.map(([G])=>G).filter(G=>G>L&&G<D));for(let G of W)z=Math.min(z,l(S[0]+E[0]*G,S[1]+E[1]*G,O,k));return z},u=new ne(!0,!0),f=[],d=new ze,p=[];for(let S of i.rooms){if(S.points.length<3)continue;let E=Yc(S.points),L=Ym[S.floor_material]??Ym.wood,D=new j(L.color),O=n.flatMap(Z=>{if(Q0(Z,E))return[Z];if(!K0(Z))return[];let it=No(E,Z);return it.length>=3&&Math.abs(Gn(it))>.01?[Yc(it)]:[]}),k=j0(O).map(Z=>tm(Yc(Z),.003));p.push(...k);let z=[...E,...k.flat()],W=u.count;for(let[Z,it,H]of xn(E,k)){let X=z[Z],rt=z[it],at=z[H];u.tri([X[0],0,X[1]],[at[0],0,at[1]],[rt[0],0,rt[1]],D,D,D,[X[0],X[1],at[0],at[1],rt[0],rt[1]],te,L.tile)}f.push({roomId:S.id,start:W,end:u.count,color:L.color});let G=new j(Qs.slab),Y=Z=>{for(let it=0;it<Z.length;it++){let H=Z[it],X=Z[(it+1)%Z.length];u.tri([H[0],-on,H[1]],[H[0],0,H[1]],[X[0],0,X[1]],G),u.tri([H[0],-on,H[1]],[X[0],0,X[1]],[X[0],-on,X[1]],G)}};Y(E);for(let Z of k){Y([...Yc(Z)].reverse());for(let it=0;it<Z.length;it++){let H=Z[it],X=Z[(it+1)%Z.length];d.seg([H[0],.006,H[1]],[X[0],.006,X[1]],ar),d.seg([H[0],-on,H[1]],[X[0],-on,X[1]],Ii)}}}let b=new Map,m=[],g=new Map,x=new Map;for(let S of s){if(!S.free)continue;let E=L0(S,i.rooms);E!==null&&x.set(S,E)}for(let S of s){let E="interior",L=null,D=x.get(S);if(S.exterior||D!==void 0){let k=S.b[0]-S.a[0],z=S.b[1]-S.a[1],W=Math.hypot(k,z)||1,G=D===!1?-1:1,Y=[G*z/W,-G*k/W],Z=(Math.round(Math.atan2(Y[1],Y[0])/(2*Math.PI)*ta)%ta+ta)%ta;E=`s${Z}`;let it=Z/ta*2*Math.PI;L=[Math.cos(it),Math.sin(it)]}let O=b.get(E);O===void 0&&(O=m.length,b.set(E,O),m.push(L)),g.set(S,O)}let v=new Map,y=[];for(let S of i.openings){let E=Lo(S,i.rooms,i.walls??[]);if(!E)continue;let L=Fo(s,S,E);if(!L)continue;let{wall:D,s:O}=L,k=ea([D.b[0]-D.a[0],D.b[1]-D.a[1]]),z=Math.hypot(D.b[0]-D.a[0],D.b[1]-D.a[1]),W=O-S.width/2<-1e-6?qh(s,D,!1):null,G=O+S.width/2>z+1e-6?qh(s,D,!0):null,Y=Qt=>Qt?Math.hypot(Qt.b[0]-Qt.a[0],Qt.b[1]-Qt.a[1]):0,Z=-Y(W),it=z+Y(G),H=Math.min(S.width,it-Z),X=Math.max(Z,Math.min(it-H,O-H/2)),rt=E.room.points,at=x.get(D),st=D.free?at??k[0]*(rt[1][0]-rt[0][0])+k[1]*(rt[1][1]-rt[0][1])>0:D.exterior||D.roomLeft===S.room_id,tt=[-k[1],k[0]],ft=st?tt:[-tt[0],-tt[1]],dt=Math.min(h(D.a,k,X,X+H,zo(D,i.height),D)-.02,S.sill+S.height),ct=Math.max(0,Math.min(S.sill,dt-.1)),_t=[ft[1],-ft[0]],yt=k[0]*_t[0]+k[1]*_t[1]>0,Pt={opening:S,bucket:g.get(D),start:[D.a[0]+k[0]*X,D.a[1]+k[1]*X],axis:k,width:H,toRoom:ft,faceRoom:st?D.left:D.right,faceOut:st?D.right:D.left,sill:ct,top:dt,hingeAtStart:S.hinge==="left"===yt,exterior:D.exterior||at!==void 0};y.push(Pt);let Ft=v.get(D);Ft||v.set(D,Ft=[]),Ft.push({s0:X,s1:X+H,sill:ct,top:dt,info:Pt});for(let Qt of[W,G]){if(!Qt)continue;let be=le=>(D.a[0]+k[0]*le-Qt.a[0])*k[0]+(D.a[1]+k[1]*le-Qt.a[1])*k[1],he=Math.max(0,be(X)),$=Math.min(Y(Qt),be(X+H));if($-he<1e-4)continue;let Me=v.get(Qt);Me||v.set(Qt,Me=[]),Me.push({s0:he,s1:$,sill:ct,top:dt,info:Pt,cont:!0})}}let M=Math.min(i.cut_height,i.height),w=new ne;for(let S of s){let E=g.get(S),L=ea([S.b[0]-S.a[0],S.b[1]-S.a[1]]),D=(v.get(S)??[]).sort((tt,ft)=>tt.s0-ft.s0),O=zo(S,i.height),k=Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1]),z=[0,k,...S.profile?.map(([tt])=>tt)??[]];if(o){let tt=Math.max(1,Math.ceil(k/.3));for(let ft=1;ft<tt;ft++)z.push(k*ft/tt)}let W=[...new Set(z)].sort((tt,ft)=>tt-ft),G=tt=>l(S.a[0]+L[0]*tt,S.a[1]+L[1]*tt,O,S),Y=[];for(let tt=0;tt+1<W.length;tt++){let ft=W[tt],dt=W[tt+1],ct=G(ft)-M,_t=G(dt)-M;ct*_t<-1e-12&&Y.push(ft+(dt-ft)*ct/(ct-_t))}let Z=[],it=[-1/0,...new Set([...D.flatMap(tt=>[tt.s0,tt.s1]),...W,...Y]).values(),1/0].sort((tt,ft)=>tt-ft);for(let tt=0;tt+1<it.length;tt++){let ft=it[tt],dt=it[tt+1];if(dt-ft<1e-6)continue;let ct=Number.isFinite(ft)&&Number.isFinite(dt)?(ft+dt)/2:Number.isFinite(ft)?ft+1:dt-1,_t=D.filter(Ft=>Ft.s0<ct&&Ft.s1>ct).map(Ft=>[Ft.sill,Ft.top]).sort((Ft,Qt)=>Ft[0]-Qt[0]),yt=[],Pt=-on;for(let[Ft,Qt]of _t)Ft>Pt+1e-4&&yt.push([Pt,Ft<1e-4?-Tw:Ft]),Pt=Math.max(Pt,Qt);O>Pt+1e-4&&yt.push([Pt,O]),Z.push({t0:ft,t1:dt,ranges:yt})}let H=!!((o||S.slope)&&h(S.a,L,0,k,O,S)<O-.001),X=H?Z.flatMap(tt=>{let ft=Math.max(tt.t0,-.5),dt=Math.min(tt.t1,k+.5),ct=Math.max(1,Math.ceil((dt-ft)/.3));return Array.from({length:ct},(_t,yt)=>({t0:yt===0?tt.t0:ft+(dt-ft)*yt/ct,t1:yt===ct-1?tt.t1:ft+(dt-ft)*(yt+1)/ct,ranges:tt.ranges,inner0:yt>0,inner1:yt<ct-1}))}):Z.map(tt=>({...tt,inner0:!1,inner1:!1})),rt=tt=>(tt[0]-S.a[0])*L[0]+(tt[1]-S.a[1])*L[1],at=tt=>{if(!o)return[tt];let ft=Sf(S.footprint,S.a,L,tt.t0,tt.t1),dt=ft.filter(([Pt,Ft])=>c(Pt,Ft)).length;if(dt===0)return[tt];if(dt===ft.length)return[];let ct=Math.max(tt.t0,-.5),_t=Math.min(tt.t1,k+.5),yt=Math.max(1,Math.ceil((_t-ct)/.05));return Array.from({length:yt},(Pt,Ft)=>({t0:Ft===0?tt.t0:ct+(_t-ct)*Ft/yt,t1:Ft===yt-1?tt.t1:ct+(_t-ct)*(Ft+1)/yt,ranges:tt.ranges,inner0:Ft>0||tt.inner0,inner1:Ft<yt-1||tt.inner1})).filter(Pt=>!Sf(S.footprint,S.a,L,Pt.t0,Pt.t1).every(([Ft,Qt])=>c(Ft,Qt)))},st=tt=>{let ft=Pt=>l(S.a[0]+L[0]*Pt,S.a[1]+L[1]*Pt,O,S),dt=Math.max(tt.t0,0),ct=Math.min(tt.t1,k);if(ct-dt<.01||(ft(dt)-M)*(ft(ct)-M)>=0)return[tt];let _t=ft(ct)>M;for(let Pt=0;Pt<24;Pt++){let Ft=(dt+ct)/2;ft(Ft)>M===_t?ct=Ft:dt=Ft}let yt=_t?ct:dt;return[{...tt,t1:yt,inner1:!0},{...tt,t0:yt,inner0:!0}]};for(let tt of H?X.flatMap(at).flatMap(st):X){let ft=Sf(S.footprint,S.a,L,tt.t0,tt.t1);if(ft.length<3)continue;let dt=(Pt,Ft)=>Math.abs(rt(Pt)-Ft)<1e-4,ct=(Pt,Ft)=>tt.inner0&&dt(Pt,tt.t0)&&dt(Ft,tt.t0)||tt.inner1&&dt(Pt,tt.t1)&&dt(Ft,tt.t1),_t=H||!!S.profile||!!S.slope,yt=_t?Math.min(...ft.map(([Pt,Ft])=>l(Pt,Ft,O,S))):O;for(let[Pt,Ft]of tt.ranges){let Qt=Math.min(Ft,_t?Math.max(...ft.map(([Me,le])=>l(Me,le,O,S))):Ft);if(Qt-Pt<1e-4||yt-Pt<.01)continue;let be=Pt>.01,he=_t&&Ft>yt,$=(Me,le)=>Math.min(Ft,l(Me,le,O,S));if(Pt<M-1e-6){let Me=Qt>M+1e-6?cm+E:lr+E,le=he&&yt<M?(V,F)=>Math.min(M,$(V,F)):Math.min(Qt,M);Be(w,ft,Pt,le,Qs.wall,Qs.wallTop,{aoFrom:0,bottom:be,fold:lr+E,topFold:Me,skipSide:ct})}Qt>M+1e-6&&yt>M-1e-6&&Be(w,ft,Math.max(Pt,M),he?$:Qt,Qs.wall,Qs.wallTop,{aoFrom:0,fold:E,bottom:be&&Pt>=M,skipSide:ct})}}}let A=s.flatMap(S=>S.footprint),_=Rw(s,A),T=new ze;T.p.push(...d.p),T.c.push(...d.c),T.f.push(...d.f);let R=(S,E)=>(v.get(S)??[]).filter(E);for(let S of _.edges){let E=g.get(S.wall);for(let[D,O]of qc(S,R(S.wall,k=>k.sill<=.005)))T.seg([D[0],.004,D[1]],[O[0],.004,O[1]],lm);for(let[D,O]of qc(S,R(S.wall,k=>k.sill<M&&k.top>M)))for(let[k,z]of Cw(D,O,S.wall,M,i.height,o))T.seg([k[0],M,k[1]],[z[0],M,z[1]],hf,Oc+E);let L=zo(S.wall,i.height);for(let[D,O]of qc(S,R(S.wall,k=>!S.wall.profile&&!S.wall.slope&&k.top>=L-.021))){if(!o&&!S.wall.profile&&!S.wall.slope){T.seg([D[0],L,D[1]],[O[0],L,O[1]],ar,L<=M+1e-6?lr+E:E);continue}let k=ea([S.wall.b[0]-S.wall.a[0],S.wall.b[1]-S.wall.a[1]]),z=(D[0]-S.wall.a[0])*k[0]+(D[1]-S.wall.a[1])*k[1],W=(O[0]-S.wall.a[0])*k[0]+(O[1]-S.wall.a[1])*k[1],G=[z,W];if(o||S.wall.slope){let Y=Math.max(1,Math.ceil(Math.abs(W-z)/.3));for(let Z=1;Z<Y;Z++)G.push(z+(W-z)*Z/Y)}S.wall.profile&&G.push(...S.wall.profile.map(([Y])=>Y).filter(Y=>Y>Math.min(z,W)&&Y<Math.max(z,W))),G.sort((Y,Z)=>W>=z?Y-Z:Z-Y);for(let Y=0;Y+1<G.length;Y++){let Z=(G[Y]-z)/(W-z||1),it=(G[Y+1]-z)/(W-z||1),H=[D[0]+(O[0]-D[0])*Z,D[1]+(O[1]-D[1])*Z],X=[D[0]+(O[0]-D[0])*it,D[1]+(O[1]-D[1])*it];if(c(H[0],H[1])&&c(X[0],X[1]))continue;let rt=l(H[0],H[1],L,S.wall),at=l(X[0],X[1],L,S.wall);T.seg([H[0],rt,H[1]],[X[0],at,X[1]],ar,Math.max(rt,at)<=M+1e-6?lr+E:E)}}}let I=(S,E)=>l(E[0],E[1],zo(S,i.height),S);for(let S of _.corners){if(c(S.p[0],S.p[1]))continue;let E=S.walls.reduce((D,O)=>I(O,S.p)>I(D,S.p)+1e-6?O:D,S.wall),L=l(S.p[0],S.p[1],zo(E,i.height),E);T.segSplit([S.p[0],.004,S.p[1]],[S.p[0],L,S.p[1]],Ii,Math.min(M,L),g.get(E))}for(let S of _.joints){let[E,L]=S.walls,D=[I(E,S.a),I(L,S.a)],O=[I(E,S.b),I(L,S.b)];if(Math.abs(D[0]-D[1])<.01&&Math.abs(O[0]-O[1])<.01)continue;let k=D[1]+O[1]>=D[0]+O[0]?L:E,z=g.get(k),W=Math.max(...D),G=Math.max(...O);T.seg([S.a[0],W,S.a[1]],[S.b[0],G,S.b[1]],ar,Math.max(W,G)<=M+1e-6?lr+z:z);for(let[Y,Z]of[[S.a,D],[S.b,O]]){let it=Math.min(...Z),H=Math.max(...Z);H-it>.01&&T.segSplit([Y[0],it,Y[1]],[Y[0],H,Y[1]],Ii,M,z)}}for(let S of v.values())for(let E of S)E.cont||Ew(T,E,M);let P=Pw(_.edges,i.rooms,v),N=new ne;Lm(w,T,i,N);for(let S of r)Mf(w,T,S.face,S.field,i.elevation);let C=[];for(let S of i.furniture){if(ud(S.type))continue;let E=w.count,L=T.p.length/6,D=S,O=an(i,D);if(xa.has(D.type)){let k=Ec(s,D,i.height,O);D={...D,x:k.x,z:k.z},O=k.y}Bc(w,T,P,D,O),O+D.h>M+.05&&(um(w,E,M,ff),hm(T,L,M,ff)),C.push({id:D.id,start:E,end:w.count})}return{floor:u.geometry(),roomTris:f,holes:p,walls:w.geometry(),water:N.geometry(),lines:T.geometry(),shadow:P.geometry(),buckets:m,openings:y,walls2d:s,openRooms:a,wallBuckets:s.map(S=>g.get(S)),furnitureTris:C,roofUnder:o}}function Ew(i,t,e){let{info:n}=t,r=n.bucket,o=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],s=l=>l>e+1e-6?r:te,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(o(c,l,a),o(c,l,t.top),Ii,e,r);i.seg(o(t.s0,l,t.top),o(t.s1,l,t.top),Ii,s(t.top)),t.sill>.01&&i.seg(o(t.s0,l,t.sill),o(t.s1,l,t.sill),Ii,s(t.sill))}for(let l of[t.s0,t.s1])i.seg(o(l,n.faceRoom,t.top),o(l,-n.faceOut,t.top),Ii,s(t.top)),t.sill>.01&&i.seg(o(l,n.faceRoom,t.sill),o(l,-n.faceOut,t.sill),Ii,s(t.sill)),t.sill<e&&t.top>e&&i.seg(o(l,n.faceRoom,e),o(l,-n.faceOut,e),hf,Oc+r)}function Sf(i,t,e,n,r){let o=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],s=i;return Number.isFinite(n)&&(s=qm(s,a=>o(a)-n)),Number.isFinite(r)&&(s=qm(s,a=>r-o(a))),s}function qm(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=t(r),a=t(o);if(s>=0&&e.push(r),s>=0!=a>=0){let l=s/(s-a);e.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return e}var $m=i=>Math.round(i*1e3),na=i=>`${$m(i[0])},${$m(i[1])}`,Zm=(i,t)=>{let e=na(i),n=na(t);return e<n?`${e}|${n}`:`${n}|${e}`};function Aw(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*s+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+s*u,r[1]+a*u];na(f)!==na(h)&&e.push([h,f]),h=f}e.push([h,o])}return e}function Rw(i,t){let e=i.map(h=>({wall:h,edges:Aw(h.footprint,t)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of e)for(let[f,d]of u){let p=Zm(f,d);n.set(p,(n.get(p)??0)+1);let b=r.get(p);b?b.walls.push(h):r.set(p,{a:f,b:d,walls:[h]})}let o=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&o.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let s=[],a=new Map,l=(h,u,f)=>{let d=na(h),p=a.get(d);p||a.set(d,p={p:h,wall:u,walls:[],d:[]}),p.d.push(f),p.walls.includes(u)||p.walls.push(u)};for(let{wall:h,edges:u}of e)for(let[f,d]of u){if(n.get(Zm(f,d))!==1)continue;let p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<1e-4)continue;s.push({a:f,b:d,wall:h});let b=[(d[0]-f[0])/p,(d[1]-f[1])/p];l(f,h,b),l(d,h,b)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(p=>d.some(b=>Math.abs(p[0]*b[1]-p[1]*b[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:s,corners:c,joints:o}}function qc(i,t){if(!t.length)return[[i.a,i.b]];let e=ea([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=ea([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let p=[];return u.s0>f&&p.push([f,u.s0]),u.s1<d&&p.push([u.s1,d]),p});let h=u=>{let f=(u-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>o<=s?[h(u),h(f)]:[h(f),h(u)])}function Pw(i,t,e){let n=new ne,r=new j(wf,wf,wf),o=new j(1,1,1),s=.002;for(let a of i)for(let[l,c]of qc(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(g=>g.points.length>=3&&jt(p,g.points)))continue;let b=[l[0]+d[0]*Xc,l[1]+d[1]*Xc],m=[c[0]+d[0]*Xc,c[1]+d[1]*Xc];n.tri([l[0],s,l[1]],[b[0],s,b[1]],[m[0],s,m[1]],r,o,o),n.tri([l[0],s,l[1]],[m[0],s,m[1]],[c[0],s,c[1]],r,o,r)}return n}function jm(i,t){let e=t.furniture.filter(o=>o.type==="stairwell").map(Gi),n=i.filter(o=>o.elevation<t.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return e;let r=n.furniture.filter(o=>(ld.has(o.type)||Te(o.type)?.hole)&&n.elevation+o.h>=t.elevation-.3).map(Gi);return[...e,...r]}function zo(i,t){let e=Math.min(t,i.height??t),n=i.profile?.length?Math.max(...i.profile.map(([,o])=>o)):e,r=i.slope?Math.max(i.slope.h0,i.slope.h1):e;return Math.max(e,n,r)}function Km(i,t,e,n,r){let o=i.b[0]-i.a[0],s=i.b[1]-i.a[1],a=Math.hypot(o,s)||1,l=Math.max(0,Math.min(a,((e-i.a[0])*o+(n-i.a[1])*s)/a)),c=i.profile?cn(i.profile,l):zo(i,t),h=i.slope?Math.min(c,Qn(i.slope,e,n)):c,u=r?.(e,n);return Math.max(.05,u==null?h:Math.min(h,u))}function Cw(i,t,e,n,r,o){let s=e.b[0]-e.a[0],a=e.b[1]-e.a[1],l=Math.hypot(s,a)||1,c=s/l,h=a/l,u=(i[0]-e.a[0])*c+(i[1]-e.a[1])*h,f=(t[0]-e.a[0])*c+(t[1]-e.a[1])*h,d=[0,1];if(e.profile)for(let[m]of e.profile){let g=(m-u)/(f-u||1);g>1e-8&&g<1-1e-8&&d.push(g)}if(o||e.slope){let m=Math.max(1,Math.ceil(Math.hypot(t[0]-i[0],t[1]-i[1])/.25));for(let g=1;g<m;g++)d.push(g/m)}d.sort((m,g)=>m-g);let p=m=>[i[0]+(t[0]-i[0])*m,i[1]+(t[1]-i[1])*m],b=[];for(let m=0;m+1<d.length;m++){let g=d[m],x=d[m+1],v=p(g),y=p(x),M=Km(e,r,v[0],v[1],o),w=Km(e,r,y[0],y[1],o);if(M<n&&w<n)continue;if(M>=n&&w>=n){b.push([v,y]);continue}let A=(n-M)/(w-M),_=[v[0]+(y[0]-v[0])*A,v[1]+(y[1]-v[1])*A];b.push(M>=n?[v,_]:[_,y])}return b}function ea(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Yc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var Iw=new j(1516340),Lw=new j(527897),Tf=new j(1779256),ia=new j(1120808),Fw=new j(4163256),Qm=new j(5995161),Dw=new j(2240842),Nw=new j(1318704),Ow=.35,Vo=.8,Uw=.2,tg=.1;function Bw(i,t,e,n){let r=-1/0;for(let o of i.floors)if(!(o.elevation>.3))for(let s of o.outdoor??[])s.points.length<3||s.type==="pool"||s.type==="balcony"||Vn(s.type)||!jt(e,s.points)||(r=Math.max(r,o.elevation+vi(o,s)+ki[s.type]-t.elevation));return r>n?r-n:0}function eg(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=of(i,t);if(!r)return null;let o=(p,b)=>qr(p,b)-t.elevation,s=n&&r.some(([p,b])=>o(p,b)<-on-.03);if(!s&&!sf(i,t))return null;let a=t.height,l=-Ow,c=(p,b)=>Math.min(a,qr(p,b)-t.elevation),h=new ne,u=new ne,f=new ze,d=(p,b,m,g,x,v,y,M)=>{let w=[b[0]-p[0],b[2]-p[2]];-w[1]*x[0]+w[0]*x[1]>0?(M.tri(p,b,m,v,v,y),M.tri(p,m,g,v,y,y)):(M.tri(p,m,b,v,y,v),M.tri(p,g,m,v,y,y))};for(let p=0;p<r.length;p++){let b=r[p],m=r[(p+1)%r.length],g=Math.hypot(m[0]-b[0],m[1]-b[1]);if(g<1e-4)continue;let x=[(m[0]-b[0])/g,(m[1]-b[1])/g],v=[x[1],-x[0]],y=[(b[0]+m[0])/2+v[0]*.05,(b[1]+m[1])/2+v[1]*.05];jt(y,r)&&(v=[-v[0],-v[1]]);let M=(R,I=.012)=>[b[0]+x[0]*R+v[0]*I,b[1]+x[1]*R+v[1]*I],w=[];for(let R of e){if(R.opening.type!=="window"||!R.exterior||R.opening.well===!1)continue;let I=R.start[0]+R.axis[0]*(R.width/2)-R.toRoom[0]*R.faceOut,P=R.start[1]+R.axis[1]*(R.width/2)-R.toRoom[1]*R.faceOut,N=(I-b[0])*x[0]+(P-b[1])*x[1];Math.abs((I-b[0])*v[0]+(P-b[1])*v[1])>.08||N<-.05||N>g+.05||Z0(i,t,R.exterior,R.sill,[I,P])&&w.push({s0:Math.max(0,N-R.width/2-tg),s1:Math.min(g,N+R.width/2+tg),bottom:Math.max(l+.05,R.sill-Uw),rim:R.opening.well_rim??0})}let A=new Set([0,g]);for(let R of w)A.add(R.s0),A.add(R.s1);let _=[...A].sort((R,I)=>R-I),T=[];for(let R=0;R<_.length-1;R++){let I=Math.max(1,Math.ceil((_[R+1]-_[R])/.5));for(let P=0;P<I;P++)T.push(_[R]+(_[R+1]-_[R])*P/I)}T.push(g);for(let R=0;R<T.length-1;R++){let I=T[R],P=T[R+1],N=w.find(W=>I>=W.s0-1e-6&&P<=W.s1+1e-6),C=M(I),S=M(P),E=c(C[0],C[1]),L=c(S[0],S[1]),D=N?Math.min(E,N.bottom):E,O=N?Math.min(L,N.bottom):L;if(D>l+.01||O>l+.01){let W=Math.min(D,l),G=Math.min(O,l);d([C[0],W,C[1]],[S[0],G,S[1]],[S[0],Math.max(O,l),S[1]],[C[0],Math.max(D,l),C[1]],v,Lw,Iw,h)}let k=o(C[0],C[1]),z=o(S[0],S[1]);if(s&&(k<-on-.01||z<-on-.01)&&d([C[0],Math.min(k,-on),C[1]],[S[0],Math.min(z,-on),S[1]],[S[0],-on,S[1]],[C[0],-on,C[1]],v,Nw,Dw,h),E>l||L>l||s&&(k<-on||z<-on)){let W=s?Math.min(k,Math.max(E,l)):Math.max(E,l),G=s?Math.min(z,Math.max(L,l)):Math.max(L,l);f.seg([C[0],W+.004,C[1]],[S[0],G+.004,S[1]],Fw)}}for(let R of w){let I=M(R.s0,0),P=M(R.s1,0),N=[I[0]+v[0]*Vo,I[1]+v[1]*Vo],C=[P[0]+v[0]*Vo,P[1]+v[1]*Vo],S=[(I[0]+P[0]+N[0]+C[0])/4,(I[1]+P[1]+N[1]+C[1])/4],E=Bw(i,t,S,c(S[0],S[1])),L=Math.max(R.rim,E>0?E+.02:0),D=Y=>c(Y[0],Y[1])+L,O=R.bottom,k=(Y,Z)=>[Y[0],Z,Y[1]];u.tri(k(I,O),k(P,O),k(C,O),ia),u.tri(k(I,O),k(C,O),k(N,O),ia);let z=(Y,Z)=>{u.tri(k(Y,O),k(Z,O),k(Z,D(Z)),ia,ia,Tf),u.tri(k(Y,O),k(Z,D(Z)),k(Y,D(Y)),ia,Tf,Tf)};z(I,N),z(P,C),z(N,C);let W=Y=>[Y[0],D(Y)+.01,Y[1]];for(let[Y,Z]of[[I,P],[P,C],[C,N],[N,I]])f.seg(W(Y),W(Z),Qm);let G=Math.max(3,Math.round((R.s1-R.s0)/.12));for(let Y=1;Y<G;Y++){let Z=Y/G,it=[I[0]+(P[0]-I[0])*Z,I[1]+(P[1]-I[1])*Z];f.seg(W(it),W([it[0]+v[0]*Vo,it[1]+v[1]*Vo]),Qm)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var ng=i=>Math.round(i*1e3)/1e3;function kw(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let o=[(n[0]-e[0])/r,(n[1]-e[1])/r],s=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),a=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function ig(i,t,e,n,r,o=.05){let s=i.rooms.find(f=>f.points.length>=3&&jt([t.x,t.z],f.points));if(!s)return[e,n];let a=s.points,l=vn(a)>=0?1:-1,c=Gi({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=Gi({...t,x:h,z:u});for(let p=0;p<a.length;p++){let b=a[p],m=a[(p+1)%a.length],g=Math.hypot(m[0]-b[0],m[1]-b[1]);if(g<.05)continue;let x=[(m[0]-b[0])/g,(m[1]-b[1])/g],v=[-x[1]*l,x[0]*l],y=kw(i,s.id,b,m)?r/2:0,M=0;d.forEach((w,A)=>{let _=(w[0]-b[0])*x[0]+(w[1]-b[1])*x[1];if(_<-.01||_>g+.01)return;let T=(w[0]-b[0])*v[0]+(w[1]-b[1])*v[1]-y,R=c[A];(R[0]-b[0])*v[0]+(R[1]-b[1])*v[1]-y<-o||T<M&&(M=T)}),M<-1e-4&&(h-=v[0]*M,u-=v[1]*M)}}return[ng(h),ng(u)]}var zw=500,Vw=1e3;function rg(i,t){let e=t-i.timeStamp;return e>Vw&&e<6e4}var og=.12,sg=1.35,Gw=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,$c=class{view={target:new q,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(o,s,a)=>{t.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=Gw(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Ef(this.view.phi+this.velocity.phi,og,sg),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},o=t.theta??r.theta;for(;o-r.theta>Math.PI;)o-=2*Math.PI;for(;o-r.theta<-Math.PI;)o+=2*Math.PI;let s=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:o,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:r,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},zw)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(rg(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let o=e.type==="mouse";if(o&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=Ef(this.view.phi+c,og,sg),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!rg(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=Ef(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new q(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new q(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-t*r),this.view.target.addScaledVector(s,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Ef(i,t,e){return Math.min(e,Math.max(t,i))}function yi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var Jc=5,Zc=512,ag=.7,Kc=class{projectors=new Map;loader=new Ar;loggedIds="";depthMaterial=new $t({colorWrite:!1,side:se});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,o]of this.projectors)e.has(r)||this.drop(o);for(let[r,o]of e){let s=this.projectors.get(r);if(!s){let a=new Ze(Zc,Zc);a.depthTexture=new hi(Zc,Zc),s={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new nn(60,16/9,ag,40),target:a,matrix:new Pe,uniforms:{uProjMat:{value:new Pe},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},s.camera.layers.set(Jc),this.projectors.set(r,s)}s.url=o,this.fetch(s)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Ve;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,o){for(let s of this.projectors.values()){let a=s.texture?r(s.id):null;if(s.texture&&!a&&!s.noPoseLogged&&(s.noPoseLogged=!0,console.warn(`NeonPlan lab: ${s.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of s.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,m]of s.overlays)l.has(b)||(m.parent?.remove(m),m.material.dispose(),s.overlays.delete(b));for(let b of n){let m=s.overlays.get(b.key);(!m||m.parent!==b.parent)&&(m&&(m.parent?.remove(m),m.material.dispose()),m=new It(b.geometry,this.material(s,b.masks)),m.renderOrder=2.5,m.frustumCulled=!1,b.parent.add(m),s.overlays.set(b.key,m)),m.geometry!==b.geometry&&(m.geometry=b.geometry),m.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${s.aspect.toFixed(3)},${o}`;if(c===s.poseKey)continue;s.poseKey=c;let h=s.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/s.aspect)*180/Math.PI,h.aspect=s.aspect,h.far=a.reach,h.near=ag,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),s.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),s.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let m of b.overlays.values())m.visible&&f.push(m);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),p=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(s.target),t.clear(),t.render(e,h),t.setRenderTarget(d),e.overrideMaterial=p;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new $t({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?yi(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(o,s)=>{r?.(o,s),Object.assign(o.uniforms,t.uniforms),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uProjMat;
varying vec4 vProj;`).replace("#include <project_vertex>",`#include <project_vertex>
vProj = uProjMat * modelMatrix * vec4(transformed, 1.0);`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uProjTex;
uniform sampler2D uDepth;
uniform vec2 uNearFar;
varying vec4 vProj;
float fp3dLinear(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x)); }`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vProj.w <= 0.0) discard;
          vec3 fp3dNdc = vProj.xyz / vProj.w;
          if (abs(fp3dNdc.x) > 1.0 || abs(fp3dNdc.y) > 1.0 || abs(fp3dNdc.z) > 1.0) discard;
          vec2 fp3dUv = fp3dNdc.xy * 0.5 + 0.5;
          // hidden from the camera (something nearer in its depth picture): no picture here; compared in metres
          float fp3dSeen = fp3dLinear(texture2D(uDepth, fp3dUv).x);
          float fp3dHere = fp3dLinear(fp3dNdc.z * 0.5 + 0.5);
          if (fp3dHere > fp3dSeen + 0.06 + 0.01 * fp3dHere) discard;
          vec4 fp3dPic = texture2D(uProjTex, fp3dUv);
          float fp3dEdge = smoothstep(0.0, 0.05, min(min(fp3dUv.x, 1.0 - fp3dUv.x), min(fp3dUv.y, 1.0 - fp3dUv.y)));
          // far away the picture fades out (what lies near the horizon would be smeared across the whole plot)
          float fp3dFar = 1.0 - smoothstep(0.65 * uNearFar.y, uNearFar.y, fp3dHere);
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function lg(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function cg(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=lg(o,s),c=lg(s,a),h=Math.min(t,l*.45,c*.45),u=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],f=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(s);continue}let d=[s[0]+u[0]*h,s[1]+u[1]*h,s[2]+u[2]*h],p=[s[0]+f[0]*h,s[1]+f[1]*h,s[2]+f[2]*h];for(let b=0;b<=e;b++){let m=b/e,g=(1-m)*(1-m),x=2*(1-m)*m,v=m*m;n.push([g*d[0]+x*s[0]+v*p[0],g*d[1]+x*s[1]+v*p[1],g*d[2]+x*s[2]+v*p[2]])}}return n.push(i[i.length-1]),n}var ug=new j(7568261),hg=new j(4869974),Ww=new j(3116287),fg=new j(3948872),Af=Wr([.35,.85,.4]),dg=10;function Wr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function ra(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function pg(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Wr(ra(i,t));return[e,Wr(ra(i,e))]}function Li(i,t){let e=.5+.5*Math.max(0,t[0]*Af[0]+t[1]*Af[1]+t[2]*Af[2]);return i.clone().multiplyScalar(e)}function Go(i,t,e,n,r,o=!1){let s=Wr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=pg(s),c=(h,u)=>{let f=u/dg*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<dg;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),p=c(e,h+1);i.tri(u.p,p.p,d.p,Li(r,u.n),Li(r,p.n),Li(r,d.n)),i.tri(u.p,f.p,p.p,Li(r,u.n),Li(r,f.n),Li(r,p.n)),o&&(i.tri([...t],f.p,u.p,Li(r,[-s[0],-s[1],-s[2]])),i.tri([...e],d.p,p.p,Li(r,s)))}}function Hw(i,t,e,n,r,o,s,a){let l=Wr(ra(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*o+l[0]*d*s,t[1]+e[1]*u*r+n[1]*f*o+l[1]*d*s,t[2]+e[2]*u*r+n[2]*f*o+l[2]*d*s],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=Li(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function mg(i,t){if(t.points.length<2)return;let e=t.radius,n=cg(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?ug.clone().multiplyScalar(.55):ug;Go(i,o,s,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);Go(i,s,a,e*1.22,hg,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);Go(i,s,a,e*1.08,t.water?new j(...t.water).multiplyScalar(.9):new j(10475240),!0);for(let l of o(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Go(i,c,h,e*1.3,hg,!0)}}else{let[s,a]=o(.055);Go(i,s,a,e*1.4,fg,!0);let[l]=pg(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];Go(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,fg,!0);let u=r.open===!1?Wr(ra(r.dir,c)):r.dir,f=Wr(ra(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];Hw(i,d,u,f,.1,.028,.012,Ww)}}}var Rf=1.62,jc=.2,Pf=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let o=gi(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=o.walls;let s=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=Lo(a,e.rooms,e.walls??[]);if(!c)continue;let h=Fo(this.walls,a,c);if(!h)continue;let u=h.wall,f=u.b[0]-u.a[0],d=u.b[1]-u.a[1],p=Math.hypot(f,d)||1,b=f/p,m=d/p,g=[u.a[0]+b*h.s,u.a[1]+m*h.s],x=u.left+.45,v=u.right+.45,y=[[g[0]-m*x,g[1]+b*x],[g[0]+m*v,g[1]-b*v]];if(u.exterior&&e.elevation>.3&&!(e.outdoor??[]).some(w=>w.points.length>=3&&jt(y[1],w.points)))continue;let M=s.get(u)??[];M.push([h.s-a.width/2+.05,h.s+a.width/2-.05]),s.set(u,M),this.doors.push({centre:g,p:y})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c);h<1e-6||this.solids.push({a:a.a,u:[l/h,c/h],len:h,left:a.left,right:a.right,gaps:s.get(a)??[]})}}blocked(t,e=jc){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=jc){for(let n of this.obstacles){let r=t[0]-n.c[0],o=t[1]-n.c[1];if(Math.abs(r*n.u[0]+o*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+o*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=jc){for(let n of this.solids){let r=t[0]-n.a[0],o=t[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-e||s>n.len+e)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>s>l+e*.6&&s<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]))return!1}return!0}roomAt(t){return this.rooms.find(e=>jt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let p=this.path(d,e);return p?[d,...p]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let p=this.path(t,d);return p?[...p,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>Xw(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let p=jc+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([m,g])=>[d.c[0]+d.u[0]*m*(d.hw+p)+b[0]*g*(d.hd+p),d.c[1]+d.u[1]*m*(d.hw+p)+b[1]*g*(d.hd+p)])}).filter(d=>!this.blocked(d)),o=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],s=o.length,a=new Array(s).fill(1/0),l=new Array(s).fill(-1),c=new Array(s).fill(!1);a[0]=0;let h=new Map,u=(d,p)=>{let b=d<p?`${d}:${p}`:`${p}:${d}`,m=h.get(b);return m===void 0&&(m=this.clear(o[d],o[p]),h.set(b,m)),m};for(;;){let d=-1;for(let p=0;p<s;p++)!c[p]&&a[p]<1/0&&(d<0||a[p]<a[d])&&(d=p);if(d<0)return null;if(d===1)break;c[d]=!0;for(let p=0;p<s;p++){if(c[p]||p===d)continue;let b=Math.hypot(o[d][0]-o[p][0],o[d][1]-o[p][1]);a[d]+b>=a[p]||u(d,p)&&(a[p]=a[d]+b,l[p]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(o[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let o=Lo(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=Fo(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*s.s,a.a[1]+f*s.s],p=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,o)=>gg(o)-gg(r))[0],n=e?this.freeNear(Vi(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),o=Math.sin(e);for(let s=.2;s<n;s+=.15)if(this.blocked([t[0]+r*s,t[1]+o*s],.05))return s;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(t,s);if(e!==null){let l=Math.abs(s-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function Xw(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r||1,s=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o));return Math.hypot(i[0]-(t[0]+n*s),i[1]-(t[1]+r*s))}function gg(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,o]=e[n],[s,a]=e[(n+1)%e.length];t+=r*a-s*o}return Math.abs(t/2)}var Cf=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=e.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let s of t.floors)s.mask.standing.value=65535,s.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Rf}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(t,o,e),this.v.camera.lookAt(t+Math.cos(n)*s,o+Math.sin(r),e+Math.sin(n)*s),this.v.controls.view.target.set(t,o-Rf,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(Vi(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,h=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,o=1-(e-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(s)*d,Math.sin(a),Math.sin(s)*d],b=[-Math.sin(s),0,Math.cos(s)],m=[p[1]*b[2]-p[2]*b[1],p[2]*b[0]-p[0]*b[2],p[0]*b[1]-p[1]*b[0]],g=[-m[0],-m[1],-m[2]],x=[p[0]+b[0]*r*u*f+g[0]*o*u,p[1]+b[1]*r*u*f+g[1]*o*u,p[2]+b[2]*r*u*f+g[2]*o*u];if(x[1]>=-.02)return null;let v=Rf/-x[1];return[l+x[0]*v,c+x[2]*v]}bind(){let t=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",s=>{e||(e={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),t(this.surface,"pointermove",s=>{if(!e||s.pointerId!==e.id)return;let a=s.clientX-e.x,l=s.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=s.clientX,e.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!e||s.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function Yw(i,t){let e=Te(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function If(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,o=r?Yw(n,r):null;return o?[n,o]:[n]});return{...i,furniture:e}}var bg=8,xg=1024,Fi=6,Qc=class{group=new Ne;shadow;target=null;arc=new Ne;glow=Zw();textures=[];constructor(){this.shadow=new It(new $n(1,1),new $t({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(t,e,n,r,o,s,a=0){let[l,c,h,u]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],f=Math.min(xg,Math.max(32,Math.ceil((h-l)*bg))),d=Math.min(xg,Math.max(32,Math.ceil((u-c)*bg)));if(!this.target||this.target.width!==f||this.target.height!==d){this.target?.dispose(),this.target=new Ze(f,d,{minFilter:$e,magFilter:$e,depthBuffer:!1});let w=this.shadow.material;w.map=this.target.texture,w.needsUpdate=!0}let p=new ci,b=w=>{let A=new Float32Array(w.length/2*3);for(let T=0,R=0;T<w.length;T+=2,R+=3)A.set([w[T],-w[T+1],0],R);let _=new Ht;return _.setAttribute("position",new Ut(A,3)),_},m=new It(b(e),new $t({color:16777215,side:se})),g=[];for(let w of r)for(let A of xn(w))for(let _ of A)g.push(w[_][0],w[_][1]);let x=new It(b(g),new $t({color:0,transparent:!0,opacity:0,blending:Un,side:se}));x.renderOrder=1,p.add(m,x);let v=new On(l,h,-c,-u,.1,10);v.position.z=1;let y=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(p,v),t.setRenderTarget(y);for(let w of[m,x])w.geometry.dispose(),w.material.dispose();this.shadow.scale.set(h-l,u-c,1),this.shadow.position.set((l+h)/2,o,(c+u)/2);let M=this.shadow.material;M.opacity=s,M.color.set(a),this.shadow.visible=s>.01}hideShadow(){this.shadow.visible=!1}showShadow(t){let e=this.shadow.material;this.shadow.visible=t&&!!e.map&&e.opacity>.01}setArc(t){if(this.clearArc(),t.fade<=.01||t.points.length<2)return;let e=t.light?Cn:Ie,n=(o,s)=>{let a=$w(t.points.map(c=>c.at),o,t.points.map(c=>qw(c.elevation,t.light).multiplyScalar(c.t<=t.now?1:t.light?.75:.5))),l=new It(a,new $t({vertexColors:!0,transparent:!0,opacity:s*t.fade,blending:e,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(t.size*.09,t.light?.95:1)),t.light||this.arc.add(n(t.size*.3,.22));let r=new Ji(yg(t.hours.flat()),new Ri({color:t.light?13658624:16767370,map:this.glow,size:t.size*.55,transparent:!0,opacity:t.fade,blending:e,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),t.sun){let o=this.sprite(Kw(t.light),t.size*5,t.size*5,t.fade,e);o.position.set(...t.sun),this.arc.add(o)}for(let o of t.labels){let s=this.sprite(Jw(`${o.rising?"\u2191":"\u2193"} ${o.text}`,t.light),t.size*5.2,t.size*1.7,t.fade,Cn,!0);s.position.set(...o.at),this.arc.add(s)}this.buildRing(t),this.arc.visible=!0}buildRing(t){let{center:e,r:n,north:r,letters:o}=t.ring,s=e[1]+.03,a=(h,u)=>{let f=r+h*Math.PI/180;return[e[0]+Math.sin(f)*u,s,e[2]-Math.cos(f)*u]},l=[];for(let h=0;h<360;h+=3)l.push(...a(h,n),...a(h+3,n));for(let h=0;h<360;h+=15)l.push(...a(h,n),...a(h,n*(h%90===0?.93:.97)));let c=new Ke(yg(l),new Je({color:t.light?9071162:16761963,transparent:!0,opacity:(t.light?.45:.32)*t.fade,blending:t.light?Cn:Ie,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),o.forEach((h,u)=>{let f=this.sprite(jw(h,u===0,t.light),t.size*1.6,t.size*1.6,t.fade,Cn,!0);f.position.set(...a(u*90,n*1.07)),f.position.y+=t.size*.6,this.arc.add(f)})}sprite(t,e,n,r,o,s=!1){this.textures.push(t);let a=new ps(new vo({map:t,transparent:!0,opacity:r,blending:o,depthWrite:!1,depthTest:!s}));return a.scale.set(e,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){for(let t of[...this.arc.children]){this.arc.remove(t);let e=t;e.geometry?.dispose(),e.material.dispose()}for(let t of this.textures)t.dispose();this.textures=[],this.arc.visible=!1}dispose(){this.clearArc(),this.target?.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function yg(i){let t=new Ht;return t.setAttribute("position",new Ut(i,3)),t}function qw(i,t){let e=Math.min(1,Math.max(0,i/35)),n=new j(t?13778970:16730666),r=new j(t?14711552:16753978),o=new j(t?15769600:16773832);return e<.4?n.lerp(r,e/.4):r.lerp(o,(e-.4)/.6)}function $w(i,t,e){let n=[],r=[],o=[],s=new q(0,1,0);for(let l=0;l<i.length;l++){let c=new q(...i[l]),h=new q(...i[Math.max(0,l-1)]),f=new q(...i[Math.min(i.length-1,l+1)]).sub(h).normalize(),d=new q().crossVectors(f,s);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let p=new q().crossVectors(d,f).normalize();for(let b=0;b<Fi;b++){let m=b/Fi*Math.PI*2,g=c.clone().addScaledVector(d,Math.cos(m)*t).addScaledVector(p,Math.sin(m)*t);n.push(g.x,g.y,g.z),r.push(e[l].r,e[l].g,e[l].b)}if(l!==0)for(let b=0;b<Fi;b++){let m=(l-1)*Fi+b,g=(l-1)*Fi+(b+1)%Fi,x=l*Fi+b,v=l*Fi+(b+1)%Fi;o.push(m,x,v,m,v,g)}}let a=new Ht;return a.setAttribute("position",new Ut(n,3)),a.setAttribute("color",new Ut(r,3)),a.setIndex(o),a}function tu(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Zw(){let[i,t]=tu(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Sn(i)}function Kw(i){let[t,e]=tu(256,256);e.translate(128,128);for(let r=0;r<12;r++){e.save(),e.rotate(r/12*Math.PI*2);let o=r%2===0?124:92,s=e.createLinearGradient(0,0,0,-o);s.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),s.addColorStop(1,"rgba(255,170,60,0)"),e.fillStyle=s,e.beginPath(),e.moveTo(-7,0),e.lineTo(0,-o),e.lineTo(7,0),e.fill(),e.restore()}let n=e.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,80,0,Math.PI*2),e.fill(),e.fillStyle=i?"#fff3cf":"#fffaf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),new Sn(t)}function Jw(i,t){let[e,n]=tu(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),o=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(o,10,r,84,42):n.rect(o,10,r,84),n.fillStyle=t?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=t?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=t?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new Sn(e)}function jw(i,t,e){let[n,r]=tu(96,96);return r.font=`${t?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e?"rgba(255,255,255,0.9)":t?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=t?e?"#c0301a":"#ff6a4a":e?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new Sn(n)}var Qw=40;function vg(i,t,e,n,r){let o=[];if(n<=0)return o;let s=1/Math.tan(n*Math.PI/180),a=(c,h,u)=>{let f=Math.min(Qw,Math.max(0,h-r)*s);return[c-e[0]*f,u-e[1]*f]},l=(c,h,u)=>o.push(c[0],c[1],h[0],h[1],u[0],u[1]);for(let c of i.floors)for(let h of c.rooms){if(h.outdoor||h.points.length<3)continue;let u=c.elevation+(h.ceiling_height??c.height);if(u<=r)continue;let f=Math.max(r,c.elevation),d=h.points.map(([b,m])=>a(b,f,m)),p=h.points.map(([b,m])=>a(b,u,m));for(let[b,m,g]of xn(h.points))l(d[b],d[m],d[g]),l(p[b],p[m],p[g]);for(let b=0;b<h.points.length;b++){let m=(b+1)%h.points.length;l(d[b],d[m],p[m]),l(d[b],p[m],p[b])}}for(let c of t){let h=c.floor.elevation+c.base,u=c.solid.p;for(let f=0;f+8<u.length;f+=9)l(a(u[f],h+u[f+1],u[f+2]),a(u[f+3],h+u[f+4],u[f+5]),a(u[f+6],h+u[f+7],u[f+8]))}return o}function _g(i){if(!i.length)return null;let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let o=0;o<i.length;o+=2)t=Math.min(t,i[o]),n=Math.max(n,i[o]),e=Math.min(e,i[o+1]),r=Math.max(r,i[o+1]);return[t,e,n,r]}function Lf(i,t){let e=[],n=[],r=[],o=[],s=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=tS(c.id)%1e3/1e3;for(let b of Ks(l,c)){let[m,g,x,v]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),y=[[m,0,0],[g,1,0],[x,1,1],[v,0,1]];for(let M of[0,1,2,0,2,3]){let[w,A,_]=y[M];e.push(w[0],w[1],w[2]),n.push(A,_),r.push(u,f),o.push(d)}}let p=e.length/3-h;p&&s.push({id:c.id,start:h,count:p})}if(!e.length)return null;let a=new Ht;return a.setAttribute("position",new Ut(e,3)),a.setAttribute("uv",new Ut(n,2)),a.setAttribute("aCells",new Ut(r,2)),a.setAttribute("aPhase",new Ut(o,1)),a.setAttribute("aLevel",new Ut(new Float32Array(e.length/3),1)),{geometry:a,ranges:s}}function oa(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,t.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return e.needsUpdate=!0,r}function Ff(i){let t=new $t({transparent:!0,blending:Ie,depthWrite:!1,side:se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function tS(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var wg=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,eS=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,nS=wg,iS=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Mg(i,t){let e=[];for(let[r,o,s]of xn(i))for(let a of[r,s,o])e.push(i[a][0],t,i[a][1]);let n=new Ht;return n.setAttribute("position",new Ut(e,3)),n}function Sg(i,t){let e=new Ne;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new It(Mg(n.points,s),new gn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:wg,fragmentShader:eS,transparent:!0,blending:Ie,depthWrite:!1,side:se}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(m=>m[0]),a=n.points.map(m=>m[1]),[l,c,h,u]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),p=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],b=No(n.points,p);if(b.length>=3){let m=new It(Mg(b,n.y+.03),new gn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:nS,fragmentShader:iS,transparent:!0,side:se}));m.renderOrder=6,e.add(m);let g=[];for(let v=0;v<b.length;v++){let y=b[v],M=b[(v+1)%b.length];g.push(y[0],n.y+.032,y[1],M[0],n.y+.032,M[1])}let x=new Ht;x.setAttribute("position",new Ut(g,3)),e.add(new Ke(x,new Je({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Tg(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var Eg=["neon","blueprint","day"];function Ag(i){return Eg.indexOf(i)}var Wo={value:new q(.22,.88,1)},Ho={value:0};function Rg(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var rS=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat \u2013
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
`;function sn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=t,o.uniforms.uAccent=Wo,o.uniforms.uAccentOn=Ho,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${rS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function sa(i){return i==="day"?Cn:Ie}var Di=.012,oS=.012;function Cg(i,t,e,n,r,o=[],s){let a=[],l=[],c=[],h=[],u=(x,v,y,M,w,A,_)=>{for(let T of[x,v,y,x,y,M])a.push(T[0],T[1],T[2]),l.push(w[0],w[1],w[2]),c.push(A),h.push(_)},f=(x,v,y,M)=>{for(let w=1;w+1<x.length;w++)for(let A of[x[0],x[w],x[w+1]])a.push(A[0],A[1],A[2]),l.push(v[0],0,v[1]),c.push(y),h.push(M)};i.rooms.forEach((x,v)=>{if(x.points.length<3)return;let y=x.points.map(P=>P[0]),M=x.points.map(P=>P[1]),w=Math.min(...y),A=Math.min(...M),_=Math.max(...y),T=Math.max(...M),R=Math.max(1,Math.ceil((_-w)/r)),I=Math.max(1,Math.ceil((T-A)/r));for(let P=0;P<R;P++)for(let N=0;N<I;N++){let C=w+P*r,S=A+N*r,E=Math.min(C+r,_),L=Math.min(S+r,T),D=No(x.points,[[C,S],[E,S],[E,L],[C,L]]),O=D.length>=3?Math.abs(hS(D)):0;if(O<1e-4)continue;let k=fS(D);if(!o.some(z=>jt(k,z))){if(O>(E-C)*(L-S)-1e-6){u([C,Di,S],[C,Di,L],[E,Di,L],[E,Di,S],[0,1,0],v,-1);continue}for(let[z,W,G]of xn(D)){let Y=D[z],Z=D[G],it=D[W];(it[1]-Y[1])*(Z[0]-Y[0])-(it[0]-Y[0])*(Z[1]-Y[1])<0&&([Y,Z]=[Z,Y]),u([Y[0],Di,Y[1]],[it[0],Di,it[1]],[Z[0],Di,Z[1]],[Z[0],Di,Z[1]],[0,1,0],v,-1)}}}});let d=i.rooms.length,p=(i.outdoor??[]).filter(x=>x.points.length>=3&&!Vn(x.type));if(p.length){let x=p.flatMap(T=>T.points.map(R=>R[0])),v=p.flatMap(T=>T.points.map(R=>R[1])),y=Math.floor(Math.min(...x)/r)*r,M=Math.floor(Math.min(...v)/r)*r,w=Math.max(1,Math.ceil((Math.max(...x)-y)/r)),A=Math.max(1,Math.ceil((Math.max(...v)-M)/r)),_=(T,R,I)=>Im(i,T)-qo(i,T,R,I)+Di;for(let T=0;T<w;T++)for(let R=0;R<A;R++){let I=y+T*r,P=M+R*r,N,C=[I+r/2,P+r/2];N=p.find(E=>E.type==="pool"&&jt(C,E.points));for(let E=p.length-1;E>=0&&!N;E--)jt(C,p[E].points)&&(N=p[E]);if(!N)continue;let S=(E,L)=>[E,_(N,E,L),L];u(S(I,P),S(I,P+r),S(I+r,P+r),S(I+r,P),[0,1,0],d,-1)}}let b=Math.min(i.cut_height,i.height),m=[];t.forEach((x,v)=>{let y=x.profile?.length?Math.max(...x.profile.map(([,L])=>L)):Math.min(i.height,x.height??i.height),M=Math.min(b,y-.02),w=x.b[0]-x.a[0],A=x.b[1]-x.a[1],_=Math.hypot(w,A);if(_<.05)return;let T=[w/_,A/_],R=[-T[1],T[0]],I=e[v],P=aS(x,T,_,n),N=(L,D)=>L?i.rooms.findIndex(O=>O.id===L):D?d:-1;m.push({a:x.a,b:x.b,...x.slope?{h:Math.min(y,Qn(x.slope,x.a[0],x.a[1])),h1:Math.min(y,Qn(x.slope,x.b[0],x.b[1]))}:{h:y},...x.profile?{profile:x.profile}:{},...s?{roofUnder:s}:{},ra:N(x.roomLeft,!1),rb:N(x.roomRight,x.exterior),gaps:P});let C=(L,D,O)=>[D,O,...L.filter(k=>k>D+.005&&k<O-.005)].sort((k,z)=>k-z).filter((k,z,W)=>z===0||k>W[z-1]+.005),S=C([M,(M+y)/2,...P.flatMap(L=>[L.y0+.01,L.y1-.01])],.02,y-.02),E=C([...P.flatMap(L=>[L.s0,L.s1]),...x.profile?.map(([L])=>L)??[]],0,_);for(let L of[1,-1]){let D=L>0?x.roomLeft:x.roomRight,O=D?i.rooms.findIndex(Z=>Z.id===D):x.exterior?d:-1;if(O<0)continue;let k=(L>0?x.left:x.right)+oS,z=[R[0]*L,R[1]*L],W=(Z,it)=>[x.a[0]+T[0]*Z+z[0]*k,it,x.a[1]+T[1]*Z+z[1]*k],G=Z=>{let it=W(Z,0),H=s?.(it[0],it[2]),X=x.slope?Qn(x.slope,x.a[0]+T[0]*Z,x.a[1]+T[1]*Z)-.02:1/0;return Math.min(H==null?1/0:H-.02,X)},Y=Z=>Math.min(x.profile?cn(x.profile,Z):y,G(Z));for(let Z=0;Z<E.length-1;Z++){let it=E[Z+1]-E[Z],H=Math.max(1,Math.ceil(it/r));for(let X=0;X<H;X++){let rt=E[Z]+it/H*X,at=E[Z]+it/H*(X+1),st=(rt+at)/2;for(let tt=0;tt<S.length-1;tt++){let ft=S[tt],dt=S[tt+1];if(dt-ft<.01)continue;let ct=(ft+dt)/2;if(P.some(he=>st>he.s0&&st<he.s1&&ct>he.y0&&ct<he.y1))continue;let _t=ft>=b-1e-6?I:lr+I,yt=Math.min(dt,Y(rt)),Pt=Math.min(dt,Y(at));if(yt<=ft+.005&&Pt<=ft+.005)continue;let Ft=[[rt,ft],[at,ft],[at,dt],[rt,dt]],Qt=he=>Y(he),be=[];for(let he=0;he<Ft.length;he++){let $=Ft[he],Me=Ft[(he+1)%Ft.length],le=Qt($[0])-$[1],V=Qt(Me[0])-Me[1],F=le>=-1e-7,Q=V>=-1e-7;if(F&&be.push($),F!==Q){let ot=le/(le-V);be.push([$[0]+(Me[0]-$[0])*ot,$[1]+(Me[1]-$[1])*ot])}}be.length<3||(L<0&&be.reverse(),f(be.map(([he,$])=>W(he,$)),z,O,_t))}}}}});let g=[];for(let x of n){if(x.opening.type!=="door")continue;let v=t.find(w=>Ig(w,x)&&sS(w,x));if(!v||!v.roomLeft||!v.roomRight)continue;let y=i.rooms.findIndex(w=>w.id===v.roomLeft),M=i.rooms.findIndex(w=>w.id===v.roomRight);y<0||M<0||g.push({id:x.opening.id,a:y,b:M,x:x.start[0]+x.axis[0]*(x.width/2),y:Math.min(1.1,x.top*.55),z:x.start[1]+x.axis[1]*(x.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:g,blockers:m}}function Ig(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function sS(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,o=t.start[0]+t.axis[0]*(t.width/2),s=t.start[1]+t.axis[1]*(t.width/2),a=((o-i.a[0])*e+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function aS(i,t,e,n){let r=[];for(let o of n){if(!Ig(i,o))continue;let s=(o.start[0]-i.a[0])*t[0]+(o.start[1]-i.a[1])*t[1],l=o.axis[0]*t[0]+o.axis[1]*t[1]>0?s:s-o.width;l>e||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function lS(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function cS(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Pg(i,t,e,n,r,o,s){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=cS(i),d=1/(1+h/(f*f)),p=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*o+c*s)/u);return i.level*p*(.2+.8*b)*lS(i.kind,l/u)}function Lg(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,p]of[[h.a,h.b],[h.b,h.a]]){let b=[0,0,0];for(let g of t){if(g.room!==d)continue;let x=g.x-h.x,v=g.y-h.y,y=g.z-h.z,M=Math.hypot(x,v,y)||1,w=Pg(g,h.x,h.y,h.z,x/M,v/M,y/M);b[0]+=g.color[0]*w,b[1]+=g.color[1]*w,b[2]+=g.color[2]*w}let m=Math.max(b[0],b[1],b[2]);m<.01||r.push({x:h.x,y:h.y,z:h.z,color:[b[0]/m,b[1]/m,b[2]/m],level:Math.min(1,m*.9*(.35+.65*f)),kind:"wall",room:p})}});let o=new Map;for(let h of r){let u=i.blockers.filter(d=>d.ra===h.room||d.rb===h.room),f={...h,color:h.color.map(d=>Math.pow(d,1.5)),walls:u};o.set(h.room,[...o.get(h.room)??[],f])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let h=0;h<l.length;h++){let u=o.get(l[h]);if(!u)continue;let f=h*3,d=0,p=0,b=0;for(let m of u){if(m.walls.length&&uS(m,m.walls,s[f],s[f+1],s[f+2]))continue;let g=Pg(m,s[f],s[f+1],s[f+2],a[f],a[f+1],a[f+2]);d+=m.color[0]*g,p+=m.color[1]*g,b+=m.color[2]*g}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-p*e*1.6),c[f+2]=1-Math.exp(-b*e*1.6)}return c}function uS(i,t,e,n,r){let o=e-i.x,s=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=o*c-s*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let p=(u*s-f*o)/h;if(p<0||p>1)continue;let b=i.y+(n-i.y)*d;if(b>=(a.h1===void 0?a.h:a.h+(a.h1-a.h)*p))continue;let m=p*Math.hypot(l,c),g=l/Math.hypot(l,c),x=c/Math.hypot(l,c),v=a.roofUnder?.(a.a[0]+g*m,a.a[1]+x*m),y=a.profile?cn(a.profile,m):a.h;if(!(b>=(v==null?y:Math.min(y,v)))&&!a.gaps.some(M=>m>M.s0&&m<M.s1&&b>M.y0&&b<M.y1))return!0}return!1}function Fg(i,t,e){for(let n=.1;n<e;n+=.1)if([.1,.5,.9].some(r=>Math.abs(i(r,n)-t)>.1))return n-.05;return e}function Df(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&jt([t,e],r.points));return n<0?i.rooms.length:n}function Xo(i,t){return i&&t>=0&&t<i.length?i[t]:t}function hS(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function fS(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var aa={open:0,open2:0,tilt:0,tilt2:0,cover:null},Dg=2043986,Ng=2769520,dS=2242399,Nf=1845831,pS=1450554,Ni=16758087,eu=3662079,mS=1.2,gS=1.5,bS=.5,xS=1846349,yS=2572395,vS=1120816,_S=1845831,Og=5995775,Ug=9085695,Yo=Wt(3662079,.08),MS=.2;function nu(i,t,e,n,r,o,s,a,l,c,h){let u=(d,p,b)=>t(d,p,b),f=[[u(e,r,a),u(n,r,a),u(n,o,a),u(e,o,a),c],[u(e,r,s),u(n,r,s),u(n,o,s),u(e,o,s),Wt(l.getHex(),.6)],[u(e,o,s),u(n,o,s),u(n,o,a),u(e,o,a),l],[u(e,r,s),u(n,r,s),u(n,r,a),u(e,r,a),Wt(l.getHex(),.85)],[u(e,r,s),u(e,o,s),u(e,o,a),u(e,r,a),Wt(l.getHex(),.92)],[u(n,r,s),u(n,o,s),u(n,o,a),u(n,r,a),Wt(l.getHex(),.92)]];for(let[d,p,b,m,g]of f)i.tri(d,p,b,g,g,g,void 0,h),i.tri(d,b,m,g,g,g,void 0,h)}function ye(i,t,e,n,r,o,s,a,l,c,h,u){if(a<=h+1e-6)return nu(i,t,e,n,r,o,s,a,l,c,te);if(s>=h-1e-6)return nu(i,t,e,n,r,o,s,a,l,c,u);nu(i,t,e,n,r,o,s,h,l,c,te),nu(i,t,e,n,r,o,h,a,l,c,u)}function dr(i,t,e,n,r,o,s,a,l,c,h=0){let u=(f,d,p)=>{let b=y=>h?(s-y)/h:.5,m=t(e,r,f),g=t(n,r,f),x=t(n,r,d),v=t(e,r,d);i.tri(m,g,x,a,a,a,[0,b(f),1,b(f),1,b(d)],p),i.tri(m,x,v,a,a,a,[0,b(f),1,b(d),0,b(d)],p)};s<=l+1e-6?u(o,s,te):o>=l-1e-6?u(o,s,c):(u(o,l,te),u(l,s,c))}function wS(i,t,e,n,r,o,s,a,l,c){let h=t(e,r,s),u=t(n,r,s),f=t(n,o,s),d=t(e,o,s),p=0,b=(o-r)/c;i.tri(h,u,f,a,a,a,[0,p,1,p,1,b],l),i.tri(h,f,d,a,a,a,[0,p,1,b,0,b],l)}function SS(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let o=e*r.axis[0]+n*r.axis[1];if(Math.abs(o)<.999)continue;let s=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(s*n-a*e)>.03)continue;let l=s*e+a*n,c=o>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function TS(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!SS(i,t)&&zi(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function Bg(i,t,e,n,r,o,s,a,l){let c=TS(i,t),h=i.width,u=Math.max(i.sill,.03);c.inside&&ye(e,n,-.04,h+.04,r+o,i.faceRoom+.07,u-.03,u,new j(Nf),s,a,l),c.outside&&ye(e,n,-.03,h+.03,-i.faceOut-.06,r-o,u-.04,u-.02,new j(Nf),s,a,l)}function kg(i,t,e){let n=new ne,r=new ne,o=new ne(!0),s=new j(Dg),a=new j(Ng),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,p=o.count,b=t.get(u.opening.id)??aa,m=u.width,{sill:g,top:x,bucket:v}=u,y=(_,T,R)=>[u.start[0]+u.axis[0]*_+u.toRoom[0]*T,R,u.start[1]+u.axis[1]*_+u.toRoom[1]*T],M=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",A=u.opening.type==="door"&&zi(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!A||u.opening.type==="garage"){let _=-u.faceOut-.012,T=u.faceRoom+.012,R=u.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),I=R?Wt(Ni,.8):new j(Dg),P=R?Wt(Ni,1):new j(Ng);ye(n,y,-.045,.02,_,T,0,x+.045,I,P,e,v),ye(n,y,m-.02,m+.045,_,T,0,x+.045,I,P,e,v),ye(n,y,.02,m-.02,_,T,x-.02,x+.045,I,P,e,v)}if(u.opening.type==="door"){let _=zi(u.opening,u.exterior),T=md(_),R=u.opening.swing==="out"?-1:1,I=R>0?u.faceRoom:-u.faceOut,P=u.opening.leaves===2,N=.02,C=m-.02,S=pd(m,_,u.hingeAtStart,u.opening);if(S){let k=-u.faceOut-.012,z=u.faceRoom+.012,W=I-R*(T?.06:.04)/2,G=.06;for(let[Y,Z]of S.panels)ye(n,y,Y,Y+G,k,z,.02,x-.02,s,a,e,v),ye(n,y,Z-G,Z,k,z,.02,x-.02,s,a,e,v),ye(n,y,Y+G,Z-G,k,z,.02,.12,s,a,e,v),dr(r,y,Y+G,Z-G,W,.12,x-.02,Yo,e,v);N=S.x0,C=S.x1}let E=P?(C-N)/2-.004:C-N,L=T?.06:.04;T&&(ye(n,y,.02,m-.02,-u.faceOut-.02,u.faceRoom,0,.02,new j(Nf),a,e,v),u.exterior&&ye(n,y,m/2-.08,m/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,Wt(Ni,.55),Wt(Ni,.85),e,te));let D=A?[]:[[u.hingeAtStart,b.open]];P&&!A&&D.push([!u.hingeAtStart,b.open2??0]);let O=u.opening.open_angle;for(let[k,z]of D){let W=Math.min(1,Math.max(0,z)),G=_==="sliding"?0:O!=null&&O>0?(b.sensed?W:Math.min(1,W/bS))*Math.min(170,O)*(Math.PI/180):W*gS,Y=_==="sliding"?W*E:0,Z=(dt,ct,_t)=>{let yt=dt*Math.cos(G)-ct*Math.sin(G)-Y,Pt=I+R*(ct*Math.cos(G)+dt*Math.sin(G)+(Y?.05:0));return y(k?N+yt:C-yt,Pt,_t)},it=W>.05?te:v,H=w?!!b.sensed&&W<.05:W>.9,X=H?Wt(Ni,.7):new j(T?vS:xS),rt=H?Wt(Ni,.9):new j(T?_S:yS);_==="glass"?(ye(n,Z,0,.05,-L,0,.01,x-.01,X,rt,e,it),ye(n,Z,E-.05,E,-L,0,.01,x-.01,X,rt,e,it),ye(n,Z,.05,E-.05,-L,0,.01,.12,X,rt,e,it),ye(n,Z,.05,E-.05,-L,0,x-.08,x-.01,X,rt,e,it),dr(r,Z,.05,E-.05,-L/2,.12,x-.08,Yo,e,it)):ye(n,Z,0,E,-L,0,.01,x-.01,X,rt,e,it);for(let dt of[.001,-L-.001])_==="front_glass"?dr(r,Z,.12,E-.12,dt,x*.55,x-.18,Yo,e,it):T&&dr(r,Z,.1,.18,dt,.3,x-.3,Yo,e,it);let at=Math.min(1.05,x*.5),st=T?.3:.012,tt=T?E-.11:E-.16,ft=T?E-.08:E-.05;ye(n,Z,tt,ft,.004,.05,at-st,at+st,new j(Og),new j(Ug),e,it),ye(n,Z,tt,ft,-L-.05,-L-.004,at-st,at+st,new j(Og),new j(Ug),e,it),b.unlocked&&k===u.hingeAtStart&&ye(n,Z,E-.022,E+.004,-L-.006,.006,.03,x-.03,Wt(eu,.85),Wt(eu,1),e,it)}}else if(u.opening.type==="garage"){let _=Math.min(1,Math.max(0,b.cover??1)),T=new j(13951231),R=u.faceRoom-.03,I=x*(1-_);_>.01&&dr(o,y,.02,m-.02,R,I,x,T,e,v,.5);let P=(1-_)*x;P>.01&&wS(o,y,.02,m-.02,R,R+P,x+.03,T,v,.5)}else if(zi(u.opening,u.exterior)==="glass_wall"){ye(n,y,0,.04,M-.025,M+.025,g,x,s,a,e,v),ye(n,y,m-.04,m,M-.025,M+.025,g,x,s,a,e,v),ye(n,y,.04,m-.04,M-.025,M+.025,g,g+.03,s,a,e,v),ye(n,y,.04,m-.04,M-.025,M+.025,x-.04,x,s,a,e,v),Bg(u,i,n,y,M,.025,a,e,v);let R=Math.max(1,Math.round((m-2*.04)/.9)),I=(m-2*.04)/R;for(let P=1;P<R;P++){let N=.04+P*I;ye(n,y,N-.02,N+.02,M-.025,M+.025,g+.03,x-.04,s,a,e,v)}for(let P=0;P<R;P++){let N=.04+P*I+(P?.02:0),C=.04+(P+1)*I-(P<R-1?.02:0);dr(r,y,N,C,M,g+.03,x-.04,Yo,e,v)}}else{ye(n,y,0,.06,M-.035,M+.035,g,x,s,a,e,v),ye(n,y,m-.06,m,M-.035,M+.035,g,x,s,a,e,v),ye(n,y,.06,m-.06,M-.035,M+.035,g,g+(g>.05?.06:.03),s,a,e,v),ye(n,y,.06,m-.06,M-.035,M+.035,x-.06,x,s,a,e,v),Bg(u,i,n,y,M,.035,a,e,v);let R=.055,I=g+(g>.05?.06:.03),P=x-.06,N=M+.035,C=M+.035+.06,E=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:m/2,x1:u.hingeAtStart?m/2:m-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?m/2:.06,x1:u.hingeAtStart?m-.06:m/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:m-.06,open:b.open,tilt:b.tilt}];for(let L of E){let D=L.open>.02||L.tilt>.02,O=w?!!b.sensed&&!D:D,k=O?Wt(Ni,.75):new j(dS),z=O?Wt(Ni,.95):a,W=L.x0,G=L.x1,Y=G-W,Z=L.open*mS*(u.opening.swing==="out"?-1:1),it=L.tilt*MS,H=(rt,at,st)=>{let tt=st-I,ft=at+tt*Math.sin(it),dt=I+tt*Math.cos(it),ct=rt*Math.cos(Z)-(ft-N)*Math.sin(Z);ft=N+(ft-N)*Math.cos(Z)+rt*Math.sin(Z);let _t=L.atStart?W+ct:G-ct;return y(_t,ft,dt)},X=Math.abs(Z)>.05?te:v;if(ye(n,H,0,R,N,C,I,P,k,z,e,X),ye(n,H,Y-R,Y,N,C,I,P,k,z,e,X),ye(n,H,R,Y-R,N,C,I,I+R,k,z,e,X),ye(n,H,R,Y-R,N,C,P-R,P,k,z,e,X),dr(r,H,R,Y-R,(N+C)/2,I+R,P-R,O?Wt(Ni,.16):Yo,e,X),b.unlocked&&L.atStart===u.hingeAtStart&&ye(n,H,Y-.022,Y+.004,N-.006,C+.006,I+.02,P-.02,Wt(eu,.85),Wt(eu,1),e,X),zi(u.opening,u.exterior)==="bars"){let rt=(I+P)/2,at=(N+C)/2;ye(n,H,R,Y-R,at-.012,at+.012,rt-.012,rt+.012,k,z,e,X),ye(n,H,Y/2-.012,Y/2+.012,at-.012,at+.012,I+R,P-R,k,z,e,X)}}}if(b.cover!==null){let _=-u.faceOut,T=x+.2;ye(n,y,-.05,m+.05,_-.15,_,x,T,new j(pS),a,e,v);let R=Math.min(1,Math.max(0,b.cover));if(R>.01){let I=x-R*(x-g);dr(o,y,0,m,_-.07,I,x,new j(16777215),e,v,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:p,end:o.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:o.geometry(),frameTris:l,glassTris:c,blindTris:h}}var ES=.3,zg=2.6;function Vg(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),o=i.map(M=>M[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),h=c-l>=a-s,u=e*.7071,f=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],A=[...w,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return w.every(_=>jt(_,i))&&!n.some(_=>A.some(T=>jt(T,_)))},d=(M,w)=>f(h?[M,w]:[w,M]),p=(M,w)=>{let A=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let _=1;_<A;_++)if(!f([M[0]+(w[0]-M[0])*_/A,M[1]+(w[1]-M[1])*_/A]))return!1;return!0},[b,m,g,x]=h?[s,a,l,c]:[l,c,s,a],v=[],y=!0;for(let M=b+e;M<=m-e+1e-6;M+=t){let w=null,A=null,_=.05;for(let P=g;P<=x+1e-6;P+=_)if(d(M,P)&&(A??=P),(!d(M,P)||P+_>x+1e-6)&&A!==null){let N=d(M,P)?P:P-_;(!w||N-A>w[1]-w[0])&&(w=[A,N]),A=null}if(!w||w[1]-w[0]<.2)continue;let T=P=>{let[N,C]=P?w:[w[1],w[0]];return[h?[M,N]:[N,M],h?[M,C]:[C,M]]},R=T(y),I=v[v.length-1];if(I&&n.length&&!p(I,R[0])){let P=T(!y);if(!p(I,P[0]))continue;R=P,y=!y}v.push(R[0],R[1]),y=!y}return v}function Uf(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let o=r/e*Math.PI*2;return[i[0]+Math.cos(o)*t,i[1]+Math.sin(o)*t]})}var Of=i=>Math.atan2(Math.sin(i),Math.cos(i));function Gg(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Of(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),zg*e),!0)}let a=Math.atan2(r,o),l=Of(a-i.heading);if(i.heading=Of(i.heading+Math.sign(l)*Math.min(Math.abs(l),zg*e)),Math.abs(l)<.35){let c=Math.min(s,ES*e);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}function Wg(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var AS=66,RS=250;function Hg(i,t){return i?t>=3e4?RS:AS:0}function Xg(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}var kn=null,Yg=new Map;function $g(i,t=0){let e=new ne,n=new ze,r=Te(i.type);if(r?.light)kc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Bf(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Bc(e,n,new ne,o,0,!0)}return{buf:e,lines:n}}function PS(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,o=Yg.get(r);if(o)return o;e&&$o(e),kn??=new Lr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),kn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),kn.setSize(t,t,!1),kn.setClearColor(0,0);let{buf:s,lines:a}=$g(i),l=new ci,c=new It(s.geometry(),new $t({vertexColors:!0,color:new j(n,n,n)})),h=new Ke(a.geometry(),new Je({vertexColors:!0,color:new j(n*1.8,n*1.8,n*1.8)}));l.add(c,h);let u=new wn().setFromObject(c),f=u.getCenter(new q),d=new On(-1,1,1,-1,.01,100);d.position.copy(f).add(new q(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let p=.05;for(let g of[u.min.x,u.max.x])for(let x of[u.min.y,u.max.y])for(let v of[u.min.z,u.max.z]){let y=new q(g,x,v).applyMatrix4(d.matrixWorldInverse);p=Math.max(p,Math.abs(y.x),Math.abs(y.y))}let b=p*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),kn.render(l,d);let m=kn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose(),Yg.set(r,m),m}function CS(i,t,e=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,s=qg.get(o);if(s)return s;n&&$o(n);let{buf:a,lines:l}=$g(i,t),c=new It(a.geometry(),new $t({vertexColors:!0,color:new j(r,r,r)})),h=new Ke(l.geometry(),new Je({vertexColors:!0,color:new j(r*1.8,r*1.8,r*1.8)})),u=new wn().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,p=Math.max(0,u.min.y),b=u.max.y,m=Math.max(1,Math.min(1024,Math.round((d-f)*e))),g=Math.max(1,Math.min(1024,Math.round((b-p)*e)));kn??=new Lr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),kn.setPixelRatio(1),kn.setSize(m,g,!1),kn.setClearColor(0,0);let x=new ci;x.add(c,h);let v=new On(f,d,b,p,.01,100);v.position.set(0,0,50),v.lookAt(0,0,0),v.updateProjectionMatrix(),kn.render(x,v);let y=kn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let M={url:y,x0:f,x1:d,y0:p,y1:b};return qg.set(o,M),M}var qg=new Map;var EC={Group:Ne,Mesh:It,MeshBasicMaterial:$t,CanvasTexture:Sn,Color:j,PlaneGeometry:$n,BufferGeometry:Ht,Float32BufferAttribute:Ut,DoubleSide:se},Kg={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},IS=[.22,.88,1],LS=2.4,Jg=1.4,FS=.22,jg=.94,Qg=140,tb=1.5;function DS(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[o,s]=e[r],[a,l]=e[(r+1)%e.length],c=a-o,h=l-s,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-o)*c+(t-s)*h)/u));n=Math.min(n,Math.hypot(i-(o+c*f),t-(s+h*f)))}return n}var zf=32,NS=500,eb=160,OS=33,nb=.028,US=.026,BS=.012,kS=.09,ae=2767456,zS=2240847,VS=3096944,GS=1911110,WS=1,ib=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),iu=450,rb=125,HS=200,XS=.08,ca={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},YS=new j(1714765);function qS(){let i=navigator;return Xg(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)}var Vf=class{host;options;renderer;scene=new ci;camera=new nn(38,1,.1,400);controls;labels;root=new Ne;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new Qc;sunPath=null;shadowSig="";arcSig="";spillNight="";compassLetters=["N","E","S","W"];hourCycle={};flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new Ke(new Ht,new Je({color:10471679,transparent:!0,opacity:.4,blending:Ie,depthWrite:!1}));snow=new Ji(new Ht,new Ri({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new It(new xs(1,28),new $t({color:16767370,transparent:!0,opacity:0,blending:Ie,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.renderer.domElement.addEventListener("webglcontextlost",()=>{this.disposed||this.options.onContextLost?.()}),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=ZS(),this.blindTexture=JS(),this.haloTexture=tT(),this.ground=new It(new $n(1,1),new $t({transparent:!1,blending:Ie,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=Hg(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return Wg(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){$o(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,td(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>da(h.floor).some(u=>u.id===t)),n=e?da(e.floor).find(h=>h.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=Vi(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new q(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[o,s]=Vi(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new q(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new q(o,e.floor.elevation+e.ty+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let o=r.el;r.icon!==n.icon&&(r.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let s=n.caption??"";r.caption!==s&&(r.caption=s,o.querySelector(".fp3d-dev-name").textContent=s);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,o.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,o.title=n.name,o.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?o.style.setProperty("--fp3d-glow",c):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])oa(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&oa(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Tg(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Sg(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ne;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=t.filter(c=>c.floorId===n.floor.id),s=.03;for(let c of o)if(c.playing)for(let h=0;h<3;h++){let u=new It(new ws(.92,1,48),new $t({color:3662079,transparent:!0,opacity:0,blending:Ie,depthWrite:!1,side:se}));u.rotation.x=-Math.PI/2,u.position.set(c.x,s+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of o)for(let h of c.members){let u=o.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,s+.02,c.z,u.x,s+.02,u.z))}if(a.length){let c=new Ht;c.setAttribute("position",new Ut(a,3));let h=new Ke(c,new Je({color:3662079,transparent:!0,opacity:.45,blending:Ie,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(e*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let o=la(r),s=kf(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?e*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let o=[],s=[];for(let c of e){if(!!c.glow!==r)continue;let h=Math.min(1,c.opacity);for(let u of xn(c.points))for(let f of u)o.push(c.points[f][0],c.y,c.points[f][1]),s.push(c.color[0],c.color[1],c.color[2],h)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Ht;l.setAttribute("position",new Ut(o,3)),l.setAttribute("color",new Ut(s,4)),a.geometry.dispose(),a.geometry=l,a.visible=o.length>0}}}buildPipes(t){let e=this.pipes.filter(o=>o.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new ne;for(let o of e)mg(r,o);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=s=>{let a=[],l=(f,d,p,b,m)=>{let g=Math.hypot(p-f,b-d)||1,x=-(b-d)/g*(m/2+s),v=(p-f)/g*(m/2+s);a.push(f+x,d+v,0,p+x,b+v,0,p-x,b-v,0,f+x,d+v,0,p-x,b-v,0,f-x,d-v,0)},h=.14+s;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,p=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*h,1.47+Math.sin(d)*h,0,Math.cos(p)*h,1.47+Math.sin(p)*h,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Ht;return u.setAttribute("position",new Ut(a,3)),u},n=new It(e(0),new $t({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:se})),r=new It(e(.05),new $t({color:t,transparent:!0,opacity:.22,blending:Ie,depthWrite:!1,side:se}));n.renderOrder=6,r.renderOrder=5;let o=new Ne;return o.add(r,n),o.visible=!1,o}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let h=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let o=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",o);let s=this.figures.get(n.id);if(o&&(!s||s.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!o&&s&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=Rg(t),n=e?1:0;n===Ho.value&&(!e||Wo.value.equals(new q(...e)))||(Ho.value=n,e&&Wo.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Ag(t),ym(t!=="neon"),this.building?.floors.some(o=>o.furniture.some(s=>s.type==="waste_bin"||Tm(s.type)))&&this.rebuild();let n=sa(t),r=[...this.floors.map(o=>o.materials.lines),...this.roof?[this.roof.lines]:[]];for(let o of r)o.blending=n,o.needsUpdate=!0;this.placeGround(),this.buildSunFx(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let n of this.floors)this.buildSun(n);let e=this.nightFactor().toFixed(2);if(e!==this.spillNight){this.spillNight=e;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.invalidate()}setSunPath(t,e,n){this.sunPath=t,e&&(this.compassLetters=e),n&&(this.hourCycle=n),this.buildSunFx(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new j(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new hs(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,o=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let o=this.weatherBox,s=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=o.x0+Math.random()*(o.x1-o.x0),u=o.y0+Math.random()*(o.y1-o.y0),f=o.z0+Math.random()*(o.z1-o.z0);s.set([h,u,f],c*3),n&&s.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Ht;l.setAttribute("position",new Ut(s,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+s*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-s*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(s+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*oe,s=(r?t.azimuth+180:t.azimuth)*oe,a=Math.max(10,Math.abs(t.elevation))*oe,{center:l,r:c}=this.skyFrame(),h=new q(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(h,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let t=this.weatherBox;return{center:new q((t.x0+t.x1)/2,t.y0,(t.z0+t.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){let t=this.building,e=this.sun,n=!!t&&!!e&&t.settings.sun_shadow!==!1&&!this.options.safeFx,r=(t?.settings.north??0)*oe,o=this.weather?.cloud??0,s=n&&!this.lowQuality&&e.elevation>1&&o<.9&&!this.roomTint,a=s?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${r},${o.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,s?this.drawShadow(t,e,r,o):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&e.elevation>-3,h=c?this.arcFrame():null,u=c&&h?`${this.theme},${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${this.compassLetters.join("")},${this.hourCycle.hourCycle??""},${l.points[0].t},${r},${h.x.toFixed(2)},${h.z.toFixed(2)},${h.y.toFixed(2)},${h.r.toFixed(2)},${o.toFixed(1)}`:"";if(u===this.arcSig)return;if(this.arcSig=u,!u||!h||!l||!e)return this.sunFx.hideArc();let f=(g,x,v=0)=>{let y=Math.max(0,x)*oe,M=r+g*oe;return[h.x+Math.sin(M)*Math.cos(y)*h.r,h.y+Math.sin(y)*h.r+v,h.z-Math.cos(M)*Math.cos(y)*h.r]},d=1-.7*o,p=Date.now(),b=g=>new Date(g).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",...this.hourCycle}),m=h.r*.03;this.sunFx.setArc({points:l.points.map(g=>({at:f(g.azimuth,g.elevation),t:g.t,elevation:g.elevation})),now:p,hours:l.points.filter(g=>g!==l.rise&&g!==l.set&&new Date(g.t).getMinutes()===0).map(g=>f(g.azimuth,g.elevation)),labels:[l.rise,l.set].flatMap(g=>g?[{text:b(g.t),at:f(g.azimuth,g.elevation,m*2.2),rising:g===l.rise}]:[]),sun:e.elevation>0?f(e.azimuth,e.elevation):null,ring:{center:[h.x,h.y,h.z],r:h.r,north:r,letters:this.compassLetters},size:m,fade:d,light:this.theme!=="neon"})}arcFrame(){let t=this.building,e=t?Bo(t):null,n=t?.floors.flatMap(h=>h.rooms.filter(u=>!u.outdoor).flatMap(u=>u.points))??[];if(!e||!n.length)return null;let r=n.map(h=>h[0]),o=n.map(h=>h[1]),[s,a,l,c]=[Math.min(...r),Math.max(...r),Math.min(...o),Math.max(...o)];return{x:(s+a)/2,z:(l+c)/2,y:e.elevation,r:Math.max(7,Math.hypot(a-s,c-l)*.62)}}nightFactor(){let t=this.sun;return t?Math.min(1,Math.max(0,-t.elevation/6)):0}buildSpill(t,e){let n=this.building,r=n?.settings.window_glow===!1||this.options.safeFx?0:this.nightFactor(),o=n&&r>0?Bo(n):null,s=!!o&&Math.abs(t.floor.elevation-o.elevation)<.5,a=new Map;if(s)for(let u of e){let f=a.get(u.room)??[0,0,0,0];f[0]+=u.color[0]*u.level,f[1]+=u.color[1]*u.level,f[2]+=u.color[2]*u.level,f[3]+=u.level,a.set(u.room,f)}let l=[...t.openings.values()].map(u=>(u.cover??0).toFixed(1)).join(","),c=s&&a.size?`${r.toFixed(2)}|${[...a].map(([u,f])=>`${u}:${f.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${l}`:"";if(c===t.spillSig)return;t.spillSig=c;let h=new ne;if(c)for(let u of t.geo.openings){if(u.opening.type!=="window"||!u.exterior)continue;let f=t.floor.rooms.findIndex(C=>C.id===u.opening.room_id),d=f<0?void 0:a.get(Xo(t.lightZones,f));if(!d||d[3]<.02)continue;let b=1-(t.openings.get(u.opening.id)?.cover??0),m=u.top-u.sill;if(b<.05||m<.1)continue;let g=Math.max(d[0],d[1],d[2],1e-6),x=.3*r*Math.min(1,d[3])*b*Math.min(1,m/1.2),v=new j(d[0]/g*x,d[1]/g*x,d[2]/g*x),y=[-u.toRoom[0],-u.toRoom[1]],M=Math.min(3.5,.8+1.1*u.top),w=(C,S,E)=>{let L=S/M,D=-E*L+C*(u.width+2*E*L);return br(t.floor,{x:u.start[0]+u.axis[0]*D+y[0]*(u.faceOut+S),z:u.start[1]+u.axis[1]*D+y[1]*(u.faceOut+S)})},A=w(.5,.05,0),_=Fg((C,S)=>w(C,S,.35*M),A,M);if(_<.2)continue;let T=.35*_,R=A+.014,I=(C,S)=>{let E=S/_,L=-T*E+C*(u.width+2*T*E);return[u.start[0]+u.axis[0]*L+y[0]*(u.faceOut+S),R,u.start[1]+u.axis[1]*L+y[1]*(u.faceOut+S)]},P=4,N=[[0,0],[.18,1],[.82,1],[1,0]];for(let C=0;C<P;C++){let S=_*C/P,E=_*(C+1)/P,L=(1-C/P)**2,D=(1-(C+1)/P)**2;for(let O=0;O+1<N.length;O++){let[k,z]=N[O],[W,G]=N[O+1],Y=I(k,S),Z=I(W,S),it=I(W,E),H=I(k,E),X=v.clone().multiplyScalar(L*z),rt=v.clone().multiplyScalar(L*G),at=v.clone().multiplyScalar(D*G),st=v.clone().multiplyScalar(D*z);h.tri(Y,Z,it,X,rt,at),h.tri(Y,it,H,X,at,st)}}}t.spillMesh.geometry.dispose(),t.spillMesh.geometry=h.geometry(),t.spillMesh.visible=h.count>0}drawShadow(t,e,n,r){let o=Bo(t),s=o?.rooms.filter(m=>!m.outdoor&&m.points.length>=3)??[];if(!o||!s.length)return this.sunFx.hideShadow();let a=s.flatMap(m=>m.points.map(g=>g[0])),l=s.flatMap(m=>m.points.map(g=>g[1])),c=o.elevation+br(o,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),h=e.azimuth*oe,u=vg(t,this.roofGeos,[Math.sin(n+h),-Math.cos(n+h)],e.elevation,c),f=_g(u);if(!f)return this.sunFx.hideShadow();let d=o.elevation-c<=.35?o.elevation+.012:c+.012,p=t.floors.filter(m=>Math.abs(m.elevation-o.elevation)<.5).flatMap(m=>m.rooms.filter(g=>!g.outdoor&&g.points.length>=3).map(g=>g.points)),b=(this.theme==="neon"?.6:.34)*Math.min(1,e.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,u,f,p,d,b,this.theme==="neon"?394264:1713203)}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=t.get(o)??aa,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed&&!!l.unlocked==!!s.unlocked||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let o=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};o.tl=r.left?1:0,o.tr=r.right?1:0,this.fridges.set(n,o)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let o=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(o.to=r.moving>0?1:0,o.speed=1/Math.max(2,r.time)):(o.to=r.out,o.speed=0),this.awnings.set(n,o)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,o]of this.awnings){let s=o.to-o.cur;if(Math.abs(s)<.002){s!==0&&(o.cur=o.to,e.add(r));continue}o.cur=o.speed>0?o.cur+Math.sign(s)*Math.min(Math.abs(s),o.speed*t/1e3):o.cur+s*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/eb),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new ne;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);wm(e,n,an(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&Mm(e,n,an(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=va(n.type),o=r?Te(n.type):void 0;r&&o&&Rm(e,o,r,n,an(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new Kc(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*oe,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.05,(e.tilt??(o?65:20))*oe)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y);return{position:new q(e.x,a,e.z),direction:new q(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s)),fov:Math.min(e.fov??(o?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(o?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let o of[n.floorMesh,n.wallMesh])o.layers.enable(Jc);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(Jc),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.sunFx.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&qS();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new Lr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ve,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new $c(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",e.append(n,r,o,s);let a,l=!1;e.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=t;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},NS)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",h=>h.preventDefault()),e.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),e.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Cg(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=ob(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Xo(r,a.ra),a.rb=Xo(r,a.rb)}t.lightSurface=n;let o=new Ht;o.setAttribute("position",new Ut(n.pos,3)),o.setAttribute("color",new Ut(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new Ut(n.fold,1));let s=new Sr(new Uint32Array(n.pos.length/3),1);s.setUsage(xh),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=o,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=Te(t.pack);if(!e)return null;let[n,r,o]=t.size??ca.wall;return Pm(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let o=n.top??t.floor.height,s=Df(t.floor,n.x,n.z),a=Xo(t.lightZones,s),[l,,c]=n.size??(n.lamp?ca[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[o-.12,"ceiling"],downlight:[o-.03,"spot"],spot:[o-c,"spot"],panel:[o-.05,"ceiling"],pendant:[Math.max(.5,o-c),"pendant"],fan:[Math.max(.5,o-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<WS?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],p=n.lightY??f,b=r.color;if(n.lamp==="strip"){let m=(n.rotation??0)*oe,g=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let v=(n.rise??0)*oe;e.push({x:n.x+Math.cos(m)*l*x*Math.cos(v),y:p+Math.sin(v)*l*x,z:n.z+Math.sin(m)*l*x*Math.cos(v),color:b,level:r.level*.55,kind:g||v?"omni":d,room:a})}}else{let m=this.packLightAt(n);e.push({x:m?m[0]:n.x,y:m?m[1]:p,z:m?m[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(o=>o!==t&&Math.abs(o.floor.elevation-e)<.8&&o.geo.holes.length);if(!n)return[];let r=[];for(let o of n.geo.holes){if(o.length<3)continue;let s=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=jt([h.x,h.z],o)?0:DS(h.x,h.z,o);if(f>tb)continue;let d=u.level*(1-f/tb);for(let p=0;p<3;p++)a[p]+=u.color[p]*d;s+=d}if(s<.02)continue;let[l,c]=Vi(o);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/s,a[1]/s,a[2]/s],level:Math.min(1,s)*.6,kind:"ceiling",room:Xo(t.lightZones,Df(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t);this.buildSpill(t,n);let r=e.doors.map(u=>{let f=t.geo.openings.find(p=>p.opening.id===u.id);if(f&&zi(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),o=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(o===t.glowSig)return;t.glowSig=o;let s=t.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=Lg(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}s.index.needsUpdate=!0,s.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:sn(new $t({vertexColors:!0}),this.themeUniform),pattern:KS(this.patternTexture),wall:sn(yi(new $t({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:yi(new $t({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new $t({vertexColors:!0,blending:Rs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-1}),lines:sn(yi(new Je({vertexColors:!0,transparent:!0,blending:sa(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:yi(new $t({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:sn(yi(new $t({vertexColors:!0,side:se}),t),this.themeUniform),glass:yi(new $t({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:se}),t),blinds:sn(yi(new $t({map:this.blindTexture,vertexColors:!0,side:se}),t),this.themeUniform),water:sn(new $t({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:se}),this.themeUniform),flow:QS(this.flowTime),pipeLine:jS(this.flowTime),patch:new $t({vertexColors:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new $t({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:Ff(this.flowTime),lamps:sn(new $t({vertexColors:!0}),this.themeUniform),halos:new Ri({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1}),cones:new $t({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:se}),screens:new $t({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:se}),earth:sn(new $t({vertexColors:!0}),this.themeUniform),earthWell:sn(new $t({vertexColors:!0,side:se}),this.themeUniform),earthLines:sn(new Je({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),e=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=Bo(n)?.id===o.id?s.filter(ct=>ct.face===_f).map(ct=>({field:ct,face:Nm(n,ct)})):[],l=s.filter(ct=>ct.face.startsWith(`wall:${o.id}:`));if(l.length){let ct=new Map(Dm(n,o.id).map(_t=>[_t.key,_t]));for(let _t of l){let yt=ct.get(_t.face);yt&&a.push({field:_t,face:yt})}}a.push(...Om(n,o.id));let h=Kh(n).some(ct=>D0(ct,o.elevation+o.height)&&jh(ct,o.elevation))?(ct,_t)=>{let yt=N0(n,ct,_t,o.elevation);return yt===null?null:yt-o.elevation}:void 0,u=Jm(If(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,jm(n.floors,o),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),p=new Ne,b=new It(u.floor,d.floor),m=new It(u.shadow,d.shadow);m.renderOrder=1;let g=new It(u.floor,d.pattern);g.renderOrder=2;let x=new It(new Ht,d.glow);x.renderOrder=3,x.visible=!1;let v=new It(new Ht,d.frames),y=new It(new Ht,d.blinds),M=new It(new Ht,d.glass);M.renderOrder=4;let w=new It(new Ht,d.lamps);w.visible=!1;let A=new It(new Ht,d.cones);A.visible=!1,A.renderOrder=3;let _=new It(new Ht,d.cones);_.visible=!1,_.renderOrder=3;let T=new Ji(new Ht,d.halos);T.visible=!1,T.renderOrder=7;let R=new It(new Ht,d.cones);R.visible=!1,R.renderOrder=7;let I=new It(new Ht,d.cones);I.visible=!1,I.renderOrder=7;let P=new It(new Ht,d.lamps);P.visible=!1;let N=new It(new Ht,d.lamps);N.visible=!1;let C=new It(new Ht,d.patch);C.visible=!1,C.renderOrder=3;let S=new It(new Ht,d.patchGlow);S.visible=!1,S.renderOrder=3;let E=new It(new Ht,d.screens);E.visible=!1,E.renderOrder=5;let L=new It(new Ht,d.flow);L.renderOrder=5,L.frustumCulled=!1;let D=new It(new Ht,d.pipeLine),O=new It(new Ht,d.pipeLine),k=new It(new Ht,d.pipeLine);for(let ct of[D,O,k])ct.renderOrder=4,ct.frustumCulled=!1,ct.visible=!1;let z=Lf(a,o.elevation),W=z?new It(z.geometry,d.solarLive):null;W&&(W.renderOrder=6,oa(z,this.solarLevels));for(let ct of[v,y,M])ct.frustumCulled=!1;let G=new It(u.walls,d.glassWall),Y=new It(u.walls,d.wall);G.renderOrder=6;let Z=new It(u.water,d.water);Z.renderOrder=4;let it=Math.min(...n.floors.filter(ct=>ct.rooms.length).map(ct=>ct.elevation)),H=eg(n,o,u.openings,o.elevation===it),X=H?[new It(H.earth.geometry(),d.earth),new It(H.wells.geometry(),d.earthWell),new Ke(H.lines.geometry(),d.earthLines)]:[];for(let ct of X)ct.userData.earth=!0;p.add(b,m,g,x,Y,Z,new Ke(u.lines,d.lines),v,y,M,L,D,O,k,w,A,_,T,R,I,P,N,C,S,E,G,...W?[W]:[],...X),this.root.add(p);let rt=document.createElement("button");rt.className="fp3d-pin fp3d-pin-floor",rt.dataset.floor=o.id;let at=document.createElement("b");at.textContent=o.name||"\u2013";let st=document.createElement("span");st.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",rt.append(at,st),rt.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(rt);let tt=t.get(o.id),ft=[],dt=null;for(let ct of da(o)){let _t=document.createElement("button");_t.className="fp3d-pin",_t.dataset.room=ct.id,_t.dataset.floor=o.id,this.fillRoomPin(_t,ct.name,this.roomInfo.get(ct.id)),_t.addEventListener("click",()=>this.options.onRoomTap?.(o.id,ct.id)),this.labels.append(_t);let[yt,Pt]=Vi(ct.points);if(ft.push({pin:_t,room:ct,cx:yt,cz:Pt}),!ct.outdoor)for(let[Ft,Qt]of ct.points)dt??={x0:Ft,x1:Ft,z0:Qt,z1:Qt},dt.x0=Math.min(dt.x0,Ft),dt.x1=Math.max(dt.x1,Ft),dt.z0=Math.min(dt.z0,Qt),dt.z1=Math.max(dt.z1,Qt)}this.floors.push({floor:o,rank:r.indexOf(o),group:p,geo:u,floorMesh:b,shadowMesh:m,patternMesh:g,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:v,glassMesh:M,blindsMesh:y,flowMesh:L,pipeLineMesh:D,pipeHouseMesh:O,pipeFloorMesh:k,pipeLineSig:"",solarMesh:W,solarLive:z,lampMesh:w,sunMesh:A,sunSig:"",spillMesh:_,spillSig:"",haloMesh:T,coneMesh:R,trailMesh:I,fridgeMesh:P,pipeMesh:N,pipeSig:"",patchMesh:C,patchGlowMesh:S,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:Y,screenMesh:E,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:dt,roomPins:ft,labelSize:null,materials:d,mask:f,openings:new Map,y:tt?.y??0,o:tt?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:rt})}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildPipes(o),this.buildPatches(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=e.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??aa);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(g=>g.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(g=>g.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?Xm(this.building,this.roofWindows):[];if(this.roofGeos=t,this.shadowSig="",!t.length)return;let e=new Map(Gr(this.building).map(g=>[g.key,g])),n=this.building.settings.roof?.solar??[],r=Ff(this.flowTime),o=[],s=new Ne,a=sn(new $t({vertexColors:!0,transparent:!0,side:se}),this.themeUniform),l=sn(new Je({vertexColors:!0,transparent:!0,blending:sa(this.theme),depthWrite:!1}),this.themeUniform,!0),c=sn(new $t({vertexColors:!0,transparent:!0,side:se,depthWrite:!1}),this.themeUniform),h=new Ne,u=sn(new $t({vertexColors:!0,side:se}),this.themeUniform),f=sn(new $t({vertexColors:!0,transparent:!0,opacity:.35,side:se,depthWrite:!1}),this.themeUniform),d=sn(new $t({vertexColors:!0,transparent:!0,opacity:.35,side:se,depthWrite:!1}),this.themeUniform),p=sn(new Je({vertexColors:!0,transparent:!0,blending:sa(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],m=t.map(g=>{let x=new Ne;x.add(new It(g.solid.geometry(),a),new Ke(g.lines.geometry(),l)),g.glass.count&&x.add(new It(g.glass.geometry(),c));let v=n.flatMap(w=>{let A=e.get(w.face);return A&&(A.section?g.sections?.includes(A.section):g===t[0])?[{face:A,field:w}]:[]}),y=Lf(v,g.floor.elevation+g.base);if(y){let w=new It(y.geometry,r);w.renderOrder=9,x.add(w),o.push(y),oa(y,this.solarLevels)}g.winRoof?.solid.count&&x.add(new It(g.winRoof.solid.geometry(),u),new Ke(g.winRoof.lines.geometry(),p)),g.winRoof?.glass.count&&x.add(new It(g.winRoof.glass.geometry(),d)),x.renderOrder=8,s.add(x);let M=null;(g.win?.solid.count||g.win?.glass.count)&&(M=new Ne,M.add(new It(g.win.solid.geometry(),u),new Ke(g.win.lines.geometry(),p)),g.win.glass.count&&M.add(new It(g.win.glass.geometry(),f)),h.add(M));for(let[w,A]of g.winBelow??[]){if(!A.solid.count&&!A.glass.count)continue;let _=new Ne;_.add(new It(A.solid.geometry(),u),new Ke(A.lines.geometry(),p)),A.glass.count&&_.add(new It(A.glass.geometry(),f)),h.add(_),b.push({floorId:w,win:_})}return{group:x,floorId:g.floor.id,rideId:V0(this.building,g.floor,g.sections??[]),base:g.base,lift:g.lift!==!1,win:M}});s.renderOrder=8,this.scene.add(s),this.scene.add(h),this.roof={group:s,parts:m,below:b,solid:a,lines:l,glass:c,live:r,lives:o,wins:h,winSolid:u,winLines:p,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/jg)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),o=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?jg*n:0,s=1-Math.exp(-t/Qg),a=this.roofO;this.roofO+=(o-this.roofO)*s,Math.abs(o-this.roofO)<.004&&(this.roofO=o),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*Jg:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*Jg:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==o}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;e?n.rank>e.rank?(r=5+n.rank,o=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:FS)):r=this.explode?n.rank*LS:0,n.ty=r,n.to=o;let a=e===n?ln:fi;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let o=r.mesh.material;o.transparent=t.o<.999,o.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Qg);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/eb);for(let r of this.floors){let o=!1,s=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??aa,h=(d,p)=>(d??null)===(p??null)||typeof d=="number"&&typeof p=="number"&&Math.abs(d-p)<.003;if(h(c.open,l.open)&&h(c.open2??0,l.open2??0)&&h(c.tilt,l.tilt)&&h(c.tilt2??0,l.tilt2??0)&&h(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let p=c[d]??0,b=l[d]??0,m=p-b;Math.abs(m)<.003?u[d]=p:(u[d]=b+m*n,f=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?u.cover=c.cover:(u.cover=l.cover+d*n,f=!0)}(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),o=!0),e||=f,s||=f}if(o){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!s||a-r.lightAt>=HS)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new j(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*XS+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>iu?.5+.5*Math.sin(f/140):f/iu;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.rise??0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0}`).join(";"),s=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${s[u]?`${s[u].level.toFixed(3)},${s[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let h=new ne,u=[],f=[],d=new Map,p=t.floor.height;for(let b of r){let m=b.lamp==="strip"?(b.base??p)>Math.min(t.floor.cut_height,p):b.lamp?ib.has(b.lamp)&&(b.top??p)>Math.min(t.floor.cut_height,p):b.model==="camera_ceiling";if(!b.lamp&&!b.model||m&&this.wallMode==="cut")continue;let g=h.count,x=b.pack?Te(b.pack):void 0,[v,y,M]=b.size??[.3,.3,.3];b.model?b.ownLook||Em(h,b.model,b.x,b.model==="camera_ceiling"?p:b.y,b.z,b.rotation??0):x?kc(h,x,{x:b.x,z:b.z,rotation:b.rotation??0,w:v,d:y,h:M,mirror:b.mirror},b.base??0,65280):Bf(h,{...b,lamp:b.lamp},b.top??p,65280,b.lamp!=="fan"),d.set(b.furnitureId??b.id,{start:g,end:h.count}),b.pickable!==!1&&u.push({id:b.id,start:g,end:h.count}),b.furnitureId&&f.push({id:b.furnitureId,start:g,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=E0(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=s[u],p=d?.55+.45*d.level:0,b=d?new j(...d.color.map(x=>Math.min(1,x*p))):new j(GS),m=n(h.id);m>0&&b.lerp(new j(1,1,1),.7*m);let g=new j(b.getHex());A0(c,t.lampShade,f,[g.r,g.g,g.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*oe,r=this.weather?.cloud??0,o=ob(t.floor,t.geo.openRooms),s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===t.sunSig)return;t.sunSig=s;let a=new ne;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*oe,h=e.azimuth*oe,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let p=[-d.toRoom[0],-d.toRoom[1]],b=p[0]*u[0]+p[1]*u[1];if(b<.05)continue;let m=t.openings.get(d.opening.id),g=d.top-(m?.cover??0)*(d.top-d.sill);if(g-d.sill<.05)continue;let x=(I,P)=>{let N=Math.min(7,P*f);return[d.start[0]+d.axis[0]*I+d.toRoom[0]*d.faceRoom-u[0]*N,.02,d.start[1]+d.axis[1]*I+d.toRoom[1]*d.faceRoom-u[1]*N]},v=.14*l*Math.min(1,b*1.5),y=new j(1*v,.82*v,.55*v),M=y.clone().multiplyScalar(.45),w=t.floor.rooms.findIndex(I=>I.id===d.opening.room_id);if(w<0||t.floor.rooms[w].points.length<3)continue;let A=o[w],_=t.floor.rooms.filter((I,P)=>o[P]===A&&I.points.length>=3).map(I=>I.points),T=Math.max(1,Math.ceil(Math.min(7,g*f)/.25)),R=Math.max(1,Math.ceil(d.width/.3));for(let I=0;I<T;I++){let P=d.sill+(g-d.sill)*I/T,N=d.sill+(g-d.sill)*(I+1)/T,C=I/T,S=(I+1)/T,E=y.clone().lerp(M,C),L=y.clone().lerp(M,S);for(let D=0;D<R;D++){let O=d.width*D/R,k=d.width*(D+1)/R,z=x((O+k)/2,(P+N)/2);if(!_.some(it=>jt([z[0],z[2]],it)))continue;let W=x(O,P),G=x(k,P),Y=x(k,N),Z=x(O,N);a.tri(W,G,Y,E,E,L),a.tri(W,Y,Z,E,L,L)}}}this.pushRoofSun(t,a,o,u,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,o,s){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(Gr(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(o),Math.sin(o),r[1]*Math.cos(o)];for(let u of l){let f=c.get(u.face),d=Hc(a,f,u);if(!f||!d||d.floor.id!==t.floor.id)continue;let p=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[b,m,g,x]=d.corners,v=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(v>.95)continue;let y=(C,S,E)=>[C[0]+(S[0]-C[0])*E,C[1]+(S[1]-C[1])*E,C[2]+(S[2]-C[2])*E],M=y(x,b,v),w=y(g,m,v),A=t.floor.rooms.findIndex(C=>C.id===d.roomId);if(A<0)continue;let _=t.floor.rooms.filter((C,S)=>n[S]===n[A]&&C.points.length>=3).map(C=>C.points),T=(C,S)=>{let E=(D,O)=>y(y(C[0],C[1],D),y(C[3],C[2],D),O);for(let D=0;D<6;D++)for(let O=0;O<6;O++){let k=E((D+.5)/6,(O+.5)/6);if(!_.some(Z=>jt([k[0],k[2]],Z)))continue;let z=E(D/6,O/6),W=E((D+1)/6,O/6),G=E((D+1)/6,(O+1)/6),Y=E(D/6,(O+1)/6);e.tri(z,W,G,S,S,S),e.tri(z,G,Y,S,S,S)}},R=C=>[C[0],.019,C[2]],I=.06*s;if(T([R(b),R(m),R(w),R(M)],new j(.75*I,.85*I,1*I)),p<.05)continue;let P=C=>{let S=Math.min(7,(C[1]-t.floor.elevation)/Math.tan(o));return[C[0]-r[0]*S,.02,C[2]-r[1]*S]},N=.16*s*Math.min(1,p*1.5);T([P(b),P(m),P(w),P(M)],new j(1*N,.84*N,.6*N))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],o=new ne,s=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*oe,v=[-Math.sin(x),Math.cos(x)],y=l.model==="camera_ceiling",M=l.reach??(y?3:4.5),w=(l.fov??(y?360:90))*oe/2,A=l.motion?new j(.9,.12,.16):new j(.04,.22,.28),_=new j(0,0,0),T=Math.max(4,Math.round(w/.15)),R=.015,I=t.geo.walls2d,P=O=>{let k=O.b[0]-O.a[0],z=O.b[1]-O.a[1],W=k*k+z*z||1,G=Math.max(0,Math.min(1,((l.x-O.a[0])*k+(l.z-O.a[1])*z)/W));return Math.hypot(l.x-(O.a[0]+k*G),l.z-(O.a[1]+z*G))},N=null;for(let O of I)P(O)<.45&&(!N||P(O)<P(N))&&(N=O);let C=O=>{let k=v[0]*Math.cos(O)-v[1]*Math.sin(O),z=v[1]*Math.cos(O)+v[0]*Math.sin(O),W=M;for(let G of I){let Y=G.b[0]-G.a[0],Z=G.b[1]-G.a[1],it=k*Z-z*Y;if(Math.abs(it)<1e-9)continue;let H=((G.a[0]-l.x)*Z-(G.a[1]-l.z)*Y)/it,X=((G.a[0]-l.x)*z-(G.a[1]-l.z)*k)/it;G===N&&H<=.45||H>.02&&H<W&&X>=0&&X<=1&&(W=H)}return W},S=(O,k)=>R+br(t.floor,{x:O,z:k}),E=O=>{let k=C(O),z=l.x+(v[0]*Math.cos(O)-v[1]*Math.sin(O))*k,W=l.z+(v[1]*Math.cos(O)+v[0]*Math.sin(O))*k;return[z,S(z,W),W]},L=[l.x,Math.max(S(l.x,l.z),y?-1/0:S(l.x+v[0]*.3,l.z+v[1]*.3)),l.z],D=o.count;for(let O=0;O<T;O++)o.tri(L,E(-w+2*w*(O+1)/T),E(-w+2*w*O/T),A,_,_);s.push({id:l.id,start:D,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||ib.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??ca[l.lamp],p=l.base??0,b=(l.rotation??0)*oe,m={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,fan:Math.max(.5,h-Math.max(.25,d))+.02,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],g=(x,v,y=1)=>{n.push(x,m,v),r.push(...c.color.map(M=>M*c.level*.7*y))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,p+u*(.5+x),l.z),r.push(...c.color.map(v=>v*c.level*.7*.6));else if(l.rise){let v=l.rise*oe;n.push(l.x+Math.cos(b)*u*x*Math.cos(v),m+Math.sin(v)*u*x,l.z+Math.sin(b)*u*x*Math.cos(v)),r.push(...c.color.map(y=>y*c.level*.7*.6))}else g(l.x+Math.cos(b)*u*x,l.z+Math.sin(b)*u*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(v=>v*c.level*.7))):g(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else g(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new j(...c.color.map(A=>A*.09*c.level)),v=new j(0,0,0),y=Math.max(.03,u/2),M=.45+.35*c.level,w=16;for(let A=0;A<w;A++){let _=A/w*Math.PI*2,T=(A+1)/w*Math.PI*2,R=[l.x+Math.cos(_)*y,m,l.z+Math.sin(_)*y],I=[l.x+Math.cos(T)*y,m,l.z+Math.sin(T)*y],P=[l.x+Math.cos(_)*M,.02,l.z+Math.sin(_)*M],N=[l.x+Math.cos(T)*M,.02,l.z+Math.sin(T)*M];o.tri(R,P,N,x,v,v),o.tri(R,N,I,x,v,x)}}}let a=new Ht;a.setAttribute("position",new Ut(n,3)),a.setAttribute("color",new Ut(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=o.geometry(),t.coneMesh.visible=o.count>0,t.coneTris=s}buildScreens(t){let e=If(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),r=(Ho.value?Wo.value.toArray().map(s=>Math.round(s*255)).join(","):"")+"|"+e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let o=new ne;for(let s of e){let a=this.screens.get(s.id),l=xa.has(s.type)?Ec(t.geo.walls2d,s,t.floor.height,an(t.floor,s)):null,c=l?{...s,x:l.x,z:l.z,mount_y:l.y}:s,h=c.rotation*oe,u=Math.cos(h),f=Math.sin(h),d=(A,_,T)=>[c.x+A*u-T*f,_,c.z+A*f+T*u];if(a.faces){let A=Math.max(.05,c.w)*(c.mirror?-1:1),_=Math.max(.05,c.d),T=Math.max(.005,c.h),R=an(t.floor,c);for(let I of a.faces){if(I.part==="lights"){let W=Te(c.type),G=Y=>["#e8f4ff","#ff3b4f"].includes(Y.color.toLowerCase());if(W&&W.parts.some(G)){let Y=new j(...I.color.map(Z=>Math.min(1,Z*(.4+.6*I.level))));qs(o,W,c,R,Y.getHex(),G)}continue}if(I.part==="cabin"){let W=Te(c.type),G=Y=>Y.color.toLowerCase()==="#13283a"||Y.color==="glass";if(W&&W.parts.some(G)){let Y=new j(...I.color.map(Z=>Math.min(1,Z*(.3+.5*I.level))));qs(o,W,c,R,Y.getHex(),G);continue}}if(I.part==="burners"&&Te(c.type)){let W=Te(c.type),G=new j(...I.color.map(Y=>Math.min(1,Y*(.25+.6*I.level))));qs(o,W,c,R,G.getHex(),vd);continue}if(I.part==="burners"){let W=new j(...I.color.map(Y=>Math.min(1,Y*(.25+.6*I.level)))),G=R+T+.008;for(let[Y,Z,it]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let H=Y*Math.abs(A)/.6,X=Z*_/.62,rt=14;for(let at=0;at<rt;at++){let st=at/rt*Math.PI*2,tt=(at+1)/rt*Math.PI*2;o.tri(d(H,G,X),d(H+Math.cos(st)*it,G,X+Math.sin(st)*it),d(H+Math.cos(tt)*it,G,X+Math.sin(tt)*it),W)}}continue}if(I.part==="band"||I.part==="cabin"){let W=I.part==="cabin",G=R+T*(W?.6:.42),Y=W?R+T*.86:G+.07,Z=new j(...I.color.map(rt=>Math.min(1,rt*(.3+.45*I.level)))),it=Math.abs(A)/2+(W?.012:.02),H=_/2+(W?.012:.02),X=[[-it,-H],[it,-H],[it,H],[-it,H]];for(let rt=0;rt<4;rt++){let at=X[rt],st=X[(rt+1)%4],tt=d(at[0]*Math.sign(A),G,at[1]),ft=d(st[0]*Math.sign(A),G,st[1]),dt=d(st[0]*Math.sign(A),Y,st[1]),ct=d(at[0]*Math.sign(A),Y,at[1]);o.tri(tt,ft,dt,Z),o.tri(tt,dt,ct,Z)}continue}if(I.part==="strata"){let W=I.top??I.color,G=.22+.4*I.level,Y=new j(...I.color.map(st=>Math.min(1,st*G))),Z=new j(...W.map(st=>Math.min(1,st*G))),it=R+T*.06,H=R+T*.94,X=Math.abs(A)/2+.012,rt=_/2+.012,at=20;for(let st=0;st<at;st++){let tt=st/at*Math.PI*2,ft=(st+1)/at*Math.PI*2,dt=[Math.cos(tt)*X,Math.sin(tt)*rt],ct=[Math.cos(ft)*X,Math.sin(ft)*rt];o.tri(d(dt[0],it,dt[1]),d(ct[0],it,ct[1]),d(ct[0],H,ct[1]),Y,Y,Z),o.tri(d(dt[0],it,dt[1]),d(ct[0],H,ct[1]),d(dt[0],H,dt[1]),Y,Z,Z)}continue}if(I.part==="apring"){let W=c.variant==="wall",G=Math.abs(A),Y=W?Math.min(G,T)*.3:Math.min(G,_)*.3,Z=new j(...I.color.map(rt=>Math.min(1,rt*(.4+.6*I.level)))),it=new j(0,0,0),H=24,X=(rt,at)=>W?d(Math.cos(rt)*at,R+T/2+Math.sin(rt)*at,_/2+.004):d(Math.cos(rt)*at,R-.003,Math.sin(rt)*at);for(let rt=0;rt<H;rt++){let at=rt/H*Math.PI*2,st=(rt+1)/H*Math.PI*2;o.tri(X(at,Y*.8),X(at,Y),X(st,Y),Z),o.tri(X(at,Y*.8),X(st,Y),X(st,Y*.8),Z),o.tri(X(at,Y),X(at,Y*1.5),X(st,Y*1.5),Z,it,it),o.tri(X(at,Y),X(st,Y*1.5),X(st,Y),Z,it,Z)}continue}if(I.part==="drum"){let W=Math.abs(A),G=Math.min(W*.36,(T-.2)*.42),Y=R+(T-.14)/2+.04,Z=_/2-.006,it=new j(...I.color.map(st=>Math.min(1,st*(.35+.65*I.level)))),H=it.clone().multiplyScalar(.12),X=new j(0,0,0),rt=28,at=(st,tt)=>d(Math.cos(st)*tt,Y+Math.sin(st)*tt,Z);for(let st=0;st<rt;st++){let tt=st/rt*Math.PI*2,ft=(st+1)/rt*Math.PI*2;o.tri(d(0,Y,Z),at(tt,G*.78),at(ft,G*.78),H),o.tri(at(tt,G*.78),at(tt,G),at(ft,G),it),o.tri(at(tt,G*.78),at(ft,G),at(ft,G*.78),it),o.tri(at(tt,G),at(tt,G*1.18),at(ft,G*1.18),it,X,X),o.tri(at(tt,G),at(ft,G*1.18),at(ft,G),it,X,it)}continue}if(I.part==="gang"){let W=Math.max(1,I.of??1),G=Math.abs(A),Y=G/W,Z=(-G/2+Y*((I.index??0)+.5))*Math.sign(A),it=_/2+(c.variant==="outdoor"?.02:.008),H=I.accent?Ho.value?Wo.value.toArray():IS:I.color,X=new j(...H.map(yt=>Math.min(1,yt*(.35+.65*I.level)))),rt=X.clone().multiplyScalar(.5),at=new j(0,0,0),st=Y*.34,tt=R+T*.16,ft=R+T*.84,dt=[d(Z-st,tt,it),d(Z+st,tt,it),d(Z+st,ft,it),d(Z-st,ft,it)];o.tri(dt[0],dt[1],dt[2],X),o.tri(dt[0],dt[2],dt[3],X);let ct=.012+.015*I.level,_t=[d(Z-st-ct,tt-ct,it-.001),d(Z+st+ct,tt-ct,it-.001),d(Z+st+ct,ft+ct,it-.001),d(Z-st-ct,ft+ct,it-.001)];for(let yt=0;yt<4;yt++){let Pt=(yt+1)%4;o.tri(dt[yt],_t[Pt],_t[yt],rt,at,at),o.tri(dt[yt],dt[Pt],_t[Pt],rt,rt,at)}continue}if(I.part==="beacon"){let W=new j(...I.color.map(ft=>Math.min(1,ft*(.25+.45*I.level)))),G=new j(0,0,0),Y=R+T+.01,Z=.6+.6*I.level,it=Math.min(Math.abs(A),_)*.38;for(let[ft,dt]of[[it,0],[0,it]]){let ct=d(-ft,Y,-dt),_t=d(ft,Y,dt),yt=d(ft*.4,Y+Z,dt*.4),Pt=d(-ft*.4,Y+Z,-dt*.4);o.tri(ct,_t,yt,W,W,G),o.tri(ct,yt,Pt,W,G,G)}let H=an(t.floor,{...c,mount_y:0})+.012,X=Math.abs(A)/2+.03,rt=_/2+.03,at=.22+.18*I.level,st=(ft,dt,ct)=>d(ft*(X+ct),H,dt*(rt+ct)),tt=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let ft=0;ft<4;ft++){let[dt,ct]=tt[ft],[_t,yt]=tt[(ft+1)%4];o.tri(st(dt,ct,0),st(_t,yt,0),st(_t,yt,at),W,W,G),o.tri(st(dt,ct,0),st(_t,yt,at),st(dt,ct,at),W,G,G)}continue}let P=I.part==="right"?.03:-Math.abs(A)/2+.03,N=I.part==="left"?-.03:Math.abs(A)/2-.03,C=R+(I.part==="bottom"?T*.45:T)+.006,S=new j(...I.color.map(W=>Math.min(1,W*(.35+.65*I.level)))),E=new j(0,0,0),L=(W,G,Y=C)=>d(W*Math.sign(A),Y,G),D=[L(P,-_/2+.03),L(N,-_/2+.03),L(N,_/2-.03),L(P,_/2-.03)];o.tri(D[0],D[2],D[1],S),o.tri(D[0],D[3],D[2],S);let O=I.part==="lid"?.025+.02*I.level:.12+.1*I.level,k=S.clone().multiplyScalar(I.part==="lid"?.7:.5),z=[L(P-O,-_/2-O,C+.004),L(N+O,-_/2-O,C+.004),L(N+O,_/2+O,C+.004),L(P-O,_/2+O,C+.004)];for(let W=0;W<4;W++){let G=(W+1)%4;o.tri(D[W],z[G],z[W],k,E,E),o.tri(D[W],D[G],z[G],k,k,E)}}continue}let p=Te(c.type);if(p&&!p.light&&a.ring&&p.parts.some(A=>A.glow)){let A=new j(...a.color.map(_=>Math.min(1,_*(.45+.55*a.level))));qs(o,p,c,an(t.floor,c),A.getHex())}let b=yf(c,t.floor);if(!b)continue;let m=new j(...a.color.map(A=>Math.min(1,A*(.35+.65*a.level)))),g=new j(0,0,0),x=b.z+.004;if(o.tri(d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),m),o.tri(d(b.x0,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x),m),a.plain)continue;let v=.18+.12*a.level,y=m.clone().multiplyScalar(.5),M=[d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x)],w=[d(b.x0-v,b.y0-v,x+.01),d(b.x1+v,b.y0-v,x+.01),d(b.x1+v,b.y1+v,x+.01),d(b.x0-v,b.y1+v,x+.01)];for(let A=0;A<4;A++){let _=(A+1)%4;o.tri(M[A],w[A],w[_],y,g,g),o.tri(M[A],w[_],M[_],y,g,y)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=o.geometry(),t.screenMesh.visible=o.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of t.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),t.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=yf(o,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new It(new $n(1,1),new $t({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new Ar().load(s.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=Ve,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,o,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture)}}placeScreenPicture(t,e,n,r){let o=r.image,s=o?.width&&o?.height?o.width/o.height:16/9,{w:a,h:l}=Sm(n.x1-n.x0,n.y1-n.y0,s),c=e.rotation*oe,h=(n.x0+n.x1)/2,u=n.z+.008;t.scale.set(a,l,1),t.rotation.set(0,-c,0),t.position.set(e.x+h*Math.cos(c)-u*Math.sin(c),(n.y0+n.y1)/2,e.z+h*Math.sin(c)+u*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.buildPipeLines(t);let e=this.flows.filter(h=>h.floorId===t.floor.id&&!h.pipe).map(la).join(";"),n=[],r=[],o=[],s=[],a=[];for(let h of this.flows){if(h.floorId!==t.floor.id||h.pipe)continue;let u=this.flowPhase.get(la(h))??{speed:kf(h.power),offset:0},f=h.power>.5?Math.min(1,.5+h.power/2500):.22,d=h.color.map(x=>x*f),p=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(p<1e-4)continue;let b=[(h.b[0]-h.a[0])/p,(h.b[1]-h.a[1])/p,(h.b[2]-h.a[2])/p],m=[];if(Math.abs(b[1])<.5){let x=Math.hypot(b[0],b[2])||1;m.push([-b[2]/x,0,b[0]/x])}else m.push([1,0,0],[0,0,1]);let g=this.lowQuality?[[nb*1.4,1]]:[[kS,.25],[nb,1]];for(let[x,v]of g)for(let y of m){let M=x*(h.width??1)/2,w=(_,T)=>[_[0]+y[0]*M*T,_[1]+y[1]*M*T,_[2]+y[2]*M*T],A=[[w(h.a,-1),h.dist,0],[w(h.b,-1),h.dist+p,0],[w(h.b,1),h.dist+p,1],[w(h.a,1),h.dist,1]];for(let _ of[0,1,2,0,2,3]){let[T,R,I]=A[_];n.push(T[0],T[1],T[2]),r.push(d[0]*v,d[1]*v,d[2]*v),o.push(R,I),s.push(u.speed),a.push(u.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[h,u]of[["color",r],["flowSpeed",s],["flowOffset",a]]){let f=l.getAttribute(h);f.array.set(u),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Ht;c.setAttribute("position",new Ut(n,3)),c.setAttribute("color",new Ut(r,3)),c.setAttribute("uv",new Ut(o,2)),c.setAttribute("flowSpeed",new Ut(s,1)),c.setAttribute("flowOffset",new Ut(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(la(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let o=[],s=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let p=this.flowPhase.get(la(f))??{speed:kf(f.power),offset:0},b=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],m=[];if(Math.abs(b[1])<.5){let y=Math.hypot(b[0],b[2])||1;m.push([-b[2]/y,0,b[0]/y])}else m.push([1,0,0],[0,0,1]);let g=US*(f.width??1),x=f.power>.5?1:.62,v=[[g+BS*2,[.02,.025,.05],.78,2],[g,f.color.map(y=>y*x),1,0]];for(let[y,M,w,A]of v)for(let _ of m){let T=y/2,R=A===0?.002:0,I=(N,C)=>[N[0]+_[0]*T*C,N[1]+_[1]*T*C+R,N[2]+_[2]*T*C],P=[[I(f.a,-1),f.dist,A],[I(f.b,-1),f.dist+d,A],[I(f.b,1),f.dist+d,A+1],[I(f.a,1),f.dist,A+1]];for(let N of[0,1,2,0,2,3]){let[C,S,E]=P[N];o.push(C[0],C[1],C[2]),s.push(M[0],M[1],M[2],w),a.push(S,E),l.push(p.speed),c.push(p.offset)}}}let h=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,u=new Ht;u.setAttribute("position",new Ut(o,3)),u.setAttribute("color",new Ut(s,4)),u.setAttribute("uv",new Ut(a,2)),u.setAttribute("flowSpeed",new Ut(l,1)),u.setAttribute("flowOffset",new Ut(c,1)),h.geometry.dispose(),h.geometry=u,h.userData.filled=o.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=kg(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let o=new j(r.color),s=this.roomTint?.get(r.roomId);s&&o.lerp(new j(...s).multiplyScalar(.6),.9),r.roomId===this.roomId&&o.lerp(YS,s?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,o.r,o.g,o.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new wn;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let d of u.floor.rooms)for(let[p,b]of d.points)e.expandByPoint(new q(p,f,b)),e.expandByPoint(new q(p,f+u.floor.height,b))}e.isEmpty()&&e.set(new q(-4,0,-4),new q(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new q),r=e.getSize(new q),o=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.keepNext){this.keepNext=!1;let u=this.controls.view;this.controls.flyTo({target:new q(u.target.x,n.y,u.target.z),radius:u.radius,phi:u.phi,theta:u.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:o,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new wn,e=1/0;for(let s of this.floors){e=Math.min(e,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new q(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new q(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=eT();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=t.getCenter(new q),r=t.getSize(new q),o=zf*Math.ceil((Math.max(r.x,r.z)+16)/zf);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,e-on-.02,n.z)}distanceFor(t){let e=this.camera.fov*oe,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Es;return r.setFromCamera(new ee(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),s=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let h=s(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??te;if(f!==te&&Math.floor(f/16)===0)continue}let h=s(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),u=h?this.pickOpenings.get(h):void 0;if(u)return{entity:u}}else if(a.object===c.wallMesh){let h=s(c.geo.furnitureTris,l),u=h?this.pickFurniture.get(h):void 0;if(u)return{entity:u};if(!h&&a.face&&a.face.normal.y>.7){let f=su(c.floor).find(d=>jt([a.point.x,a.point.z],d.points));if(f)return{floorId:c.floor.id,roomId:f.id}}if(a.face&&!h){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),p=f%16,b=this.wallMode==="cut"&&d===0,m=(c.mask.glass.value&1<<p)!==0;if(!b){let g=n.ray.direction,x=Math.hypot(g.x,g.z)||1,v=[a.point.x-g.x/x*.3,a.point.z-g.z/x*.3],y=c.floor.rooms.find(M=>M.points.length>=3&&jt(v,M.points))?.id??null;if(this.roomId!==null){if(y===this.roomId)return{floorId:c.floor.id,roomId:y}}else if(!m&&y)return{floorId:c.floor.id,roomId:y}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:s(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+iu),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||o(u).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let o of t.floor.furniture){let s=o.rotation*oe,a=e-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,h=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:o.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let o=this.rayAt(e,n),s=r??t.floor.elevation+t.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(t,e),l=s??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&r.has(h))&&this.grabItem(c,l,t,e)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,t,e):this.grabItem(a,s,t,e)}let o=this.furnitureAt(t,e);if(!o){let s=this.pick(t,e);return s&&"entity"in s?this.grabDevice(s.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,t,e,o.y)}grabItem(t,e,n,r,o){let s=t.floor.furniture.find(u=>u.id===e),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!s||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(o!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new q),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],b=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),m=this.renderer.domElement.getBoundingClientRect().height||1,g=2*b*Math.tan(this.camera.fov*Math.PI/360)/m;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-p[1],p[0]],fwd:p,perPx:g,gain:Math.min(2,1/Math.max(.5,-h.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,e,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(m=>m.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((p[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let f=(t-s.x0)*s.perPx,d=(e-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*f-s.fwd[0]*d-r.offset[0],s.fz+s.right[1]*f-s.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(o,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?ig(o.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new ze,n;for(let r of t){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(e,o,s,r===this.selectedFurniture?new j(.25,.9,1):new j(1,.71,.28)))}n&&(this.ghost=new Ke(e.geometry(),new Je({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let o=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=Te(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?an(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:an(e.floor,n),u=n.rotation*oe,f=Math.cos(u),d=Math.sin(u),p=(m,g,x)=>[o+m*f-g*d,x,s+m*d+g*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let m=0;m<4;m++){let[g,x]=b[m],[v,y]=b[(m+1)%4];t.seg(p(g,x,h+.01),p(v,y,h+.01),r),t.seg(p(g,x,h+c),p(v,y,h+c),r),t.seg(p(g,x,h+.01),p(g,x,h+c),r)}t.seg(p(-n.w/2,n.d/2+.03,h+.02),p(n.w/2,n.d/2+.03,h+.02),new j(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(t,e);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:o.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(g=>g.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(t*r),s=Math.round(e*r),a=new Ze(o,s);a.texture.colorSpace=Ve;let l=new On(-1,1,1,-1,.1,400),c=this.floors.map(g=>({fv:g,visible:g.group.visible,y:g.y,o:g.o,standing:g.mask.standing.value,glass:g.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(o*s*4),p=document.createElement("canvas");p.width=o,p.height=s;let b=p.getContext("2d"),m=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let g of n){for(let N of this.floors)N.group.visible=N===g;g.y=0,g.o=1,this.applyFloor(g),g.group.visible=!0,g.mask.standing.value=0,g.mask.glass.value=0;let x=g.floor.rooms.flatMap(N=>N.points),v=g.floor.elevation,y=new wn(new q(Math.min(...x.map(N=>N[0]))-.3,v,Math.min(...x.map(N=>N[1]))-.3),new q(Math.max(...x.map(N=>N[0]))+.3,v+Math.min(g.floor.cut_height,g.floor.height),Math.max(...x.map(N=>N[1]))+.3)),M=y.getCenter(new q),w=-.6,A=.8,_=new q(Math.sin(A)*Math.sin(w),Math.cos(A),Math.sin(A)*Math.cos(w));l.position.copy(M).addScaledVector(_,100),l.lookAt(M),l.updateMatrixWorld();let T=.5,R=.5;for(let N of[y.min.x,y.max.x])for(let C of[y.min.y,y.max.y])for(let S of[y.min.z,y.max.z]){let E=new q(N,C,S).applyMatrix4(l.matrixWorldInverse);T=Math.max(T,Math.abs(E.x)),R=Math.max(R,Math.abs(E.y))}let I=o/s;T/R>I?R=T/I:T=R*I,l.left=-T*1.05,l.right=T*1.05,l.top=R*1.05,l.bottom=-R*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,d);let P=b.createImageData(o,s);for(let N=0;N<s;N++)P.data.set(d.subarray((s-1-N)*o*4,(s-N)*o*4),N*o*4);b.putImageData(P,0,0),m.push({floorId:g.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let g of c)g.fv.y=g.y,g.fv.o=g.o,g.fv.mask.standing.value=g.standing,g.fv.mask.glass.value=g.glass,this.applyFloor(g.fv),g.fv.group.visible=g.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return m}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?Vg(n.room,void 0,void 0,n.obstacles):Uf(n.rest),l=a.length?a:Uf(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!jt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Kg[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let o of r.own)o.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&Te(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new $t({color:Kg[t.mode]}),r=this.robotModelKey(t),o=t.model?Te(t.model.type):void 0;if(t.model&&o&&r){let{w:a,d:l,h:c}=t.model,h=new ne,{radius:u,top:f}=Am(h,o,a,l,c),d=new ne,p=Math.min(.05,u*.3),b=Math.min(.1,u*.55);Be(d,[[-p,b],[p,b],[p,b+p*.8],[-p,b+p*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new $t({vertexColors:!0});let m=[h.geometry(),d.geometry()],g=new Ne;return g.add(new It(m[0],this.robotMat),new It(m[1],n)),{info:t,motion:e,group:g,led:n,own:m,modelKey:r}}if(!this.robotGeo){let a=new ne,l=(h,u,f,d,p)=>{let b=[];for(let m=0;m<20;m++)b.push([Math.cos(m/20*Math.PI*2)*h,Math.sin(m/20*Math.PI*2)*h]);Be(a,b,u,f,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new $t({vertexColors:!0});let c=new ne;Be(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let s=new Ne;return s.add(new It(this.robotGeo,this.robotMat),new It(this.robotLedGeo,n)),{info:t,motion:e,group:s,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[o,,s]=n.size??ca.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=o/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new ne;ab(h,0,0,0,l,0),this.fanMat??=new $t({vertexColors:!0});let u=new It(h.geometry(),this.fanMat),f=new Ne;f.add(u),f.rotation.y=-((n.rotation??0)*oe),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=sb(a,s),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let o=this.floorMap.get(r.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(o.floor.cut_height,o.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),e>0?n=Gg(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new j(.25-.2*a,.95-.83*a,1-.7*a),r=new j(0,0,0),o=new j(.3,1,.6),s=.02;for(let a of this.floors){let l=new ne;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let p=h.points[d-1];if(p){let b=Math.hypot(u-p[0],f-p[1])||1,m=-(f-p[1])/b*.1,g=(u-p[0])/b*.1;l.tri([p[0]+m,s,p[1]+g],[u+m,s,f+g],[u-m,s,f-g],o,o,o),l.tri([p[0]+m,s,p[1]+g],[u-m,s,f-g],[p[0]-m,s,p[1]-g],o,o,o)}for(let b=0;b<10;b++){let m=b/10*Math.PI*2,g=(b+1)/10*Math.PI*2;l.tri([u,s,f],[u+Math.cos(g)*.35,s,f+Math.sin(g)*.35],[u+Math.cos(m)*.35,s,f+Math.sin(m)*.35],o,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,p=(h.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,s,c.z+p],[h.x+d,s,h.z+p],[h.x-d,s,h.z-p],b,u,u),l.tri([c.x+d,s,c.z+p],[h.x-d,s,h.z-p],[c.x-d,s,c.z-p],b,u,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([h.x,s,h.z],[h.x+Math.cos(p)*.22,s,h.z+Math.sin(p)*.22],[h.x+Math.cos(d)*.22,s,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*oe,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(e.tilt??(o?65:20))*oe)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y),l=new q(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new q(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+iu;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,o,s){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new q(e,a.floor.elevation+a.ty+r,n),radius:s?.radius??5.5,phi:s?.phi??.78,...s?.theta!==void 0?{theta:s.theta}:{}},900),o){this.flashes.set(o,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),o=this.stepFloors(e),s=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let g=new Set;for(let[x,v]of this.flashes){let y=this.deviceFloor.get(x);y&&g.add(y),v<=t&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)g.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(e),c=this.stepRobots(t),h=this.stepFans(t),u=this.stepWeather(t),f=r||o||s||a||l,d=[];(r||this.controls.busy)&&d.push("camera"),o&&d.push("floors"),s&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),c&&d.push("robot"),h&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),f&&this.invalidate();let p=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||h||this.effectFloors.size>0;p&&!this.decorWas&&(this.lastWake=t),this.decorWas=p;let b=this.effectFloors.size?this.decor(this.lowQuality?2*rb:rb):null;if(b!==null&&!this.effectTimer&&!document.hidden){let g=b;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=g/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.decorTimer||this.invalidate()},g)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let m=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let g=c||m||h?this.decor(h?83:0,h?83:void 0):null;!f&&g!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},g));return}!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!f&&h&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!f&&m&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},OS))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,o=Math.hypot(n,r)||1;for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/o+h[1]*r/o>=.25:a;!l&&f&&(c|=1<<u)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new q,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,h=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let m of[a.z0,a.z1]){n.set(b,h,m).project(this.camera);let g=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||g<l.x)&&(l={x:g,y:x}),(!c||g>c.x)&&(c={x:g,y:x})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let u=s.labelSize.w,f=8+this.labelInset,d=l.x-u-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),o.push({fv:s,left:Math.max(f,Math.min(t-u-8,d)),y:p,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new q(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),s.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(s.near!==void 0&&u>s.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new q(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*s.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new q,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId),l=this.figures.get(o.id);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(o.id);if(!c||c.floorId!==o.floorId)c={floorId:o.floorId,x:o.x,z:o.z};else{let f=o.x-c.x,d=o.z-c.z;Math.hypot(f,d)>.02?(c={floorId:o.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:o.floorId,x:o.x,z:o.z}}this.personAt.set(o.id,c);let h=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==h||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,h,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,h+(l?1.85:.9),c.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let h=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==h&&(this.pinMode.set(s,h),s.classList.toggle("fp3d-dev-full",h==="full"),s.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(s,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=$S(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function $S(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function ZS(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(s,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(s,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(s,a,l)=>{e.save(),e.beginPath(),e.rect(s*256,a*256,256,256),e.clip(),l(s*256,a*256),e.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let h=s+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(s+u+.75,c,s+u+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new Sn(t);return o.flipY=!1,o.wrapS=An,o.wrapT=An,o.anisotropy=4,o.colorSpace=Ve,o}function KS(i){let t=new $t({map:i,transparent:!0,blending:Ie,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function JS(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new Sn(i);return e.wrapS=wr,e.wrapT=wr,e.colorSpace=Ve,e}function la(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function kf(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function jS(i){let t=new $t({vertexColors:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dCore = step(vFlowUv.y, 1.5);
        float fp3dAcross = 1.0 - abs(fract(vFlowUv.y) * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // one soft swell of light every 0.8 m, rising slowly and falling fast: the way the water goes
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 1.25);
        float fp3dSwell = pow(fp3dPhase, 3.0) * fp3dMoving * fp3dCore;
        diffuseColor.rgb *= mix(1.0, 0.72 + 0.4 * fp3dAcross, fp3dCore);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function QS(i){let t=new $t({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function ob(i,t){let e=i.rooms.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,o]of t){let s=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,o)=>n(o))}function tT(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new Sn(t);return r.colorSpace=Ve,r}function eT(){let t=zf,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=t;s++){let a=Math.round(s/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new Sn(e);return o.anisotropy=4,o.colorSpace=Ve,o}function VC(i,t){return new Vf(i,t)}function sb(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function ab(i,t,e,n,r,o){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=o+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([p,b])=>[t+p*h-b*u,n+p*u+b*h]);Be(i,d,e-.006,e+.006,zS,VS,{aoFrom:0,bottom:!0})}}function Bf(i,t,e,n,r=!0){let[o,s,a]=t.size??ca[t.lamp],l=t.base??0,c=(t.rotation??0)*oe,h=Math.cos(c),u=Math.sin(c),f=(m,g)=>[t.x+m*h-g*u,t.z+m*u+g*h],d=(m,g,x,v,y,M=14)=>{let w=[];for(let A=0;A<M;A++){let _=A/M*Math.PI*2;w.push([t.x+Math.cos(_)*m,t.z+Math.sin(_)*m])}Be(i,w,g,x,v,y,{aoFrom:0,bottom:!0})},p=(m,g,x,v,y,M,w,A=w)=>Be(i,[f(m,x),f(g,x),f(g,v),f(m,v)],y,M,w,A,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(o,s)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,ae,ae,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let m=Math.max(.4,e-a);d(.06,e-.02,e,ae,ae,8);let g=t.variant==="globe"?m+2*b:t.variant==="drum"?m+.24:m+.2;if(d(.008,g,e-.02,ae,ae,5),t.variant==="globe")for(let v=0;v<7;v++){let y=Math.PI*(v/7),M=Math.PI*((v+1)/7);d(b*Math.max(.2,Math.sin((y+M)/2)),m+b-b*Math.cos(y),m+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let v=0;v<4;v++)d(b*(.25+.75*(4-v)/4),m+.06*v,m+.06*(v+1),n,n,16);else t.variant==="drum"?d(b,m,m+.24,n,n,18):(d(b*.35,m+.14,m+.2,n,n,12),d(b,m,m+.14,n,n,16));break}case"fan":{let m=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,ae,ae,10),d(.012,m+.16,e-.03,ae,ae,6),d(.13,m+.07,m+.16,ae,ae,16),d(.11,m,m+.07,n,n,16),r&&ab(i,t.x,sb(e,a),t.z,o/2,c);break}case"downlight":d(b,e-.012,e,ae,ae,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,ae,ae,10),d(b,e-Math.max(.06,a),e-.02,ae,ae,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":p(-o/2,o/2,-s/2,s/2,e-Math.max(.015,a),e,ae,ae),p(-o/2+.02,o/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,ae,ae),d(.014,l+.03,l+a-.12,ae,ae,6),d(b,l+a-.14,l+a-.02,ae,ae),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,ae,ae,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,ae,ae,10);break;case"garden":d(.012,l,l+a-.08,ae,ae,5),d(b,l+a-.08,l+a-.01,ae,ae,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,ae,ae),d(.014,l+.03,l+a-.28,ae,ae,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,ae,ae),d(.012,l+.03,l+a-.16,ae,ae,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let m=t.base??ba;p(-o/2+.03,o/2-.03,-s/2,-s/2+.02,m,m+a,ae),p(-o/2,o/2,-s/2+.02,s/2,m+a*.15,m+a*.85,n);break}case"strip":{let m=Math.max(.02,a),g=t.base!=null?t.base+m:e-.04;if(!t.roll&&!t.upright&&!t.rise){p(-o/2,o/2,-s/2,s/2,g-m,g,n);break}let x=(t.roll??0)*oe,v=Math.cos(x),y=Math.sin(x),M=t.upright?l+o/2:g-m/2,w=(t.upright?0:t.rise??0)*oe,A=(P,N,C)=>{let S=P,E=N*v-C*y,L=N*y+C*v;return w&&([S,E]=[S*Math.cos(w)-E*Math.sin(w),S*Math.sin(w)+E*Math.cos(w)]),t.upright&&([S,E]=[-E,S]),[t.x+S*h-L*u,M+E,t.z+S*u+L*h]},_=[A(-o/2,-m/2,-s/2),A(o/2,-m/2,-s/2),A(o/2,-m/2,s/2),A(-o/2,-m/2,s/2),A(-o/2,m/2,-s/2),A(o/2,m/2,-s/2),A(o/2,m/2,s/2),A(-o/2,m/2,s/2)],T=new j(n),R=[t.x,M,t.z],I=(P,N,C,S)=>{let[E,L,D]=[_[P],_[N],_[C]],O=[(L[1]-E[1])*(D[2]-E[2])-(L[2]-E[2])*(D[1]-E[1]),(L[2]-E[2])*(D[0]-E[0])-(L[0]-E[0])*(D[2]-E[2]),(L[0]-E[0])*(D[1]-E[1])-(L[1]-E[1])*(D[0]-E[0])],k=[E[0]-R[0],E[1]-R[1],E[2]-R[2]],z=O[0]*k[0]+O[1]*k[1]+O[2]*k[2]<0,[W,G,Y,Z]=z?[_[S],_[C],_[N],_[P]]:[_[P],_[N],_[C],_[S]];i.tri(W,G,Y,T,T,T),i.tri(W,Y,Z,T,T,T)};I(0,1,2,3),I(4,5,6,7),I(0,1,5,4),I(1,2,6,5),I(2,3,7,6),I(3,0,4,7);break}}}export{Pf as FloorMap,Vf as FloorplanViewer,Cf as WalkCamera,VC as createViewer,EC as funLib,CS as furnitureFront,PS as furniturePreview,qS as isLowEnd,ab as pushFanBlades,Bf as pushLampModel};
