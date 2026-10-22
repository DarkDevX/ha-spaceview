var Lg=[{id:"speaker",parts:[{shape:"box",x:0,z:0,w:.94,d:.92,y:0,h:1,color:"body",top:"bodyTop",edges:!0},{shape:"cyl",axis:"z",x:0,z:.48,w:.6,d:.035,y:.18,h:.52,color:"dark",edges:!0,glow:!0},{shape:"cyl",axis:"z",x:0,z:.48,w:.24,d:.035,y:.73,h:.14,color:"accent",edges:!0}]},{id:"soundbar",parts:[{shape:"box",x:0,z:0,w:.98,d:.92,y:.04,h:.92,color:"body",edges:!0},{shape:"box",x:0,z:.46,w:.88,d:.04,y:.2,h:.56,color:"dark",glow:!0}]},{id:"echo_dot",parts:[{shape:"cyl",x:0,z:0,w:.94,d:.94,y:.04,h:.84,color:"body"},{shape:"cyl",x:0,z:0,w:.62,d:.62,y:.93,h:.04,color:"accent",glow:!0}]},{id:"display",parts:[{shape:"box",x:0,z:0,w:1,d:1,y:0,h:1,color:"body",top:"bodyTop",edges:!0},{shape:"box",x:0,z:.46,w:.9,d:.03,y:.08,h:.84,color:"dark",edges:!0,screen:!0},{shape:"box",x:0,z:-.12,w:.28,d:.18,y:.015,h:.06,color:"metal"}]},{id:"car",parts:[{shape:"loft",x:0,z:0,w:.96,d:.96,y:.13,h:.36,color:"body",top:"bodyTop",edges:!0},{shape:"loft",x:0,z:-.015,w:.7,d:.54,y:.47,h:.4,tx:0,tz:-.02,tw:.58,td:.5,color:"body",top:"bodyTop",edges:!0},{shape:"box",x:0,z:.265,w:.54,d:.025,y:.55,h:.22,color:"glass",edges:!0},{shape:"box",x:-.345,z:-.01,w:.025,d:.36,y:.57,h:.2,color:"glass",edges:!0},{shape:"box",x:.345,z:-.01,w:.025,d:.36,y:.57,h:.2,color:"glass",edges:!0},{shape:"cyl",axis:"x",x:-.45,z:-.31,w:.12,d:.13,y:.07,h:.23,color:"dark",edges:!0},{shape:"cyl",axis:"x",x:.45,z:-.31,w:.12,d:.13,y:.07,h:.23,color:"dark",edges:!0},{shape:"cyl",axis:"x",x:-.45,z:.31,w:.12,d:.13,y:.07,h:.23,color:"dark",edges:!0},{shape:"cyl",axis:"x",x:.45,z:.31,w:.12,d:.13,y:.07,h:.23,color:"dark",edges:!0},{shape:"box",x:-.34,z:.49,w:.16,d:.025,y:.32,h:.08,color:"#e8f4ff"},{shape:"box",x:.34,z:.49,w:.16,d:.025,y:.32,h:.08,color:"#e8f4ff"},{shape:"box",x:-.34,z:-.49,w:.16,d:.025,y:.32,h:.08,color:"#ff3b4f"},{shape:"box",x:.34,z:-.49,w:.16,d:.025,y:.32,h:.08,color:"#ff3b4f"}]},{id:"plant",parts:[{shape:"loft",x:0,z:0,w:.52,d:.52,y:0,h:.34,tw:.66,td:.66,color:"pot",edges:!0},{shape:"cyl",x:0,z:0,w:.09,d:.09,y:.3,h:.32,color:"wood"},{shape:"loft",x:-.17,z:0,w:.42,d:.4,y:.43,h:.48,tx:-.14,tz:0,tw:.18,td:.18,color:"plant",top:"plantTop",edges:"faint"},{shape:"loft",x:.17,z:-.02,w:.42,d:.4,y:.47,h:.44,tx:.14,tz:-.02,tw:.18,td:.18,color:"plant",top:"plantTop",edges:"faint"},{shape:"loft",x:0,z:.08,w:.46,d:.42,y:.62,h:.38,tz:.08,tw:.14,td:.14,color:"plant",top:"plantTop",edges:"faint"}]},{id:"aquarium",parts:[{shape:"box",x:0,z:0,w:1,d:1,y:0,h:.14,color:"body",top:"bodyTop",edges:!0},{shape:"box",x:0,z:0,w:.94,d:.92,y:.14,h:.66,color:"#123b52",edges:"faint",glow:!0},{shape:"box",x:0,z:-.46,w:.96,d:.08,y:.12,h:.76,color:"glass",edges:!0},{shape:"box",x:-.46,z:0,w:.08,d:.88,y:.12,h:.76,color:"glass",edges:"faint"},{shape:"box",x:.46,z:0,w:.08,d:.88,y:.12,h:.76,color:"glass",edges:"faint"},{shape:"box",x:0,z:.46,w:.96,d:.06,y:.12,h:.76,color:"glass",edges:"faint"},{shape:"box",x:0,z:0,w:1,d:1,y:.88,h:.12,color:"body",top:"bodyTop",edges:!0}]},{id:"aquarium_large",parts:[{shape:"box",x:0,z:0,w:1,d:1,y:0,h:.12,color:"body",top:"bodyTop",edges:!0},{shape:"box",x:0,z:0,w:.94,d:.92,y:.12,h:.76,color:"#123b52",edges:"faint",glow:!0},{shape:"box",x:0,z:-.46,w:.96,d:.08,y:.1,h:.82,color:"glass",edges:!0},{shape:"box",x:-.46,z:0,w:.08,d:.88,y:.1,h:.82,color:"glass",edges:"faint"},{shape:"box",x:.46,z:0,w:.08,d:.88,y:.1,h:.82,color:"glass",edges:"faint"},{shape:"box",x:0,z:.46,w:.96,d:.06,y:.1,h:.82,color:"glass",edges:"faint"},{shape:"box",x:0,z:0,w:1,d:1,y:.9,h:.1,color:"body",top:"bodyTop",edges:!0}]}],ft=(i,t,e,n,r,o,s="body",a={})=>({shape:"box",x:i,z:t,w:e,d:n,y:r,h:o,color:s,edges:!0,...a}),ye=(i,t,e,n,r,o,s="metal",a="y",l={})=>({shape:"cyl",axis:a,x:i,z:t,w:e,d:n,y:r,h:o,color:s,edges:!0,...l}),Br=(i,t,e,n,r,o,s="body",a={})=>({shape:"loft",x:i,z:t,w:e,d:n,y:r,h:o,color:s,edges:!0,...a}),Fg=[{id:"van",parts:[Br(0,0,.88,.94,.1,.45,"body",{tz:-.03,tw:.78,td:.87}),ft(0,-.2,.78,.56,.52,.36,"bodyTop"),ft(0,.27,.7,.3,.47,.28,"glass",{edges:"faint"}),ft(0,-.16,.64,.03,.59,.2,"glass",{edges:"faint"}),...[-.31,.31].flatMap(i=>[-.3,.3].map(t=>ye(i,t,.15,.17,.06,.2,"dark","x"))),ft(-.32,.45,.12,.06,.25,.1,"white"),ft(.32,.45,.12,.06,.25,.1,"white")]},{id:"motorcycle",parts:[ye(-.02,.34,.12,.23,.04,.2,"dark","x"),ye(-.02,-.34,.12,.23,.04,.2,"dark","x"),Br(0,0,.18,.4,.34,.18,"metal",{tz:-.04,tw:.14,td:.2}),ft(0,-.13,.34,.27,.48,.15,"bodyTop"),ft(0,-.29,.28,.27,.61,.08,"fabric"),ye(0,.12,.12,.18,.62,.07,"accent"),ft(0,.3,.55,.05,.74,.04,"metal"),ft(-.25,.3,.08,.08,.66,.16,"metal"),ft(.25,.3,.08,.08,.66,.16,"metal")]},{id:"projector",parts:[ft(0,0,.94,.88,.1,.8,"body"),ye(0,.46,.32,.12,.38,.28,"dark","z",{glow:!0}),ft(0,-.12,.56,.04,.72,.08,"metal")]},{id:"subwoofer",parts:[ft(0,0,.92,.92,.04,.92,"body"),ye(0,.48,.64,.045,.18,.64,"dark","z",{glow:!0}),ye(0,.49,.3,.05,.35,.28,"accent","z")]},{id:"receiver",parts:[ft(0,0,.96,.9,.08,.7,"body"),ft(0,.46,.88,.04,.18,.46,"dark",{glow:!0}),...[-.34,-.12,.14,.35].map(i=>ye(i,.49,.1,.05,.28,.18,"metal","z"))]},{id:"turntable",parts:[ft(0,0,.96,.94,.08,.18,"wood"),ye(-.05,-.02,.72,.72,.28,.1,"dark"),ye(-.05,-.02,.5,.5,.34,.035,"metal"),ft(.31,.04,.05,.34,.32,.05,"metal"),ye(.31,.2,.08,.08,.29,.08,"accent")]},{id:"screen_roll",parts:[ye(0,0,.98,.12,.91,.08,"metal","x"),ft(0,.46,.96,.03,.06,.82,"white",{screen:!0}),ft(0,.46,.99,.05,.03,.06,"dark")]},{id:"cinema_seat",parts:[ft(0,-.02,.76,.42,.06,.18,"metal"),ft(0,.14,.74,.46,.24,.2,"fabric"),ft(0,-.25,.72,.2,.43,.48,"fabric"),ft(-.43,-.02,.14,.82,.22,.2,"body"),ft(.43,-.02,.14,.82,.22,.2,"body")]},{id:"cat_tree",parts:[ft(0,0,.92,.92,.02,.08,"fabric"),...[-.28,.28].map(i=>ye(i,0,.16,.16,.1,.68,"wood")),ft(0,0,.86,.8,.42,.08,"fabric"),ye(0,0,.14,.14,.5,.4,"wood"),ft(0,-.04,.74,.62,.86,.08,"fabric"),ye(0,-.04,.13,.13,.94,.43,"wood"),ft(0,0,.68,.64,.91,.07,"fabric"),ye(.3,.2,.1,.1,.98,.08,"accent")]},{id:"dog_bed",parts:[ft(0,0,.96,.94,.03,.18,"fabric"),ft(0,0,.78,.72,.2,.14,"cushion"),ft(-.42,0,.12,.94,.18,.2,"fabric"),ft(.42,0,.12,.94,.18,.2,"fabric"),ft(0,-.42,.94,.1,.18,.2,"fabric"),ft(0,.42,.94,.1,.18,.2,"fabric")]},{id:"pet_feeder",parts:[ft(0,0,.72,.72,.03,.28,"body"),Br(0,-.03,.68,.58,.32,.55,"bodyTop",{tw:.56,td:.45}),ft(0,-.34,.45,.05,.38,.26,"dark"),ye(0,.34,.78,.38,.26,.08,"metal")]},{id:"water_fountain",parts:[ye(0,0,.84,.84,.03,.28,"body"),ye(0,0,.62,.62,.28,.08,"metal"),ye(0,-.02,.2,.2,.36,.32,"accent","y",{glow:!0})]},{id:"litter_box",parts:[ft(0,0,.94,.92,.04,.18,"body"),ft(0,-.38,.94,.12,.2,.32,"bodyTop"),ft(-.44,.02,.1,.7,.2,.32,"bodyTop"),ft(.44,.02,.1,.7,.2,.32,"bodyTop"),Br(0,.05,.88,.54,.38,.45,"body",{tw:.72,td:.42})]},{id:"pet_cage",parts:[ft(0,0,.94,.92,.02,.14,"body"),ft(0,0,.92,.04,.82,.08,"metal"),...[-.42,-.21,0,.21,.42].flatMap(i=>[ft(i,-.43,.018,.018,.12,.72,"metal"),ft(i,.43,.018,.018,.12,.72,"metal")]),...[-.3,0,.3].map(i=>ft(-.46,i,.018,.018,.12,.72,"metal")),...[-.3,0,.3].map(i=>ft(.46,i,.018,.018,.12,.72,"metal"))]},{id:"terrarium",parts:[ft(0,0,.96,.94,.04,.13,"wood"),ft(0,-.46,.94,.03,.17,.72,"glass",{edges:"faint"}),ft(-.46,0,.03,.9,.17,.72,"glass",{edges:"faint"}),ft(.46,0,.03,.9,.17,.72,"glass",{edges:"faint"}),ft(0,.44,.94,.03,.17,.72,"glass",{edges:"faint"}),ft(0,0,.96,.94,.9,.1,"body"),ft(0,-.42,.8,.025,.91,.06,"accent",{glow:!0})]},{id:"garden_bench",parts:[...[-.34,.34].flatMap(i=>[ft(i,0,.12,.78,.05,.48,"metal"),ft(i,-.3,.12,.12,.52,.42,"metal")]),ft(0,0,.96,.92,.5,.1,"wood"),ft(0,-.35,.96,.12,.68,.42,"wood"),ft(0,-.1,.96,.1,.78,.08,"wood"),ft(0,-.3,.96,.1,.96,.08,"wood")]},{id:"grill",parts:[ft(0,0,.88,.86,.48,.1,"metal"),Br(0,.02,.86,.78,.57,.28,"dark",{tw:.8,td:.72}),...[-.34,.34].flatMap(i=>[-.31,.31].map(t=>ft(i,t,.07,.07,.06,.45,"metal"))),ft(0,.03,.84,.68,.78,.025,"white"),ft(0,0,.88,.08,.91,.05,"metal")]},{id:"workbench",parts:[ft(0,0,.98,.96,.86,.12,"wood"),...[-.42,.42].flatMap(i=>[-.4,.4].map(t=>ft(i,t,.09,.09,.08,.78,"metal"))),ft(0,-.34,.78,.12,.32,.08,"wood"),ft(0,.43,.98,.04,.86,.08,"body"),ft(-.28,.42,.24,.03,.67,.25,"bodyTop"),ft(.28,.42,.24,.03,.67,.25,"bodyTop")]},{id:"tool_cabinet",parts:[ft(0,0,.92,.9,.06,.84,"body"),ft(0,-.02,.96,.94,.9,.08,"metal"),...[.25,.48,.71].map(i=>ft(0,.46,.84,.03,i,.16,"bodyTop")),...[-.32,.32].map(i=>ft(i,.49,.06,.04,.42,.035,"accent")),...[-.35,.35].map(i=>ye(i,0,.14,.14,.01,.08,"dark"))]},{id:"treadmill",parts:[ft(0,.02,.52,.92,.08,.08,"dark"),ft(0,.02,.46,.84,.16,.05,"metal"),ft(-.4,-.22,.06,.06,.18,.62,"metal"),ft(.4,-.22,.06,.06,.18,.62,"metal"),ft(0,-.22,.82,.06,.78,.06,"body"),ft(0,-.32,.44,.05,.82,.16,"dark",{glow:!0})]},{id:"exercise_bike",parts:[ye(-.05,.22,.42,.1,.08,.28,"dark","x"),ft(0,0,.12,.12,.15,.57,"metal"),Br(0,0,.12,.56,.58,.11,"metal",{tz:.15,tw:.12,td:.3}),ft(0,-.25,.3,.28,.67,.06,"fabric"),ft(0,.3,.42,.06,.83,.05,"metal"),ft(-.18,.31,.05,.05,.7,.18,"metal"),ft(.18,.31,.05,.05,.7,.18,"metal"),ft(0,-.29,.28,.04,.92,.12,"dark",{glow:!0})]},{id:"heat_pump",parts:[ft(0,0,.94,.9,.05,.9,"body"),ft(0,-.46,.84,.03,.1,.78,"metal"),ye(0,.47,.64,.05,.5,.46,"dark","z"),ye(0,.48,.12,.06,.5,.44,"metal","z"),...[.23,.32,.41,.59,.68,.77].map(i=>ft(0,.47,.82,.03,i,.025,"metal"))]},{id:"buffer_tank",parts:[ye(0,0,.78,.78,.04,.9,"metal"),ye(0,0,.82,.82,.04,.06,"dark"),ye(0,0,.82,.82,.91,.06,"dark"),...[.22,.5,.78].map(i=>ye(0,0,.86,.86,i,.035,"accent")),...[-.24,.24].map(i=>ye(i,-.08,.06,.06,.78,.18,"metal","z"))]},{id:"ventilation_unit",parts:[ft(0,0,.96,.94,.1,.78,"body"),ft(0,.48,.84,.03,.2,.55,"metal"),...[-.3,-.18,-.06,.06,.18,.3].map(i=>ft(i,.5,.035,.025,.22,.5,"dark")),ye(-.32,-.42,.24,.24,.82,.18,"metal","z"),ye(.32,-.42,.24,.24,.82,.18,"metal","z")]},{id:"column",parts:[ft(0,0,.94,.94,.02,.1,"bodyTop"),ye(0,0,.62,.62,.1,.8,"metal"),ft(0,0,.88,.88,.86,.08,"bodyTop")]},{id:"beam",parts:[ft(0,0,.96,.84,.16,.68,"wood"),ft(0,-.43,1,.06,.1,.12,"woodTop"),ft(0,.43,1,.06,.1,.12,"woodTop")]},{id:"glass_partition",parts:[ft(0,0,.98,.96,.02,.05,"metal"),ft(0,0,.98,.05,.08,.84,"metal"),...[-.31,0,.31].map(i=>ft(i,0,.3,.025,.08,.84,"glass",{edges:"faint"})),ft(0,0,.98,.05,.92,.05,"metal")]},{id:"sliding_wall",parts:[ft(0,0,.98,.96,.9,.04,"metal"),...[-.32,0,.32].map(i=>ft(i,0,.31,.04,.06,.86,"bodyTop")),...[-.32,0,.32].map(i=>ft(i+.1,.03,.02,.025,.12,.72,"glass",{edges:"faint"})),ft(0,0,.98,.04,.02,.04,"metal")]},{id:"light_cove",parts:[ft(0,0,.98,.9,.1,.8,"body"),ft(0,.42,.94,.12,.82,.1,"white",{glow:!0})]},{id:"led_niche",parts:[ft(0,0,.96,.9,.06,.88,"body"),ft(0,-.42,.78,.04,.12,.72,"dark"),ft(0,.42,.86,.06,.08,.82,"bodyTop"),ft(0,-.38,.76,.03,.86,.08,"accent",{glow:!0})]},{id:"platform",parts:[ft(0,0,.98,.96,.06,.72,"body"),ft(0,0,.94,.92,.78,.14,"bodyTop")]},{id:"railing",parts:[...[-.44,-.22,0,.22,.44].map(i=>ft(i,0,.045,.12,.08,.76,"metal")),ft(0,0,.98,.16,.83,.11,"wood"),ft(0,0,.98,.12,.12,.06,"metal")]},{id:"curtain_motor",parts:[ft(0,0,.98,.1,.92,.06,"metal"),ye(0,0,.96,.09,.96,.08,"dark","x"),...[-.4,-.2,0,.2,.4].map(i=>ft(i,.12,.19,.035,.08,.78,"fabric"))]}],Sf=[...Lg,...Fg];var Ci={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Dn(i){return i==="hedge"||i==="fence"||i==="pergola"}function Oc(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!Dn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Ks(i){return[...i.rooms,...Oc(i)]}function Dg(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,s=1/0,a=-1/0;for(let[c,h]of i.points){let u=o(c,h);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-s)/(a-s)));return n*l}function Ng(i,t,e,n){return ui(i,t)+Ci[t.type]-Do(i,t,e,n)}var Uc=-.2,Zs={set:!1,level:Uc};function Tf(i){let t=i?.settings.terrain??null;Zs={set:t?.level!=null,level:t?.level??Uc}}function kr(i,t){return Zs.level}function Ef(i){return i.elevation>.3?0:Zs.set?Zs.level-i.elevation:Uc}function ui(i,t){return Ef(i)+(t.offset??0)}function Do(i,t,e,n){return t.type==="pool"?0:Dg(t,e,n)}function Af(i,t,e){let n=(i.outdoor??[]).filter(o=>!Dn(o.type)&&o.type!=="pool"&&te([t,e],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?Ng(i,r,t,e):Ef(i)}function Js(i,t){return ui(i,t)+(t.above?Pf(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function Og(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?Pf(i):1.5}function Bc(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Dn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>te(n,e.points)))}function Rf(i,t){return!t.above&&!Bc(i,t)?js(i,t)-.05:Js(i,t)-Og(t)}function js(i,t){return Js(i,t)-.15}function Pf(i){return i.height&&i.height>.3?i.height:1.2}var Ug={type:"none",pitch:35,overhang:.4},rw={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Ug}};var Cf=.3;var If=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Qs=1.75;var Lf=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Ff(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var Df=new Set(["stairs","stairs_u"]);function Nf(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:h,rise:e/n}}function Of(i){return If.has(i)||!!we(i)?.light}var Bg=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function sr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var wf=.04,kg=1.2;function Uf(i,t,e,n=0){let r=0;for(let o of i.furniture)!(Bg.has(o.type)||we(o.type)?.surface)||!te([t,e],Li(o))||o.type==="worktop"&&n>0&&o.h-wf>=kg&&n<=o.h-wf-.02||(r=Math.max(r,o.h));return r}var ta=new Set(["wall_switch","wall_socket"]),zg=4;function Bf(i){let t=(i.gangs??[]).slice(0,zg);return t.length?t:[{entity:null}]}function kf(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var Vg=new Set([...If,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var Gg=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Wg=["standard","bars","glass_wall"];function ar(i,t){return i.type==="door"?i.style&&Gg.includes(i.style)?i.style:t?"front":"interior":i.style&&Wg.includes(i.style)?i.style:"standard"}function zf(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=o-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Vf(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function xn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[o,s]=i[(e+1)%i.length];t+=n*s-o*r}return t/2}function Nn(i){return Math.abs(xn(i))}function Ii(i){let t=xn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;e+=(o+a)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function kc(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,o]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function Gf(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:t,z0:e,x1:n,z1:r}}function Li(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*e-a*n,i.z+s*n+a*e])}function te(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[o,s]=t[n],[a,l]=t[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(e=!e)}return e}var ea="neonplan.generated";function oe(i,t,e,n,r={}){return{packId:ea,item:{id:i,name:{de:t,en:e},size:n,parts:[],symbol:[{shape:"rect",x:0,z:0,w:.9,d:.9}],...r}}}var zc=[oe("speaker","Lautsprecher","Speaker",[.42,.42,.96],{electric:!0,mount:"floor",symbol:[{shape:"circle",x:0,z:0,r:.28}]}),oe("soundbar","Soundbar","Soundbar",[.95,.14,.12],{electric:!0,mount:"surface",symbol:[{shape:"rect",x:0,z:0,w:.94,d:.24}]}),oe("echo_dot","Echo Dot","Echo Dot",[.1,.1,.045],{electric:!0,mount:"surface",symbol:[{shape:"circle",x:0,z:0,r:.44}]}),oe("display","Display","Display",[1.2,.16,.76],{electric:!0,mount:"floor",parts:[{shape:"box",x:0,z:.46,w:.9,d:.03,y:.08,h:.84,color:"dark",screen:!0}]}),oe("car","Pkw","Car",[1.9,4.5,1.6],{vehicle:!0,mount:"floor",symbol:[{shape:"rect",x:0,z:0,w:.82,d:.94},{shape:"circle",x:-.43,z:-.28,r:.07},{shape:"circle",x:.43,z:-.28,r:.07},{shape:"circle",x:-.43,z:.28,r:.07},{shape:"circle",x:.43,z:.28,r:.07}]}),oe("van","Transporter","Van",[2.05,5.2,2.15],{vehicle:!0,mount:"floor"}),oe("motorcycle","Motorrad","Motorcycle",[.92,2.25,1.35],{vehicle:!0,mount:"floor"}),oe("plant","Topfpflanze","Potted plant",[.5,.5,1.1],{group:"plant",mount:"floor",symbol:[{shape:"rect",x:0,z:.22,w:.42,d:.25,fill:!0},{shape:"line",x1:0,z1:-.22,x2:0,z2:.12},{shape:"circle",x:0,z:-.12,r:.18}]}),oe("aquarium","Aquarium","Aquarium",[.8,.35,.5],{electric:!0,mount:"floor",symbol:[{shape:"rect",x:0,z:0,w:.94,d:.92}]}),oe("aquarium_large","Gro\xDFes Aquarium","Large aquarium",[1.2,.45,1.4],{electric:!0,mount:"floor",symbol:[{shape:"rect",x:0,z:0,w:.94,d:.92}]}),oe("projector","Projektor","Projector",[.38,.3,.16],{electric:!0,mount:"surface"}),oe("subwoofer","Subwoofer","Subwoofer",[.42,.42,.48],{electric:!0,mount:"floor"}),oe("receiver","AV-Receiver","AV Receiver",[.44,.36,.14],{electric:!0,mount:"surface"}),oe("turntable","Plattenspieler","Turntable",[.44,.36,.13],{electric:!0,mount:"surface"}),oe("screen_roll","Motorleinwand","Motorized screen",[2.6,.12,1.75],{electric:!0,mount:"wall",wall_y:.5,parts:[{shape:"box",x:0,z:.46,w:.98,d:.03,y:.05,h:.82,color:"white",screen:!0}]}),oe("cinema_seat","Kinostuhl","Cinema seat",[.9,.95,1.2],{mount:"floor"}),oe("cat_tree","Kratzbaum","Cat tree",[.85,.75,1.8],{mount:"floor"}),oe("dog_bed","Hundebett","Dog bed",[.95,.72,.28],{mount:"floor"}),oe("pet_feeder","Futterautomat","Pet feeder",[.38,.38,.7],{electric:!0,mount:"floor"}),oe("water_fountain","Trinkbrunnen","Pet water fountain",[.34,.34,.28],{electric:!0,mount:"floor"}),oe("litter_box","Katzentoilette","Litter box",[.68,.52,.42],{mount:"floor"}),oe("pet_cage","Tierk\xE4fig","Pet cage",[.82,.62,1.05],{mount:"floor"}),oe("terrarium","Terrarium","Terrarium",[.95,.5,.9],{electric:!0,mount:"floor"}),oe("garden_bench","Gartenbank","Garden bench",[1.5,.58,.92],{mount:"floor",surface:!0}),oe("grill","Grill","Grill",[.95,.58,1.05],{mount:"floor"}),oe("workbench","Werkbank","Workbench",[1.6,.72,.92],{mount:"floor",surface:!0}),oe("tool_cabinet","Werkzeugschrank","Tool cabinet",[.9,.48,1.6],{mount:"floor",surface:!0}),oe("treadmill","Laufband","Treadmill",[.82,1.9,1.35],{electric:!0,mount:"floor"}),oe("exercise_bike","Ergometer","Exercise bike",[.65,1.25,1.35],{electric:!0,mount:"floor"}),oe("heat_pump","W\xE4rmepumpe","Heat pump",[.9,.52,1.3],{electric:!0,mount:"floor"}),oe("buffer_tank","Pufferspeicher","Buffer tank",[.85,.85,1.85],{electric:!0,mount:"floor"}),oe("ventilation_unit","L\xFCftungsger\xE4t","Ventilation unit",[1.15,.78,.48],{electric:!0,mount:"ceiling"}),oe("column","S\xE4ule","Column",[.42,.42,2.5],{mount:"floor"}),oe("beam","Tr\xE4ger","Beam",[2.6,.35,.35],{mount:"ceiling"}),oe("glass_partition","Glastrennwand","Glass partition",[2.3,.12,2.2],{mount:"floor"}),oe("sliding_wall","Schiebewand","Sliding wall",[2.4,.14,2.2],{mount:"floor"}),oe("light_cove","Lichtvoute","Light cove",[2.2,.22,.24],{light:"strip",mount:"ceiling"}),oe("led_niche","LED-Nische","LED niche",[.85,.24,1.45],{light:"wall",mount:"wall",wall_y:.9}),oe("platform","Podest","Platform",[2.1,1.6,.32],{mount:"floor",surface:!0}),oe("railing","Gel\xE4nder","Railing",[2.4,.14,1.05],{mount:"floor"}),oe("curtain_motor","Motorvorhang","Motorized curtain",[2.4,.15,2.3],{electric:!0,mount:"wall",wall_y:.1})],Hg=new Set(["combo","combination","set","bundle","lamp","mount","stand","holder","bracket","support","shelf","rack","cable","remote","adapter","dock","case","cover","accessory","filter","heater","pump","light"]),Wf=[["soundbar","soundbar"],["echo_dot","echo_dot"],["subwoofer","subwoofer"],["receiver","receiver"],["amplifier","receiver"],["stereo","speaker"],["turntable","turntable"],["speaker","speaker"]],Hf=[["screen_roll","screen_roll"],["roll_down_screen","screen_roll"],["projection_screen","screen_roll"],["projector_screen","screen_roll"],["display","display"],["screen","display"],["television","display"],["monitor","display"],["tv","display"]],Xg=[["motorcycle","motorcycle"],["motorbike","motorcycle"],["van","van"],["car","car"],["auto","car"],["vehicle","car"],["sedan","car"],["suv","car"],["truck","car"],["convertible","car"]],Yg=[["aquarium_large","aquarium_large"],["large_aquarium","aquarium_large"],["aquarium","aquarium"]],qg=[["potted_plant","plant"],["bonsai","plant"],["flower","plant"],["succulent","plant"]],$g=[...Wf,...Hf,["projector","projector"],["cinema_seat","cinema_seat"],["cinema_chair","cinema_seat"]];function Zg(i,t){let e=[],n=0;for(;n<i.length;){let r=i.indexOf(t,n);if(r<0)break;let o=r+t.length;(r===0||i[r-1]==="_")&&(o===i.length||i[o]==="_")&&e.push([r,o]),n=r+1}return e}function lr(i,t){if(i.split("_").some(o=>Hg.has(o)))return;let e=t.flatMap(([o,s])=>Zg(i,o).map(([a,l])=>({token:o,id:s,start:a,end:l}))),n=e.filter(o=>!e.some(s=>s.token.length>o.token.length&&s.start<=o.start&&s.end>=o.end)),r=new Set(n.map(({id:o})=>o));return r.size===1?r.values().next().value:void 0}function Vc(i){let[,t,...e]=i.split(":"),n=e.join(":").toLowerCase();if(t===ea)return zc.some(({item:o})=>o.id===n)?n:void 0;let r;return t==="mastershort.vehicles"&&(r=lr(n,Xg)),t==="mastershort.pro_sound"&&(r=lr(n,Wf)),t==="mastershort.pro_screens"&&(r=lr(n,Hf)),t==="mastershort.cinema"&&(r=lr(n,$g)),t==="mastershort.pets"&&(r=lr(n,Yg)),!r&&t?.startsWith("mastershort.")&&(r=n==="plant"?"plant":n.startsWith("plant_")?lr(n,[["plant","plant"]]):lr(n,qg)),r}function Yf(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var Kg=[],Gc=new Map,Jg=0;function No(i){Kg=i,Gc=new Map(i.flatMap(t=>t.items.map(e=>[jg(t.id,e.id),e]))),Jg++}function jg(i,t){return`pack:${i}:${t}`}function Wc(i){return i.startsWith("pack:")}function na(i){return Wc(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function Hc(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function qf(i){return i==="robot_vacuum"||Wc(i)&&i.endsWith(":robot_vacuum")}function Oo(i){return i.z>.05}function $f(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&Oo(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}var Qg={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"},Xf,Zf=new Map;function Kf(i){Zf=new Map(i.flatMap(({id:t,parts:e})=>{let n=Jf(t);return n?[[t,{...n,parts:e}]]:[]}))}function Jf(i){return Xf??=new Map(zc.map(({item:t})=>[t.id,t])),Xf.get(i)}function tb(i){return Zf.get(i)??Jf(i)}function jf(i){return we(i)?.parts.find(t=>t.screen)}function we(i){if(!Wc(i))return;let t=Gc.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=Qg[e],o=r?Gc.get(`pack:${r}:${n.join(":")}`):void 0,s=Vc(i);return o??(s?tb(s):void 0)}function rn(i,t){let e=we(t.type);if(t.mount_y!=null)return t.mount_y;let n=kf(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return Qs;if(Lf.has(t.type))return Math.max(0,i.height-Ff(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return Uf(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:sr(t)}}Kf(Sf);var Cd=0,Tu=1,Id=2;var cs=1,Ld=2,ho=3,ei=0,an=1,ge=2,ni=0,Xi=1,Ge=2,Eu=3,us=4,Fd=5;var vr=100,Dd=101,Nd=102,Od=103,Ud=104,Bd=200,kd=201,zd=202,Vd=203,Au=204,Ru=205,Gd=206,Wd=207,Hd=208,Xd=209,Yd=210,qd=211,$d=212,Zd=213,Kd=214,Ia=0,La=1,Fa=2,eo=3,Da=4,Na=5,Oa=6,Ua=7,Pu=0,Jd=1,jd=2,Vn=0,Cu=1,Iu=2,Lu=3,Fu=4,Du=5,Nu=6,Ou=7;var Uu=300,Yi=301,_r=302,hl=303,fl=304,hs=306,pr=1e3,wn=1001,Ba=1002,je=1003,Qd=1004;var fs=1005;var on=1006,dl=1007;var qi=1008;var En=1009,Bu=1010,ku=1011,fo=1012,pl=1013,Gn=1014,Wn=1015,Hn=1016,ml=1017,gl=1018,po=1020,zu=35902,Vu=35899,Gu=1021,Wu=1022,Cn=1023,Kn=1026,$i=1027,Hu=1028,bl=1029,Zi=1030,xl=1031;var yl=1033,ds=33776,ps=33777,ms=33778,gs=33779,vl=35840,_l=35841,Ml=35842,Sl=35843,wl=36196,Tl=37492,El=37496,Al=37488,Rl=37489,bs=37490,Pl=37491,Cl=37808,Il=37809,Ll=37810,Fl=37811,Dl=37812,Nl=37813,Ol=37814,Ul=37815,Bl=37816,kl=37817,zl=37818,Vl=37819,Gl=37820,Wl=37821,Hl=36492,Xl=36494,Yl=36495,ql=36283,$l=36284,xs=36285,Zl=36286;var Ho=2300,ka=2301,Ra=2302,pu=2303,mu=2400,gu=2401,bu=2402;var tp=3200;var Xu=0,ep=1,vi="",Be="srgb",Xo="srgb-linear",Yo="linear",Me="srgb";var Pa=7680;var np=519,ip=512,rp=513,op=514,Kl=515,sp=516,ap=517,Jl=518,lp=519,cp=35044,Yu=35048;var qu="300 es",zn=2e3,qo=2001;function eb(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function nb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function up(){let i=no("canvas");return i.style.display="block",i}var Qf={},io=null;function $u(...i){let t="THREE."+i.shift();io?io("log",t,...i):console.log(t,...i)}function hp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qt(...i){i=hp(i);let t="THREE."+i.shift();if(io)io("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function $t(...i){i=hp(i);let t="THREE."+i.shift();if(io)io("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function dr(...i){let t=i.join(" ");t in Qf||(Qf[t]=!0,qt(...i))}function fp(i,t,e){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var dp={[Ia]:La,[Fa]:Oa,[Da]:Ua,[eo]:Na,[La]:Ia,[Oa]:Fa,[Ua]:Da,[Na]:eo},Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xc=Math.PI/180,za=180/Math.PI;function ys(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function ib(i,t){return(i%t+t)%t}function Yc(i,t,e){return(1-e)*i+e*t}function Uo(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qu=class Qu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*n-s*r+t.x,this.y=o*r+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qu.prototype.isVector2=!0;var ce=Qu,jn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,s,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=o[s+0],d=o[s+1],p=o[s+2],b=o[s+3];if(u!==b||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*b;m<0&&(f=-f,d=-d,p=-p,b=-b,m=-m);let g=1-a;if(m<.9995){let x=Math.acos(m),_=Math.sin(x);g=Math.sin(g*x)/_,a=Math.sin(a*x)/_,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+b*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+b*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=o[s],f=o[s+1],d=o[s+2],p=o[s+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,o=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(o/2),f=l(n/2),d=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],o=e[8],s=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(s-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(o+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(s-r)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-n*c,this._z=o*h+s*c+n*l-r*a,this._w=s*h-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},th=class th{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(td.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=t.elements,s=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,o=t.x,s=t.y,a=t.z,l=t.w,c=2*(s*r-a*n),h=2*(a*e-o*r),u=2*(o*n-s*e);return this.x=e+l*c+s*u-a*h,this.y=n+l*h+a*c-o*u,this.z=r+l*u+o*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,o=t.z,s=e.x,a=e.y,l=e.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qc.copy(this).projectOnVector(t),this.sub(qc)}reflect(t){return this.sub(qc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};th.prototype.isVector3=!0;var $=th,qc=new $,td=new jn,eh=class eh{constructor(t,e,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c)}set(t,e,n,r,o,s,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],b=r[0],m=r[3],g=r[6],x=r[1],_=r[4],y=r[7],M=r[2],w=r[5],R=r[8];return o[0]=s*b+a*x+l*M,o[3]=s*m+a*_+l*w,o[6]=s*g+a*y+l*R,o[1]=c*b+h*x+u*M,o[4]=c*m+h*_+u*w,o[7]=c*g+h*y+u*R,o[2]=f*b+d*x+p*M,o[5]=f*m+d*_+p*w,o[8]=f*g+d*y+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*s*h-e*a*c-n*o*h+n*a*l+r*o*c-r*s*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*s-a*c,f=a*l-h*o,d=c*o-s*l,p=e*u+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return t[0]=u*b,t[1]=(r*c-h*n)*b,t[2]=(a*n-r*s)*b,t[3]=f*b,t[4]=(h*e-r*l)*b,t[5]=(r*o-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(s*e-n*o)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+t,-r*c,r*l,-r*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(t,e)),this}rotate(t){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-t)),this}translate(t,e){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};eh.prototype.isMatrix3=!0;var Jt=eh,$c=new Jt,ed=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rb(){let i={enabled:!0,workingColorSpace:Xo,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Me&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Me&&(r.r=to(r.r),r.g=to(r.g),r.b=to(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vi?Yo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xo]:{primaries:t,whitePoint:n,transfer:Yo,toXYZ:ed,fromXYZ:nd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:ed,fromXYZ:nd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}var he=rb();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function to(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zr,Va=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zr===void 0&&(zr=no("canvas")),zr.width=t.width,zr.height=t.height;let r=zr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=zr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=gi(o[s]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ob=0,ro=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Zc(r[s].image)):o.push(Zc(r[s]))}else o=Zc(r);n.url=o}return e||(t.images[this.uuid]=n),n}};function Zc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Va.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var sb=0,Kc=new $,dn=class i extends Jn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wn,r=wn,o=on,s=qi,a=Cn,l=En,c=i.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=ys(),this.name="",this.source=new ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pr:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pr:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Uu;dn.DEFAULT_ANISOTROPY=1;var nh=class nh{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*e+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*e+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*e+s[7]*n+s[11]*r+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],b=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(d+1)/2,M=(g+1)/2,w=(h+f)/4,R=(u+b)/4,v=(p+m)/4;return _>y&&_>M?_<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(_),r=w/n,o=R/n):y>M?y<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),n=w/r,o=v/r):M<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),n=R/o,r=v/o),this.set(n,r,o,e),this}let x=Math.sqrt((m-p)*(m-p)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-b)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nh.prototype.isVector4=!0;var ze=nh,Ga=class extends Jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},o=new dn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new ro(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends Ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$o=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ul=class ul{constructor(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,m)}set(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=o,g[5]=s,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=b,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ul().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Vr.setFromMatrixColumn(t,0).length(),o=1/Vr.setFromMatrixColumn(t,1).length(),s=1/Vr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,o=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let f=s*h,d=s*u,p=a*h,b=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=p+d*c,e[10]=s*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f+b*a,e[4]=p*a-d,e[8]=s*c,e[1]=s*u,e[5]=s*h,e[9]=-a,e[2]=d*a-p,e[6]=b+f*a,e[10]=s*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f-b*a,e[4]=-s*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=s*h,e[9]=b-f*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){let f=s*h,d=s*u,p=a*h,b=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){let f=s*l,d=s*c,p=a*l,b=a*c;e[0]=l*h,e[4]=b-f*u,e[8]=p*u+d,e[1]=u,e[5]=s*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-b*u}else if(t.order==="XZY"){let f=s*l,d=s*c,p=a*l,b=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+b,e[5]=s*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ab,t,lb)}lookAt(t,e,n){let r=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Fi.crossVectors(n,Mn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Fi.crossVectors(n,Mn)),Fi.normalize(),ia.crossVectors(Mn,Fi),r[0]=Fi.x,r[4]=ia.x,r[8]=Mn.x,r[1]=Fi.y,r[5]=ia.y,r[9]=Mn.y,r[2]=Fi.z,r[6]=ia.z,r[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],b=n[6],m=n[10],g=n[14],x=n[3],_=n[7],y=n[11],M=n[15],w=r[0],R=r[4],v=r[8],E=r[12],C=r[1],I=r[5],P=r[9],D=r[13],S=r[2],F=r[6],A=r[10],T=r[14],N=r[3],U=r[7],k=r[11],z=r[15];return o[0]=s*w+a*C+l*S+c*N,o[4]=s*R+a*I+l*F+c*U,o[8]=s*v+a*P+l*A+c*k,o[12]=s*E+a*D+l*T+c*z,o[1]=h*w+u*C+f*S+d*N,o[5]=h*R+u*I+f*F+d*U,o[9]=h*v+u*P+f*A+d*k,o[13]=h*E+u*D+f*T+d*z,o[2]=p*w+b*C+m*S+g*N,o[6]=p*R+b*I+m*F+g*U,o[10]=p*v+b*P+m*A+g*k,o[14]=p*E+b*D+m*T+g*z,o[3]=x*w+_*C+y*S+M*N,o[7]=x*R+_*I+y*F+M*U,o[11]=x*v+_*P+y*A+M*k,o[15]=x*E+_*D+y*T+M*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],s=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],b=t[7],m=t[11],g=t[15],x=l*d-c*f,_=a*d-c*u,y=a*f-l*u,M=s*d-c*h,w=s*f-l*h,R=s*u-a*h;return e*(b*x-m*_+g*y)-n*(p*x-m*M+g*w)+r*(p*_-b*M+g*R)-o*(p*y-b*w+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[1],s=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(s*h-a*c)-n*(o*h-a*l)+r*(o*c-s*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],b=t[13],m=t[14],g=t[15],x=e*a-n*s,_=e*l-r*s,y=e*c-o*s,M=n*l-r*a,w=n*c-o*a,R=r*c-o*l,v=h*b-u*p,E=h*m-f*p,C=h*g-d*p,I=u*m-f*b,P=u*g-d*b,D=f*g-d*m,S=x*D-_*P+y*I+M*C-w*E+R*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/S;return t[0]=(a*D-l*P+c*I)*F,t[1]=(r*P-n*D-o*I)*F,t[2]=(b*R-m*w+g*M)*F,t[3]=(f*w-u*R-d*M)*F,t[4]=(l*C-s*D-c*E)*F,t[5]=(e*D-r*C+o*E)*F,t[6]=(m*y-p*R-g*_)*F,t[7]=(h*R-f*y+d*_)*F,t[8]=(s*P-a*C+c*v)*F,t[9]=(n*C-e*P-o*v)*F,t[10]=(p*w-b*y+g*x)*F,t[11]=(u*y-h*w-d*x)*F,t[12]=(a*E-s*I-l*v)*F,t[13]=(e*I-n*E+r*v)*F,t[14]=(b*_-p*M-m*x)*F,t[15]=(h*M-u*_+f*x)*F,this}scale(t){let e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),o=1-n,s=t.x,a=t.y,l=t.z,c=o*s,h=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,s){return this.set(1,n,o,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,o=e._x,s=e._y,a=e._z,l=e._w,c=o+o,h=s+s,u=a+a,f=o*c,d=o*h,p=o*u,b=s*h,m=s*u,g=a*u,x=l*c,_=l*h,y=l*u,M=n.x,w=n.y,R=n.z;return r[0]=(1-(b+g))*M,r[1]=(d+y)*M,r[2]=(p-_)*M,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(f+g))*w,r[6]=(m+x)*w,r[7]=0,r[8]=(p+_)*R,r[9]=(m-x)*R,r[10]=(1-(f+b))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let s=Vr.set(r[0],r[1],r[2]).length(),a=Vr.set(r[4],r[5],r[6]).length(),l=Vr.set(r[8],r[9],r[10]).length();o<0&&(s=-s),On.copy(this);let c=1/s,h=1/a,u=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),n.x=s,n.y=a,n.z=l,this}makePerspective(t,e,n,r,o,s,a=zn,l=!1){let c=this.elements,h=2*o/(e-t),u=2*o/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,b;if(l)p=o/(s-o),b=s*o/(s-o);else if(a===zn)p=-(s+o)/(s-o),b=-2*s*o/(s-o);else if(a===qo)p=-s/(s-o),b=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,o,s,a=zn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,b;if(l)p=1/(s-o),b=s/(s-o);else if(a===zn)p=-2/(s-o),b=-(s+o)/(s-o);else if(a===qo)p=-1/(s-o),b=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ul.prototype.isMatrix4=!0;var Ae=ul,Vr=new $,On=new Ae,ab=new $(0,0,0),lb=new $(1,1,1),Fi=new $,ia=new $,Mn=new $,id=new Ae,rd=new jn,ki=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-me(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return id.makeRotationFromQuaternion(t),this.setFromRotationMatrix(id,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rd.setFromEuler(this),this.setFromQuaternion(rd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cb=0,od=new $,Gr=new jn,hi=new Ae,ra=new $,Bo=new $,ub=new $,hb=new jn,sd=new $(1,0,0),ad=new $(0,1,0),ld=new $(0,0,1),cd={type:"added"},fb={type:"removed"},Wr={type:"childadded",child:null},Jc={type:"childremoved",child:null},_n=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new $,e=new ki,n=new jn,r=new $(1,1,1);function o(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Jt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gr.setFromAxisAngle(t,e),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(t,e){return Gr.setFromAxisAngle(t,e),this.quaternion.premultiply(Gr),this}rotateX(t){return this.rotateOnAxis(sd,t)}rotateY(t){return this.rotateOnAxis(ad,t)}rotateZ(t){return this.rotateOnAxis(ld,t)}translateOnAxis(t,e){return od.copy(t).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sd,t)}translateY(t){return this.translateOnAxis(ad,t)}translateZ(t){return this.translateOnAxis(ld,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ra.copy(t):ra.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Bo,ra,this.up):hi.lookAt(ra,Bo,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(hi),this.quaternion.premultiply(Gr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cd),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fb),Jc.child=t,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cd),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,ub),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,hb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*r,o[13]+=n-o[1]*e-o[5]*n-o[9]*r,o[14]+=r-o[2]*e-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));r.material=a}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(t.animations,l))}}if(e){let a=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),u=s(t.shapes),f=s(t.skeletons),d=s(t.animations),p=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new $(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ve=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},db={type:"move"},so=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,n),g=this._getHandJoint(c,b);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(db)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},oa={h:0,s:0,l:0};function jc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=ib(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,s=2*n-o;this.r=jc(s,o,t+1/3),this.g=jc(s,o,t),this.b=jc(s,o,t-1/3)}return he.colorSpaceToWorking(this,r),this}setStyle(t,e=Be){function n(o){o!==void 0&&parseFloat(o)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(o,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=pp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return he.workingToColorSpace(fn.copy(this),t),Math.round(me(fn.r*255,0,255))*65536+Math.round(me(fn.g*255,0,255))*256+Math.round(me(fn.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(fn.copy(this),e);let n=fn.r,r=fn.g,o=fn.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,h=(a+s)/2;if(a===s)l=0,c=0;else{let u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case n:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-n)/u+2;break;case o:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Be){he.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,r=fn.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(oa);let n=Yc(Di.h,oa.h,e),r=Yc(Di.s,oa.s,e),o=Yc(Di.l,oa.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new nt;nt.NAMES=pp;var Zo=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new nt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var zi=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Un=new $,fi=new $,Qc=new $,di=new $,Hr=new $,Xr=new $,ud=new $,tu=new $,eu=new $,nu=new $,iu=new ze,ru=new ze,ou=new ze,Bi=class i{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Un.subVectors(t,e),r.cross(Un);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){Un.subVectors(r,e),fi.subVectors(n,e),Qc.subVectors(t,e);let s=Un.dot(Un),a=Un.dot(fi),l=Un.dot(Qc),c=fi.dot(fi),h=fi.dot(Qc),u=s*c-a*a;if(u===0)return o.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(s*h-a*l)*f;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,n,r,o,s,a,l){return this.getBarycoord(t,e,n,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,di.x),l.addScaledVector(s,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(t,e,n,r,o,s){return iu.setScalar(0),ru.setScalar(0),ou.setScalar(0),iu.fromBufferAttribute(t,e),ru.fromBufferAttribute(t,n),ou.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(iu,o.x),s.addScaledVector(ru,o.y),s.addScaledVector(ou,o.z),s}static isFrontFacing(t,e,n,r){return Un.subVectors(n,e),fi.subVectors(t,e),Un.cross(fi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Un.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,o=this.c,s,a;Hr.subVectors(r,n),Xr.subVectors(o,n),tu.subVectors(t,n);let l=Hr.dot(tu),c=Xr.dot(tu);if(l<=0&&c<=0)return e.copy(n);eu.subVectors(t,r);let h=Hr.dot(eu),u=Xr.dot(eu);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),e.copy(n).addScaledVector(Hr,s);nu.subVectors(t,o);let d=Hr.dot(nu),p=Xr.dot(nu);if(p>=0&&d<=p)return e.copy(o);let b=d*c-l*p;if(b<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Xr,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return ud.subVectors(o,r),a=(u-h)/(u-h+(d-p)),e.copy(r).addScaledVector(ud,a);let g=1/(m+b+f);return s=b*g,a=f*g,e.copy(n).addScaledVector(Hr,s).addScaledVector(Xr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yn=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Bn):Bn.fromBufferAttribute(o,s),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}let r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),aa.subVectors(this.max,ko),Yr.subVectors(t.a,ko),qr.subVectors(t.b,ko),$r.subVectors(t.c,ko),Ni.subVectors(qr,Yr),Oi.subVectors($r,qr),cr.subVectors(Yr,$r);let e=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-cr.z,cr.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,cr.z,0,-cr.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-cr.y,cr.x,0];return!su(e,Yr,qr,$r,aa)||(e=[1,0,0,0,1,0,0,0,1],!su(e,Yr,qr,$r,aa))?!1:(la.crossVectors(Ni,Oi),e=[la.x,la.y,la.z],su(e,Yr,qr,$r,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pi=[new $,new $,new $,new $,new $,new $,new $,new $],Bn=new $,sa=new yn,Yr=new $,qr=new $,$r=new $,Ni=new $,Oi=new $,cr=new $,ko=new $,aa=new $,la=new $,ur=new $;function su(i,t,e,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){ur.fromArray(i,o);let a=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=t.dot(ur),c=e.dot(ur),h=n.dot(ur);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ye=new $,ca=new ce,pb=0,Pn=class extends Jn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cp,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ca.fromBufferAttribute(this,e),ca.applyMatrix3(t),this.setXY(e,ca.x,ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Uo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=vn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Uo(e,this.array)),e}setX(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Uo(e,this.array)),e}setY(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Uo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Uo(e,this.array)),e}setW(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array),r=vn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array),r=vn(r,this.array),o=vn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ko=class extends Pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mr=class extends Pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends Pn{constructor(t,e,n){super(new Float32Array(t),e,n)}},mb=new yn,zo=new $,au=new $,Vi=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):mb.setFromPoints(t).getCenter(n);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);let e=zo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(zo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(au.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(au)),this.expandByPoint(zo.copy(t.center).sub(au))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},gb=0,Rn=new Ae,lu=new _n,Zr=new $,Sn=new yn,Vo=new yn,Ke=new $,ee=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eb(t)?mr:Ko)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return lu.lookAt(t),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,o=t.length;r<o;r++){let s=t[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Xt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let o=e[n];Sn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){let a=e[o];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(Sn.min,Vo.min),Sn.expandByPoint(Ke),Ke.addVectors(Sn.max,Vo.max),Sn.expandByPoint(Ke)):(Sn.expandByPoint(Vo.min),Sn.expandByPoint(Vo.max))}Sn.getCenter(n);let r=0;for(let o=0,s=t.count;o<s;o++)Ke.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(Ke));if(e)for(let o=0,s=e.length;o<s;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ke.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(t,c),Ke.add(Zr)),r=Math.max(r,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,o=e.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new Pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new $,l[v]=new $;let c=new $,h=new $,u=new $,f=new ce,d=new ce,p=new ce,b=new $,m=new $;function g(v,E,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,C),f.fromBufferAttribute(o,v),d.fromBufferAttribute(o,E),p.fromBufferAttribute(o,C),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(b.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(I),a[v].add(b),a[E].add(b),a[C].add(b),l[v].add(m),l[E].add(m),l[C].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let v=0,E=x.length;v<E;++v){let C=x[v],I=C.start,P=C.count;for(let D=I,S=I+P;D<S;D+=3)g(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let _=new $,y=new $,M=new $,w=new $;function R(v){M.fromBufferAttribute(r,v),w.copy(M);let E=a[v];_.copy(E),_.sub(M.multiplyScalar(M.dot(E))).normalize(),y.crossVectors(w,E);let I=y.dot(l[v])<0?-1:1;s.setXYZW(v,_.x,_.y,_.z,I)}for(let v=0,E=x.length;v<E;++v){let C=x[v],I=C.start,P=C.count;for(let D=I,S=I+P;D<S;D+=3)R(t.getX(D+0)),R(t.getX(D+1)),R(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new $,o=new $,s=new $,a=new $,l=new $,c=new $,h=new $,u=new $;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),b=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,b),s.fromBufferAttribute(e,m),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Pn(f,h,u)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var cu=new $,bb=new $,xb=new Jt,kn=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=cu.subVectors(n,e).cross(bb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(cu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(r,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xb.getNormalMatrix(t),r=this.coplanarPoint(cu).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},yb=0,bi=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=Xi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=Ru,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(e){let o=r(t.textures),s=r(t.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var mi=new $,uu=new $,ua=new $,ha=new $,gr=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){uu.copy(t).add(e).multiplyScalar(.5),ua.copy(e).sub(t).normalize(),ha.copy(this.origin).sub(uu);let o=t.distanceTo(e)*.5,s=-this.direction.dot(ua),a=ha.dot(this.direction),l=-ha.dot(ua),c=ha.lengthSq(),h=Math.abs(1-s*s),u,f,d,p;if(h>0)if(u=s*l-a,f=s*a-l,p=o*h,u>=0)if(f>=-p)if(f<=p){let b=1/h;u*=b,f*=b,d=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-s*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(s*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=s>0?-o:o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(uu).addScaledVector(ua,f),d}intersectSphere(t,e){if(t.radius<0)return null;mi.subVectors(t.center,this.origin);let n=mi.dot(this.direction),r=mi.dot(mi)-n*n,o=t.radius*t.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,s,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-s.x,f=t.y-s.y,d=t.z-s.z,p=e.x-s.x,b=e.y-s.y,m=e.z-s.z,g=n.x-s.x,x=n.y-s.y,_=n.z-s.z,y=Math.abs(l),M=Math.abs(c),w=Math.abs(h),R,v,E,C,I,P,D,S,F,A,T,N;if(y>=M&&y>=w?(E=l,P=u,F=p,N=g,l>=0?(R=c,v=h,C=f,I=d,D=b,S=m,A=x,T=_):(R=h,v=c,C=d,I=f,D=m,S=b,A=_,T=x)):M>=w?(E=c,P=f,F=b,N=x,c>=0?(R=h,v=l,C=d,I=u,D=m,S=p,A=_,T=g):(R=l,v=h,C=u,I=d,D=p,S=m,A=g,T=_)):(E=h,P=d,F=m,N=_,h>=0?(R=l,v=c,C=u,I=f,D=p,S=b,A=g,T=x):(R=c,v=l,C=f,I=u,D=b,S=p,A=x,T=g)),E===0)return null;let U=R/E,k=v/E,z=1/E,W=C-U*P,G=I-k*P,H=D-U*F,j=S-k*F,st=A-U*N,X=T-k*N,Z=st*j-X*H,tt=W*X-G*st,q=H*G-j*W;if(r){if(Z<0||tt<0||q<0)return null}else if((Z<0||tt<0||q<0)&&(Z>0||tt>0||q>0))return null;let Q=Z+tt+q;if(Q===0)return null;let dt=z*(Z*P+tt*F+q*N);return(Q>0?dt<0:dt>0)?null:this.at(dt/Q,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},hd=new Ae,hr=new gr,fa=new Vi,fd=new $,da=new $,pa=new $,ma=new $,hu=new $,ga=new $,dd=new $,ba=new $,Ut=class extends _n{constructor(t=new ee,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(o&&a){ga.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],u=o[l];h!==0&&(hu.fromBufferAttribute(u,t),s?ga.addScaledVector(hu,h):ga.addScaledVector(hu.sub(e),h))}e.add(ga)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(o),hr.copy(t.ray).recast(t.near),!(fa.containsPoint(hr.origin)===!1&&(hr.intersectSphere(fa,fd)===null||hr.origin.distanceToSquared(fd)>(t.far-t.near)**2))&&(hd.copy(o).invert(),hr.copy(t.ray).applyMatrix4(hd),!(n.boundingBox!==null&&hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hr)))}_computeIntersections(t,e,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,b=f.length;p<b;p++){let m=f[p],g=s[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,M=_;y<M;y+=3){let w=a.getX(y),R=a.getX(y+1),v=a.getX(y+2);r=xa(this,g,t,n,c,h,u,w,R,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let m=p,g=b;m<g;m+=3){let x=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=xa(this,s,t,n,c,h,u,x,_,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,b=f.length;p<b;p++){let m=f[p],g=s[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,M=_;y<M;y+=3){let w=y,R=y+1,v=y+2;r=xa(this,g,t,n,c,h,u,w,R,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=p,g=b;m<g;m+=3){let x=m,_=m+1,y=m+2;r=xa(this,s,t,n,c,h,u,x,_,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function vb(i,t,e,n,r,o,s,a){let l;if(t.side===an?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,t.side===ei,a),l===null)return null;ba.copy(a),ba.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ba);return c<e.near||c>e.far?null:{distance:c,point:ba.clone(),object:i}}function xa(i,t,e,n,r,o,s,a,l,c){i.getVertexPosition(a,da),i.getVertexPosition(l,pa),i.getVertexPosition(c,ma);let h=vb(i,t,e,n,da,pa,ma,dd);if(h){let u=new $;Bi.getBarycoord(dd,da,pa,ma,u),r&&(h.uv=Bi.getInterpolatedAttribute(r,a,l,c,u,new ce)),o&&(h.uv1=Bi.getInterpolatedAttribute(o,a,l,c,u,new ce)),s&&(h.normal=Bi.getInterpolatedAttribute(s,a,l,c,u,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new $,materialIndex:0};Bi.getNormal(da,pa,ma,f.normal),h.face=f,h.barycoord=u}return h}var Ha=class extends dn{constructor(t=null,e=1,n=1,r,o,s,a,l,c=je,h=je,u,f){super(null,s,a,l,c,h,r,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fr=new Vi,_b=new ce(.5,.5),ya=new $,Jo=class{constructor(t=new kn,e=new kn,n=new kn,r=new kn,o=new kn,s=new kn){this.planes=[t,e,n,r,o,s]}set(t,e,n,r,o,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){let r=this.planes,o=t.elements,s=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],f=o[6],d=o[7],p=o[8],b=o[9],m=o[10],g=o[11],x=o[12],_=o[13],y=o[14],M=o[15];if(r[0].setComponents(c-s,d-h,g-p,M-x).normalize(),r[1].setComponents(c+s,d+h,g+p,M+x).normalize(),r[2].setComponents(c+a,d+u,g+b,M+_).normalize(),r[3].setComponents(c-a,d-u,g-b,M-_).normalize(),n)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(c-l,d-f,g-m,M-y).normalize();else if(r[4].setComponents(c-l,d-f,g-m,M-y).normalize(),e===zn)r[5].setComponents(c+l,d+f,g+m,M+y).normalize();else if(e===qo)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){fr.center.set(0,0,0);let e=_b.distanceTo(t.center);return fr.radius=.7071067811865476+e,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(ya.x=r.normal.x>0?t.max.x:t.min.x,ya.y=r.normal.y>0?t.max.y:t.min.y,ya.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var sn=class extends bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Xa=new $,Ya=new $,pd=new Ae,Go=new gr,va=new Vi,fu=new $,md=new $,qa=class extends _n{constructor(t=new ee,e=new sn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)Xa.fromBufferAttribute(e,r-1),Ya.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Xa.distanceTo(Ya);t.setAttribute("lineDistance",new Xt(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),va.radius+=o,t.ray.intersectsSphere(va)===!1)return;pd.copy(r).invert(),Go.copy(t.ray).applyMatrix4(pd);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let b=d,m=p-1;b<m;b+=c){let g=h.getX(b),x=h.getX(b+1),_=_a(this,t,Go,l,g,x,b);_&&e.push(_)}if(this.isLineLoop){let b=h.getX(p-1),m=h.getX(d),g=_a(this,t,Go,l,b,m,p-1);g&&e.push(g)}}else{let d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let b=d,m=p-1;b<m;b+=c){let g=_a(this,t,Go,l,b,b+1,b);g&&e.push(g)}if(this.isLineLoop){let b=_a(this,t,Go,l,p-1,d,p-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function _a(i,t,e,n,r,o,s){let a=i.geometry.attributes.position;if(Xa.fromBufferAttribute(a,r),Ya.fromBufferAttribute(a,o),e.distanceSqToSegment(Xa,Ya,fu,md)>n)return;fu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(fu);if(!(c<t.near||c>t.far))return{distance:c,point:md.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var gd=new $,bd=new $,tn=class extends qa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)gd.fromBufferAttribute(e,r),bd.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+gd.distanceTo(bd);t.setAttribute("lineDistance",new Xt(n,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var br=class extends bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xd=new Ae,xu=new gr,Ma=new Vi,Sa=new $,ao=class extends _n{constructor(t=new ee,e=new br){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=o,t.ray.intersectsSphere(Ma)===!1)return;xd.copy(r).invert(),xu.copy(t.ray).applyMatrix4(xd);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=f,b=d;p<b;p++){let m=c.getX(p);Sa.fromBufferAttribute(u,m),yd(Sa,m,l,r,t,e,this)}}else{let f=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let p=f,b=d;p<b;p++)Sa.fromBufferAttribute(u,p),yd(Sa,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function yd(i,t,e,n,r,o,s){let a=xu.distanceSqToPoint(i);if(a<e){let l=new $;xu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var jo=class extends dn{constructor(t=[],e=Yi,n,r,o,s,a,l,c,h){super(t,e,n,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xi=class extends dn{constructor(t,e,n,r,o,s,a,l,c){super(t,e,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qn=class extends dn{constructor(t,e,n=Gn,r,o,s,a=je,l=je,c,h=Kn,u=1){if(h!==Kn&&h!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,o,s,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ro(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},$a=class extends Qn{constructor(t,e=Gn,n=Yi,r,o,s=je,a=je,l,c=Kn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,o,s,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Qo=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},lo=class i extends ee{constructor(t=1,e=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,s,o,0),p("z","y","x",1,-1,n,e,-t,s,o,1),p("x","z","y",1,1,t,n,e,r,s,2),p("x","z","y",1,-1,t,n,-e,r,s,3),p("x","y","z",1,-1,t,e,n,r,o,4),p("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function p(b,m,g,x,_,y,M,w,R,v,E){let C=y/R,I=M/v,P=y/2,D=M/2,S=w/2,F=R+1,A=v+1,T=0,N=0,U=new $;for(let k=0;k<A;k++){let z=k*I-D;for(let W=0;W<F;W++){let G=W*C-P;U[b]=G*x,U[m]=z*_,U[g]=S,c.push(U.x,U.y,U.z),U[b]=0,U[m]=0,U[g]=w>0?1:-1,h.push(U.x,U.y,U.z),u.push(W/R),u.push(1-k/v),T+=1}}for(let k=0;k<v;k++)for(let z=0;z<R;z++){let W=f+z+F*k,G=f+z+F*(k+1),H=f+(z+1)+F*(k+1),j=f+(z+1)+F*k;l.push(W,G,j),l.push(G,H,j),N+=6}a.addGroup(d,N,E),d+=N,f+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ts=class i extends ee{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let o=[],s=[],a=[],l=[],c=new $,h=new ce;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),s.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(s[f]/t+1)/2,h.y=(s[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function Mb(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,o=mp(i,0,r,e,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=Ab(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return es(o,s,e,a,l,c,0),s}function mp(i,t,e,n,r){let o;if(r===Bb(i,t,e,n)>0)for(let s=t;s<e;s+=n)o=vd(s/n|0,i[s],i[s+1],o);else for(let s=e-n;s>=t;s-=n)o=vd(s/n|0,i[s],i[s+1],o);return o&&co(o,o.next)&&(is(o),o=o.next),o}function xr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(co(e,e.next)||ke(e.prev,e,e.next)===0)){if(is(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function es(i,t,e,n,r,o,s){if(!i)return;!s&&o&&Lb(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?wb(i,n,r,o):Sb(i)){t.push(l.i,i.i,c.i),is(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=Tb(xr(i),t),es(i,t,e,n,r,o,2)):s===2&&Eb(i,t,e,n,r,o):es(xr(i),t,e,n,r,o,1);break}}}function Sb(i){let t=i.prev,e=i,n=i.next;if(ke(t,e,n)>=0)return!1;let r=t.x,o=e.x,s=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,o,s),u=Math.min(a,l,c),f=Math.max(r,o,s),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Wo(r,a,o,l,s,c,p.x,p.y)&&ke(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function wb(i,t,e,n){let r=i.prev,o=i,s=i.next;if(ke(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,h=r.y,u=o.y,f=s.y,d=Math.min(a,l,c),p=Math.min(h,u,f),b=Math.max(a,l,c),m=Math.max(h,u,f),g=yu(d,p,t,e,n),x=yu(b,m,t,e,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=g&&y&&y.z<=x;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=m&&_!==r&&_!==s&&Wo(a,h,l,u,c,f,_.x,_.y)&&ke(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=b&&y.y>=p&&y.y<=m&&y!==r&&y!==s&&Wo(a,h,l,u,c,f,y.x,y.y)&&ke(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=g;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=m&&_!==r&&_!==s&&Wo(a,h,l,u,c,f,_.x,_.y)&&ke(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=b&&y.y>=p&&y.y<=m&&y!==r&&y!==s&&Wo(a,h,l,u,c,f,y.x,y.y)&&ke(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Tb(i,t){let e=i;do{let n=e.prev,r=e.next.next;!co(n,r)&&bp(n,e,e.next,r)&&ns(n,r)&&ns(r,n)&&(t.push(n.i,e.i,r.i),is(e),is(e.next),e=i=r),e=e.next}while(e!==i);return xr(e)}function Eb(i,t,e,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&Nb(s,a)){let l=xp(s,a);s=xr(s,s.next),l=xr(l,l.next),es(s,t,e,n,r,o,0),es(l,t,e,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function Ab(i,t,e,n){let r=[];for(let o=0,s=t.length;o<s;o++){let a=t[o]*n,l=o<s-1?t[o+1]*n:i.length,c=mp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Db(c))}r.sort(Rb);for(let o=0;o<r.length;o++)e=Pb(r[o],e);return e}function Rb(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Pb(i,t){let e=Cb(i,t);if(!e)return t;let n=xp(e,i);return xr(n,n.next),xr(e,e.next)}function Cb(i,t){let e=t,n=i.x,r=i.y,o=-1/0,s;if(co(i,e))return e;do{if(co(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,s=e.x<e.next.x?e:e.next,u===n))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0;e=s;do{if(n>=e.x&&e.x>=l&&n!==e.x&&gp(r<c?n:o,r,l,c,r<c?o:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);ns(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Ib(s,e)))&&(s=e,h=u)}e=e.next}while(e!==a);return s}function Ib(i,t){return ke(i.prev,i,t.prev)<0&&ke(t.next,i,i.next)<0}function Lb(i,t,e,n){let r=i;do r.z===0&&(r.z=yu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Fb(r)}function Fb(i){let t,e=1;do{let n=i,r;i=null;let o=null;for(t=0;n;){t++;let s=n,a=0;for(let c=0;c<e&&(a++,s=s.nextZ,!!s);c++);let l=e;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,e*=2}while(t>1);return i}function yu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Db(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gp(i,t,e,n,r,o,s,a){return(r-s)*(t-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(e-s)*(t-a)&&(e-s)*(o-a)>=(r-s)*(n-a)}function Wo(i,t,e,n,r,o,s,a){return!(i===s&&t===a)&&gp(i,t,e,n,r,o,s,a)}function Nb(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ob(i,t)&&(ns(i,t)&&ns(t,i)&&Ub(i,t)&&(ke(i.prev,i,t.prev)||ke(i,t.prev,t))||co(i,t)&&ke(i.prev,i,i.next)>0&&ke(t.prev,t,t.next)>0)}function ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function co(i,t){return i.x===t.x&&i.y===t.y}function bp(i,t,e,n){let r=Ta(ke(i,t,e)),o=Ta(ke(i,t,n)),s=Ta(ke(e,n,i)),a=Ta(ke(e,n,t));return!!(r!==o&&s!==a||r===0&&wa(i,e,t)||o===0&&wa(i,n,t)||s===0&&wa(e,i,n)||a===0&&wa(e,t,n))}function wa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ta(i){return i>0?1:i<0?-1:0}function Ob(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ns(i,t){return ke(i.prev,i,i.next)<0?ke(i,t,i.next)>=0&&ke(i,i.prev,t)>=0:ke(i,t,i.prev)<0||ke(i,i.next,t)<0}function Ub(i,t){let e=i,n=!1,r=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&r<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xp(i,t){let e=vu(i.i,i.x,i.y),n=vu(t.i,t.x,t.y),r=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function vd(i,t,e,n){let r=vu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function is(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bb(i,t,e,n){let r=0;for(let o=t,s=e-n;o<e;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var _u=class{static triangulate(t,e,n=2){return Mb(t,e,n)}},rs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,o=0;o<e;r=o++)n+=t[r].x*t[o].y-t[o].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],o=[];_d(t),Md(n,t);let s=t.length;e.forEach(_d);for(let l=0;l<e.length;l++)r.push(s),s+=e[l].length,Md(n,e[l]);let a=_u.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function _d(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Md(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var yi=class i extends ee{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let o=t/2,s=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],b=[],m=[];for(let g=0;g<h;g++){let x=g*f-s;for(let _=0;_<c;_++){let y=_*u-o;p.push(y,-x,0),b.push(0,0,1),m.push(_/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){let _=x+c*g,y=x+c*(g+1),M=x+1+c*(g+1),w=x+1+c*g;d.push(_,y,w),d.push(y,M,w)}this.setIndex(d),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(b,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},os=class i extends ee{constructor(t=.5,e=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new $,p=new ce;for(let b=0;b<=r;b++){for(let m=0;m<=n;m++){let g=o+m/n*s;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let b=0;b<r;b++){let m=b*(n+1);for(let g=0;g<n;g++){let x=g+m,_=x,y=x+n+1,M=x+n+2,w=x+1;a.push(_,y,w),a.push(y,M,w)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Mr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Sd(r))r.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Sd(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();t[e][n]=o}else t[e][n]=r.slice();else t[e][n]=r}}return t}function mn(i){let t={};for(let e=0;e<i.length;e++){let n=Mr(i[e]);for(let r in n)t[r]=n[r]}return t}function Sd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kb(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var yp={clone:Mr,merge:mn},zb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zb,this.fragmentShader=Vb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=kb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new nt().setHex(r.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(r.value);break;case"v3":this.uniforms[n].value=new $().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ae().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Za=class extends pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ka=class extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ja=class extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Kr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function du(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Gi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],o=e[n-1];n:{t:{let s;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=e[++n],t<r)break t}s=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=e[--n-1],t>=o)break t}s=n,n=0;break e}break n}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(r=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=t*r;for(let s=0;s!==r;++s)e[s]=n[o+s];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ja=class extends Gi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mu,endingEnd:mu}}intervalChanged_(t,e,n){let r=this.parameterPositions,o=t-2,s=t+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case gu:o=t,a=2*e-n;break;case bu:o=r.length-2,a=e+r[o]-r[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gu:s=t,l=2*n-e;break;case bu:s=1,l=n+r[1]-r[0];break;default:s=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=s*h}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),b=p*p,m=b*p,g=-f*m+2*f*b-f*p,x=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*p+1,_=(-1-d)*m+(1.5+d)*b+.5*p,y=d*m-d*b;for(let M=0;M!==a;++M)o[M]=g*s[h+M]+x*s[c+M]+_*s[l+M]+y*s[u+M];return o}},Qa=class extends Gi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)o[f]=s[c+f]*u+s[l+f]*h;return o}},tl=class extends Gi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},el=class extends Gi{interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(r-e),b=1-p;for(let m=0;m!==a;++m)o[m]=s[c+m]*b+s[l+m]*p;return o}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let b=s[c+p],m=s[l+p],g=d*f+p*2,x=u[g],_=u[g+1],y=t*f+p*2,M=h[y],w=h[y+1],R=Wb(n,e,x,M,r);o[p]=vp(R,b,_,w,m)}return o}};function vp(i,t,e,n,r){let o=1-i;return o*o*o*t+3*o*o*i*e+3*o*i*i*n+i*i*i*r}function Gb(i,t,e,n,r){let o=1-i;return 3*o*o*(e-t)+6*o*i*(n-e)+3*i*i*(r-n)}function Wb(i,t,e,n,r){let o=(i-t)/(r-t);for(let s=0;s<8;s++){let a=vp(o,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Gb(o,t,e,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var Tn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Kr(e,this.TimeBufferType),this.values=Kr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Kr(t.times,Array),values:Kr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),du(t.settings)&&(n.settings={inTangents:Kr(t.settings.inTangents,Array),outTangents:Kr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new el(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ho:e=this.InterpolantFactoryMethodDiscrete;break;case ka:e=this.InterpolantFactoryMethodLinear;break;case Ra:e=this.InterpolantFactoryMethodSmooth;break;case pu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ho;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return Ra;case this.InterpolantFactoryMethodBezier:return pu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;du(this.settings)&&(wd(this.settings.inTangents,t),wd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<t;)++o;for(;s!==-1&&n[s]>e;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,o=n.length;o===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(s!==null&&s>l){$t("KeyframeTrack: Out of order keys.",this,a,l,s),t=!1;break}s=l}if(r!==void 0&&nb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ra,o=t.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let b=e[u+p];if(b!==e[f+p]||b!==e[d+p]){l=!0;break}}}if(l){if(a!==s){t[s]=t[a];let u=a*n,f=s*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++s}}if(o>0){t[s]=t[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)e[l+c]=e[a+c];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,du(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function wd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=ka;var Wi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Ho;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends Tn{constructor(t,e,n,r){super(t,e,n,r)}};nl.prototype.ValueTypeName="color";var il=class extends Tn{constructor(t,e,n,r){super(t,e,n,r)}};il.prototype.ValueTypeName="number";var rl=class extends Gi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)jn.slerpFlat(o,0,s,c-a,s,c,l);return o}},ss=class extends Tn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}};ss.prototype.ValueTypeName="quaternion";ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Ho;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends Tn{constructor(t,e,n,r){super(t,e,n,r)}};ol.prototype.ValueTypeName="vector";var Ca={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Td(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Td(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Td(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var sl=class{constructor(t,e,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&r.onStart!==void 0&&r.onStart(h,s,a),o=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_p=new sl,uo=class{constructor(t){this.manager=t!==void 0?t:_p,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,o){n.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr=new WeakMap,al=class extends uo{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let o=this,s=Ca.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(s),o.manager.itemEnd(t)},0);else{let u=Jr.get(s);u===void 0&&(u=[],Jr.set(s,u)),u.push({onLoad:e,onError:r})}return s}let a=no("img");function l(){h(),e&&e(this);let u=Jr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Jr.delete(this),o.manager.itemEnd(t)}function c(u){h(),r&&r(u),Ca.remove(`image:${t}`);let f=Jr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Jr.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ca.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}};var yr=class extends uo{constructor(t){super(t)}load(t,e,n,r){let o=new dn,s=new al(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,r),o}};var Ea=new $,Aa=new jn,Zn=new $,as=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ea,Aa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Aa,Zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ea,Aa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Aa,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ui=new $,Ed=new ce,Ad=new ce,Je=class extends as{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return za*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,Ed,Ad),e.subVectors(Ad,Ed)}setViewOffset(t,e,n,r,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,e-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ti=class extends as{constructor(t=-1,e=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-t,s=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var jr=-90,Qr=1,ll=class extends _n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Je(jr,Qr,t,e);r.layers=this.layers,this.add(r);let o=new Je(jr,Qr,t,e);o.layers=this.layers,this.add(o);let s=new Je(jr,Qr,t,e);s.layers=this.layers,this.add(s);let a=new Je(jr,Qr,t,e);a.layers=this.layers,this.add(a);let l=new Je(jr,Qr,t,e);l.layers=this.layers,this.add(l);let c=new Je(jr,Qr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,o,s,a,l]=e;for(let c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},cl=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ku="\\[\\]\\.:\\/",Hb=new RegExp("["+Ku+"]","g"),Ju="[^"+Ku+"]",Xb="[^"+Ku.replace("\\.","")+"]",Yb=/((?:WC+[\/:])*)/.source.replace("WC",Ju),qb=/(WCOD+)?/.source.replace("WCOD",Xb),$b=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ju),Zb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ju),Kb=new RegExp("^"+Yb+qb+$b+Zb+"$"),Jb=["material","materials","bones","map"],Mu=class{constructor(t,e,n){let r=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hb,"")}static parseTrackName(t){let e=Kb.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);Jb.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[r];if(s===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Mu;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yw=new Float32Array(1);var Rd=new Ae,ls=class{constructor(t,e,n=0,r=1/0){this.ray=new gr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):$t("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rd),this}intersectObject(t,e=!0,n=[]){return Su(t,this,n,e),n.sort(Pd),n}intersectObjects(t,e=!0,n=[]){for(let r=0,o=t.length;r<o;r++)Su(t[r],this,n,e);return n.sort(Pd),n}};function Pd(i,t){return i.distance-t.distance}function Su(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Su(o[s],t,e,!0)}}var ih=class ih{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=r,this}};ih.prototype.isMatrix2=!0;var wu=ih;function ju(i,t,e,n){let r=jb(n);switch(e){case Gu:return i*t;case Hu:return i*t/r.components*r.byteLength;case bl:return i*t/r.components*r.byteLength;case Zi:return i*t*2/r.components*r.byteLength;case xl:return i*t*2/r.components*r.byteLength;case Wu:return i*t*3/r.components*r.byteLength;case Cn:return i*t*4/r.components*r.byteLength;case yl:return i*t*4/r.components*r.byteLength;case ds:case ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ms:case gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:case Sl:return Math.max(i,16)*Math.max(t,8)/4;case vl:case Ml:return Math.max(i,8)*Math.max(t,8)/2;case wl:case Tl:case Al:case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case El:case bs:case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hl:case Xl:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ql:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xs:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jb(i){switch(i){case En:case Bu:return{byteLength:1,components:1};case fo:case ku:case Hn:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case Gn:case pl:case Wn:return{byteLength:4,components:1};case zu:case Vu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wp(){let i=null,t=!1,e=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),e(o,s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function tx(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],b=u[d];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let b=u[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nx=`#ifdef USE_ALPHAHASH
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
#endif`,ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ax=`#ifdef USE_AOMAP
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
#endif`,lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cx=`#ifdef USE_BATCHING
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
#endif`,ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,px=`#ifdef USE_IRIDESCENCE
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
#endif`,mx=`#ifdef USE_BUMPMAP
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
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wx=`#define PI 3.141592653589793
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
} // validated`,Tx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ex=`vec3 transformedNormal = objectNormal;
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
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gx=`#ifdef USE_GRADIENTMAP
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
}`,Wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qx=`#ifdef USE_ENVMAP
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
#endif`,$x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jx=`PhysicalMaterial material;
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
#endif`,Qx=`uniform sampler2D dfgLUT;
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
}`,t1=`
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
#endif`,e1=`#if defined( RE_IndirectDiffuse )
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
#endif`,n1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,r1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h1=`#if defined( USE_POINTS_UV )
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
#endif`,f1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`#ifdef USE_MORPHTARGETS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w1=`#ifdef USE_NORMALMAP
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
#endif`,T1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z1=`float getShadowMask() {
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
}`,V1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,W1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H1=`#ifdef USE_SKINNING
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
#endif`,X1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z1=`#ifdef USE_TRANSMISSION
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
#endif`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ny=`uniform sampler2D t2D;
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
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`#include <common>
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
}`,ly=`#if DEPTH_PACKING == 3200
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
}`,cy=`#define DISTANCE
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
}`,uy=`#define DISTANCE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`uniform float scale;
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#include <common>
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
}`,gy=`uniform vec3 diffuse;
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
}`,by=`#define LAMBERT
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
}`,xy=`#define LAMBERT
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
}`,yy=`#define MATCAP
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
}`,vy=`#define MATCAP
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
}`,_y=`#define NORMAL
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
}`,My=`#define NORMAL
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
}`,Sy=`#define PHONG
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
}`,wy=`#define PHONG
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
}`,Ty=`#define STANDARD
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
}`,Ey=`#define STANDARD
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
}`,Ay=`#define TOON
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
}`,Ry=`#define TOON
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
}`,Py=`uniform float size;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Iy=`#include <common>
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
}`,Ly=`uniform vec3 color;
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
}`,Fy=`uniform float rotation;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:ex,alphahash_pars_fragment:nx,alphamap_fragment:ix,alphamap_pars_fragment:rx,alphatest_fragment:ox,alphatest_pars_fragment:sx,aomap_fragment:ax,aomap_pars_fragment:lx,batching_pars_vertex:cx,batching_vertex:ux,begin_vertex:hx,beginnormal_vertex:fx,bsdfs:dx,iridescence_fragment:px,bumpmap_pars_fragment:mx,clipping_planes_fragment:gx,clipping_planes_pars_fragment:bx,clipping_planes_pars_vertex:xx,clipping_planes_vertex:yx,color_fragment:vx,color_pars_fragment:_x,color_pars_vertex:Mx,color_vertex:Sx,common:wx,cube_uv_reflection_fragment:Tx,defaultnormal_vertex:Ex,displacementmap_pars_vertex:Ax,displacementmap_vertex:Rx,emissivemap_fragment:Px,emissivemap_pars_fragment:Cx,colorspace_fragment:Ix,colorspace_pars_fragment:Lx,envmap_fragment:Fx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Nx,envmap_pars_vertex:Ox,envmap_physical_pars_fragment:qx,envmap_vertex:Ux,fog_vertex:Bx,fog_pars_vertex:kx,fog_fragment:zx,fog_pars_fragment:Vx,gradientmap_pars_fragment:Gx,lightmap_pars_fragment:Wx,lights_lambert_fragment:Hx,lights_lambert_pars_fragment:Xx,lights_pars_begin:Yx,lights_toon_fragment:$x,lights_toon_pars_fragment:Zx,lights_phong_fragment:Kx,lights_phong_pars_fragment:Jx,lights_physical_fragment:jx,lights_physical_pars_fragment:Qx,lights_fragment_begin:t1,lights_fragment_maps:e1,lights_fragment_end:n1,lightprobes_pars_fragment:i1,logdepthbuf_fragment:r1,logdepthbuf_pars_fragment:o1,logdepthbuf_pars_vertex:s1,logdepthbuf_vertex:a1,map_fragment:l1,map_pars_fragment:c1,map_particle_fragment:u1,map_particle_pars_fragment:h1,metalnessmap_fragment:f1,metalnessmap_pars_fragment:d1,morphinstance_vertex:p1,morphcolor_vertex:m1,morphnormal_vertex:g1,morphtarget_pars_vertex:b1,morphtarget_vertex:x1,normal_fragment_begin:y1,normal_fragment_maps:v1,normal_pars_fragment:_1,normal_pars_vertex:M1,normal_vertex:S1,normalmap_pars_fragment:w1,clearcoat_normal_fragment_begin:T1,clearcoat_normal_fragment_maps:E1,clearcoat_pars_fragment:A1,iridescence_pars_fragment:R1,opaque_fragment:P1,packing:C1,premultiplied_alpha_fragment:I1,project_vertex:L1,dithering_fragment:F1,dithering_pars_fragment:D1,roughnessmap_fragment:N1,roughnessmap_pars_fragment:O1,shadowmap_pars_fragment:U1,shadowmap_pars_vertex:B1,shadowmap_vertex:k1,shadowmask_pars_fragment:z1,skinbase_vertex:V1,skinning_pars_vertex:G1,skinning_vertex:W1,skinnormal_vertex:H1,specularmap_fragment:X1,specularmap_pars_fragment:Y1,tonemapping_fragment:q1,tonemapping_pars_fragment:$1,transmission_fragment:Z1,transmission_pars_fragment:K1,uv_pars_fragment:J1,uv_pars_vertex:j1,uv_vertex:Q1,worldpos_vertex:ty,background_vert:ey,background_frag:ny,backgroundCube_vert:iy,backgroundCube_frag:ry,cube_vert:oy,cube_frag:sy,depth_vert:ay,depth_frag:ly,distance_vert:cy,distance_frag:uy,equirect_vert:hy,equirect_frag:fy,linedashed_vert:dy,linedashed_frag:py,meshbasic_vert:my,meshbasic_frag:gy,meshlambert_vert:by,meshlambert_frag:xy,meshmatcap_vert:yy,meshmatcap_frag:vy,meshnormal_vert:_y,meshnormal_frag:My,meshphong_vert:Sy,meshphong_frag:wy,meshphysical_vert:Ty,meshphysical_frag:Ey,meshtoon_vert:Ay,meshtoon_frag:Ry,points_vert:Py,points_frag:Cy,shadow_vert:Iy,shadow_frag:Ly,sprite_vert:Fy,sprite_frag:Dy},Rt={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ri={basic:{uniforms:mn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:mn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:mn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:mn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:mn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new nt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:mn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:mn([Rt.points,Rt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:mn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:mn([Rt.common,Rt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:mn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:mn([Rt.sprite,Rt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:mn([Rt.common,Rt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:mn([Rt.lights,Rt.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};ri.physical={uniforms:mn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var jl={r:0,b:0,g:0},Ny=new Ae,Hp=new Jt;Hp.set(-1,0,0,0,1,0,0,0,1);function Oy(i,t,e,n,r,o){let s=new nt(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let y=x.backgroundBlurriness>0;_=t.get(_,y)}return _}function p(x){let _=!1,y=d(x);y===null?m(s,a):y&&y.isColor&&(m(y,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,_){let y=d(_);y&&(y.isCubeTexture||y.mapping===hs)?(c===void 0&&(c=new Ut(new lo(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Mr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ny.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hp),c.material.toneMapped=he.getTransfer(y.colorSpace)!==Me,(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ut(new yi(2,2),new pn({name:"BackgroundMaterial",uniforms:Mr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=he.getTransfer(y.colorSpace)!==Me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,_){x.getRGB(jl,Zu(i)),e.buffers.color.setClear(jl.r,jl.g,jl.b,_,o)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,_=1){s.set(x),a=_,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(s,a)},render:p,addToRenderList:b,dispose:g}}function Uy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),o=r,s=!1;function a(I,P,D,S,F){let A=!1,T=u(I,S,D,P);o!==T&&(o=T,c(o.object)),A=d(I,S,D,F),A&&p(I,S,D,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(A||s)&&(s=!1,y(I,P,D,S),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,P,D,S){let F=S.wireframe===!0,A=n[P.id];A===void 0&&(A={},n[P.id]=A);let T=I.isInstancedMesh===!0?I.id:0,N=A[T];N===void 0&&(N={},A[T]=N);let U=N[D.id];U===void 0&&(U={},N[D.id]=U);let k=U[F];return k===void 0&&(k=f(l()),U[F]=k),k}function f(I){let P=[],D=[],S=[];for(let F=0;F<e;F++)P[F]=0,D[F]=0,S[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:S,object:I,attributes:{},index:null}}function d(I,P,D,S){let F=o.attributes,A=P.attributes,T=0,N=D.getAttributes();for(let U in N)if(N[U].location>=0){let z=F[U],W=A[U];if(W===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),z===void 0||z.attribute!==W||W&&z.data!==W.data)return!0;T++}return o.attributesNum!==T||o.index!==S}function p(I,P,D,S){let F={},A=P.attributes,T=0,N=D.getAttributes();for(let U in N)if(N[U].location>=0){let z=A[U];z===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(z=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(z=I.instanceColor));let W={};W.attribute=z,z&&z.data&&(W.data=z.data),F[U]=W,T++}o.attributes=F,o.attributesNum=T,o.index=S}function b(){let I=o.newAttributes;for(let P=0,D=I.length;P<D;P++)I[P]=0}function m(I){g(I,0)}function g(I,P){let D=o.newAttributes,S=o.enabledAttributes,F=o.attributeDivisors;D[I]=1,S[I]===0&&(i.enableVertexAttribArray(I),S[I]=1),F[I]!==P&&(i.vertexAttribDivisor(I,P),F[I]=P)}function x(){let I=o.newAttributes,P=o.enabledAttributes;for(let D=0,S=P.length;D<S;D++)P[D]!==I[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function _(I,P,D,S,F,A,T){T===!0?i.vertexAttribIPointer(I,P,D,F,A):i.vertexAttribPointer(I,P,D,S,F,A)}function y(I,P,D,S){b();let F=S.attributes,A=D.getAttributes(),T=P.defaultAttributeValues;for(let N in A){let U=A[N];if(U.location>=0){let k=F[N];if(k===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){let z=k.normalized,W=k.itemSize,G=t.get(k);if(G===void 0)continue;let H=G.buffer,j=G.type,st=G.bytesPerElement,X=j===i.INT||j===i.UNSIGNED_INT||k.gpuType===pl;if(k.isInterleavedBufferAttribute){let Z=k.data,tt=Z.stride,q=k.offset;if(Z.isInstancedInterleavedBuffer){for(let Q=0;Q<U.locationSize;Q++)g(U.location+Q,Z.meshPerAttribute);I.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Q=0;Q<U.locationSize;Q++)m(U.location+Q);i.bindBuffer(i.ARRAY_BUFFER,H);for(let Q=0;Q<U.locationSize;Q++)_(U.location+Q,W/U.locationSize,j,z,tt*st,(q+W/U.locationSize*Q)*st,X)}else{if(k.isInstancedBufferAttribute){for(let Z=0;Z<U.locationSize;Z++)g(U.location+Z,k.meshPerAttribute);I.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Z=0;Z<U.locationSize;Z++)m(U.location+Z);i.bindBuffer(i.ARRAY_BUFFER,H);for(let Z=0;Z<U.locationSize;Z++)_(U.location+Z,W/U.locationSize,j,z,W*st,W/U.locationSize*Z*st,X)}}else if(T!==void 0){let z=T[N];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(U.location,z);break;case 3:i.vertexAttrib3fv(U.location,z);break;case 4:i.vertexAttrib4fv(U.location,z);break;default:i.vertexAttrib1fv(U.location,z)}}}}x()}function M(){E();for(let I in n){let P=n[I];for(let D in P){let S=P[D];for(let F in S){let A=S[F];for(let T in A)h(A[T].object),delete A[T];delete S[F]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let P=n[I.id];for(let D in P){let S=P[D];for(let F in S){let A=S[F];for(let T in A)h(A[T].object),delete A[T];delete S[F]}}delete n[I.id]}function R(I){for(let P in n){let D=n[P];for(let S in D){let F=D[S];if(F[I.id]===void 0)continue;let A=F[I.id];for(let T in A)h(A[T].object),delete A[T];delete F[I.id]}}}function v(I){for(let P in n){let D=n[P],S=I.isInstancedMesh===!0?I.id:0,F=D[S];if(F!==void 0){for(let A in F){let T=F[A];for(let N in T)h(T[N].object),delete T[N];delete F[A]}delete D[S],Object.keys(D).length===0&&delete n[P]}}}function E(){C(),s=!0,o!==r&&(o=r,c(o.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function By(i,t,e){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function s(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function ky(i,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(R){return!(R!==Cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let v=R===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==En&&R!==Wn&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,maxSamples:M,samples:w}}function zy(i){let t=this,e=null,n=0,r=!1,o=!1,s=new kn,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!r||p===null||p.length===0||o&&!m)o?h(null):c();else{let x=o?0:n,_=x*4,y=g.clippingState||null;l.value=y,y=h(p,f,_,d);for(let M=0;M!==_;++M)y[M]=e[M];g.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=l.value,p!==!0||m===null){let g=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,y=d;_!==b;++_,y+=4)s.copy(u[_]).applyMatrix4(x,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var go=4,Vy=6,Gy=20,Wy=256,vs=new ti,Mp=new nt,rh=null,oh=0,sh=0,ah=!1,Hy=new $,Sr=new $,tc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,o={}){let{size:s=256,position:a=Hy}=o;rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(rh,oh,sh),this._renderer.xr.enabled=ah,t.scissorTest=!1,mo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Hn,format:Cn,colorSpace:Xo,depthBuffer:!1},r=Sp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sp(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xy(o)),this._blurMaterial=qy(o,t,e),this._ggxMaterial=Yy(o,t,e)}return r}_compileMaterial(t){let e=new Ut(new ee,t);this._renderer.compile(e,vs)}_sceneToCubeUV(t,e,n,r,o){let l=new Je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Mp),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new lo,new ne({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,g=!1,x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,g=!0):(m.color.copy(Mp),g=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[_],o.y,o.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[_],o.z)):(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[_]));let M=this._cubeSize;mo(r,y*M,_>2?M:0,M,M),u.setRenderTarget(r),g&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Yi||t.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wp());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;mo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,vs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,b=this._sizeLods[n],m=3*b*(n>p-go?n-p+go:0),g=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,mo(o,m,g,3*b,2*b),r.setRenderTarget(o),r.render(a,vs),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,mo(t,m,g,3*b,2*b),r.setRenderTarget(t),r.render(a,vs)}_blur(t,e,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,s),this._blurPass(o,t,n,n,s)}_blurPass(t,e,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-go?r-this._lodMax+go:0),f=4*(this._cubeSize-h);mo(e,u,f,3*h,2*h),s.setRenderTarget(e),s.render(l,vs)}};function Xy(i){let t=[],e=[],n=i,r=i-go+1+Vy;for(let o=0;o<r;o++){let s=Math.pow(2,n);t.push(s);let a=1/(s-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let g=0;g<u;g++){let x=g%3*2/3-1,_=g>2?0:-1,y=[x,_,0,x+2/3,_,0,x+2/3,_+1,0,x,_,0,x+2/3,_+1,0,x,_+1,0];p.set(y,d*f*g);for(let M=0;M<f;M++){let w=h[M*2]*2-1,R=h[M*2+1]*2-1;g===0?Sr.set(1,R,w):g===1?Sr.set(-w,1,-R):g===2?Sr.set(-w,R,1):g===3?Sr.set(-1,R,-w):g===4?Sr.set(-w,-1,R):Sr.set(w,R,-1),Sr.toArray(b,(g*f+M)*d)}}let m=new ee;m.setAttribute("position",new Pn(p,d)),m.setAttribute("outputDirection",new Pn(b,d)),e.push(new Ut(m,null)),n>go&&n--}return{lodMeshes:e,sizeLods:t}}function Sp(i,t,e){let n=new Qe(i,t,e);return n.texture.mapping=hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Yy(i,t,e){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function qy(i,t,e){return new pn({name:"SphericalGaussianBlur",defines:{SAMPLES:Gy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function wp(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Tp(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ec=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new jo(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new lo(5,5,5),o=new pn({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:ni});o.uniforms.tEquirect.value=e;let s=new Ut(r,o),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=on),new ll(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,r);t.setRenderTarget(o)}};function $y(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?s(f):o(f)}function o(f){if(f&&f.isTexture){let d=f.mapping;if(d===hl||d===fl)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let b=new ec(p.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,p=d===hl||d===fl,b=d===Yi||d===_r;if(p||b){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new tc(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let x=f.image;return p&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new tc(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===hl?f.mapping=Yi:d===fl&&(f.mapping=_r),f}function l(f){let d=0,p=6;for(let b=0;b<p;b++)f[b]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Zy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&dr("WebGLRenderer: "+n+" extension not supported."),r}}}function Ky(i,t,e,n){let r={},o=new WeakMap;function s(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",s),delete r[f.id];let d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,b=0;if(p===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let _=0,y=x.length;_<y;_+=3){let M=x[_+0],w=x[_+1],R=x[_+2];f.push(M,w,w,R,R,M)}}else{let x=p.array;b=p.version;for(let _=0,y=x.length/3-1;_<y;_+=3){let M=_+0,w=_+1,R=_+2;f.push(M,w,w,R,R,M)}}let m=new(p.count>=65535?mr:Ko)(f,1);m.version=b;let g=o.get(u);g&&t.remove(g),o.set(u,m)}function h(u){let f=o.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Jy(i,t,e){let n;function r(u){n=u}let o,s;function a(u){o=u.type,s=u.bytesPerElement}function l(u,f){i.drawElements(n,f,o,u*s),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,o,u*s,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,d);let b=0;for(let m=0;m<d;m++)b+=f[m];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function jy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:$t("WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Qy(i,t,e){let n=new WeakMap,r=new ze;function o(s,a,l){let c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),b===!0&&(_=3);let y=a.attributes.position.count*_,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*M*4*u),R=new $o(w,y,M,u);R.type=Wn,R.needsUpdate=!0;let v=_*4;for(let C=0;C<u;C++){let I=m[C],P=g[C],D=x[C],S=y*M*4*C;for(let F=0;F<I.count;F++){let A=F*v;d===!0&&(r.fromBufferAttribute(I,F),w[S+A+0]=r.x,w[S+A+1]=r.y,w[S+A+2]=r.z,w[S+A+3]=0),p===!0&&(r.fromBufferAttribute(P,F),w[S+A+4]=r.x,w[S+A+5]=r.y,w[S+A+6]=r.z,w[S+A+7]=0),b===!0&&(r.fromBufferAttribute(D,F),w[S+A+8]=r.x,w[S+A+9]=r.y,w[S+A+10]=r.z,w[S+A+11]=D.itemSize===4?r.w:1)}}f={count:u,texture:R,size:new ce(y,M)},n.set(a,f),a.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function tv(i,t,e,n,r){let o=new WeakMap;function s(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(o.get(f)!==h&&(t.update(f),o.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return f}function a(){o=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}var ev={[Cu]:"LINEAR_TONE_MAPPING",[Iu]:"REINHARD_TONE_MAPPING",[Lu]:"CINEON_TONE_MAPPING",[Fu]:"ACES_FILMIC_TONE_MAPPING",[Nu]:"AGX_TONE_MAPPING",[Ou]:"NEUTRAL_TONE_MAPPING",[Du]:"CUSTOM_TONE_MAPPING"};function nv(i,t,e,n,r,o){let s=new Qe(t,e,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ee;c.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Xt([0,2,0,0,2,0],2));let h=new Za({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ut(c,h),f=new ti(-1,1,1,-1,0,1),d=null,p=null,b=!1,m,g=null,x=[],_=!1;this.setSize=function(y,M){s.setSize(y,M),a!==null&&a.setSize(y,M),l!==null&&l.setSize(y,M);for(let w=0;w<x.length;w++){let R=x[w];R.setSize&&R.setSize(y,M)}},this.setEffects=function(y){x=y,_=x.length>0&&x[0].isRenderPass===!0;let M=s.width,w=s.height;x.length>0&&a===null&&(a=new Qe(M,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new Qe(M,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<x.length;R++){let v=x[R];v.setSize&&v.setSize(M,w)}},this.begin=function(y,M){if(b||y.toneMapping===Vn&&x.length===0)return!1;if(g=M,M!==null){let w=M.width,R=M.height;(s.width!==w||s.height!==R)&&this.setSize(w,R)}return _===!1&&y.setRenderTarget(s),m=y.toneMapping,y.toneMapping=Vn,!0},this.hasRenderPass=function(){return _},this.end=function(y,M){y.toneMapping=m,b=!0;let w=s,R=a;for(let v=0;v<x.length;v++){let E=x[v];E.enabled!==!1&&(E.render(y,R,w,M),E.needsSwap!==!1&&(w=R,R=R===a?l:a))}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,h.defines={},he.getTransfer(d)===Me&&(h.defines.SRGB_TRANSFER="");let v=ev[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(g),y.render(u,f),g=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Xp=new dn,uh=new Qn(1,1),Yp=new $o,qp=new Wa,$p=new jo,Ep=[],Ap=[],Rp=new Float32Array(16),Pp=new Float32Array(9),Cp=new Float32Array(4);function xo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,o=Ep[r];if(o===void 0&&(o=new Float32Array(r),Ep[r]=o),t!==0){n.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=e,i[s].toArray(o,a)}return o}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ic(i,t){let e=Ap[t];e===void 0&&(e=new Int32Array(t),Ap[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function iv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function ov(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function av(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(qe(e,n))return;Cp.set(n),i.uniformMatrix2fv(this.addr,!1,Cp),$e(e,n)}}function lv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(qe(e,n))return;Pp.set(n),i.uniformMatrix3fv(this.addr,!1,Pp),$e(e,n)}}function cv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(qe(e,n))return;Rp.set(n),i.uniformMatrix4fv(this.addr,!1,Rp),$e(e,n)}}function uv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function pv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function bv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function xv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(uh.compareFunction=e.isReversedDepthBuffer()?Jl:Kl,o=uh):o=Xp,e.setTexture2D(t||o,r)}function yv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||qp,r)}function vv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||$p,r)}function _v(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Yp,r)}function Mv(i){switch(i){case 5126:return iv;case 35664:return rv;case 35665:return ov;case 35666:return sv;case 35674:return av;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return uv;case 35667:case 35671:return hv;case 35668:case 35672:return fv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return _v}}function Sv(i,t){i.uniform1fv(this.addr,t)}function wv(i,t){let e=xo(t,this.size,2);i.uniform2fv(this.addr,e)}function Tv(i,t){let e=xo(t,this.size,3);i.uniform3fv(this.addr,e)}function Ev(i,t){let e=xo(t,this.size,4);i.uniform4fv(this.addr,e)}function Av(i,t){let e=xo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rv(i,t){let e=xo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pv(i,t){let e=xo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cv(i,t){i.uniform1iv(this.addr,t)}function Iv(i,t){i.uniform2iv(this.addr,t)}function Lv(i,t){i.uniform3iv(this.addr,t)}function Fv(i,t){i.uniform4iv(this.addr,t)}function Dv(i,t){i.uniform1uiv(this.addr,t)}function Nv(i,t){i.uniform2uiv(this.addr,t)}function Ov(i,t){i.uniform3uiv(this.addr,t)}function Uv(i,t){i.uniform4uiv(this.addr,t)}function Bv(i,t,e){let n=this.cache,r=t.length,o=ic(e,r);qe(n,o)||(i.uniform1iv(this.addr,o),$e(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=uh:s=Xp;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||s,o[a])}function kv(i,t,e){let n=this.cache,r=t.length,o=ic(e,r);qe(n,o)||(i.uniform1iv(this.addr,o),$e(n,o));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||qp,o[s])}function zv(i,t,e){let n=this.cache,r=t.length,o=ic(e,r);qe(n,o)||(i.uniform1iv(this.addr,o),$e(n,o));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||$p,o[s])}function Vv(i,t,e){let n=this.cache,r=t.length,o=ic(e,r);qe(n,o)||(i.uniform1iv(this.addr,o),$e(n,o));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||Yp,o[s])}function Gv(i){switch(i){case 5126:return Sv;case 35664:return wv;case 35665:return Tv;case 35666:return Ev;case 35674:return Av;case 35675:return Rv;case 35676:return Pv;case 5124:case 35670:return Cv;case 35667:case 35671:return Iv;case 35668:case 35672:return Lv;case 35669:case 35673:return Fv;case 5125:return Dv;case 36294:return Nv;case 36295:return Ov;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Vv}}var hh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mv(e.type)}},fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gv(e.type)}},dh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(t,e[a.id],n)}}},lh=/(\w+)(\])?(\[|\.)?/g;function Ip(i,t){i.seq.push(t),i.map[t.id]=t}function Wv(i,t,e){let n=i.name,r=n.length;for(lh.lastIndex=0;;){let o=lh.exec(n),s=lh.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Ip(e,c===void 0?new hh(a,i,t):new fh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new dh(a),Ip(e,u)),e=u}}}var bo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);Wv(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,n,r){let o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,s=e.length;o!==s;++o){let a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,o=t.length;r!==o;++r){let s=t[r];s.id in e&&n.push(s)}return n}};function Lp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Hv=37297,Xv=0;function Yv(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}var Fp=new Jt;function qv(i){he._getMatrix(Fp,he.workingColorSpace,i);let t=`mat3( ${Fp.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Yo:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Dp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+Yv(i.getShaderSource(t),a)}else return o}function $v(i,t){let e=qv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Zv={[Cu]:"Linear",[Iu]:"Reinhard",[Lu]:"Cineon",[Fu]:"ACESFilmic",[Nu]:"AgX",[Ou]:"Neutral",[Du]:"Custom"};function Kv(i,t){let e=Zv[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ql=new $;function Jv(){he.getLuminanceCoefficients(Ql);let i=Ql.x.toFixed(4),t=Ql.y.toFixed(4),e=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function Qv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function t_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(t,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[s]={type:o.type,location:i.getAttribLocation(t,s),locationSize:a}}return e}function Ms(i){return i!==""}function Np(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Op(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(i){return i.replace(e_,i_)}var n_=new Map;function i_(i,t){let e=ae[t];if(e===void 0){let n=n_.get(t);if(n!==void 0)e=ae[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ph(e)}var r_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Up(i){return i.replace(r_,o_)}function o_(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Bp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var s_={[cs]:"SHADOWMAP_TYPE_PCF",[ho]:"SHADOWMAP_TYPE_VSM"};function a_(i){return s_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var l_={[Yi]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE_UV"};function c_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":l_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var u_={[_r]:"ENVMAP_MODE_REFRACTION"};function h_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":u_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var f_={[Pu]:"ENVMAP_BLENDING_MULTIPLY",[Jd]:"ENVMAP_BLENDING_MIX",[jd]:"ENVMAP_BLENDING_ADD"};function d_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":f_[i.combine]||"ENVMAP_BLENDING_NONE"}function p_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function m_(i,t,e,n){let r=i.getContext(),o=e.defines,s=e.vertexShader,a=e.fragmentShader,l=a_(e),c=c_(e),h=h_(e),u=d_(e),f=p_(e),d=jv(e),p=Qv(o),b=r.createProgram(),m,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ms).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ms).join(`
`),g.length>0&&(g+=`
`)):(m=[Bp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),g=[Bp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Vn?Kv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,$v("linearToOutputTexel",e.outputColorSpace),Jv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),s=ph(s),s=Np(s,e),s=Op(s,e),a=ph(a),a=Np(a,e),a=Op(a,e),s=Up(s),a=Up(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=x+m+s,y=x+g+a,M=Lp(r,r.VERTEX_SHADER,_),w=Lp(r,r.FRAGMENT_SHADER,y);r.attachShader(b,M),r.attachShader(b,w),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function R(I){if(i.debug.checkShaderErrors){let P=r.getProgramInfoLog(b)||"",D=r.getShaderInfoLog(M)||"",S=r.getShaderInfoLog(w)||"",F=P.trim(),A=D.trim(),T=S.trim(),N=!0,U=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,w);else{let k=Dp(r,M,"vertex"),z=Dp(r,w,"fragment");$t("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+k+`
`+z)}else F!==""?qt("WebGLProgram: Program Info Log:",F):(A===""||T==="")&&(U=!1);U&&(I.diagnostics={runnable:N,programLog:F,vertexShader:{log:A,prefix:m},fragmentShader:{log:T,prefix:g}})}r.deleteShader(M),r.deleteShader(w),v=new bo(r,b),E=t_(r,b)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(b,Hv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xv++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=w,this}var g_=0,mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gh(t),e.set(t,n)),n}},gh=class{constructor(t){this.id=g_++,this.code=t,this.usedTimes=0}};function b_(i){return i===Zi||i===bs||i===xs}function x_(i,t,e,n,r,o){let s=new oo,a=new mh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function b(v,E,C,I,P,D){let S=I.fog,F=P.geometry,A=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,T=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,N=t.get(v.envMap||A,T),U=N&&N.mapping===hs?N.image.height:null,k=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&qt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,W=z!==void 0?z.length:0,G=0;F.morphAttributes.position!==void 0&&(G=1),F.morphAttributes.normal!==void 0&&(G=2),F.morphAttributes.color!==void 0&&(G=3);let H,j,st,X;if(k){let Re=ri[k];H=Re.vertexShader,j=Re.fragmentShader}else{H=v.vertexShader,j=v.fragmentShader;let Re=a.getVertexShaderStage(v),ve=a.getFragmentShaderStage(v);a.update(v,Re,ve),st=Re.id,X=ve.id}let Z=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),q=P.isInstancedMesh===!0,Q=P.isBatchedMesh===!0,dt=!!v.map,gt=!!v.matcap,bt=!!N,vt=!!v.aoMap,Et=!!v.lightMap,xt=!!v.bumpMap&&v.wireframe===!1,Vt=!!v.normalMap,Se=!!v.displacementMap,Oe=!!v.emissiveMap,de=!!v.metalnessMap,Qt=!!v.roughnessMap,Y=v.anisotropy>0,Ue=v.clearcoat>0,pe=v.dispersion>0,V=v.retroreflectivity>0,L=v.iridescence>0,et=v.sheen>0,ot=v.transmission>0,lt=Y&&!!v.anisotropyMap,yt=Ue&&!!v.clearcoatMap,_t=Ue&&!!v.clearcoatNormalMap,ct=Ue&&!!v.clearcoatRoughnessMap,ht=L&&!!v.iridescenceMap,Mt=L&&!!v.iridescenceThicknessMap,Gt=et&&!!v.sheenColorMap,At=et&&!!v.sheenRoughnessMap,St=!!v.specularMap,Wt=!!v.specularColorMap,Yt=!!v.specularIntensityMap,re=ot&&!!v.transmissionMap,J=ot&&!!v.thicknessMap,wt=!!v.gradientMap,ut=!!v.alphaMap,Tt=v.alphaTest>0,It=!!v.alphaHash,mt=!!v.extensions,Ht=Vn;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ht=i.toneMapping);let Bt={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:H,fragmentShader:j,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:X,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Q,batchingColor:Q&&P._colorsTexture!==null,instancing:q,instancingColor:q&&P.instanceColor!==null,instancingMorph:q&&P.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:dt,matcap:gt,envMap:bt,envMapMode:bt&&N.mapping,envMapCubeUVHeight:U,aoMap:vt,lightMap:Et,bumpMap:xt,normalMap:Vt,displacementMap:Se,emissiveMap:Oe,normalMapObjectSpace:Vt&&v.normalMapType===ep,normalMapTangentSpace:Vt&&v.normalMapType===Xu,packedNormalMap:Vt&&v.normalMapType===Xu&&b_(v.normalMap.format),metalnessMap:de,roughnessMap:Qt,anisotropy:Y,anisotropyMap:lt,clearcoat:Ue,clearcoatMap:yt,clearcoatNormalMap:_t,clearcoatRoughnessMap:ct,dispersion:pe,retroreflection:V,iridescence:L,iridescenceMap:ht,iridescenceThicknessMap:Mt,sheen:et,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:St,specularColorMap:Wt,specularIntensityMap:Yt,transmission:ot,transmissionMap:re,thicknessMap:J,gradientMap:wt,opaque:v.transparent===!1&&v.blending===Xi&&v.alphaToCoverage===!1,alphaMap:ut,alphaTest:Tt,alphaHash:It,combine:v.combine,mapUv:dt&&p(v.map.channel),aoMapUv:vt&&p(v.aoMap.channel),lightMapUv:Et&&p(v.lightMap.channel),bumpMapUv:xt&&p(v.bumpMap.channel),normalMapUv:Vt&&p(v.normalMap.channel),displacementMapUv:Se&&p(v.displacementMap.channel),emissiveMapUv:Oe&&p(v.emissiveMap.channel),metalnessMapUv:de&&p(v.metalnessMap.channel),roughnessMapUv:Qt&&p(v.roughnessMap.channel),anisotropyMapUv:lt&&p(v.anisotropyMap.channel),clearcoatMapUv:yt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:_t&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:At&&p(v.sheenRoughnessMap.channel),specularMapUv:St&&p(v.specularMap.channel),specularColorMapUv:Wt&&p(v.specularColorMap.channel),specularIntensityMapUv:Yt&&p(v.specularIntensityMap.channel),transmissionMapUv:re&&p(v.transmissionMap.channel),thicknessMapUv:J&&p(v.thicknessMap.channel),alphaMapUv:ut&&p(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Vt||Y),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(dt||ut),fog:!!S,useFog:v.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&Vt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:tt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:G,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:dt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===Me,decodeVideoTextureEmissive:Oe&&v.emissiveMap.isVideoTexture===!0&&he.getTransfer(v.emissiveMap.colorSpace)===Me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ge,flipSided:v.side===an,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:mt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&v.extensions.multiDraw===!0||Q)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function m(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)E.push(C),E.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(g(E,v),x(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function g(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){s.disableAll(),E.instancing&&s.enable(0),E.instancingColor&&s.enable(1),E.instancingMorph&&s.enable(2),E.matcap&&s.enable(3),E.envMap&&s.enable(4),E.normalMapObjectSpace&&s.enable(5),E.normalMapTangentSpace&&s.enable(6),E.clearcoat&&s.enable(7),E.iridescence&&s.enable(8),E.alphaTest&&s.enable(9),E.vertexColors&&s.enable(10),E.vertexAlphas&&s.enable(11),E.vertexUv1s&&s.enable(12),E.vertexUv2s&&s.enable(13),E.vertexUv3s&&s.enable(14),E.vertexTangents&&s.enable(15),E.anisotropy&&s.enable(16),E.alphaHash&&s.enable(17),E.batching&&s.enable(18),E.dispersion&&s.enable(19),E.retroreflection&&s.enable(24),E.batchingColor&&s.enable(20),E.gradientMap&&s.enable(21),E.packedNormalMap&&s.enable(22),E.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.reversedDepthBuffer&&s.enable(4),E.skinning&&s.enable(5),E.morphTargets&&s.enable(6),E.morphNormals&&s.enable(7),E.morphColors&&s.enable(8),E.premultipliedAlpha&&s.enable(9),E.shadowMapEnabled&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),E.decodeVideoTextureEmissive&&s.enable(20),E.alphaToCoverage&&s.enable(21),E.numLightProbeGrids>0&&s.enable(22),E.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function _(v){let E=d[v.type],C;if(E){let I=ri[E];C=yp.clone(I.uniforms)}else C=v.uniforms;return C}function y(v,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new m_(i,E,v,r),c.push(C),h.set(E,C)),C}function M(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function R(){a.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:R}}function y_(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:o}}function v_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function kp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zp(){let i=[],t=0,e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,b,m,g){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:s(f),groupOrder:b,renderOrder:f.renderOrder,z:m,group:g},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=s(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=m,x.group=g),t++,x}function l(f,d,p,b,m,g,x){x.reversedDepth===!0&&(m=-m);let _=a(f,d,p,b,m,g);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):e.push(_)}function c(f,d,p,b,m,g){let x=a(f,d,p,b,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||v_),n.length>1&&n.sort(d||kp),r.length>1&&r.sort(d||kp)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:u,sort:h}}function __(){let i=new WeakMap;function t(n,r){let o=i.get(n),s;return o===void 0?(s=new zp,i.set(n,[s])):r>=o.length?(s=new zp,o.push(s)):s=o[r],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function M_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new nt};break;case"SpotLight":e={position:new $,direction:new $,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":e={color:new nt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function S_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var w_=0;function T_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function E_(i){let t=new M_,e=S_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let r=new $,o=new Ae,s=new Ae;function a(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,p=0,b=0,m=0,g=0,x=0,_=0,y=0,M=0,w=0,R=0,v=0,E=0,C=0;c.sort(T_);for(let P=0,D=c.length;P<D;P++){let S=c[P],F=S.color,A=S.intensity,T=S.distance,N=null;if(S.shadow&&S.shadow.map&&(S.shadow.map.texture.format===Zi?N=S.shadow.map.texture:N=S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)h+=F.r*A,u+=F.g*A,f+=F.b*A;else if(S.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(S.sh.coefficients[U],A);C++}else if(S.isSunLight){let U=t.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let k=S.shadow,z=e.get(S);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[p]=z,n.sunShadowMap[p]=N;let W=k.getViewportCount();for(let G=0;G<W;G++)n.sunShadowMatrix[b+G]=k.getMatrix(G),n.sunShadowCascade[b+G]=k._cascadeData[G];b+=W,p++}n.sun[d]=U,d++}else if(S.isDirectionalLight){let U=t.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let k=S.shadow,z=e.get(S);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=N,n.directionalShadowMatrix[m]=S.shadow.matrix,M++}n.directional[m]=U,m++}else if(S.isSpotLight){let U=t.get(S);U.position.setFromMatrixPosition(S.matrixWorld),U.color.copy(F).multiplyScalar(A),U.distance=T,U.coneCos=Math.cos(S.angle),U.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),U.decay=S.decay,n.spot[x]=U;let k=S.shadow;if(S.map&&(n.spotLightMap[v]=S.map,v++,k.updateMatrices(S),S.castShadow&&E++),n.spotLightMatrix[x]=k.matrix,S.castShadow){let z=e.get(S);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=N,R++}x++}else if(S.isRectAreaLight){let U=t.get(S);U.color.copy(F).multiplyScalar(A),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),n.rectArea[_]=U,_++}else if(S.isPointLight){let U=t.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity),U.distance=S.distance,U.decay=S.decay,S.castShadow){let k=S.shadow,z=e.get(S);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=S.shadow.matrix,w++}n.point[g]=U,g++}else if(S.isHemisphereLight){let U=t.get(S);U.skyColor.copy(S.color).multiplyScalar(A),U.groundColor.copy(S.groundColor).multiplyScalar(A),n.hemi[y]=U,y++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==_||I.hemiLength!==y||I.numSunShadows!==p||I.numDirectionalShadows!==M||I.numPointShadows!==w||I.numSpotShadows!==R||I.numSpotMaps!==v||I.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=x,n.rectArea.length=_,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,I.sunLength=d,I.directionalLength=m,I.pointLength=g,I.spotLength=x,I.rectAreaLength=_,I.hemiLength=y,I.numSunShadows=p,I.numDirectionalShadows=M,I.numPointShadows=w,I.numSpotShadows=R,I.numSpotMaps=v,I.numLightProbes=C,n.version=w_++)}function l(c,h){let u=0,f=0,d=0,p=0,b=0,m=0,g=h.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){let y=c[x];if(y.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),s.identity(),o.copy(y.matrixWorld),o.premultiply(g),s.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),b++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Vp(i){let t=new E_(i),e=[],n=[],r=[];function o(f){u.camera=f,e.length=0,n.length=0,r.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function A_(i){let t=new WeakMap;function e(r,o=0){let s=t.get(r),a;return s===void 0?(a=new Vp(i),t.set(r,[a])):o>=s.length?(a=new Vp(i),s.push(a)):a=s[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
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
}`,C_=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],I_=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Gp=new Ae,_s=new $,ch=new $;function L_(i,t,e){let n=new Jo,r=new ce,o=new ce,s=new ze,a=new Ka,l=new Ja,c={},h=e.maxTextureSize,u={[ei]:an,[an]:ei,[ge]:ge},f=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:R_,fragmentShader:P_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new ee;p.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ut(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cs;let g=this.type;this.render=function(w,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Ld&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cs);let E=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),P=i.state;P.setBlending(ni),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let D=g!==this.type;D&&R.traverse(function(S){S.material&&(Array.isArray(S.material)?S.material.forEach(F=>F.needsUpdate=!0):S.material.needsUpdate=!0)});for(let S=0,F=w.length;S<F;S++){let A=w[S],T=A.shadow;if(T===void 0){qt("WebGLShadowMap:",A,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;r.copy(T.mapSize);let N=T.getFrameExtents();r.multiply(N),o.copy(T.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/N.x),r.x=o.x*N.x,T.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/N.y),r.y=o.y*N.y,T.mapSize.y=o.y));let U=i.state.buffers.depth.getReversed();if(T.camera._reversedDepth=U,T.map===null||D===!0){if(T.map!==null&&(T.map.depthTexture!==null&&(T.map.depthTexture.dispose(),T.map.depthTexture=null),T.map.dispose()),this.type===ho){if(A.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}T.map=new Qe(r.x,r.y,{format:Zi,type:Hn,minFilter:on,magFilter:on,generateMipmaps:!1}),T.map.texture.name=A.name+".shadowMap",T.map.depthTexture=new Qn(r.x,r.y,Wn),T.map.depthTexture.name=A.name+".shadowMapDepth",T.map.depthTexture.format=Kn,T.map.depthTexture.compareFunction=null,T.map.depthTexture.minFilter=je,T.map.depthTexture.magFilter=je}else A.isPointLight?(T.map=new ec(r.x),T.map.depthTexture=new $a(r.x,Gn)):(T.map=new Qe(r.x,r.y),T.map.depthTexture=new Qn(r.x,r.y,Gn)),T.map.depthTexture.name=A.name+".shadowMap",T.map.depthTexture.format=Kn,this.type===cs?(T.map.depthTexture.compareFunction=U?Jl:Kl,T.map.depthTexture.minFilter=on,T.map.depthTexture.magFilter=on):(T.map.depthTexture.compareFunction=null,T.map.depthTexture.minFilter=je,T.map.depthTexture.magFilter=je);T.camera.updateProjectionMatrix()}T.map.isWebGLCubeRenderTarget!==!0&&(T.map.width!==r.x||T.map.height!==r.y)&&T.map.setSize(r.x,r.y);let k=T.map.isWebGLCubeRenderTarget?6:T.getViewportCount();A.isPointLight!==!0&&T.updateMatrices(A,v);for(let z=0;z<k;z++){let W=T.getCamera(z);if(A.isPointLight){let G=T.camera,H=T.matrix,j=A.distance||G.far;j!==G.far&&(G.far=j,G.updateProjectionMatrix()),_s.setFromMatrixPosition(A.matrixWorld),G.position.copy(_s),ch.copy(G.position),ch.add(C_[z]),G.up.copy(I_[z]),G.lookAt(ch),G.updateMatrixWorld(),H.makeTranslation(-_s.x,-_s.y,-_s.z),Gp.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),T._frustum.setFromProjectionMatrix(Gp,G.coordinateSystem,G.reversedDepth)}if(T.map.isWebGLCubeRenderTarget)i.setRenderTarget(T.map,z),i.clear();else{z===0&&(i.setRenderTarget(T.map),i.clear());let G=T.getViewport(z);s.set(o.x*G.x,o.y*G.y,o.x*G.z,o.y*G.w),P.viewport(s)}n=T.getFrustum(z),y(R,v,W,A,this.type)}T.isPointLightShadow!==!0&&this.type===ho&&x(T,v),T.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,C,I)};function x(w,R){let v=t.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Qe(r.x,r.y,{format:Zi,type:Hn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,v,f,b,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,v,d,b,null)}function _(w,R,v,E){let C=null,I=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)C=I;else if(C=v.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let P=C.uuid,D=R.uuid,S=c[P];S===void 0&&(S={},c[P]=S);let F=S[D];F===void 0&&(F=C.clone(),S[D]=F,R.addEventListener("dispose",M)),C=F}if(C.visible=R.visible,C.wireframe=R.wireframe,E===ho?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:u[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let P=i.properties.get(C);P.light=v}return C}function y(w,R,v,E,C){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===ho)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let D=t.update(w),S=w.material;if(Array.isArray(S)){let F=D.groups;for(let A=0,T=F.length;A<T;A++){let N=F[A],U=S[N.materialIndex];if(U&&U.visible){let k=_(w,U,E,C);w.onBeforeShadow(i,w,R,v,D,k,N),i.renderBufferDirect(v,null,D,k,w,N),w.onAfterShadow(i,w,R,v,D,k,N)}}}else if(S.visible){let F=_(w,S,E,C);w.onBeforeShadow(i,w,R,v,D,F,null),i.renderBufferDirect(v,null,D,F,w,null),w.onAfterShadow(i,w,R,v,D,F,null)}}let P=w.children;for(let D=0,S=P.length;D<S;D++)y(P[D],R,v,E,C)}function M(w){w.target.removeEventListener("dispose",M);for(let v in c){let E=c[v],C=w.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function F_(i,t){function e(){let J=!1,wt=new ze,ut=null,Tt=new ze(0,0,0,0);return{setMask:function(It){ut!==It&&!J&&(i.colorMask(It,It,It,It),ut=It)},setLocked:function(It){J=It},setClear:function(It,mt,Ht,Bt,Re){Re===!0&&(It*=Bt,mt*=Bt,Ht*=Bt),wt.set(It,mt,Ht,Bt),Tt.equals(wt)===!1&&(i.clearColor(It,mt,Ht,Bt),Tt.copy(wt))},reset:function(){J=!1,ut=null,Tt.set(-1,0,0,0)}}}function n(){let J=!1,wt=!1,ut=null,Tt=null,It=null;return{setReversed:function(mt){if(wt!==mt){let Ht=t.get("EXT_clip_control");mt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),wt=mt;let Bt=It;It=null,this.setClear(Bt)}},getReversed:function(){return wt},setTest:function(mt){mt?Z(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(mt){ut!==mt&&!J&&(i.depthMask(mt),ut=mt)},setFunc:function(mt){if(wt&&(mt=dp[mt]),Tt!==mt){switch(mt){case Ia:i.depthFunc(i.NEVER);break;case La:i.depthFunc(i.ALWAYS);break;case Fa:i.depthFunc(i.LESS);break;case eo:i.depthFunc(i.LEQUAL);break;case Da:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=mt}},setLocked:function(mt){J=mt},setClear:function(mt){It!==mt&&(It=mt,wt&&(mt=1-mt),i.clearDepth(mt))},reset:function(){J=!1,ut=null,Tt=null,It=null,wt=!1}}}function r(){let J=!1,wt=null,ut=null,Tt=null,It=null,mt=null,Ht=null,Bt=null,Re=null;return{setTest:function(ve){J||(ve?Z(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(ve){wt!==ve&&!J&&(i.stencilMask(ve),wt=ve)},setFunc:function(ve,Fn,qn){(ut!==ve||Tt!==Fn||It!==qn)&&(i.stencilFunc(ve,Fn,qn),ut=ve,Tt=Fn,It=qn)},setOp:function(ve,Fn,qn){(mt!==ve||Ht!==Fn||Bt!==qn)&&(i.stencilOp(ve,Fn,qn),mt=ve,Ht=Fn,Bt=qn)},setLocked:function(ve){J=ve},setClear:function(ve){Re!==ve&&(i.clearStencil(ve),Re=ve)},reset:function(){J=!1,wt=null,ut=null,Tt=null,It=null,mt=null,Ht=null,Bt=null,Re=null}}}let o=new e,s=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],b=null,m=!1,g=null,x=null,_=null,y=null,M=null,w=null,R=null,v=new nt(0,0,0),E=0,C=!1,I=null,P=null,D=null,S=null,F=null,A=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),T=!1,N=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(U)[1]),T=N>=1):U.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),T=N>=2);let k=null,z={},W=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),H=new ze().fromArray(W),j=new ze().fromArray(G);function st(J,wt,ut,Tt){let It=new Uint8Array(4),mt=i.createTexture();i.bindTexture(J,mt),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<ut;Ht++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(wt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return mt}let X={};X[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),s.setFunc(eo),xt(!1),Vt(Tu),Z(i.CULL_FACE),vt(ni);function Z(J){h[J]!==!0&&(i.enable(J),h[J]=!0)}function tt(J){h[J]!==!1&&(i.disable(J),h[J]=!1)}function q(J,wt){return f[J]!==wt?(i.bindFramebuffer(J,wt),f[J]=wt,J===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=wt),J===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Q(J,wt){let ut=p,Tt=!1;if(J){ut=d.get(wt),ut===void 0&&(ut=[],d.set(wt,ut));let It=J.textures;if(ut.length!==It.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Ht=It.length;mt<Ht;mt++)ut[mt]=i.COLOR_ATTACHMENT0+mt;ut.length=It.length,Tt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(ut)}function dt(J){return b!==J?(i.useProgram(J),b=J,!0):!1}let gt={[vr]:i.FUNC_ADD,[Dd]:i.FUNC_SUBTRACT,[Nd]:i.FUNC_REVERSE_SUBTRACT};gt[Od]=i.MIN,gt[Ud]=i.MAX;let bt={[Bd]:i.ZERO,[kd]:i.ONE,[zd]:i.SRC_COLOR,[Au]:i.SRC_ALPHA,[Yd]:i.SRC_ALPHA_SATURATE,[Hd]:i.DST_COLOR,[Gd]:i.DST_ALPHA,[Vd]:i.ONE_MINUS_SRC_COLOR,[Ru]:i.ONE_MINUS_SRC_ALPHA,[Xd]:i.ONE_MINUS_DST_COLOR,[Wd]:i.ONE_MINUS_DST_ALPHA,[qd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[Zd]:i.CONSTANT_ALPHA,[Kd]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(J,wt,ut,Tt,It,mt,Ht,Bt,Re,ve){if(J===ni){m===!0&&(tt(i.BLEND),m=!1);return}if(m===!1&&(Z(i.BLEND),m=!0),J!==Fd){if(J!==g||ve!==C){if((x!==vr||M!==vr)&&(i.blendEquation(i.FUNC_ADD),x=vr,M=vr),ve)switch(J){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ge:i.blendFunc(i.ONE,i.ONE);break;case Eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case us:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$t("WebGLState: Invalid blending: ",J);break}else switch(J){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ge:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Eu:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case us:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",J);break}_=null,y=null,w=null,R=null,v.set(0,0,0),E=0,g=J,C=ve}return}It=It||wt,mt=mt||ut,Ht=Ht||Tt,(wt!==x||It!==M)&&(i.blendEquationSeparate(gt[wt],gt[It]),x=wt,M=It),(ut!==_||Tt!==y||mt!==w||Ht!==R)&&(i.blendFuncSeparate(bt[ut],bt[Tt],bt[mt],bt[Ht]),_=ut,y=Tt,w=mt,R=Ht),(Bt.equals(v)===!1||Re!==E)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Re),v.copy(Bt),E=Re),g=J,C=!1}function Et(J,wt){J.side===ge?tt(i.CULL_FACE):Z(i.CULL_FACE);let ut=J.side===an;wt&&(ut=!ut),xt(ut),J.blending===Xi&&J.transparent===!1?vt(ni):vt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),s.setFunc(J.depthFunc),s.setTest(J.depthTest),s.setMask(J.depthWrite),o.setMask(J.colorWrite);let Tt=J.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Oe(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(J){I!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),I=J)}function Vt(J){J!==Cd?(Z(i.CULL_FACE),J!==P&&(J===Tu?i.cullFace(i.BACK):J===Id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),P=J}function Se(J){J!==D&&(T&&i.lineWidth(J),D=J)}function Oe(J,wt,ut){J?(Z(i.POLYGON_OFFSET_FILL),(S!==wt||F!==ut)&&(S=wt,F=ut,s.getReversed()&&(wt=-wt),i.polygonOffset(wt,ut))):tt(i.POLYGON_OFFSET_FILL)}function de(J){J?Z(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function Qt(J){J===void 0&&(J=i.TEXTURE0+A-1),k!==J&&(i.activeTexture(J),k=J)}function Y(J,wt,ut){ut===void 0&&(k===null?ut=i.TEXTURE0+A-1:ut=k);let Tt=z[ut];Tt===void 0&&(Tt={type:void 0,texture:void 0},z[ut]=Tt),(Tt.type!==J||Tt.texture!==wt)&&(k!==ut&&(i.activeTexture(ut),k=ut),i.bindTexture(J,wt||X[J]),Tt.type=J,Tt.texture=wt)}function Ue(){let J=z[k];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(J){$t("WebGLState:",J)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(J){$t("WebGLState:",J)}}function L(){try{i.texSubImage2D(...arguments)}catch(J){$t("WebGLState:",J)}}function et(){try{i.texSubImage3D(...arguments)}catch(J){$t("WebGLState:",J)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(J){$t("WebGLState:",J)}}function lt(){try{i.compressedTexSubImage3D(...arguments)}catch(J){$t("WebGLState:",J)}}function yt(){try{i.texStorage2D(...arguments)}catch(J){$t("WebGLState:",J)}}function _t(){try{i.texStorage3D(...arguments)}catch(J){$t("WebGLState:",J)}}function ct(){try{i.texImage2D(...arguments)}catch(J){$t("WebGLState:",J)}}function ht(){try{i.texImage3D(...arguments)}catch(J){$t("WebGLState:",J)}}function Mt(J){return u[J]!==void 0?u[J]:i.getParameter(J)}function Gt(J,wt){u[J]!==wt&&(i.pixelStorei(J,wt),u[J]=wt)}function At(J){H.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),H.copy(J))}function St(J){j.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),j.copy(J))}function Wt(J,wt){let ut=c.get(wt);ut===void 0&&(ut=new WeakMap,c.set(wt,ut));let Tt=ut.get(J);Tt===void 0&&(Tt=i.getUniformBlockIndex(wt,J.name),ut.set(J,Tt))}function Yt(J,wt){let Tt=c.get(wt).get(J);l.get(wt)!==Tt&&(i.uniformBlockBinding(wt,Tt,J.__bindingPointIndex),l.set(wt,Tt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},k=null,z={},f={},d=new WeakMap,p=[],b=null,m=!1,g=null,x=null,_=null,y=null,M=null,w=null,R=null,v=new nt(0,0,0),E=0,C=!1,I=null,P=null,D=null,S=null,F=null,H.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:Z,disable:tt,bindFramebuffer:q,drawBuffers:Q,useProgram:dt,setBlending:vt,setMaterial:Et,setFlipSided:xt,setCullFace:Vt,setLineWidth:Se,setPolygonOffset:Oe,setScissorTest:de,activeTexture:Qt,bindTexture:Y,unbindTexture:Ue,compressedTexImage2D:pe,compressedTexImage3D:V,texImage2D:ct,texImage3D:ht,pixelStorei:Gt,getParameter:Mt,updateUBOMapping:Wt,uniformBlockBinding:Yt,texStorage2D:yt,texStorage3D:_t,texSubImage2D:L,texSubImage3D:et,compressedTexSubImage2D:ot,compressedTexSubImage3D:lt,scissor:At,viewport:St,reset:re}}function D_(i,t,e,n,r,o,s){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(V,L){return p?new OffscreenCanvas(V,L):no("canvas")}function m(V,L,et){let ot=1,lt=pe(V);if((lt.width>et||lt.height>et)&&(ot=et/Math.max(lt.width,lt.height)),ot<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let yt=Math.floor(ot*lt.width),_t=Math.floor(ot*lt.height);f===void 0&&(f=b(yt,_t));let ct=L?b(yt,_t):f;return ct.width=yt,ct.height=_t,ct.getContext("2d").drawImage(V,0,0,yt,_t),qt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+yt+"x"+_t+")."),ct}else return"data"in V&&qt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),V;return V}function g(V){return V.generateMipmaps}function x(V){i.generateMipmap(V)}function _(V){return V.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?i.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(V,L,et,ot,lt,yt=!1){if(V!==null){if(i[V]!==void 0)return i[V];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let _t;ot&&(_t=t.get("EXT_texture_norm16"),_t||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=L;if(L===i.RED&&(et===i.FLOAT&&(ct=i.R32F),et===i.HALF_FLOAT&&(ct=i.R16F),et===i.UNSIGNED_BYTE&&(ct=i.R8),et===i.UNSIGNED_SHORT&&_t&&(ct=_t.R16_EXT),et===i.SHORT&&_t&&(ct=_t.R16_SNORM_EXT)),L===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(ct=i.R8UI),et===i.UNSIGNED_SHORT&&(ct=i.R16UI),et===i.UNSIGNED_INT&&(ct=i.R32UI),et===i.BYTE&&(ct=i.R8I),et===i.SHORT&&(ct=i.R16I),et===i.INT&&(ct=i.R32I)),L===i.RG&&(et===i.FLOAT&&(ct=i.RG32F),et===i.HALF_FLOAT&&(ct=i.RG16F),et===i.UNSIGNED_BYTE&&(ct=i.RG8),et===i.UNSIGNED_SHORT&&_t&&(ct=_t.RG16_EXT),et===i.SHORT&&_t&&(ct=_t.RG16_SNORM_EXT)),L===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(ct=i.RG8UI),et===i.UNSIGNED_SHORT&&(ct=i.RG16UI),et===i.UNSIGNED_INT&&(ct=i.RG32UI),et===i.BYTE&&(ct=i.RG8I),et===i.SHORT&&(ct=i.RG16I),et===i.INT&&(ct=i.RG32I)),L===i.RGB_INTEGER&&(et===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),et===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),et===i.UNSIGNED_INT&&(ct=i.RGB32UI),et===i.BYTE&&(ct=i.RGB8I),et===i.SHORT&&(ct=i.RGB16I),et===i.INT&&(ct=i.RGB32I)),L===i.RGBA_INTEGER&&(et===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),et===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),et===i.UNSIGNED_INT&&(ct=i.RGBA32UI),et===i.BYTE&&(ct=i.RGBA8I),et===i.SHORT&&(ct=i.RGBA16I),et===i.INT&&(ct=i.RGBA32I)),L===i.RGB&&(et===i.UNSIGNED_SHORT&&_t&&(ct=_t.RGB16_EXT),et===i.SHORT&&_t&&(ct=_t.RGB16_SNORM_EXT),et===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),et===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),L===i.RGBA){let ht=yt?Yo:he.getTransfer(lt);et===i.FLOAT&&(ct=i.RGBA32F),et===i.HALF_FLOAT&&(ct=i.RGBA16F),et===i.UNSIGNED_BYTE&&(ct=ht===Me?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT&&_t&&(ct=_t.RGBA16_EXT),et===i.SHORT&&_t&&(ct=_t.RGBA16_SNORM_EXT),et===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function M(V,L){let et;return V?L===null||L===Gn||L===po?et=i.DEPTH24_STENCIL8:L===Wn?et=i.DEPTH32F_STENCIL8:L===fo&&(et=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Gn||L===po?et=i.DEPTH_COMPONENT24:L===Wn?et=i.DEPTH_COMPONENT32F:L===fo&&(et=i.DEPTH_COMPONENT16),et}function w(V,L){return g(V)===!0||V.isFramebufferTexture&&V.minFilter!==je&&V.minFilter!==on?Math.log2(Math.max(L.width,L.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?L.mipmaps.length:1}function R(V){let L=V.target;L.removeEventListener("dispose",R),E(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function v(V){let L=V.target;L.removeEventListener("dispose",v),I(L)}function E(V){let L=n.get(V);if(L.__webglInit===void 0)return;let et=V.source,ot=d.get(et);if(ot){let lt=ot[L.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&C(V),Object.keys(ot).length===0&&d.delete(et)}n.remove(V)}function C(V){let L=n.get(V);i.deleteTexture(L.__webglTexture);let et=V.source,ot=d.get(et);delete ot[L.__cacheKey],s.memory.textures--}function I(V){let L=n.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),n.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(L.__webglFramebuffer[ot]))for(let lt=0;lt<L.__webglFramebuffer[ot].length;lt++)i.deleteFramebuffer(L.__webglFramebuffer[ot][lt]);else i.deleteFramebuffer(L.__webglFramebuffer[ot]);L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer[ot])}else{if(Array.isArray(L.__webglFramebuffer))for(let ot=0;ot<L.__webglFramebuffer.length;ot++)i.deleteFramebuffer(L.__webglFramebuffer[ot]);else i.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&i.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let ot=0;ot<L.__webglColorRenderbuffer.length;ot++)L.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(L.__webglColorRenderbuffer[ot]);L.__webglDepthRenderbuffer&&i.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let et=V.textures;for(let ot=0,lt=et.length;ot<lt;ot++){let yt=n.get(et[ot]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),s.memory.textures--),n.remove(et[ot])}n.remove(V)}let P=0;function D(){P=0}function S(){return P}function F(V){P=V}function A(){let V=P;return V>=r.maxTextures&&qt("WebGLTextures: Trying to use "+(V+1)+" texture units while this GPU supports only "+r.maxTextures),P+=1,V}function T(V){let L=[];return L.push(V.wrapS),L.push(V.wrapT),L.push(V.wrapR||0),L.push(V.magFilter),L.push(V.minFilter),L.push(V.anisotropy),L.push(V.internalFormat),L.push(V.format),L.push(V.type),L.push(V.generateMipmaps),L.push(V.premultiplyAlpha),L.push(V.flipY),L.push(V.unpackAlignment),L.push(V.colorSpace),L.join()}function N(V,L){let et=n.get(V);if(V.isVideoTexture&&Y(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&et.__version!==V.version){let ot=V.image;if(ot===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(et,V,L);return}}else V.isExternalTexture&&(et.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+L)}function U(V,L){let et=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&et.__version!==V.version){tt(et,V,L);return}else V.isExternalTexture&&(et.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+L)}function k(V,L){let et=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&et.__version!==V.version){tt(et,V,L);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+L)}function z(V,L){let et=n.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&et.__version!==V.version){q(et,V,L);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+L)}let W={[pr]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Ba]:i.MIRRORED_REPEAT},G={[je]:i.NEAREST,[Qd]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[dl]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},H={[ip]:i.NEVER,[lp]:i.ALWAYS,[rp]:i.LESS,[Kl]:i.LEQUAL,[op]:i.EQUAL,[Jl]:i.GEQUAL,[sp]:i.GREATER,[ap]:i.NOTEQUAL};function j(V,L){if(L.type===Wn&&t.has("OES_texture_float_linear")===!1&&(L.magFilter===on||L.magFilter===dl||L.magFilter===fs||L.magFilter===qi||L.minFilter===on||L.minFilter===dl||L.minFilter===fs||L.minFilter===qi)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(V,i.TEXTURE_WRAP_S,W[L.wrapS]),i.texParameteri(V,i.TEXTURE_WRAP_T,W[L.wrapT]),(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)&&i.texParameteri(V,i.TEXTURE_WRAP_R,W[L.wrapR]),i.texParameteri(V,i.TEXTURE_MAG_FILTER,G[L.magFilter]),i.texParameteri(V,i.TEXTURE_MIN_FILTER,G[L.minFilter]),L.compareFunction&&(i.texParameteri(V,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(V,i.TEXTURE_COMPARE_FUNC,H[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===je||L.minFilter!==fs&&L.minFilter!==qi||L.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||n.get(L).__currentAnisotropy){let et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(V,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy}}}function st(V,L){let et=!1;V.__webglInit===void 0&&(V.__webglInit=!0,L.addEventListener("dispose",R));let ot=L.source,lt=d.get(ot);lt===void 0&&(lt={},d.set(ot,lt));let yt=T(L);if(yt!==V.__cacheKey){lt[yt]===void 0&&(lt[yt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,et=!0),lt[yt].usedTimes++;let _t=lt[V.__cacheKey];_t!==void 0&&(lt[V.__cacheKey].usedTimes--,_t.usedTimes===0&&C(L)),V.__cacheKey=yt,V.__webglTexture=lt[yt].texture}return et}function X(V,L,et){return Math.floor(Math.floor(V/et)/L)}function Z(V,L,et,ot){let yt=V.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,L.width,L.height,et,ot,L.data);else{yt.sort((Gt,At)=>Gt.start-At.start);let _t=0;for(let Gt=1;Gt<yt.length;Gt++){let At=yt[_t],St=yt[Gt],Wt=At.start+At.count,Yt=X(St.start,L.width,4),re=X(At.start,L.width,4);St.start<=Wt+1&&Yt===re&&X(St.start+St.count-1,L.width,4)===Yt?At.count=Math.max(At.count,St.start+St.count-At.start):(++_t,yt[_t]=St)}yt.length=_t+1;let ct=e.getParameter(i.UNPACK_ROW_LENGTH),ht=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,L.width);for(let Gt=0,At=yt.length;Gt<At;Gt++){let St=yt[Gt],Wt=Math.floor(St.start/4),Yt=Math.ceil(St.count/4),re=Wt%L.width,J=Math.floor(Wt/L.width),wt=Yt,ut=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,re),e.pixelStorei(i.UNPACK_SKIP_ROWS,J),e.texSubImage2D(i.TEXTURE_2D,0,re,J,wt,ut,et,ot,L.data)}V.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ct),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function tt(V,L,et){let ot=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(ot=i.TEXTURE_3D);let lt=st(V,L),yt=L.source;e.bindTexture(ot,V.__webglTexture,i.TEXTURE0+et);let _t=n.get(yt);if(yt.version!==_t.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+et),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){let ut=he.getPrimaries(he.workingColorSpace),Tt=L.colorSpace===vi?null:he.getPrimaries(L.colorSpace),It=L.colorSpace===vi||ut===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment);let ht=m(L.image,!1,r.maxTextureSize);ht=Ue(L,ht);let Mt=o.convert(L.format,L.colorSpace),Gt=o.convert(L.type),At=y(L.internalFormat,Mt,Gt,L.normalized,L.colorSpace,L.isVideoTexture);j(ot,L);let St,Wt=L.mipmaps,Yt=L.isVideoTexture!==!0,re=_t.__version===void 0||lt===!0,J=yt.dataReady,wt=w(L,ht);if(L.isDepthTexture)At=M(L.format===$i,L.type),re&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,At,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,At,ht.width,ht.height,0,Mt,Gt,null));else if(L.isDataTexture)if(Wt.length>0){Yt&&re&&e.texStorage2D(i.TEXTURE_2D,wt,At,Wt[0].width,Wt[0].height);for(let ut=0,Tt=Wt.length;ut<Tt;ut++)St=Wt[ut],Yt?J&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,St.width,St.height,Mt,Gt,St.data):e.texImage2D(i.TEXTURE_2D,ut,At,St.width,St.height,0,Mt,Gt,St.data);L.generateMipmaps=!1}else Yt?(re&&e.texStorage2D(i.TEXTURE_2D,wt,At,ht.width,ht.height),J&&Z(L,ht,Mt,Gt)):e.texImage2D(i.TEXTURE_2D,0,At,ht.width,ht.height,0,Mt,Gt,ht.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Yt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,At,Wt[0].width,Wt[0].height,ht.depth);for(let ut=0,Tt=Wt.length;ut<Tt;ut++)if(St=Wt[ut],L.format!==Cn)if(Mt!==null)if(Yt){if(J)if(L.layerUpdates.size>0){let It=ju(St.width,St.height,L.format,L.type);for(let mt of L.layerUpdates){let Ht=St.data.subarray(mt*It/St.data.BYTES_PER_ELEMENT,(mt+1)*It/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,mt,St.width,St.height,1,Mt,Ht)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,St.width,St.height,ht.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,At,St.width,St.height,ht.depth,0,St.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?J&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,St.width,St.height,ht.depth,Mt,Gt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,At,St.width,St.height,ht.depth,0,Mt,Gt,St.data);L.layerUpdates.size>0&&L.clearLayerUpdates()}else{Yt&&re&&e.texStorage2D(i.TEXTURE_2D,wt,At,Wt[0].width,Wt[0].height);for(let ut=0,Tt=Wt.length;ut<Tt;ut++)St=Wt[ut],L.format!==Cn?Mt!==null?Yt?J&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,At,St.width,St.height,0,St.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?J&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,St.width,St.height,Mt,Gt,St.data):e.texImage2D(i.TEXTURE_2D,ut,At,St.width,St.height,0,Mt,Gt,St.data)}else if(L.isDataArrayTexture)if(Yt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,At,ht.width,ht.height,ht.depth),J)if(L.layerUpdates.size>0){let ut=ju(ht.width,ht.height,L.format,L.type);for(let Tt of L.layerUpdates){let It=ht.data.subarray(Tt*ut/ht.data.BYTES_PER_ELEMENT,(Tt+1)*ut/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,ht.width,ht.height,1,Mt,Gt,It)}L.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Mt,Gt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,ht.width,ht.height,ht.depth,0,Mt,Gt,ht.data);else if(L.isData3DTexture)Yt?(re&&e.texStorage3D(i.TEXTURE_3D,wt,At,ht.width,ht.height,ht.depth),J&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Mt,Gt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,At,ht.width,ht.height,ht.depth,0,Mt,Gt,ht.data);else if(L.isFramebufferTexture){if(re)if(Yt)e.texStorage2D(i.TEXTURE_2D,wt,At,ht.width,ht.height);else{let ut=ht.width,Tt=ht.height;for(let It=0;It<wt;It++)e.texImage2D(i.TEXTURE_2D,It,At,ut,Tt,0,Mt,Gt,null),ut>>=1,Tt>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in i){let ut=i.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),ht.parentNode!==ut){ut.appendChild(ht),u.add(L),ut.onpaint=Tt=>{let It=Tt.changedElements;for(let mt of u)It.includes(mt.image)&&(mt.needsUpdate=!0)},ut.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ht);else{let It=i.RGBA,mt=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,mt,Ht,ht)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(Yt&&re){let ut=pe(Wt[0]);e.texStorage2D(i.TEXTURE_2D,wt,At,ut.width,ut.height)}for(let ut=0,Tt=Wt.length;ut<Tt;ut++)St=Wt[ut],Yt?J&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Mt,Gt,St):e.texImage2D(i.TEXTURE_2D,ut,At,Mt,Gt,St);L.generateMipmaps=!1}else if(Yt){if(re){let ut=pe(ht);e.texStorage2D(i.TEXTURE_2D,wt,At,ut.width,ut.height)}J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Gt,ht)}else e.texImage2D(i.TEXTURE_2D,0,At,Mt,Gt,ht);g(L)&&x(ot),_t.__version=yt.version,L.onUpdate&&L.onUpdate(L)}V.__version=L.version}function q(V,L,et){if(L.image.length!==6)return;let ot=st(V,L),lt=L.source;e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+et);let yt=n.get(lt);if(lt.version!==yt.__version||ot===!0){e.activeTexture(i.TEXTURE0+et);let _t=he.getPrimaries(he.workingColorSpace),ct=L.colorSpace===vi?null:he.getPrimaries(L.colorSpace),ht=L.colorSpace===vi||_t===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Mt=L.isCompressedTexture||L.image[0].isCompressedTexture,Gt=L.image[0]&&L.image[0].isDataTexture,At=[];for(let mt=0;mt<6;mt++)!Mt&&!Gt?At[mt]=m(L.image[mt],!0,r.maxCubemapSize):At[mt]=Gt?L.image[mt].image:L.image[mt],At[mt]=Ue(L,At[mt]);let St=At[0],Wt=o.convert(L.format,L.colorSpace),Yt=o.convert(L.type),re=y(L.internalFormat,Wt,Yt,L.normalized,L.colorSpace),J=L.isVideoTexture!==!0,wt=yt.__version===void 0||ot===!0,ut=lt.dataReady,Tt=w(L,St);j(i.TEXTURE_CUBE_MAP,L);let It;if(Mt){J&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,re,St.width,St.height);for(let mt=0;mt<6;mt++){It=At[mt].mipmaps;for(let Ht=0;Ht<It.length;Ht++){let Bt=It[Ht];L.format!==Cn?Wt!==null?J?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht,0,0,Bt.width,Bt.height,Wt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht,re,Bt.width,Bt.height,0,Bt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht,0,0,Bt.width,Bt.height,Wt,Yt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht,re,Bt.width,Bt.height,0,Wt,Yt,Bt.data)}}}else{if(It=L.mipmaps,J&&wt){It.length>0&&Tt++;let mt=pe(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,re,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Gt){J?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,At[mt].width,At[mt].height,Wt,Yt,At[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,re,At[mt].width,At[mt].height,0,Wt,Yt,At[mt].data);for(let Ht=0;Ht<It.length;Ht++){let Re=It[Ht].image[mt].image;J?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht+1,0,0,Re.width,Re.height,Wt,Yt,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht+1,re,Re.width,Re.height,0,Wt,Yt,Re.data)}}else{J?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Wt,Yt,At[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,re,Wt,Yt,At[mt]);for(let Ht=0;Ht<It.length;Ht++){let Bt=It[Ht];J?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht+1,0,0,Wt,Yt,Bt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht+1,re,Wt,Yt,Bt.image[mt])}}}g(L)&&x(i.TEXTURE_CUBE_MAP),yt.__version=lt.version,L.onUpdate&&L.onUpdate(L)}V.__version=L.version}function Q(V,L,et,ot,lt,yt){let _t=o.convert(et.format,et.colorSpace),ct=o.convert(et.type),ht=y(et.internalFormat,_t,ct,et.normalized,et.colorSpace),Mt=n.get(L),Gt=n.get(et);if(Gt.__renderTarget=L,!Mt.__hasExternalTextures){let At=Math.max(1,L.width>>yt),St=Math.max(1,L.height>>yt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,yt,ht,At,St,L.depth,0,_t,ct,null):e.texImage2D(lt,yt,ht,At,St,0,_t,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,V),Qt(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,lt,Gt.__webglTexture,0,de(L)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,lt,Gt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(V,L,et){if(i.bindRenderbuffer(i.RENDERBUFFER,V),L.depthBuffer){let ot=L.depthTexture,lt=ot&&ot.isDepthTexture?ot.type:null,yt=M(L.stencilBuffer,lt),_t=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Qt(L)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(L),yt,L.width,L.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(L),yt,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,yt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,V)}else{let ot=L.textures;for(let lt=0;lt<ot.length;lt++){let yt=ot[lt],_t=o.convert(yt.format,yt.colorSpace),ct=o.convert(yt.type),ht=y(yt.internalFormat,_t,ct,yt.normalized,yt.colorSpace);Qt(L)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(L),ht,L.width,L.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(L),ht,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,ht,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(V,L,et){let ot=L.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,V),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=n.get(L.depthTexture);if(lt.__renderTarget=L,(!lt.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),ot){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,L.depthTexture.addEventListener("dispose",R)),lt.__webglTexture===void 0){lt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),j(i.TEXTURE_CUBE_MAP,L.depthTexture);let Mt=o.convert(L.depthTexture.format),Gt=o.convert(L.depthTexture.type),At;L.depthTexture.format===Kn?At=i.DEPTH_COMPONENT24:L.depthTexture.format===$i&&(At=i.DEPTH24_STENCIL8);for(let St=0;St<6;St++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,At,L.width,L.height,0,Mt,Gt,null)}}else N(L.depthTexture,0);let yt=lt.__webglTexture,_t=de(L),ct=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+et:i.TEXTURE_2D,ht=L.depthTexture.format===$i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(L.depthTexture.format===Kn)Qt(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,ct,yt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,ht,ct,yt,0);else if(L.depthTexture.format===$i)Qt(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,ct,yt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,ht,ct,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bt(V){let L=n.get(V),et=V.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==V.depthTexture){let ot=V.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),ot){let lt=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,ot.removeEventListener("dispose",lt)};ot.addEventListener("dispose",lt),L.__depthDisposeCallback=lt}L.__boundDepthTexture=ot}if(V.depthTexture&&!L.__autoAllocateDepthBuffer)if(et)for(let ot=0;ot<6;ot++)gt(L.__webglFramebuffer[ot],V,ot);else{let ot=V.texture.mipmaps;ot&&ot.length>0?gt(L.__webglFramebuffer[0],V,0):gt(L.__webglFramebuffer,V,0)}else if(et){L.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[ot]),L.__webglDepthbuffer[ot]===void 0)L.__webglDepthbuffer[ot]=i.createRenderbuffer(),dt(L.__webglDepthbuffer[ot],V,!1);else{let lt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=L.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,yt)}}else{let ot=V.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=i.createRenderbuffer(),dt(L.__webglDepthbuffer,V,!1);else{let lt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=L.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(V,L,et){let ot=n.get(V);L!==void 0&&Q(ot.__webglFramebuffer,V,V.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&bt(V)}function Et(V){let L=V.texture,et=n.get(V),ot=n.get(L);V.addEventListener("dispose",v);let lt=V.textures,yt=V.isWebGLCubeRenderTarget===!0,_t=lt.length>1;if(_t||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=L.version,s.memory.textures++),yt){et.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(L.mipmaps&&L.mipmaps.length>0){et.__webglFramebuffer[ct]=[];for(let ht=0;ht<L.mipmaps.length;ht++)et.__webglFramebuffer[ct][ht]=i.createFramebuffer()}else et.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){et.__webglFramebuffer=[];for(let ct=0;ct<L.mipmaps.length;ct++)et.__webglFramebuffer[ct]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(_t)for(let ct=0,ht=lt.length;ct<ht;ct++){let Mt=n.get(lt[ct]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),s.memory.textures++)}if(V.samples>0&&Qt(V)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let ct=0;ct<lt.length;ct++){let ht=lt[ct];et.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[ct]);let Mt=o.convert(ht.format,ht.colorSpace),Gt=o.convert(ht.type),At=y(ht.internalFormat,Mt,Gt,ht.normalized,ht.colorSpace,V.isXRRenderTarget===!0),St=de(V);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,At,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,et.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),V.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(et.__webglDepthRenderbuffer,V,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),j(i.TEXTURE_CUBE_MAP,L);for(let ct=0;ct<6;ct++)if(L.mipmaps&&L.mipmaps.length>0)for(let ht=0;ht<L.mipmaps.length;ht++)Q(et.__webglFramebuffer[ct][ht],V,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ht);else Q(et.__webglFramebuffer[ct],V,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(L)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ct=0,ht=lt.length;ct<ht;ct++){let Mt=lt[ct],Gt=n.get(Mt),At=i.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(At=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,Gt.__webglTexture),j(At,Mt),Q(et.__webglFramebuffer,V,Mt,i.COLOR_ATTACHMENT0+ct,At,0),g(Mt)&&x(At)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(ct=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,ot.__webglTexture),j(ct,L),L.mipmaps&&L.mipmaps.length>0)for(let ht=0;ht<L.mipmaps.length;ht++)Q(et.__webglFramebuffer[ht],V,L,i.COLOR_ATTACHMENT0,ct,ht);else Q(et.__webglFramebuffer,V,L,i.COLOR_ATTACHMENT0,ct,0);g(L)&&x(ct),e.unbindTexture()}V.depthBuffer&&bt(V)}function xt(V){let L=V.textures;for(let et=0,ot=L.length;et<ot;et++){let lt=L[et];if(g(lt)){let yt=_(V),_t=n.get(lt).__webglTexture;e.bindTexture(yt,_t),x(yt),e.unbindTexture()}}}let Vt=[],Se=[];function Oe(V){if(V.samples>0){if(Qt(V)===!1){let L=V.textures,et=V.width,ot=V.height,lt=i.COLOR_BUFFER_BIT,yt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(V),ct=L.length>1;if(ct)for(let Mt=0;Mt<L.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let ht=V.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Mt=0;Mt<L.length;Mt++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Gt=n.get(L[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,et,ot,0,0,et,ot,lt,i.NEAREST),l===!0&&(Vt.length=0,Se.length=0,Vt.push(i.COLOR_ATTACHMENT0+Mt),V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&(Vt.push(yt),Se.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Mt=0;Mt<L.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Gt=n.get(L[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&l){let L=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[L])}}}function de(V){return Math.min(r.maxSamples,V.samples)}function Qt(V){let L=n.get(V);return V.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Y(V){let L=s.render.frame;h.get(V)!==L&&(h.set(V,L),V.update())}function Ue(V,L){let et=V.colorSpace,ot=V.format,lt=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||et!==Xo&&et!==vi&&(he.getTransfer(et)===Me?(ot!==Cn||lt!==En)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",et)),L}function pe(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(c.width=V.naturalWidth||V.width,c.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(c.width=V.displayWidth,c.height=V.displayHeight):(c.width=V.width,c.height=V.height),c}this.allocateTextureUnit=A,this.resetTextureUnits=D,this.getTextureUnits=S,this.setTextureUnits=F,this.setTexture2D=N,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=vt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function N_(i,t){function e(n,r=vi){let o,s=he.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bu)return i.BYTE;if(n===ku)return i.SHORT;if(n===fo)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===Gu)return i.ALPHA;if(n===Wu)return i.RGB;if(n===Cn)return i.RGBA;if(n===Kn)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===Hu)return i.RED;if(n===bl)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===xl)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===ds||n===ps||n===ms||n===gs)if(s===Me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ds)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ds)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ps)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ms)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===_l||n===Ml||n===Sl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===vl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===Tl||n===El||n===Al||n===Rl||n===bs||n===Pl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===wl||n===Tl)return s===Me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===El)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Al)return o.COMPRESSED_R11_EAC;if(n===Rl)return o.COMPRESSED_SIGNED_R11_EAC;if(n===bs)return o.COMPRESSED_RG11_EAC;if(n===Pl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cl||n===Il||n===Ll||n===Fl||n===Dl||n===Nl||n===Ol||n===Ul||n===Bl||n===kl||n===zl||n===Vl||n===Gl||n===Wl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Cl)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Il)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fl)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return s===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hl||n===Xl||n===Yl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Hl)return s===Me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ql||n===$l||n===xs||n===Zl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ql)return o.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xs)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===po?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
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

}`,bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Qo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pn({vertexShader:O_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends Jn{constructor(t,e){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,b=typeof XRWebGLBinding<"u",m=new bh,g={},x=e.getContextAttributes(),_=null,y=null,M=[],w=[],R=new ce,v=null,E=null,C=new Je;C.viewport=new ze;let I=new Je;I.viewport=new ze;let P=[C,I],D=new cl,S=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=M[X];return Z===void 0&&(Z=new so,M[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=M[X];return Z===void 0&&(Z=new so,M[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=M[X];return Z===void 0&&(Z=new so,M[X]=Z),Z.getHandSpace()};function A(X){let Z=w.indexOf(X.inputSource);if(Z===-1)return;let tt=M[Z];tt!==void 0&&(tt.update(X.inputSource,X.frame,c||s),tt.dispatchEvent({type:X.type,data:X.inputSource}))}function T(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",T),r.removeEventListener("inputsourceschange",N);for(let X=0;X<M.length;X++){let Z=w[X];Z!==null&&(w[X]=null,M[X].disconnect(Z))}S=null,F=null,m.reset();for(let X in g)delete g[X];if(t.setRenderTarget(_),d=null,f=null,u=null,r=null,y=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),E!==null){let X=E.camera;X.fov=E.fov,X.zoom=E.zoom,X.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",T),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,q=null,Q=null;x.depth&&(Q=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=x.stencil?$i:Kn,q=x.stencil?po:Gn);let dt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(dt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Qe(f.textureWidth,f.textureHeight,{format:Cn,type:En,depthTexture:new Qn(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let tt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Qe(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),st.setContext(r),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(X){for(let Z=0;Z<X.removed.length;Z++){let tt=X.removed[Z],q=w.indexOf(tt);q>=0&&(w[q]=null,M[q].disconnect(tt))}for(let Z=0;Z<X.added.length;Z++){let tt=X.added[Z],q=w.indexOf(tt);if(q===-1){for(let dt=0;dt<M.length;dt++)if(dt>=w.length){w.push(tt),q=dt;break}else if(w[dt]===null){w[dt]=tt,q=dt;break}if(q===-1)break}let Q=M[q];Q&&Q.connect(tt)}}let U=new $,k=new $;function z(X,Z,tt){U.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(tt.matrixWorld);let q=U.distanceTo(k),Q=Z.projectionMatrix.elements,dt=tt.projectionMatrix.elements,gt=Q[14]/(Q[10]-1),bt=Q[14]/(Q[10]+1),vt=(Q[9]+1)/Q[5],Et=(Q[9]-1)/Q[5],xt=(Q[8]-1)/Q[0],Vt=(dt[8]+1)/dt[0],Se=gt*xt,Oe=gt*Vt,de=q/(-xt+Vt),Qt=de*-xt;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Qt),X.translateZ(de),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Q[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let Y=gt+de,Ue=bt+de,pe=Se-Qt,V=Oe+(q-Qt),L=vt*bt/Ue*Y,et=Et*bt/Ue*Y;X.projectionMatrix.makePerspective(pe,V,L,et,Y,Ue),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function W(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Z=X.near,tt=X.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(tt=m.depthFar)),D.near=I.near=C.near=Z,D.far=I.far=C.far=tt,(S!==D.near||F!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),S=D.near,F=D.far),D.layers.mask=X.layers.mask|6,C.layers.mask=D.layers.mask&-5,I.layers.mask=D.layers.mask&-3;let q=X.parent,Q=D.cameras;W(D,q);for(let dt=0;dt<Q.length;dt++)W(Q[dt],q);Q.length===2?z(D,C,I):D.projectionMatrix.copy(C.projectionMatrix),E===null&&X.isPerspectiveCamera&&(E={camera:X,fov:X.fov,zoom:X.zoom}),G(X,D,q)};function G(X,Z,tt){tt===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(tt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=za*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(X){return g[X]};let H=null;function j(X,Z){if(h=Z.getViewerPose(c||s),p=Z,h!==null){let tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let q=!1;tt.length!==D.cameras.length&&(D.cameras.length=0,q=!0);for(let bt=0;bt<tt.length;bt++){let vt=tt[bt],Et=null;if(d!==null)Et=d.getViewport(vt);else{let Vt=u.getViewSubImage(f,vt);Et=Vt.viewport,bt===0&&(t.setRenderTargetTextures(y,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(y))}let xt=P[bt];xt===void 0&&(xt=new Je,xt.layers.enable(bt),xt.viewport=new ze,P[bt]=xt),xt.matrix.fromArray(vt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(vt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Et.x,Et.y,Et.width,Et.height),bt===0&&(D.matrix.copy(xt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),q===!0&&D.cameras.push(xt)}let Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let bt=u.getDepthInformation(tt[0]);bt&&bt.isValid&&bt.texture&&m.init(bt,r.renderState)}if(Q&&Q.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let bt=0;bt<tt.length;bt++){let vt=tt[bt].camera;if(vt){let Et=g[vt];Et||(Et=new Qo,g[vt]=Et);let xt=u.getCameraImage(vt);Et.sourceTexture=xt}}}}for(let tt=0;tt<M.length;tt++){let q=w[tt],Q=M[tt];q!==null&&Q!==void 0&&Q.update(q,Z,c||s)}H&&H(X,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),p=null}let st=new Wp;st.setAnimationLoop(j),this.setAnimationLoop=function(X){H=X},this.dispose=function(){}}},B_=new Ae,Zp=new Jt;Zp.set(-1,0,0,0,1,0,0,0,1);function k_(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Zu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,x,_,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?o(m,g):g.isMeshLambertMaterial?(o(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(o(m,g),u(m,g)):g.isMeshPhongMaterial?(o(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(o(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(o(m,g),p(m,g)):g.isMeshDepthMaterial?o(m,g):g.isMeshDistanceMaterial?(o(m,g),b(m,g)):g.isMeshNormalMaterial?o(m,g):g.isLineBasicMaterial?(s(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,_):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===an&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===an&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=t.get(g),_=x.envMap,y=x.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function s(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=_*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===an&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function b(m,g){let x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function z_(i,t,e,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let w=M.program;n.uniformBlockBinding(y,w)}function c(y,M){let w=r[y.id];w===void 0&&(m(y),w=h(y),r[y.id]=w,y.addEventListener("dispose",x));let R=M.program;n.updateUBOMapping(y,R);let v=t.render.frame;o[y.id]!==v&&(f(y),o[y.id]=v)}function h(y){let M=u();y.__bindingPointIndex=M;let w=i.createBuffer(),R=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let y=0;y<a;y++)if(s.indexOf(y)===-1)return s.push(y),y;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let M=r[y.id],w=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,E=w.length;v<E;v++){let C=w[v];if(Array.isArray(C))for(let I=0,P=C.length;I<P;I++)d(C[I],v,I,R);else d(C,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,w,R){if(b(y,M,w,R)===!0){let v=y.__offset,E=y.value;if(Array.isArray(E)){let C=0;for(let I=0;I<E.length;I++){let P=E[I],D=g(P);p(P,y.__data,C),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function p(y,M,w){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,w)}function b(y,M,w,R){let v=y.value,E=M+"_"+w;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:ArrayBuffer.isView(v)?R[E]=v.slice():R[E]=v.clone(),!0;{let C=R[E];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return R[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(y){let M=y.uniforms,w=0,R=16;for(let E=0,C=M.length;E<C;E++){let I=Array.isArray(M[E])?M[E]:[M[E]];for(let P=0,D=I.length;P<D;P++){let S=I[P],F=Array.isArray(S.value)?S.value:[S.value];for(let A=0,T=F.length;A<T;A++){let N=F[A],U=g(N),k=w%R,z=k%U.boundary,W=k+z;w+=z,W!==0&&R-W<U.storage&&(w+=R-W),S.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=w,w+=U.storage}}}let v=w%R;return v>0&&(w+=R-v),y.__size=w,y.__cache={},this}function g(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",y),M}function x(y){let M=y.target;M.removeEventListener("dispose",x);let w=s.indexOf(M.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function _(){for(let y in r)i.deleteBuffer(r[y]);s=[],r={},o={}}return{bind:l,update:c,dispose:_}}var V_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function G_(){return ii===null&&(ii=new Ha(V_,16,16,Zi,Hn),ii.name="DFG_LUT",ii.minFilter=on,ii.magFilter=on,ii.wrapS=wn,ii.wrapT=wn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var wr=class{constructor(t={}){let{canvas:e=up(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=En}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let b=d,m=new Set([yl,xl,bl]),g=new Set([En,Gn,fo,po,ml,gl]),x=new Uint32Array(4),_=new Int32Array(4),y=new $,M=null,w=null,R=[],v=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,P=null,D=null,S=null,F=null;this._outputColorSpace=Be;let A=0,T=0,N=null,U=-1,k=null,z=new ze,W=new ze,G=null,H=new nt(0),j=0,st=e.width,X=e.height,Z=1,tt=null,q=null,Q=new ze(0,0,st,X),dt=new ze(0,0,st,X),gt=!1,bt=new Jo,vt=!1,Et=!1,xt=new Ae,Vt=new $,Se=new ze,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function Qt(){return N===null?Z:1}let Y=n;function Ue(B,K){return e.getContext(B,K)}let pe,V,L,et,ot,lt,yt,_t,ct,ht,Mt,Gt,At,St,Wt,Yt,re,J,wt,ut,Tt,It,mt;try{let B={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Fn,!1),Y===null){let K="webgl2";if(Y=Ue(K,B),Y===null)throw Ue(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(B){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Fn,!1),$t("WebGLRenderer: "+B.message),B}function Ht(){pe=new Zy(Y),pe.init(),Tt=new N_(Y,pe),V=new ky(Y,pe,t,Tt),L=new F_(Y,pe),V.reversedDepthBuffer&&f&&L.buffers.depth.setReversed(!0),D=Y.createFramebuffer(),S=Y.createFramebuffer(),F=Y.createFramebuffer(),et=new jy(Y),ot=new y_,lt=new D_(Y,pe,L,ot,V,Tt,et),yt=new $y(C),_t=new tx(Y),It=new Uy(Y,_t),ct=new Ky(Y,_t,et,It),ht=new tv(Y,ct,_t,It,et),J=new Qy(Y,V,lt),Wt=new zy(ot),Mt=new x_(C,yt,pe,V,It,Wt),Gt=new k_(C,ot),At=new __,St=new A_(pe),re=new Oy(C,yt,L,ht,p,l),Yt=new L_(C,ht,V),mt=new z_(Y,et,V,L),wt=new By(Y,pe,et),ut=new Jy(Y,pe,et),et.programs=Mt.programs,C.capabilities=V,C.extensions=pe,C.properties=ot,C.renderLists=At,C.shadowMap=Yt,C.state=L,C.info=et}b!==En&&(E=new nv(b,e.width,e.height,a,r,o));let Bt=new xh(C,Y);this.xr=Bt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let B=pe.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=pe.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(B){B!==void 0&&(Z=B,this.setSize(st,X,!1))},this.getSize=function(B){return B.set(st,X)},this.setSize=function(B,K,at=!0){if(Bt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}st=B,X=K,e.width=Math.floor(B*Z),e.height=Math.floor(K*Z),at===!0&&(e.style.width=B+"px",e.style.height=K+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,B,K)},this.getDrawingBufferSize=function(B){return B.set(st*Z,X*Z).floor()},this.setDrawingBufferSize=function(B,K,at){st=B,X=K,Z=at,e.width=Math.floor(B*at),e.height=Math.floor(K*at),this.setViewport(0,0,B,K)},this.setEffects=function(B){if(b===En){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let K=0;K<B.length;K++)if(B[K].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(z)},this.getViewport=function(B){return B.copy(Q)},this.setViewport=function(B,K,at,it){B.isVector4?Q.set(B.x,B.y,B.z,B.w):Q.set(B,K,at,it),L.viewport(z.copy(Q).multiplyScalar(Z).round())},this.getScissor=function(B){return B.copy(dt)},this.setScissor=function(B,K,at,it){B.isVector4?dt.set(B.x,B.y,B.z,B.w):dt.set(B,K,at,it),L.scissor(W.copy(dt).multiplyScalar(Z).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(B){L.setScissorTest(gt=B)},this.setOpaqueSort=function(B){tt=B},this.setTransparentSort=function(B){q=B},this.getClearColor=function(B){return B.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(B=!0,K=!0,at=!0){let it=0;if(B){let rt=!1;if(N!==null){let Ct=N.texture.format;rt=m.has(Ct)}if(rt){let Ct=N.texture.type,Ft=g.has(Ct),Pt=re.getClearColor(),Nt=re.getClearAlpha(),kt=Pt.r,se=Pt.g,ue=Pt.b;Ft?(x[0]=kt,x[1]=se,x[2]=ue,x[3]=Nt,Y.clearBufferuiv(Y.COLOR,0,x)):(_[0]=kt,_[1]=se,_[2]=ue,_[3]=Nt,Y.clearBufferiv(Y.COLOR,0,_))}else it|=Y.COLOR_BUFFER_BIT}K&&(it|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(it|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&Y.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),P=B},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Fn,!1),re.dispose(),At.dispose(),St.dispose(),ot.dispose(),yt.dispose(),ht.dispose(),It.dispose(),mt.dispose(),Mt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",pf),Bt.removeEventListener("sessionend",mf),or.stop()};function Re(B){B.preventDefault(),$u("WebGLRenderer: Context Lost."),I=!0}function ve(){$u("WebGLRenderer: Context Restored."),I=!1;let B=et.autoReset,K=Yt.enabled,at=Yt.autoUpdate,it=Yt.needsUpdate,rt=Yt.type;Ht(),et.autoReset=B,Yt.enabled=K,Yt.autoUpdate=at,Yt.needsUpdate=it,Yt.type=rt}function Fn(B){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function qn(B){let K=B.target;K.removeEventListener("dispose",qn),Tg(K)}function Tg(B){Eg(B),ot.remove(B)}function Eg(B){let K=ot.get(B).programs;K!==void 0&&(K.forEach(function(at){Mt.releaseProgram(at)}),B.isShaderMaterial&&Mt.releaseShaderCache(B))}this.renderBufferDirect=function(B,K,at,it,rt,Ct){K===null&&(K=Oe);let Ft=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Pt=Pg(B,K,at,it,rt);L.setMaterial(it,Ft);let Nt=at.index,kt=1;if(it.wireframe===!0){if(Nt=ct.getWireframeAttribute(at),Nt===void 0)return;kt=2}let se=at.drawRange,ue=at.attributes.position,Ot=se.start*kt,_e=(se.start+se.count)*kt;Ct!==null&&(Ot=Math.max(Ot,Ct.start*kt),_e=Math.min(_e,(Ct.start+Ct.count)*kt)),Nt!==null?(Ot=Math.max(Ot,0),_e=Math.min(_e,Nt.count)):ue!=null&&(Ot=Math.max(Ot,0),_e=Math.min(_e,ue.count));let Xe=_e-Ot;if(Xe<0||Xe===1/0)return;It.setup(rt,it,Pt,at,Nt);let Ce,Ee=wt;if(Nt!==null&&(Ce=_t.get(Nt),Ee=ut,Ee.setIndex(Ce)),rt.isMesh)it.wireframe===!0?(L.setLineWidth(it.wireframeLinewidth*Qt()),Ee.setMode(Y.LINES)):Ee.setMode(Y.TRIANGLES);else if(rt.isLine){let un=it.linewidth;un===void 0&&(un=1),L.setLineWidth(un*Qt()),rt.isLineSegments?Ee.setMode(Y.LINES):rt.isLineLoop?Ee.setMode(Y.LINE_LOOP):Ee.setMode(Y.LINE_STRIP)}else rt.isPoints?Ee.setMode(Y.POINTS):rt.isSprite&&Ee.setMode(Y.TRIANGLES);if(rt.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))Ee.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{let un=rt._multiDrawStarts,Lt=rt._multiDrawCounts,bn=rt._multiDrawCount,xe=Nt?_t.get(Nt).bytesPerElement:1,An=ot.get(it).currentProgram.getUniforms();for(let $n=0;$n<bn;$n++)An.setValue(Y,"_gl_DrawID",$n),Ee.render(un[$n]/xe,Lt[$n])}else if(rt.isInstancedMesh)Ee.renderInstances(Ot,Xe,rt.count);else if(at.isInstancedBufferGeometry){let un=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Lt=Math.min(at.instanceCount,un);Ee.renderInstances(Ot,Xe,Lt)}else Ee.render(Ot,Xe)};function df(B,K,at,it){P!==null&&B.isNodeMaterial&&P.setObject(it,B),vt===!0&&Wt.setState(B,at,!1),B.transparent===!0&&B.side===ge&&B.forceSinglePass===!1?(B.side=an,B.needsUpdate=!0,$s(B,K,it),B.side=ei,B.needsUpdate=!0,$s(B,K,it),B.side=ge):$s(B,K,it)}this.compile=function(B,K,at=null){at===null&&(at=B),P!==null&&P.renderStart(B,K,at),w=St.get(at),w.init(K),v.push(w),at.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(w.pushLight(rt),rt.castShadow&&w.pushShadow(rt))}),B!==at&&B.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(w.pushLight(rt),rt.castShadow&&w.pushShadow(rt))}),w.setupLights(),P!==null&&P.updateLights(w.state.lightsArray),Et=this.localClippingEnabled,vt=Wt.init(this.clippingPlanes,Et),vt===!0&&Wt.setGlobalState(this.clippingPlanes,K),P!==null&&Yt.render(w.state.shadowsArray,at,K);let it=new Set;return B.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;let Ct=rt.material;if(Ct)if(Array.isArray(Ct))for(let Ft=0;Ft<Ct.length;Ft++){let Pt=Ct[Ft];df(Pt,at,K,rt),it.add(Pt)}else df(Ct,at,K,rt),it.add(Ct)}),w=v.pop(),P!==null&&P.renderEnd(),it},this.compileAsync=function(B,K,at=null){let it=this.compile(B,K,at);return new Promise(rt=>{function Ct(){if(it.forEach(function(Ft){let Nt=ot.get(Ft).currentProgram;(Nt===void 0||Nt.isReady())&&it.delete(Ft)}),it.size===0){rt(B);return}setTimeout(Ct,10)}pe.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Dc=null;function Ag(B){Dc&&Dc(B)}function pf(){or.stop()}function mf(){or.start()}let or=new Wp;or.setAnimationLoop(Ag),typeof self<"u"&&or.setContext(self),this.setAnimationLoop=function(B){Dc=B,Bt.setAnimationLoop(B),B===null?or.stop():or.start()},Bt.addEventListener("sessionstart",pf),Bt.addEventListener("sessionend",mf),this.render=function(B,K){if(K!==void 0&&K.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(B,K);let at=Bt.enabled===!0&&Bt.isPresenting===!0,it=E!==null&&(N===null||at)&&E.begin(C,N);if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(K),K=Bt.getCamera()),B.isScene===!0&&B.onBeforeRender(C,B,K,N),w=St.get(B,v.length),w.init(K),w.state.textureUnits=lt.getTextureUnits(),v.push(w),xt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),bt.setFromProjectionMatrix(xt,zn,K.reversedDepth),Et=this.localClippingEnabled,vt=Wt.init(this.clippingPlanes,Et),M=At.get(B,R.length),M.init(),R.push(M),Bt.enabled===!0&&Bt.isPresenting===!0){let Ft=C.xr.getDepthSensingMesh();Ft!==null&&Nc(Ft,K,-1/0,C.sortObjects)}Nc(B,K,0,C.sortObjects),M.finish(),P!==null&&P.updateLights(w.state.lightsArray),C.sortObjects===!0&&M.sort(tt,q),de=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,de&&re.addToRenderList(M,B),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Wt.beginShadows();let rt=w.state.shadowsArray;if(Yt.render(rt,B,K),vt===!0&&Wt.endShadows(),(it&&E.hasRenderPass())===!1){let Ft=M.opaque,Pt=M.transmissive;if(w.setupLights(),K.isArrayCamera){let Nt=K.cameras;if(Pt.length>0)for(let kt=0,se=Nt.length;kt<se;kt++){let ue=Nt[kt];bf(Ft,Pt,B,ue)}de&&re.render(B);for(let kt=0,se=Nt.length;kt<se;kt++){let ue=Nt[kt];gf(M,B,ue,ue.viewport)}}else Pt.length>0&&bf(Ft,Pt,B,K),de&&re.render(B),gf(M,B,K)}N!==null&&T===0&&(lt.updateMultisampleRenderTarget(N),lt.updateRenderTargetMipmap(N)),it&&E.end(C),B.isScene===!0&&B.onAfterRender(C,B,K),It.resetDefaultState(),U=-1,k=null,v.pop(),v.length>0?(w=v[v.length-1],lt.setTextureUnits(w.state.textureUnits),vt===!0&&Wt.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,P!==null&&P.renderEnd()};function Nc(B,K,at,it){if(B.visible===!1)return;if(B.layers.test(K.layers)){if(B.isGroup)at=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(K);else if(B.isLightProbeGrid)w.pushLightProbeGrid(B);else if(B.isLight)w.pushLight(B),B.castShadow&&w.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(bt)){it&&Se.setFromMatrixPosition(B.matrixWorld).applyMatrix4(xt);let Ft=ht.update(B),Pt=B.material;Pt.visible&&M.push(B,Ft,Pt,at,Se.z,null,K)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||B.intersectsFrustum(bt))){let Ft=ht.update(B),Pt=B.material;if(it&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),Se.copy(B.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Se.copy(Ft.boundingSphere.center)),Se.applyMatrix4(B.matrixWorld).applyMatrix4(xt)),Array.isArray(Pt)){let Nt=Ft.groups;for(let kt=0,se=Nt.length;kt<se;kt++){let ue=Nt[kt],Ot=Pt[ue.materialIndex];Ot&&Ot.visible&&M.push(B,Ft,Ot,at,Se.z,ue,K)}}else Pt.visible&&M.push(B,Ft,Pt,at,Se.z,null,K)}}let Ct=B.children;for(let Ft=0,Pt=Ct.length;Ft<Pt;Ft++)Nc(Ct[Ft],K,at,it)}function gf(B,K,at,it){let{opaque:rt,transmissive:Ct,transparent:Ft}=B;w.setupLightsView(at),vt===!0&&Wt.setGlobalState(C.clippingPlanes,at),it&&L.viewport(z.copy(it)),rt.length>0&&qs(rt,K,at),Ct.length>0&&qs(Ct,K,at),Ft.length>0&&qs(Ft,K,at),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function bf(B,K,at,it){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[it.id]===void 0){let Ot=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[it.id]=new Qe(1,1,{generateMipmaps:!0,type:Ot?Hn:En,minFilter:qi,samples:Math.max(4,V.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Ct=w.state.transmissionRenderTarget[it.id],Ft=it.viewport||z;Ct.setSize(Ft.z*C.transmissionResolutionScale,Ft.w*C.transmissionResolutionScale);let Pt=C.getRenderTarget(),Nt=C.getActiveCubeFace(),kt=C.getActiveMipmapLevel();C.setRenderTarget(Ct),C.getClearColor(H),j=C.getClearAlpha(),j<1&&C.setClearColor(16777215,.5),C.clear(),de&&re.render(at);let se=C.toneMapping;C.toneMapping=Vn;let ue=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),w.setupLightsView(it),vt===!0&&Wt.setGlobalState(C.clippingPlanes,it),qs(B,at,it),lt.updateMultisampleRenderTarget(Ct),lt.updateRenderTargetMipmap(Ct),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let _e=0,Xe=K.length;_e<Xe;_e++){let Ce=K[_e],{object:Ee,geometry:un,material:Lt,group:bn}=Ce;if(Lt.side===ge&&Ee.layers.test(it.layers)){let xe=Lt.side;Lt.side=an,Lt.needsUpdate=!0,xf(Ee,at,it,un,Lt,bn),Lt.side=xe,Lt.needsUpdate=!0,Ot=!0}}Ot===!0&&(lt.updateMultisampleRenderTarget(Ct),lt.updateRenderTargetMipmap(Ct))}C.setRenderTarget(Pt,Nt,kt),C.setClearColor(H,j),ue!==void 0&&(it.viewport=ue),C.toneMapping=se}function qs(B,K,at){let it=K.isScene===!0?K.overrideMaterial:null;for(let rt=0,Ct=B.length;rt<Ct;rt++){let Ft=B[rt],{object:Pt,geometry:Nt,group:kt}=Ft,se=Ft.material;se.allowOverride===!0&&it!==null&&(se=it),Pt.layers.test(at.layers)&&xf(Pt,K,at,Nt,se,kt)}}function xf(B,K,at,it,rt,Ct){P!==null&&rt.isNodeMaterial&&P.setObject(B,rt),B.onBeforeRender(C,K,at,it,rt,Ct),B.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),rt.onBeforeRender(C,K,at,it,B,Ct),rt.transparent===!0&&rt.side===ge&&rt.forceSinglePass===!1?(rt.side=an,rt.needsUpdate=!0,C.renderBufferDirect(at,K,it,rt,B,Ct),rt.side=ei,rt.needsUpdate=!0,C.renderBufferDirect(at,K,it,rt,B,Ct),rt.side=ge):C.renderBufferDirect(at,K,it,rt,B,Ct),B.onAfterRender(C,K,at,it,rt,Ct)}function $s(B,K,at){K.isScene!==!0&&(K=Oe);let it=ot.get(B),rt=w.state.lights,Ct=w.state.shadowsArray,Ft=rt.state.version,Pt=Mt.getParameters(B,rt.state,Ct,K,at,w.state.lightProbeGridArray),Nt=Mt.getProgramCacheKey(Pt),kt=it.programs;it.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?K.environment:null,it.fog=K.fog;let se=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;it.envMap=yt.get(B.envMap||it.environment,se),it.envMapRotation=it.environment!==null&&B.envMap===null?K.environmentRotation:B.envMapRotation,kt===void 0&&(B.addEventListener("dispose",qn),kt=new Map,it.programs=kt);let ue=kt.get(Nt);if(ue!==void 0){if(it.currentProgram===ue&&it.lightsStateVersion===Ft)return vf(B,Pt),ue}else Pt.uniforms=Mt.getUniforms(B),P!==null&&B.isNodeMaterial&&P.build(B,at,Pt),B.onBeforeCompile(Pt,C),ue=Mt.acquireProgram(Pt,Nt),kt.set(Nt,ue),it.uniforms=Pt.uniforms;let Ot=it.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Ot.clippingPlanes=Wt.uniform),vf(B,Pt),it.needsLights=Ig(B),it.lightsStateVersion=Ft,it.needsLights&&(Ot.ambientLightColor.value=rt.state.ambient,Ot.lightProbe.value=rt.state.probe,Ot.sunLights.value=rt.state.sun,Ot.sunLightShadows.value=rt.state.sunShadow,Ot.directionalLights.value=rt.state.directional,Ot.directionalLightShadows.value=rt.state.directionalShadow,Ot.spotLights.value=rt.state.spot,Ot.spotLightShadows.value=rt.state.spotShadow,Ot.rectAreaLights.value=rt.state.rectArea,Ot.ltc_1.value=rt.state.rectAreaLTC1,Ot.ltc_2.value=rt.state.rectAreaLTC2,Ot.pointLights.value=rt.state.point,Ot.pointLightShadows.value=rt.state.pointShadow,Ot.hemisphereLights.value=rt.state.hemi,Ot.sunShadowMatrix.value=rt.state.sunShadowMatrix,Ot.sunShadowCascade.value=rt.state.sunShadowCascade,Ot.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,Ot.spotLightMatrix.value=rt.state.spotLightMatrix,Ot.spotLightMap.value=rt.state.spotLightMap,Ot.pointShadowMatrix.value=rt.state.pointShadowMatrix),it.lightProbeGrid=w.state.lightProbeGridArray.length>0,it.currentProgram=ue,it.uniformsList=null,ue}function yf(B){if(B.uniformsList===null){let K=B.currentProgram.getUniforms();B.uniformsList=bo.seqWithValue(K.seq,B.uniforms)}return B.uniformsList}function vf(B,K){let at=ot.get(B);at.outputColorSpace=K.outputColorSpace,at.batching=K.batching,at.batchingColor=K.batchingColor,at.instancing=K.instancing,at.instancingColor=K.instancingColor,at.instancingMorph=K.instancingMorph,at.skinning=K.skinning,at.morphTargets=K.morphTargets,at.morphNormals=K.morphNormals,at.morphColors=K.morphColors,at.morphTargetsCount=K.morphTargetsCount,at.numClippingPlanes=K.numClippingPlanes,at.numIntersection=K.numClipIntersection,at.vertexAlphas=K.vertexAlphas,at.vertexTangents=K.vertexTangents,at.toneMapping=K.toneMapping}function Rg(B,K){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;y.setFromMatrixPosition(K.matrixWorld);for(let at=0,it=B.length;at<it;at++){let rt=B[at];if(rt.texture!==null&&rt.boundingBox.containsPoint(y))return rt}return null}function Pg(B,K,at,it,rt){K.isScene!==!0&&(K=Oe),lt.resetTextureUnits();let Ct=K.fog,Ft=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?K.environment:null,Pt=N===null?C.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:he.workingColorSpace,Nt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,kt=yt.get(it.envMap||Ft,Nt),se=it.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ue=!!at.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ot=!!at.morphAttributes.position,_e=!!at.morphAttributes.normal,Xe=!!at.morphAttributes.color,Ce=Vn;it.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ce=C.toneMapping);let Ee=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,un=Ee!==void 0?Ee.length:0,Lt=ot.get(it),bn=w.state.lights;if(vt===!0&&(Et===!0||B!==k)){let Pe=B===k&&it.id===U;Wt.setState(it,B,Pe)}let xe=!1;it.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==bn.state.version||Lt.outputColorSpace!==Pt||rt.isBatchedMesh&&Lt.batching===!1||!rt.isBatchedMesh&&Lt.batching===!0||rt.isBatchedMesh&&Lt.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&Lt.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&Lt.instancing===!1||!rt.isInstancedMesh&&Lt.instancing===!0||rt.isSkinnedMesh&&Lt.skinning===!1||!rt.isSkinnedMesh&&Lt.skinning===!0||rt.isInstancedMesh&&Lt.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Lt.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Lt.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Lt.instancingMorph===!1&&rt.morphTexture!==null||Lt.envMap!==kt||it.fog===!0&&Lt.fog!==Ct||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Wt.numPlanes||Lt.numIntersection!==Wt.numIntersection)||Lt.vertexAlphas!==se||Lt.vertexTangents!==ue||Lt.morphTargets!==Ot||Lt.morphNormals!==_e||Lt.morphColors!==Xe||Lt.toneMapping!==Ce||Lt.morphTargetsCount!==un||!!Lt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Lt.__version=it.version);let An=Lt.currentProgram;xe===!0&&(An=$s(it,K,rt),P&&it.isNodeMaterial&&P.onUpdateProgram(it,An,Lt));let $n=!1,Ai=!1,Or=!1,Te=An.getUniforms(),We=Lt.uniforms;if(L.useProgram(An.program)&&($n=!0,Ai=!0,Or=!0),it.id!==U&&(U=it.id,Ai=!0),Lt.needsLights){let Pe=Rg(w.state.lightProbeGridArray,rt);Lt.lightProbeGrid!==Pe&&(Lt.lightProbeGrid=Pe,Ai=!0)}if($n||k!==B){L.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),Te.setValue(Y,"projectionMatrix",B.projectionMatrix),Te.setValue(Y,"viewMatrix",B.matrixWorldInverse);let Pi=Te.map.cameraPosition;Pi!==void 0&&Pi.setValue(Y,Vt.setFromMatrixPosition(B.matrixWorld)),V.logarithmicDepthBuffer&&Te.setValue(Y,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Te.setValue(Y,"isOrthographic",B.isOrthographicCamera===!0),k!==B&&(k=B,Ai=!0,Or=!0)}if(Lt.needsLights&&(bn.state.sunShadowMap.length>0&&Te.setValue(Y,"sunShadowMap",bn.state.sunShadowMap,lt),bn.state.directionalShadowMap.length>0&&Te.setValue(Y,"directionalShadowMap",bn.state.directionalShadowMap,lt),bn.state.spotShadowMap.length>0&&Te.setValue(Y,"spotShadowMap",bn.state.spotShadowMap,lt),bn.state.pointShadowMap.length>0&&Te.setValue(Y,"pointShadowMap",bn.state.pointShadowMap,lt)),rt.isSkinnedMesh){Te.setOptional(Y,rt,"bindMatrix"),Te.setOptional(Y,rt,"bindMatrixInverse");let Pe=rt.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Te.setValue(Y,"boneTexture",Pe.boneTexture,lt))}rt.isBatchedMesh&&(Te.setOptional(Y,rt,"batchingTexture"),Te.setValue(Y,"batchingTexture",rt._matricesTexture,lt),Te.setOptional(Y,rt,"batchingIdTexture"),Te.setValue(Y,"batchingIdTexture",rt._indirectTexture,lt),Te.setOptional(Y,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Te.setValue(Y,"batchingColorTexture",rt._colorsTexture,lt));let Ri=at.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&J.update(rt,at,An),(Ai||Lt.receiveShadow!==rt.receiveShadow)&&(Lt.receiveShadow=rt.receiveShadow,Te.setValue(Y,"receiveShadow",rt.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&K.environment!==null&&(We.envMapIntensity.value=K.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=G_()),Ai){if(Te.setValue(Y,"toneMappingExposure",C.toneMappingExposure),Lt.needsLights&&Cg(We,Or),Ct&&it.fog===!0&&Gt.refreshFogUniforms(We,Ct),Gt.refreshMaterialUniforms(We,it,Z,X,w.state.transmissionRenderTarget[B.id]),Lt.needsLights&&Lt.lightProbeGrid){let Pe=Lt.lightProbeGrid;We.probesSH.value=Pe.texture,We.probesMin.value.copy(Pe.boundingBox.min),We.probesMax.value.copy(Pe.boundingBox.max),We.probesResolution.value.copy(Pe.resolution)}bo.upload(Y,yf(Lt),We,lt)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(bo.upload(Y,yf(Lt),We,lt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Te.setValue(Y,"center",rt.center),Te.setValue(Y,"modelViewMatrix",rt.modelViewMatrix),Te.setValue(Y,"normalMatrix",rt.normalMatrix),Te.setValue(Y,"modelMatrix",rt.matrixWorld),it.uniformsGroups!==void 0){let Pe=it.uniformsGroups;for(let Pi=0,Ur=Pe.length;Pi<Ur;Pi++){let Mf=Pe[Pi];mt.update(Mf,An),mt.bind(Mf,An)}}return An}function Cg(B,K){B.ambientLightColor.needsUpdate=K,B.lightProbe.needsUpdate=K,B.sunLights.needsUpdate=K,B.sunLightShadows.needsUpdate=K,B.directionalLights.needsUpdate=K,B.directionalLightShadows.needsUpdate=K,B.pointLights.needsUpdate=K,B.pointLightShadows.needsUpdate=K,B.spotLights.needsUpdate=K,B.spotLightShadows.needsUpdate=K,B.rectAreaLights.needsUpdate=K,B.hemisphereLights.needsUpdate=K}function Ig(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(B,K,at){let it=ot.get(B);it.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),ot.get(B.texture).__webglTexture=K,ot.get(B.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:at,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,K){let at=ot.get(B);at.__webglFramebuffer=K,at.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(B,K=0,at=0){N=B,A=K,T=at;let it=null,rt=!1,Ct=!1;if(B){let Pt=ot.get(B);if(Pt.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(Y.FRAMEBUFFER,Pt.__webglFramebuffer),z.copy(B.viewport),W.copy(B.scissor),G=B.scissorTest,L.viewport(z),L.scissor(W),L.setScissorTest(G),U=-1;return}else if(Pt.__webglFramebuffer===void 0)lt.setupRenderTarget(B);else if(Pt.__hasExternalTextures)lt.rebindTextures(B,ot.get(B.texture).__webglTexture,ot.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let se=B.depthTexture;if(Pt.__boundDepthTexture!==se){if(se!==null&&ot.has(se)&&(B.width!==se.image.width||B.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(B)}}let Nt=B.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Ct=!0);let kt=ot.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(kt[K])?it=kt[K][at]:it=kt[K],rt=!0):B.samples>0&&lt.useMultisampledRTT(B)===!1?it=ot.get(B).__webglMultisampledFramebuffer:Array.isArray(kt)?it=kt[at]:it=kt,z.copy(B.viewport),W.copy(B.scissor),G=B.scissorTest}else z.copy(Q).multiplyScalar(Z).floor(),W.copy(dt).multiplyScalar(Z).floor(),G=gt;if(at!==0&&(it=D),L.bindFramebuffer(Y.FRAMEBUFFER,it)&&L.drawBuffers(B,it),L.viewport(z),L.scissor(W),L.setScissorTest(G),rt){let Pt=ot.get(B.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pt.__webglTexture,at)}else if(Ct){let Pt=K;for(let Nt=0;Nt<B.textures.length;Nt++){let kt=ot.get(B.textures[Nt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Nt,kt.__webglTexture,at,Pt)}}else if(B!==null&&at!==0){let Pt=ot.get(B.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Pt.__webglTexture,at)}U=-1};function _f(B){let K=ot.get(B);return(K.__readFormat!==B.format||K.__readType!==B.type)&&(K.__readFormat=B.format,K.__readType=B.type,K.__formatReadable=V.textureFormatReadable(B.format),K.__typeReadable=V.textureTypeReadable(B.type)),K}this.readRenderTargetPixels=function(B,K,at,it,rt,Ct,Ft,Pt=0){if(!(B&&B.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=ot.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt){L.bindFramebuffer(Y.FRAMEBUFFER,Nt);try{let kt=B.textures[Pt],se=kt.format,ue=kt.type;B.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Pt);let Ot=_f(kt);if(Ot.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=B.width-it&&at>=0&&at<=B.height-rt&&Y.readPixels(K,at,it,rt,Tt.convert(se),Tt.convert(ue),Ct)}finally{let kt=N!==null?ot.get(N).__webglFramebuffer:null;L.bindFramebuffer(Y.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(B,K,at,it,rt,Ct,Ft,Pt=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=ot.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt)if(K>=0&&K<=B.width-it&&at>=0&&at<=B.height-rt){L.bindFramebuffer(Y.FRAMEBUFFER,Nt);let kt=B.textures[Pt],se=kt.format,ue=kt.type;B.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Pt);let Ot=_f(kt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _e=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,_e),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ct.byteLength,Y.STREAM_READ),Y.readPixels(K,at,it,rt,Tt.convert(se),Tt.convert(ue),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let Xe=N!==null?ot.get(N).__webglFramebuffer:null;L.bindFramebuffer(Y.FRAMEBUFFER,Xe);let Ce=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await fp(Y,Ce,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,_e),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ct),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(_e),Y.deleteSync(Ce),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,K=null,at=0){let it=Math.pow(2,-at),rt=Math.floor(B.image.width*it),Ct=Math.floor(B.image.height*it),Ft=K!==null?K.x:0,Pt=K!==null?K.y:0;lt.setTexture2D(B,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,at,0,0,Ft,Pt,rt,Ct),L.unbindTexture()},this.copyTextureToTexture=function(B,K,at=null,it=null,rt=0,Ct=0){let Ft,Pt,Nt,kt,se,ue,Ot,_e,Xe,Ce=B.isCompressedTexture?B.mipmaps[Ct]:B.image;if(at!==null)Ft=at.max.x-at.min.x,Pt=at.max.y-at.min.y,Nt=at.isBox3?at.max.z-at.min.z:1,kt=at.min.x,se=at.min.y,ue=at.isBox3?at.min.z:0;else{let We=Math.pow(2,-rt);Ft=Math.floor(Ce.width*We),Pt=Math.floor(Ce.height*We),B.isDataArrayTexture?Nt=Ce.depth:B.isData3DTexture?Nt=Math.floor(Ce.depth*We):Nt=1,kt=0,se=0,ue=0}it!==null?(Ot=it.x,_e=it.y,Xe=it.z):(Ot=0,_e=0,Xe=0);let Ee=Tt.convert(K.format),un=Tt.convert(K.type),Lt;K.isData3DTexture?(lt.setTexture3D(K,0),Lt=Y.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(lt.setTexture2DArray(K,0),Lt=Y.TEXTURE_2D_ARRAY):(lt.setTexture2D(K,0),Lt=Y.TEXTURE_2D),L.activeTexture(Y.TEXTURE0),L.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),L.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),L.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment);let bn=L.getParameter(Y.UNPACK_ROW_LENGTH),xe=L.getParameter(Y.UNPACK_IMAGE_HEIGHT),An=L.getParameter(Y.UNPACK_SKIP_PIXELS),$n=L.getParameter(Y.UNPACK_SKIP_ROWS),Ai=L.getParameter(Y.UNPACK_SKIP_IMAGES);L.pixelStorei(Y.UNPACK_ROW_LENGTH,Ce.width),L.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ce.height),L.pixelStorei(Y.UNPACK_SKIP_PIXELS,kt),L.pixelStorei(Y.UNPACK_SKIP_ROWS,se),L.pixelStorei(Y.UNPACK_SKIP_IMAGES,ue);let Or=B.isDataArrayTexture||B.isData3DTexture,Te=K.isDataArrayTexture||K.isData3DTexture;if(B.isDepthTexture){let We=ot.get(B),Ri=ot.get(K),Pe=ot.get(We.__renderTarget),Pi=ot.get(Ri.__renderTarget);L.bindFramebuffer(Y.READ_FRAMEBUFFER,Pe.__webglFramebuffer),L.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Ur=0;Ur<Nt;Ur++)Or&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ot.get(B).__webglTexture,rt,ue+Ur),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ot.get(K).__webglTexture,Ct,Xe+Ur)),Y.blitFramebuffer(kt,se,Ft,Pt,Ot,_e,Ft,Pt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);L.bindFramebuffer(Y.READ_FRAMEBUFFER,null),L.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(rt!==0||B.isRenderTargetTexture||ot.has(B)){let We=ot.get(B),Ri=ot.get(K);L.bindFramebuffer(Y.READ_FRAMEBUFFER,S),L.bindFramebuffer(Y.DRAW_FRAMEBUFFER,F);for(let Pe=0;Pe<Nt;Pe++)Or?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,We.__webglTexture,rt,ue+Pe):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,We.__webglTexture,rt),Te?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ri.__webglTexture,Ct,Xe+Pe):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ri.__webglTexture,Ct),rt!==0?Y.blitFramebuffer(kt,se,Ft,Pt,Ot,_e,Ft,Pt,Y.COLOR_BUFFER_BIT,Y.NEAREST):Te?Y.copyTexSubImage3D(Lt,Ct,Ot,_e,Xe+Pe,kt,se,Ft,Pt):Y.copyTexSubImage2D(Lt,Ct,Ot,_e,kt,se,Ft,Pt);L.bindFramebuffer(Y.READ_FRAMEBUFFER,null),L.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Te?B.isDataTexture||B.isData3DTexture?Y.texSubImage3D(Lt,Ct,Ot,_e,Xe,Ft,Pt,Nt,Ee,un,Ce.data):K.isCompressedArrayTexture?Y.compressedTexSubImage3D(Lt,Ct,Ot,_e,Xe,Ft,Pt,Nt,Ee,Ce.data):Y.texSubImage3D(Lt,Ct,Ot,_e,Xe,Ft,Pt,Nt,Ee,un,Ce):B.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ct,Ot,_e,Ft,Pt,Ee,un,Ce.data):B.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ct,Ot,_e,Ce.width,Ce.height,Ee,Ce.data):Y.texSubImage2D(Y.TEXTURE_2D,Ct,Ot,_e,Ft,Pt,Ee,un,Ce);L.pixelStorei(Y.UNPACK_ROW_LENGTH,bn),L.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,xe),L.pixelStorei(Y.UNPACK_SKIP_PIXELS,An),L.pixelStorei(Y.UNPACK_SKIP_ROWS,$n),L.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ai),Ct===0&&K.generateMipmaps&&Y.generateMipmap(Lt),L.unbindTexture()},this.initRenderTarget=function(B){ot.get(B).__webglFramebuffer===void 0&&lt.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?lt.setTextureCube(B,0):B.isData3DTexture?lt.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?lt.setTexture2DArray(B,0):lt.setTexture2D(B,0),L.unbindTexture()},this.resetState=function(){A=0,T=0,N=null,L.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};function Kp(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function Jp(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let o=t[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function ln(i,t){if(i.length===0)return 0;if(t<=i[0][0])return i[0][1];let e=i[i.length-1];if(t>=e[0])return e[1];for(let n=0;n+1<i.length;n++){let r=i[n],o=i[n+1];if(t>o[0])continue;let s=(t-r[0])/(o[0]-r[0]);return r[1]+(o[1]-r[1])*s}return e[1]}function Ss(i,t){if(!i.length)return;let e=jp([0,t,...i.flatMap(o=>o.map(([s])=>s))],t),n=[];for(let o=0;o+1<e.length;o++){let s=e[o],a=e[o+1];if(a-s<1e-9)continue;let l=i.filter(c=>c[0][0]<=s+1e-7&&c[c.length-1][0]>=a-1e-7);for(let c=0;c<l.length;c++)for(let h=c+1;h<l.length;h++){let u=ln(l[c],s)-ln(l[h],s),f=ln(l[c],a)-ln(l[h],a);if(u*f>=-1e-12||Math.abs(u-f)<1e-12)continue;let d=s+(a-s)*u/(u-f);d>s+1e-8&&d<a-1e-8&&n.push(d)}}let r=jp([...e,...n],t).map(o=>{let s=i.filter(a=>o>=a[0][0]-1e-7&&o<=a[a.length-1][0]+1e-7).map(a=>ln(a,o));return[o,Math.min(...s)]});return r.length>=2?r:void 0}function Qp(i,t){let e=i[i.length-1]?.[0]??0;return i.map(([n,r],o)=>[o===i.length-1?t:n/e*t,r])}function jp(i,t){let e=i.map(n=>Math.abs(n)<=1e-8?0:Math.abs(n-t)<=1e-8?t:Math.min(t,Math.max(0,n))).sort((n,r)=>n-r);return e.filter((n,r)=>r===0||n-e[r-1]>1e-8)}function Er(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],o=n*n+r*r,s=o>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/o)):0;return i.h0+(i.h1-i.h0)*s}var Le=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ki=(i,t)=>[i[0]+t[0],i[1]+t[1]],oi=(i,t)=>[i[0]*t,i[1]*t],Tr=(i,t)=>i[0]*t[0]+i[1]*t[1],yo=(i,t)=>i[0]*t[1]-i[1]*t[0],_i=i=>Math.hypot(i[0],i[1]),In=i=>{let t=_i(i)||1;return[i[0]/t,i[1]/t]},t0=i=>[-i[1],i[0]],e0=i=>[i[1],-i[0]];function si(i,t,e=[]){let n=t.eps??.005,r=[],o=e.filter(P=>Math.hypot(P.b[0]-P.a[0],P.b[1]-P.a[1])>.05),s=[],a=P=>{for(let D=0;D<s.length;D++)if(Math.abs(s[D][0]-P[0])<=n&&Math.abs(s[D][1]-P[1])<=n)return D;return s.push([P[0],P[1]]),s.length-1},l=[];for(let P of i){let D=P.points;if(D.length<3||Math.abs(xn(D))<1e-6)continue;let S=xn(D)>0,F=D.map(a);for(let A=0;A<D.length;A++){let T=F[A],N=F[(A+1)%D.length];T!==N&&l.push(S?{u:T,v:N,room:P.id,edge:A,forward:!0}:{u:N,v:T,room:P.id,edge:A,forward:!1})}}let c=o.map(P=>[a(P.a),a(P.b)]),h=new Set;for(let P of i){let D=P.points;D.length<3||(P.wall_splits??[]).forEach((S,F)=>{if(!S||F>=D.length)return;let A=D[F],T=Le(D[(F+1)%D.length],A),N=_i(T);for(let U of S)U>n&&U<N-n&&h.add(a(Ki(A,oi(T,U/N))))})}let u=[];for(let P of l){let D=s[P.u],S=s[P.v],F=Le(S,D),A=_i(F),T=oi(F,1/A),N=[];for(let k=0;k<s.length;k++){if(k===P.u||k===P.v)continue;let z=Le(s[k],D),W=Tr(z,T);W<=n||W>=A-n||Math.abs(yo(T,z))<=n&&N.push({t:W,id:k})}N.sort((k,z)=>k.t-z.t);let U=[{t:0,id:P.u},...N,{t:A,id:P.v}];for(let k=0;k+1<U.length;k++){let z=U[k],W=U[k+1],G=P.forward?z.t:A-W.t,H=P.forward?W.t:A-z.t;u.push({u:z.id,v:W.id,room:P.room,edge:P.edge,t0:G,t1:H})}}let f=new Map;for(let P of u){let D=P.u<P.v?`${P.u}-${P.v}`:`${P.v}-${P.u}`,S=f.get(D);S||f.set(D,S=[]),S.push(P)}let d=P=>({room_id:P.room,edge:P.edge,t0:P.t0,t1:P.t1}),p=new Map;for(let P of u){let D=`${P.room}:${P.edge}`;p.set(D,[...p.get(D)??[],P.t0].sort((S,F)=>S-F))}let b=P=>{let D=i.find(F=>F.id===P.room)?.wall_heights?.[P.edge];if(!Array.isArray(D))return D;let S=p.get(`${P.room}:${P.edge}`)??[];return D[S.indexOf(P.t0)]??null},m=new Map(i.map(P=>[P.id,P])),g=(P,D,S)=>{let F=Le(S,D),A=_i(F);if(A<=1e-8)return;let T=oi(F,1/A),N=[],U=!1;for(let k of P){let z=m.get(k.room);if(!z)continue;let W=z.points[k.edge],G=z.points[(k.edge+1)%z.points.length],H=Le(G,W),j=_i(H),st=z.wall_profiles?.[k.edge];if(st&&Math.abs(st[st.length-1][0]-j)<=1e-4){U=!0;let tt=[k.t0,k.t1,...st.map(([q])=>q).filter(q=>q>k.t0+1e-8&&q<k.t1-1e-8)].map(q=>{let Q=[W[0]+H[0]*q/j,W[1]+H[1]*q/j];return[Math.max(0,Math.min(A,Tr(Le(Q,D),T))),ln(st,q)]});tt.sort((q,Q)=>q[0]-Q[0]),tt.length>=2&&(tt[0]=[0,tt[0][1]],tt[tt.length-1]=[A,tt[tt.length-1][1]],N.push(tt))}let X=b(k);typeof X=="number"&&X>0&&N.push(yh(A,X)),typeof z.ceiling_height=="number"&&z.ceiling_height>0&&N.push(yh(A,z.ceiling_height))}return U?Ss(N,A):void 0},x=P=>{let D=P.map(b).filter(F=>typeof F=="number"&&F>0);if(D.length)return Math.min(...D);let S=P.map(F=>i.find(A=>A.id===F.room)?.ceiling_height);return S.every(F=>typeof F=="number"&&F>0)?Math.max(...S):void 0},_=P=>{let D=P.map(S=>i.find(F=>F.id===S.room)?.wall_thickness?.[S.edge]).filter(S=>typeof S=="number"&&S>0);return D.length?Math.max(...D):void 0},y=P=>{for(let D of P){let S=i.find(N=>N.id===D.room),F=S?.wall_slopes?.[D.edge];if(!S||!F)continue;let A=S.points[D.edge],T=S.points[(D.edge+1)%S.points.length];return{p:[A[0],A[1]],q:[T[0],T[1]],h0:Math.max(.05,F[0]),h1:Math.max(.05,F[1])}}},M=P=>P.some(D=>b(D)===0),w=P=>{let D=y(P);return D?{height:Math.max(D.h0,D.h1),slope:D}:{height:x(P)}},R=[],v=[];for(let P of f.values()){let D=P[0],S=P.find(F=>F!==D&&F.u===D.v&&F.v===D.u&&F.room!==D.room);for(let F of P)F!==D&&F!==S&&F.room!==D.room&&r.push(`overlap:${D.room}:${F.room}`);if(M(S?[D,S]:[D])){S&&R.push([D.room,S.room]);continue}if(S){let F=_([D,S])??t.interior;v.push({a:D.u,b:D.v,left:F/2,right:F/2,exterior:!1,roomLeft:D.room,roomRight:S.room,sources:[d(D),d(S)],...w([D,S]),profile:g([D,S],s[D.u],s[D.v])})}else v.push({a:D.u,b:D.v,left:0,right:_([D])??t.exterior,exterior:!0,roomLeft:D.room,roomRight:null,sources:[d(D)],...w([D]),profile:g([D],s[D.u],s[D.v])})}let E=P=>In(Le(s[P.b],s[P.a]));for(let P of v){if(P.exterior||P.free)continue;let D=new Set;for(let F of[P.a,P.b])for(let A of v)!A.exterior||A.free||A.a!==F&&A.b!==F||Math.abs(yo(E(P),E(A)))>1e-6||(A.roomLeft===P.roomLeft?D.add("left"):A.roomLeft===P.roomRight&&D.add("right"));if(D.size!==1)continue;let S=P.left+P.right;D.has("left")?(P.left=0,P.right=S):(P.left=S,P.right=0)}o.forEach((P,D)=>{let[S,F]=c[D];if(S===F)return;let A=[(P.a[0]+P.b[0])/2,(P.a[1]+P.b[1])/2],T=i.find(W=>W.points.length>=3&&te(A,W.points))?.id??null,N=(P.thickness??t.interior)/2,U=typeof P.height=="number"&&P.height>0?P.height:void 0,k=_i(Le(s[F],s[S])),z=P.wall_profile?Ss([Qp(P.wall_profile,k),...U!==void 0?[yh(k,U)]:[]],k):void 0;v.push({free:P.id,a:S,b:F,left:N,right:N,exterior:!1,roomLeft:T,roomRight:T,sources:[],height:U,profile:z})}),v=H_(v,s,h);let C=Y_(v,s);return{walls:v.map((P,D)=>{let S=s[P.a],F=s[P.b],A=C.get(`${D}:a`),T=C.get(`${D}:b`),N=q_([A.right,T.left,F,T.right,A.left,S],1e-6);return{id:W_(S,F),a:[S[0],S[1]],b:[F[0],F[1]],left:P.left,right:P.right,exterior:P.exterior,roomLeft:P.roomLeft,roomRight:P.roomRight,sources:P.sources,footprint:N,...P.free?{free:P.free}:{},...P.height!==void 0?{height:P.height}:{},...P.profile?{profile:P.profile}:{},...P.slope?{slope:P.slope}:{}}}),warnings:[...new Set(r)],open:R}}function W_(i,t){let e=o=>Math.round(o*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function yh(i,t){return[[0,t],[i,t]]}function n0(i){let t=i.profile?.[i.profile.length-1]?.[0]??0,e=i.profile?[...i.profile].reverse().map(([n,r])=>[t-n,r]):void 0;return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft,profile:e}}function H_(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||e.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=n0(l)),c.a!==s&&(c=n0(c)),l.a===c.b)continue;let h=In(Le(t[l.b],t[l.a])),u=In(Le(t[c.b],t[c.a]));if(Math.abs(yo(h,u))>1e-6||Tr(h,u)<=0||l.free||c.free||!!l.profile!=!!c.profile||l.profile&&c.profile&&Math.abs(l.profile[l.profile.length-1][1]-c.profile[0][1])>1e-6||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f=_i(Le(t[l.b],t[l.a])),d=l.profile&&c.profile?[...l.profile,...c.profile.slice(1).map(([m,g])=>[f+m,g])]:void 0,p={...l,b:c.b,sources:X_(l.sources,c.sources),profile:d},b=n.filter((m,g)=>g!==a[0]&&g!==a[1]);b.push(p),n.length=0,n.push(...b),r=!0;break}}return n}function X_(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function Y_(i,t){let e=new Map;i.forEach((r,o)=>{let s=In(Le(t[r.b],t[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:oi(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,o]of e){let s=t[r];o.sort((c,h)=>c.angle-h.angle);let a=c=>({left:Ki(s,oi(t0(c.d),c.left)),right:Ki(s,oi(e0(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let h=o[c],u=o[(c+1)%o.length],f=Ki(s,oi(t0(h.d),h.left)),d=Ki(s,oi(e0(u.d),u.right)),p=yo(h.d,u.d);if(Math.abs(p)<1e-4)continue;let b=yo(Le(d,f),u.d)/p,m=Ki(f,oi(h.d,b));_i(Le(m,s))>l||(n.get(h.key).left=m,n.get(u.key).right=m)}}return n}function q_(i,t){let e=i.filter((r,o)=>_i(Le(r,i[(o+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let o=e[(r+e.length-1)%e.length],s=e[r],a=e[(r+1)%e.length],l=Le(s,o),c=Le(a,s);if(Math.abs(yo(In(l),In(c)))<1e-7&&Tr(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function vh(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],o=In(Le(r,n));return Ki(n,oi(o,e))}function vo(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=In(Le(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Ki(r.a,[-o[1],o[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function _o(i,t,e){if(!t.wall)return $_(i,e.room,e.edge,t.offset);let n=i.find(o=>o.free===t.wall);if(!n)return null;let r=vh(e.room,0,t.offset);return{wall:n,s:Tr(Le(r,n.a),In(Le(n.b,n.a)))}}function _h(i,t,e){if(!t.exterior||t.free)return null;let n=e?t.b:t.a,r=In(Le(t.b,t.a)),o=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,s=null;for(let a of i)if(!(a===t||!(o(a.a)||o(a.b)))){if(s||!a.exterior||a.free||!o(e?a.a:a.b)||Tr(In(Le(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;s=a}return s}function $_(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=vh(t,e,n);return{wall:r,s:Tr(Le(s,r.a),In(Le(r.b,r.a)))}}return null}function rc(i,t,e,n){let r=t.rotation*Math.PI/180,o=[-Math.sin(r),Math.cos(r)],s=Math.max(.005,t.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(t.x-c.a[0])*u[0]+(t.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],p=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=o[0]*d[0]+o[1]*d[1]>=0?1:-1;if(Math.abs(o[0]*d[0]+o[1]*d[1])<.5)continue;let m=b>0?c.left:-c.right,g=p>-c.right-1e-4&&p<c.left+1e-4,x=Math.abs(p-(m+b*(s/2)));if(!g&&x>.03||a&&x>=a.off)continue;let _=c.a[0]+u[0]*f,y=c.a[1]+u[1]*f,M=g?m+b*(s/2):p,w=c.slope?Er(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:_+d[0]*M,z:y+d[1]*M,top:w,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var Ar=Math.PI/180;function gn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(o,s)=>[o,i.flip?r-s:n+s]}:{u0:n,u1:r,w:e-t,at:(o,s)=>[i.flip?e-s:t+s,o]}}function cn(i){let t=gn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Ar),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Ar);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=l0(t,e,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(r+o))):t/2,a=e+s*r;return{vr:s,rh:a,y:l=>l<=s?e+l*r:n+(t-l)*o}}function Mh(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var Sh=.14;function r0(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function wh(i,t){return cn(i).rh-Sh>t+.01}function o0(i,t,e,n){let r=null,o=Math.max(0,i.settings.roof.overhang??0);for(let s of Mh(i)){if(s.open||n!==void 0&&!wh(s,n))continue;let a=Math.min(s.x0,s.x1),l=Math.max(s.x0,s.x1),c=Math.min(s.z0,s.z1),h=Math.max(s.z0,s.z1);if(t<a-1e-6||t>l+1e-6||e<c-1e-6||e>h+1e-6||s.points&&s.points.length>=3&&!te([t,e],s.points))continue;let[u,f]=Mi(s,t,e),d=s.shape==="flat"||s.shape==="parapet",p=Math.max(0,s.overhang??o),m=((d?null:Es(Pr(s,{u0:p,u1:p,a:p,b:p}),u,f))??cn(s).y(f))-Sh;r=r===null?m:Math.max(r,m)}return r}function ac(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(o=>[o[0],o[1]]);let n=Nn(i)>=0?1:-1,r=[];for(let o=0;o<e;o++){let s=i[(o+e-1)%e],a=i[o],l=i[(o+1)%e],c=i0([a[0]-s[0],a[1]-s[1]]),h=i0([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],p=u[1]+f[1],b=Math.hypot(d,p);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let m=(d*u[0]+p*u[1])/b,g=Math.min(4,1/Math.max(.25,m));r.push([a[0]+d/b*t*g,a[1]+p/b*t*g])}return r}function i0(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function s0(i,t){if(i.points&&i.points.length>=3)return ac(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,o=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,o],[e,o]]}function a0(i,t,e,n){let r=si(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])s.set(o(f),[...s.get(o(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let p=(s.get(o(d))??[]).find(b=>!l.has(b));if(!p||(l.add(p),d=o(p.a)===o(d)?p.b:p.a,o(d)===o(f[0])))break;f.push(d)}f.length>=3&&o(d)===o(f[0])&&(!c||Math.abs(Nn(f))>Math.abs(Nn(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],p=c[(u+1)%c.length],b=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(b)>1e-6&&h.push(d)}return h.length>=3?ac(h,e):null}var ws=Math.tan(30*Ar);function l0(i,t,e,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+o*n,l=e+s*r,c=Math.min(i-s,Math.max(o,(l-a+ws*(i-s+o))/(2*ws))),h=a+(c-o)*ws;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=o?t+f*n:f<=c?a+(f-o)*ws:f<=i-s?l+(i-s-f)*ws:e+(i-f)*r}}function Pr(i,t){let e=gn(i),n=cn(i),r=e.w,o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(N,U)=>[N,U,n.y(U)],h=c(a,-o),u=c(l,-o),f=c(l,r+s),d=c(a,r+s),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Ar),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Ar);if(i.shape==="pent"){let N=[h,u,f,d],U=[[0,n.y(0)],[r,n.y(r)]];return{faces:[N],rim:N,ridges:[[f,d]],gable:U,gables:[U,U]}}if(i.shape==="pyramid"){let N=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[h,u,N],[u,f,N],[f,d,N],[d,h,N]],rim:[h,u,f,d],ridges:[[h,N],[d,N],[u,N],[f,N]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let N=l0(r,i.eave_a,i.eave_b,p,b),U=[[0,n.y(0)],[N.vla,N.yla],[N.vr,N.rh],[r-N.vlb,N.ylb],[r,n.y(r)]],k=[a,N.vla,N.yla],z=[l,N.vla,N.yla],W=[a,r-N.vlb,N.ylb],G=[l,r-N.vlb,N.ylb],H=[a,N.vr,N.rh],j=[l,N.vr,N.rh];return{faces:[[h,u,z,k],[k,z,j,H],[H,j,G,W],[W,G,f,d]],rim:[h,u,z,j,G,f,d,W,H,k],ridges:[[H,j],[k,z],[W,G]],gable:U,gables:[U,U]}}let[m,g]=lc(i)??["gable","gable"],x=Th(i,[m,g]),_=m==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],y=g==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],w=[a,x.vbh,x.yh],R=[l,x.vah,x.yh],v=[l,x.vbh,x.yh],E=m==="halfhip",C=g==="halfhip",I=[[h,u,...C?[R]:[],y,_,...E?[M]:[]],[_,y,...C?[v]:[],f,d,...E?[w]:[]]];m==="hip"&&I.push([d,h,_]),E&&I.push([w,M,_]),g==="hip"&&I.push([u,f,y]),C&&I.push([R,v,y]);let P=[h,u,...g==="gable"?[y]:C?[R,v]:[],f,d,...m==="gable"?[_]:E?[w,M]:[]],D=[[_,y]];m==="hip"&&D.push([h,_],[d,_]),E&&D.push([M,_],[w,_]),g==="hip"&&D.push([u,y],[f,y]),C&&D.push([R,y],[v,y]);let S=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],F=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],A=N=>N==="gable"?S:N==="halfhip"?F:null,T=[A(m),A(g)];return{faces:I,rim:P,ridges:D,gable:T[0]??T[1],gables:T}}function lc(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function Th(i,t){let e=gn(i),n=cn(i),r=e.w,o=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Ar),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Ar),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=o>1e-6?Math.min(n.vr,(h-i.eave_a)/o):n.vr,f=s>1e-6?Math.max(n.vr,r-(h-i.eave_b)/s):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-h)/Math.max(.2,o)),b=m=>m==="hip"?d:m==="halfhip"?p:0;return{d0:b(t[0]),d1:b(t[1]),yh:h,vah:u,vbh:f}}function Es(i,t,e){let n=null;for(let r of i.faces){if(!te([t,e],r.map(x=>[x[0],x[1]])))continue;let[o,s]=r,a=r.slice(2).find(x=>Math.abs((s[0]-o[0])*(x[1]-o[1])-(s[1]-o[1])*(x[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],h=s[1]-o[1],u=a[0]-o[0],f=a[2]-o[2],d=a[1]-o[1],p=c*d-h*f,b=h*u-l*d,m=l*f-c*u;if(Math.abs(b)<1e-9)continue;let g=o[2]-(p*(t-o[0])+m*(e-o[1]))/b;n=n===null?g:Math.min(n,g)}return n}function Mi(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),o=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?s-e:e-o]:[e,i.flip?r-t:t-n]}function sc(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Rr(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(t)*1.5)continue;let a=sc(s);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!o||r(s)<r(o))&&(o=s)}return o}function Eh(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=gn(t),n=cn(t).rh,r=Pr(i,{u0:0,u1:0,a:0,b:0}),o=cn(i),s=p=>{let[b,m]=e.at(p,e.w/2),[g,x]=Mi(i,b,m);return Es(r,g,x)??o.y(x)},a=s(e.u0)<=s(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let p=.5;p<u;p+=.05)if(s(l+h*p)>=n-.02){f=l+h*p;break}if(Math.abs(f-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=f:d.x0=f:c===e.u1?d.z1=f:d.z0=f,d}function c0(i,t){let e=Eh(i,t),n=gn(e),r=cn(e),o=Pr(i,{u0:0,u1:0,a:0,b:0}),s=cn(i),a=f=>{let[d,p]=n.at(f,n.w/2),[b,m]=Mi(i,d,p);return Es(o,b,m)??s.y(m)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,p=c*(f+1)/u,b=l?n.u0+d:n.u1-d,m=l?n.u0+p:n.u1-p,g=a(m),x=1/0,_=-1/0;for(let v=0;v<=40;v++){let E=n.w*v/40;r.y(E)>g+.02&&(x=Math.min(x,E),_=Math.max(_,E))}if(!(_-x>.05))continue;let y=n.at(b,x),M=n.at(m,_),w=Mi(i,y[0],y[1]),R=Mi(i,M[0],M[1]);h.push({u0:Math.min(w[0],R[0]),u1:Math.max(w[0],R[0]),v0:Math.min(w[1],R[1]),v1:Math.max(w[1],R[1])})}return h}function ai(i,t,e,n){let r=s=>n?s[t]<=e+1e-9:s[t]>=e-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c&&o.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function Ah(i,t){let e=ai(i,0,t.u0,!0),n=ai(i,0,t.u1,!1),r=ai(ai(i,0,t.u0,!1),0,t.u1,!0),o=ai(r,1,t.v0,!0),s=ai(r,1,t.v1,!1);return[e,n,o,s].filter(a=>a.length>=3&&Math.abs(Nn(a.map(l=>[l[0],l[1]])))>1e-6)}function cc(i,t,e){let n=gn(t),r=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>t.base+.05)),o=c=>c.some(h=>r.some(u=>te(h,u.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:e,b:o(a.map(c=>n.at(c,n.w+s)))?0:e,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:e,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:e}}function u0(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function Z_(i){return cn(i).rh}function h0(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Rr(n,l)??l);if(!r.length)return t.id;let o=Math.max(...r.map(l=>Z_(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return u>=Math.min(h.x0,h.x1)&&u<=Math.max(h.x0,h.x1)&&f>=Math.min(h.z0,h.z1)&&f<=Math.max(h.z0,h.z1)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function oc(i,[t,e,n]){let r=s=>t*s[0]+e*s[1]+n,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&o.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function Ts(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],o=t,s=0;for(let d of i){let p=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(p)>Math.abs(s)&&(s=p,o=d)}if(Math.abs(s)<1e-9)return null;let a=o[0]-t[0],l=o[1]-t[1],c=e[2]-t[2],h=o[2]-t[2],u=(c*l-h*r)/s,f=(n*h-a*c)/s;return[u,f,t[2]-u*t[0]-f*t[1]]}var Mo=i=>Math.abs(Nn(i.map(t=>[t[0],t[1]])));function uc(i){let t=xn(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=Math.hypot(o[0]-r[0],o[1]-r[1]);if(s<1e-7)continue;let a=-(o[1]-r[1])*t/s,l=(o[0]-r[0])*t/s;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function K_(i,t){let e=Ts(i),n=Ts(t.poly);if(!e||!n||Mo(t.poly)<1e-6)return null;let r=[...uc(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function f0(i,t){let e=[i];for(let n of t){let r=[];for(let o of e){let s=K_(o,n),a=s?o:[];for(let c of s??[])a=oc(a,c);if(a.length<3||Mo(a)<1e-6){r.push(o);continue}let l=o;for(let[c,h,u]of uc(a)){let f=oc(l,[-c,-h,-u]);if(f.length>=3&&Mo(f)>1e-6&&r.push(f),l=oc(l,[c,h,u]),l.length<3)break}}e=r}return e}function Rh(i,t,e){let n=[[0,1]],r=o=>[i[0]+(t[0]-i[0])*o,i[1]+(t[1]-i[1])*o,i[2]+(t[2]-i[2])*o];for(let o of e){let s=Ts(o.poly);if(!s||Mo(o.poly)<1e-6)continue;let a=uc(o.poly).map(([d,p,b])=>[d*i[0]+p*i[1]+b,d*(t[0]-i[0])+p*(t[1]-i[1])]),l=d=>s[0]*d[0]+s[1]*d[1]+s[2]-d[2],c=l(i),h=l(t)-c;a.push([c-.01,h]),Number.isFinite(o.depth)&&a.push([o.depth-c,-h]);let u=0,f=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/p;p>0?u=Math.max(u,b):f=Math.min(f,b)}f-u<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,u)],[Math.max(d,f),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([o,s])=>[r(o),r(s)])}function d0(i,t){let e=Ts(i),n=Ts(t);if(!e||!n||Mo(t)<1e-6)return null;let r=[...i];for(let c of uc(t))r=oc(r,c);if(r.length<3)return null;let o=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),s=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=o(h),d=o(u);if(f<0!=d<0){let p=f/(f-d);s.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p,h[2]+(u[2]-h[2])*p])}}if(s.length<2)return null;let a=s[0],l=s[s.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function p0(i,t){let e=gn(i),n=o=>o.map(([s,a,l])=>{let[c,h]=e.at(s,a);return[c,h,l]}),r=[];for(let o of t){let s=ai(ai(ai(ai(o,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);s.length>=3&&Mo(s)>1e-6&&r.push({poly:n(s),depth:1/0});for(let a of Ah(o,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:Sh})}return r}function Ph(i,t){return t.map(e=>({poly:e.poly.map(([n,r,o])=>[...Mi(i,n,r),o]),depth:e.depth}))}function m0(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:Rr(i,t)!==e&&Rr(i,e)!==t}function g0(i,t){if(t.dormer||t.open||!lc(t)||Rr(i,t))return null;let e=gn(t),n=cn(t).rh,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===t||s.dormer||s.open||s.axis===t.axis||s.shape==="flat"||s.shape==="parapet"||s.shape==="pent")continue;let a=cn(s).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(s)>r(t)||r(s)===r(t)&&i.indexOf(s)<i.indexOf(t))))continue;let c=sc(s),[h,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=sc(t),[b,m]=t.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(b<f-.05||m>d+.05)continue;let g=b0(t,s),x=null;e.u0<h-.05&&e.u1>=h-.05&&e.u1<=g+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=g-.05&&(x=0),x!==null&&(!o||r(s)>r(o.host))&&(o={host:s,end:x})}return o}function b0(i,t){let e=gn(t),n=e.at(e.u0,cn(t).vr);return i.axis==="x"?n[0]:n[1]}function x0(i,t){let e=b0(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=sc(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}function Ch(i,t){return t.rooms.some(e=>e.points.length>=3)?a0(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function Ih(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=Ch(i,t);return!!e&&e.some(([n,r])=>kr(n,r)-t.elevation>-.15)}function y0(i,t,e,n,r){return!e||!Ih(i,t)?!1:n<Math.min(t.height,kr(r[0],r[1])-t.elevation)-.05}function So(i,t){let e=xn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let o=t[r],s=t[(r+1)%t.length],a=c=>e*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let p=f/(f-d);n.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p])}}}return n}function v0(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],o=i[(e+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(t&&Math.sign(s)!==t)return!1;t=Math.sign(s)}}return!0}var Xn=1e-4;function Lh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function _0(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],o=[n[0]-e[0],n[1]-e[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((e[0]-i[0])*o[1]-(e[1]-i[1])*o[0])/s,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/s;return a>Xn&&a<1-Xn&&l>-Xn&&l<1+Xn?a:null}function Fh(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-t[0])*n+(i[1]-t[1])*r)/o;return s<=Xn||s>=1-Xn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(o)<Xn?s:null}function J_(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let o=0;o<t.length;o++){let s=t[o],a=t[(o+1)%t.length];if(_0(n,r,s,a)!==null||Fh(s,n,r)!==null||Fh(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<Xn)return!0}}return te(i[0],t)||te(t[0],i)}function j_(i){let t=i.map(o=>Lh(o)>=0?o:[...o].reverse()),e=[];t.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],h=[0,1];t.forEach((u,f)=>{if(f!==s)for(let d=0;d<u.length;d++){let p=u[d],b=u[(d+1)%u.length],m=_0(l,c,p,b)??Fh(p,l,c);m!==null&&h.push(m)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<Xn)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((m,g)=>g!==s&&te(b,m))||e.some(([m,g])=>Math.hypot(m[0]-f[0],m[1]-f[1])<Xn&&Math.hypot(g[0]-d[0],g[1]-d[1])<Xn)||e.push([f,d])}}});let n=[],r=new Set;for(let o=0;o<e.length;o++){if(r.has(o))continue;r.add(o);let s=[e[o][0]],a=e[o][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(e[c][0]),a=e[c][1]}s.length>=3&&Lh(s)>1e-6&&n.push(s)}return n}function M0(i){let t=i.filter(o=>o.length>=3),e=t.map((o,s)=>s),n=o=>e[o]===o?o:e[o]=n(e[o]);for(let o=0;o<t.length;o++)for(let s=o+1;s<t.length;s++)n(o)!==n(s)&&J_(t[o],t[s])&&(e[n(s)]=n(o));let r=new Map;return t.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:j_(o))}function Q_(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o)):0;return Math.hypot(i[0]-t[0]-n*s,i[1]-t[1]-r*s)}function S0(i,t,e=.03){return i.every(n=>te(n,t)||t.some((r,o)=>Q_(n,r,t[(o+1)%t.length])<=e))}function w0(i,t){let e=Lh(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return e.map((r,o)=>{let s=n(e[(o-1+e.length)%e.length],r),a=n(r,e[(o+1)%e.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*t,r[1]+(s[1]+a[1])/l*t]})}function Nh(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var wo=(i,t)=>!!i.fix&&i.fix.includes(t);function E0(i,t,e,n){if(i==="h")return e>=n-.01&&t>.01?"hi":"lo";let r=(t+e)/2;return Math.abs(r-n/2)<1e-6?"mid":r<n/2?"lo":"hi"}function Dh(i,t,e,n){let r=0,o=0;for(let s of i){if(!wo(s,t))continue;let[a,l]=Nh(s,t,e),c=E0(t,a,l,e);c==="lo"?r=Math.max(r,l):c==="hi"&&(o=Math.max(o,e-a))}return r+o>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0}:{s0:e,s:n,lo:r,hi:o}}function To(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function T0(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!hc(n))return[To(t,n),To(e,n)];let r=E0(i,t,e,n.s0),o=e-t;return r==="mid"?[n.s/2-o/2,n.s/2+o/2]:r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function hc(i){return i.lo>0||i.hi>0}function fc(i,t,e,n){let[r,o,s]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-o)<.001&&Math.abs(n-s)<.001)return i.parts;let a={w:Dh(i.parts,"w",r,t),d:Dh(i.parts,"d",o,e),h:Dh(i.parts,"h",s,n)},l={w:!hc(a.w)&&i.parts.some(c=>wo(c,"w")),d:!hc(a.d)&&i.parts.some(c=>wo(c,"d")),h:!hc(a.h)&&i.parts.some(c=>wo(c,"h"))};return i.parts.map(c=>{let h=x=>{let _=a[x],[y,M]=Nh(c,x,_.s0);return wo(c,x)&&!l[x]?T0(x,y,M,_):[To(y,_),To(M,_)]},[u,f]=h("w"),[d,p]=h("d"),[b,m]=h("h"),g={...c,x:(u+f)/2/t-.5,w:(f-u)/t,z:(d+p)/2/e-.5,d:(p-d)/e,y:b/n,h:(m-b)/n};if(c.shape==="loft"){let x=(R,v,E,C,I)=>{let P=a[R],D=v??C,S=E??I,F=(D-S/2+.5)*P.s0,A=(D+S/2+.5)*P.s0;if(!wo(c,R)||l[R])return[To(F,P),To(A,P)];let[T,N]=Nh(c,R,P.s0),[U]=T0(R,T,N,P),k=U-T;return[F+k,A+k]},[_,y]=x("w",c.tx,c.tw,c.x,c.w),[M,w]=x("d",c.tz,c.td,c.z,c.d);g.tx=(_+y)/2/t-.5,g.tw=(y-_)/t,g.tz=(M+w)/2/e-.5,g.td=(w-M)/e}return g})}var tM=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var eM=["wall","pole","pillar","parcel","bank"];function R0(i){return tM.includes(i.variant??"")?i.variant:"bin240"}function P0(i){return eM.includes(i.variant??"")?i.variant:"wall"}var He=["#3a3f47","#3a3f47"],Cr=["#23262b","#23262b"],Yn=["#5a3b25","#5a3b25"],De=["#1f4fa8","#1f4fa8"],Ji=["#e3b616","#e3b616"],fe=["#2f7d3b","#2f7d3b"],A0={default:{rest:He,bio:Yn,paper:De,plastic:Ji,glass:fe,garden:fe,recycling:Ji,other:He},DE:{rest:Cr,bio:Yn,paper:De,plastic:Ji,glass:fe,garden:fe,recycling:Ji},AT:{rest:He,bio:Yn,paper:[He[0],"#c0262d"],plastic:Ji,glass:fe,garden:fe},CH:{rest:["#d8d8d8","#d8d8d8"],bio:fe,paper:De,plastic:He,glass:fe,garden:fe},NL:{rest:He,bio:fe,paper:De,plastic:["#3a3f47","#e57a1f"],glass:fe,garden:fe},BE:{rest:He,bio:fe,paper:De,plastic:De,glass:fe,garden:fe},GB:{rest:Cr,bio:["#3a3f47","#5a3b25"],paper:De,plastic:De,glass:Cr,garden:Yn,recycling:De},US:{rest:Cr,bio:fe,paper:De,plastic:De,glass:De,garden:fe,recycling:De},CA:{rest:Cr,bio:fe,paper:De,plastic:De,glass:De,garden:fe,recycling:De},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:He,bio:Yn,paper:[He[0],"#e3b616"],plastic:[He[0],"#e3b616"],recycling:[He[0],"#e3b616"],glass:fe,garden:fe},IT:{rest:He,bio:Yn,paper:De,plastic:Ji,glass:fe,garden:fe},ES:{rest:He,bio:Yn,paper:De,plastic:Ji,glass:fe,garden:fe},PT:{rest:He,bio:Yn,paper:De,plastic:Ji,glass:fe,garden:fe},DK:{rest:Cr,bio:fe,paper:De,plastic:He,glass:fe,garden:fe},SE:{rest:Cr,bio:Yn,paper:De,plastic:He,glass:fe,garden:fe},NO:{rest:He,bio:Yn,paper:De,plastic:He,glass:fe,garden:fe},FI:{rest:He,bio:Yn,paper:De,plastic:He,glass:fe,garden:fe}},C0="DE";function I0(){return C0}function nM(i,t){return A0[t]?.[i]??A0.default[i]??He}function L0(i,t=C0){let e=nM(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var ji=zt(3662079,.95),Oh=zt(3662079,1),Si=zt(5995775,.34),F0=zt(5995775,.22),dc=[-.55,.83],Zt=-1,pc=16,Qi=32,D0=48,Uh=64,jt=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,o=r,s=r,a,l=Zt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new ee;return t.setAttribute("position",new Xt(this.p,3)),t.setAttribute("color",new Xt(this.c,3)),t.setAttribute("fold",new Xt(this.f,1)),this.uv&&t.setAttribute("uv",new Xt(this.uv,2)),this.tile&&t.setAttribute("tile",new Xt(this.tile,2)),t.computeBoundingSphere(),t}},Ne=class{p=[];c=[];f=[];seg(t,e,n=ji,r=Zt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,o){let[s,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,Zt);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,Zt),this.seg(c,a,n,o)}geometry(){let t=new ee;return t.setAttribute("position",new Xt(this.p,3)),t.setAttribute("color",new Xt(this.c,3)),t.setAttribute("fold",new Xt(this.f,1)),t}};function N0(i,t,e,n){let o=i.uv?2:0,s=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((p,b)=>p+(f.p[b]-p)*d),c:u.c.map((p,b)=>p+(f.c[b]-p)*d),uv:u.uv&&f.uv?u.uv.map((p,b)=>p+(f.uv[b]-p)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let p=0;p<3;p++){let b=u*3+p;for(let m=0;m<3;m++)i.p[b*3+m]=f[p].p[m],i.c[b*3+m]=f[p].c[m];if(i.uv&&f[p].uv)for(let m=0;m<o;m++)i.uv[b*2+m]=f[p].uv[m];if(i.tile&&f[p].tile)for(let m=0;m<2;m++)i.tile[b*2+m]=f[p].tile[m];i.f[b]=d}},c=(u,f)=>{let d=i.p.length/9;for(let p of u)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[s(u,0),s(u,1),s(u,2)],d=f.map(v=>v.p[1]>e+1e-6),p=f.map(v=>v.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let v=0;v<3;v++)i.f[u*3+v]=n;continue}let b=i.f[u*3],m=(v,E)=>a(v,E,(e-v.p[1])/(E.p[1]-v.p[1])),g=d.filter(Boolean).length,x=g===1?d.indexOf(!0):d.indexOf(!1),_=f[x],y=f[(x+1)%3],M=f[(x+2)%3],w=m(_,y),R=m(M,_);g===1?(l(u,[_,w,R],n),c([w,y,M],b),c([w,M,R],b)):(l(u,[_,w,R],b),c([w,y,M],n),c([w,M,R],n))}}function O0(i,t,e,n){let r=i.p.length/6;for(let o=t;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[o*6+d]=l[d],i.p[o*6+3+d]=u[d];let f=i.c.slice(o*6,o*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var le=Math.PI/180;function zt(i,t){let e=new nt(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function iM(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function li(i,t=[]){let e=i.map(([n,r])=>new ce(n,r));return rs.triangulateShape(e,t.map(n=>n.map(([r,o])=>new ce(r,o))))}function U0(i,t,e,n,r,o,s){let a=new nt(s),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],b=t[(d+1)%4],m=e[d],g=e[(d+1)%4],x=b[0]-p[0],_=b[1]-p[1],y=Math.hypot(x,_);if(y<1e-6)continue;let w=.8+.28*((_/y*dc[0]-x/y*dc[1]+1)/2),R=(m[0]+g[0]-p[0]-b[0])/2*(-_/y)+(m[1]+g[1]-p[1]-b[1])/2*(x/y),v=Math.max(0,Math.min(1,R/Math.max(1e-6,Math.hypot(R,r-n)))),E=zt(o,l(n)*w).lerp(a,v),C=zt(o,l(r)*w).lerp(a,v);i.tri([p[0],n,p[1]],[m[0],r,m[1]],[g[0],r,g[1]],E,C,C),i.tri([p[0],n,p[1]],[g[0],r,g[1]],[b[0],n,b[1]],E,C,E)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function B0(i,t,e,n,r,o,s,a,l,c){let h=new nt(l),u=[];for(let m=0;m<c;m++){let g=m/c*Math.PI*2;u.push({y:o+Math.cos(g)*s,s:r+Math.sin(g)*s})}let f=(m,g)=>{let x=t(m,u[g%c].s);return[x[0],u[g%c].y,x[1]]},d=t(e,r),p=t(n,r),b=(m,g,x,_,y)=>{let M=(g[1]-m[1])*(x[2]-m[2])-(g[2]-m[2])*(x[1]-m[1]),w=(g[2]-m[2])*(x[0]-m[0])-(g[0]-m[0])*(x[2]-m[2]),R=(g[0]-m[0])*(x[1]-m[1])-(g[1]-m[1])*(x[0]-m[0]);M*_[0]+w*_[1]+R*_[2]<0?i.tri(m,x,g,y):i.tri(m,g,x,y)};for(let m=0;m<c;m++){let g=(m+.5)/c*Math.PI*2,x=zt(a,.62+.4*Math.max(0,Math.cos(g))),_=t((e+n)/2,r+Math.sin(g)*s),y=t((e+n)/2,r),M=[_[0]-y[0],Math.cos(g)*s,_[1]-y[1]];b(f(e,m),f(n,m+1),f(n,m),M,x),b(f(e,m),f(e,m+1),f(n,m+1),M,x)}for(let[m,g,x]of[[e,p,d],[n,d,p]]){let _=t(m,r),y=[_[0],o,_[1]],M=[x[0]-g[0],0,x[1]-g[1]];for(let w=0;w<c;w++)b(y,f(m,w),f(m,w+1),M,h)}}function Fe(i,t,e,n,r,o,s={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=s.aoFrom??e,c=s.fold??Zt,h=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),u=(s.holes??[]).map(p=>iM(p)>0?[...p].reverse():p),f=u.length?[...t,...u.flat()]:t,d=s.topFace===!1&&!s.bottom?[]:li(t,u);if(s.topFace!==!1){let p=new nt(o);for(let[b,m,g]of d){let x=f[b],_=f[m],y=f[g];i.tri([x[0],a(x),x[1]],[y[0],a(y),y[1]],[_[0],a(_),_[1]],p,p,p,void 0,s.topFold??c)}}if(s.bottom){let p=zt(r,.55);for(let[b,m,g]of d){let x=f[b],_=f[m],y=f[g];i.tri([x[0],e,x[1]],[_[0],e,_[1]],[y[0],e,y[1]],p,p,p,void 0,c)}}for(let p of[t,...u])for(let b=0;b<p.length;b++){let m=p[b],g=p[(b+1)%p.length],x=g[0]-m[0],_=g[1]-m[1],y=Math.hypot(x,_);if(y<1e-6||s.skipSide?.(m,g))continue;let w=.8+.28*((_/y*dc[0]-x/y*dc[1]+1)/2),R=a(m),v=a(g),E=zt(r,h(e)*w),C=zt(r,h(R)*w),I=zt(r,h(v)*w);i.tri([m[0],e,m[1]],[m[0],R,m[1]],[g[0],v,g[1]],E,C,I,void 0,c),i.tri([m[0],e,m[1]],[g[0],v,g[1]],[g[0],e,g[1]],E,I,E,void 0,c)}}var O={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},pt=zt(5995775,.3),Dt=zt(5995775,.17),Kt=zt(3662079,.45),er=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=H0(n)}rotated(t,e,n){let r=n*le,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*o-(c-e)*s,e+(l-t)*s+(c-e)*o))}box(t,e,n,r,o,s,a,l=a,c=null){if(e-t<1e-4||s-o<1e-4||r-n<1e-4)return;let h=[this.tf(t,o),this.tf(t,s),this.tf(e,s),this.tf(e,o)];Fe(this.buf,Bh(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}loft(t,e,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Bh(l)&&(l.reverse(),c.reverse()),U0(this.buf,l,c,n,r,o,s),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,o,s,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,o,s,a,l,h);this.loft([t+c,e-c,o+c,s-c],[t,e,o,s],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,o,s,a,a,h),this.loft([t,e,o,s],[t+c,e-c,o+c,s-c],r-c,r,a,l)}lyingCyl(t,e,n,r,o,s,a,l,c=l,h=12,u=null){let f=Math.min(a,o-r)/2;if(f<1e-4||s<1e-4)return;let d=(r+o)/2,p=t==="x"?e:n,b=t==="x"?n:e,m=(g,x)=>t==="x"?this.tf(g,x):this.tf(x,g);if(B0(this.buf,m,p-s/2,p+s/2,b,d,f,l,c,h),u)for(let g of[p-s/2,p+s/2])for(let x=0;x<h;x++){let _=x/h*Math.PI*2,y=(x+1)/h*Math.PI*2;this.line(m(g,b+Math.sin(_)*f),m(g,b+Math.sin(y)*f),d+Math.cos(_)*f,d+Math.cos(y)*f,u)}}cyl(t,e,n,r,o,s,a=s,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Fe(this.buf,Bh(h),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],o,o,c)}seg(t,e,n,r,o,s,a=pt){this.line(this.tf(t,n),this.tf(r,s),e,o,a)}line(t,e,n,r,o){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],o,Zt)}outline(t,e,n,r){for(let o=0;o<4;o++){let s=t[o],a=t[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,e,n,r)}}};function H0(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Bh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Ir(i,t,e,n,r,o,s=O.metal,a=!1){let l=t/2-o-r,c=e/2-o-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,s):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,s)}}function Rs(i,t,e,n,r,o,s,a=null,l=!1){let c=(e-t)/s;for(let h=1;h<s;h++){let u=t+c*h;i.seg(u,n,o,u,r,o,Dt)}for(let h=0;h<s;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,o+.012,u+Math.min(.1,c/4),f,o+.012,Kt);else{let d=s>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,o+.012,d,f+.08,o+.012,Kt)}}}function k0(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);Ir(i,t,e,.07,.05,.05,O.wood,!0),i.pad(o,s,.07,h-.08,a+.02,l,O.fabric,O.fabricTop,.04,pt),i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],h-.08,n,O.fabric,O.fabricTop,pt),i.pad(o,o+c,h-.08,n*.72,a+.02,l-.02,O.fabric,O.fabricTop,.04,pt),i.pad(s-c,s,h-.08,n*.72,a+.02,l-.02,O.fabric,O.fabricTop,.04,pt);let d=(s-c-(o+c))/r;for(let p=0;p<r;p++){let b=o+c+d*p+.02,m=b+d-.04;i.pad(b,m,h-.08,h+.05,a+u+.02,l-.06,O.cushion,O.cushion,.04),i.loft([b+.01,m-.01,a+u*.55,a+u+.14],[b+.03,m-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,O.cushion)}}function z0(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=r?[-1,1]:[-1],b=(v,E)=>i.loft([v-.015,v+.015,E-.015,E+.015],[v-.025,v+.025,E-.025,E+.025],0,.07,O.wood);b(o+.06,a+.06),b(s-.06,a+.06),r||b(s-.06,a+c-.06);for(let v of p)b(v*(t/2-.06),l-.06),b(v*(t/2-c+.06),l-.06);i.pad(o,s,.07,f-.08,a+.02,a+c,O.fabric,O.fabricTop,.04,pt);for(let v of p){let[E,C]=v<0?[o+.02,o+c]:[s-c,s-.02];i.pad(E,C,.07,f-.08,a+c-.02,l,O.fabric,O.fabricTop,.04,pt)}i.loft([o,s,a,a+h],[o+.01,s-.01,a,a+h*.5],f-.08,n,O.fabric,O.fabricTop,pt);for(let v of p)v<0?i.loft([o,o+h,a+h,l],[o,o+h*.5,a+h,l-.01],f-.08,n,O.fabric,O.fabricTop,pt):i.loft([s-h,s,a+h,l],[s-h*.5,s,a+h,l-.01],f-.08,n,O.fabric,O.fabricTop,pt);for(let v of p){let[E,C]=v<0?[o+h,o+c]:[s-c,s-h];i.pad(E,C,f-.08,d,l-u,l,O.fabric,O.fabricTop,.04,pt)}r||i.pad(s-u,s,f-.08,d,a+.02,a+c-.02,O.fabric,O.fabricTop,.04,pt);let m=o+h,g=r?s-h:s-u,x=Math.max(1,Math.round((g-m)/.62)),_=(g-m)/x;for(let v=0;v<x;v++){let E=m+_*v+.02,C=E+_-.04;i.pad(E,C,f-.08,f+.05,a+h+.02,a+c-.04,O.cushion,O.cushion,.04),i.loft([E+.01,C-.01,a+h*.55,a+h+.14],[E+.03,C-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,O.cushion)}let y=a+c,M=l-u;if(M-y<.2)return;let w=Math.max(1,Math.round((M-y)/.62)),R=(M-y)/w;for(let v of p)for(let E=0;E<w;E++){let C=y+R*E+.02,I=C+R-.04;v<0?(i.pad(o+h+.02,o+c-.04,f-.08,f+.05,C,I,O.cushion,O.cushion,.04),i.loft([o+h*.55,o+h+.14,C+.01,I-.01],[o+h*.4,o+h*.4+.06,C+.03,I-.03],f+.03,n*.93,O.cushion)):(i.pad(s-c+.04,s-h-.02,f-.08,f+.05,C,I,O.cushion,O.cushion,.04),i.loft([s-h-.14,s-h*.55,C+.01,I-.01],[s-h*.4-.06,s-h*.4,C+.03,I-.03],f+.03,n*.93,O.cushion))}}function rM(i,t,e,n){let r=-e/2,o=e/2,s=-t/2,a=t/2,l=Math.min(.32,n*.36);Ir(i,t,e,.08,.06,.03,O.wood,!0),i.box(s,a,.08,l,r+.06,o,O.wood,O.woodTop,pt),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,O.white,O.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,O.wood,O.woodTop,pt),i.box(s,a,n-.05,n,r,r+.09,O.wood,O.woodTop,Dt);let c=l+.2,h=r+(e-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,h,o-.01,O.cushion,O.fabricTop,.025,Dt),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,O.cushion,O.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let p=s+.1+f*d,b=r+.12,m=Math.min(.42,e*.2),g=.1;i.loft([p+.03+g,p+f-.03-g,b+g*.5,b+m-g*.5],[p+.03,p+f-.03,b,b+m],c,c+.06,O.whiteTop),i.loft([p+.03,p+f-.03,b,b+m],[p+.03+g,p+f-.03-g,b+g*.5,b+m-g*.5],c+.06,c+.12,O.whiteTop,O.whiteTop,Dt)}}function oM(i,t,e,n){let r=Math.min(.46,n*.52);Ir(i,t,e,r-.04,.035,.02,O.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,O.wood,O.woodTop,pt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,O.cushion,O.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,O.wood,O.woodTop,pt)}function sM(i,t,e,n){Ir(i,t,e,n-.04,.06,.05,O.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.wood,O.woodTop,Kt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,O.body)}function aM(i,t,e,n){let r=-t/2,o=t/2;i.box(r,o,n-.035,n,-e/2,e/2,O.wood,O.woodTop,pt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,O.metal);let s=Math.min(.42,t*.32);i.box(o-s,o,0,n-.035,-e/2+.03,e/2-.02,O.body,O.bodyTop,pt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,Dt);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,Kt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,O.dark,O.dark,Kt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,O.metal)}function tr(i,t,e,n,r,o=null,s=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,O.body,O.bodyTop,pt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark),Rs(i,-t/2,t/2,.08,n,e/2-.02,r,o,s)}function lM(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,O.wood,O.woodTop,pt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,O.wood,O.woodTop,pt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,O.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,O.wood,O.woodTop,Dt),s<o){let l=-t/2+.025+.04,c=s*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?O.fabric:O.cushion,O.fabricTop),l+=h+.006,c++}}}}function cM(i,t,e,n){let r=Math.max(1,Math.round(t/.6));tr(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,pt)}function uM(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,O.white,O.whiteTop,pt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Dt);let o=t/2-.06;i.seg(o,r+.08,e/2+.015,o,r+.4,e/2+.015,Kt),i.seg(o,r-.4,e/2+.015,o,r-.08,e/2+.015,Kt)}var mc=(i,t)=>zt(parseInt(i.slice(1),16),t).getHex(),As=!1;function X0(i){As=i}function Y0(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let o=.62/n;i[e]*=o,i[e+1]*=o,i[e+2]*=o}}function hM(i,t,e,n,r,o){let s=f=>{let d=Math.max(...new nt(f).toArray());return mc(f,d>.05?Math.max(1,.62/d):1)},a=As?s(o[0]):mc(o[0],.55),l=As?s(o[1]):mc(o[1],.8),c=mc(o[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Dt),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Dt),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,pt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Dt),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let f=Math.min(t,e)*.32;i.cyl(0,0,f,0,n*.9,a,a,16,pt),i.cyl(0,0,f*1.08,n*.9,n,l,c,16,Dt),i.box(-f*.5,f*.5,n*.62,n*.8,f*.7,f*1.02,O.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,O.metal,O.metal,Dt);return}if(r==="bin1100"){for(let d of[-1,1])for(let p of[-1,1])i.cyl(d*(t/2-.12),p*(e/2-.12),.05,0,.14,O.dark,O.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,pt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Dt),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Dt);return}let h=Math.min(.2,n*.19),u=-e/2;for(let f of[-1,1])i.lyingCyl("x",f*(t/2-.05),u+h/2+.01,0,h,.05,h,O.dark,O.metal,12);i.loft([-t*.42,t*.42,u+.07,e/2-.05],[-t/2+.01,t/2-.01,u+.05,e/2-.01],.03,n-.05,a,a,pt),i.box(-t/2,t/2,n-.05,n,u+.03,e/2,l,c,Dt),i.box(-t*.42,t*.42,n-.1,n-.02,u,u+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(u+e/2)/2,t/2,n+.002,(u+e/2)/2,Kt),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Dt))}function fM(i,t,e,n,r,o,s){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,s?O.metal:O.white,s?O.metal:O.whiteTop,pt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Dt),!o)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,O.white,O.whiteTop,Dt),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Dt);else if(s)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,O.metal,O.metal,Dt),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Dt);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-h,n/2+h,.004,h*2,O.dark,O.dark,14,Dt),i.seg(c-h*.45,n/2,e/2+.0045,c-h*.45+.004,n/2,e/2+.0045,pt),i.seg(c+h*.45-.004,n/2,e/2+.0045,c+h*.45,n/2,e/2+.0045,pt)}}}function dM(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,O.white,O.whiteTop,pt);let s=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*s,n/2+Math.sin(l)*s,e/2+.002,Math.cos(c)*s,n/2+Math.sin(c)*s,e/2+.002,Dt)}return}let o=Math.min(t,e)/2;i.cyl(0,0,o,0,n,O.white,O.whiteTop,24,pt),i.cyl(0,0,o*.5,n,n+.01,O.metal,O.metal,12)}function pM(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,O.white,O.whiteTop,.05,pt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,O.dark);for(let s of[-t*.2,t*.2])i.cyl(s,0,.012,-.12,0,O.metal,O.metal,6);return}let o=Math.min(t,e)/2;i.cyl(0,0,o,.04,n-.05,O.white,O.whiteTop,20,pt),i.cyl(0,0,o*.85,n-.05,n,O.white,O.whiteTop,20);for(let s=0;s<3;s++){let a=s/3*Math.PI*2;i.cyl(Math.cos(a)*o*.7,Math.sin(a)*o*.7,.03,0,.04,O.dark,O.dark,6)}i.box(-o*.3,o*.3,n*.55,n*.65,o-.01,o+.01,O.dark)}function mM(i,t,e,n,r){let o=O.metal,s=zt(O.metal,1.25).getHex(),a=zt(O.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,O.wood,O.woodTop,Dt),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,o,s,pt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,o,s,14,pt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,O.dark,O.dark,Dt),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,o,s,12,Dt),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,o,s,pt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,O.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,pt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,s,Dt),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,O.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,pt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,s,Dt),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,O.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,o,s,pt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,o,s,pt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,O.dark)}function gM(i,t,e,n){let r=e/2-q0;i.box(-t/2,t/2,.02,n,-e/2,r,O.body,O.bodyTop,pt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,O.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-t/2+.03,o,r+.001,-.03,o,r+.001,Dt),i.seg(.03,o,r+.001,t/2-.03,o,r+.001,Dt))}var q0=.06;function $0(i,t,e,n){let r=t.rotation*le,o=Math.cos(r),s=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(S,F,A)=>[t.x+S*o-A*s,F,t.z+S*s+A*o],c=(S,F,A,T,N)=>{i.tri(S,F,A,N),i.tri(S,A,T,N),i.tri(S,A,F,N),i.tri(S,T,A,N)},h=(S,F,A,T)=>{let N=l(S[0],S[1],S[2]),U=l(F[0],F[1],F[2]),k=U[0]-N[0],z=U[1]-N[1],W=U[2]-N[2],G=Math.hypot(k,z,W)||1,H=[k/G,z/G,W/G],j=Math.abs(H[1])>.9?[1,0,0]:[0,1,0],st=[H[1]*j[2]-H[2]*j[1],H[2]*j[0]-H[0]*j[2],H[0]*j[1]-H[1]*j[0]],X=Math.hypot(st[0],st[1],st[2])||1,Z=[st[0]/X*A,st[1]/X*A,st[2]/X*A],tt=[H[1]*Z[2]-H[2]*Z[1],H[2]*Z[0]-H[0]*Z[2],H[0]*Z[1]-H[1]*Z[0]],q=[[1,1],[-1,1],[-1,-1],[1,-1]],Q=(dt,gt)=>[dt[0]+Z[0]*q[gt][0]+tt[0]*q[gt][1],dt[1]+Z[1]*q[gt][0]+tt[1]*q[gt][1],dt[2]+Z[2]*q[gt][0]+tt[2]*q[gt][1]];for(let dt=0;dt<4;dt++){let gt=(dt+1)%4;i.tri(Q(N,dt),Q(U,dt),Q(U,gt),T),i.tri(Q(N,dt),Q(U,gt),Q(N,gt),T)}},u=(S,F,A,T,N,U,k,z)=>{c(l(S,T,N),l(F,T,N),l(F,T,U),l(S,T,U),z),c(l(S,A,U),l(F,A,U),l(F,T,U),l(S,T,U),k),c(l(S,A,N),l(F,A,N),l(F,A,U),l(S,A,U),k),c(l(S,A,N),l(S,A,U),l(S,T,U),l(S,T,N),k),c(l(F,A,N),l(F,A,U),l(F,T,U),l(F,T,N),k)},f=new nt(O.body),d=new nt(O.bodyTop),p=new nt(O.accent),b=new nt(1929098),m=new nt(995141),g=(S,F,A,T,N)=>{let U=(k,z,W)=>[k[0]+(z[0]-k[0])*W,k[1]+(z[1]-k[1])*W,k[2]+(z[2]-k[2])*W];for(let k=0;k<N;k++){let z=U(S,F,k/N),W=U(S,F,(k+1)/N),G=U(A,T,(k+1)/N),H=U(A,T,k/N);c(l(z[0],z[1],z[2]),l(W[0],W[1],W[2]),l(G[0],G[1],G[2]),l(H[0],H[1],H[2]),k%2?b:m)}},x=t.w/2,_=-t.d/2,y=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),w=(t.awning_pitch??12)*Math.PI/180,R=(S,F)=>{t.awning_valance!==!1&&g([-x+.04,S,F+.01],[x-.04,S,F+.01],[-x+.04,S-.2,F+.01],[x-.04,S-.2,F+.01],M)},v=t.variant??"arm";if(v==="side"){let S=e,F=.05,A=0,T=-x+.08+a*(t.w-.16);u(-x,-x+.1,0,S+.05,A-.05,A+.05,f,d),u(x-.06,x,0,S+.05,A-.03,A+.03,f,d),a>.01&&g([-x+.1,S,A],[-x+.1,F,A],[T,S,A],[T,F,A],Math.max(4,Math.round((S-F)/.3))),h([T,F,A],[T,S,A],.02,p);return}if(v==="vertical"){let S=_,F=Math.min(t.d/2,_+y);u(-x,x,e,e+y,S,F,f,d);let A=(S+F)/2;for(let N of[-x+.02,x-.02])h([N,.02,A],[N,e,A],.02,p);let T=e-a*Math.max(0,e-.04);a>.01&&g([-x+.04,e,A],[x-.04,e,A],[-x+.04,T,A],[x-.04,T,A],M),h([-x+.03,T,A],[x-.03,T,A],.025,p);return}if(v==="pergola"){let S=t.d/2-.05,F=e+y,A=F-(S-_)*Math.tan(w);u(-x,x,e,F,_,_+y,f,d);for(let U of[-x+.05,x-.05])h([U,F,_+y],[U,A,S],.035,p),h([U,0,S],[U,A,S],.045,f);h([-x+.05,A,S],[x-.05,A,S],.035,p);let T=_+y+a*(S-_-y),N=F-(T-_)*Math.tan(w)+.04;a>.01&&g([-x+.08,F+.04,_+y],[x-.08,F+.04,_+y],[-x+.08,N,T],[x-.08,N,T],M),h([-x+.08,N,T],[x-.08,N,T],.025,p);return}let E=_,C=_+y;u(-x,x,e,e+y,E,C,f,d);let I=[C-.02,e+y*.35];if(v==="drop"){let S=Math.max(.3,t.d-y),F=[C,I[1]-S],A=a*(Math.PI/2+w),T=[F[0]+Math.sin(A)*S,F[1]+Math.cos(A)*S];for(let N of[-x+.08,x-.08])h([N,F[1],F[0]],[N,T[1],T[0]],.018,p);a>.01&&g([-x+.04,I[1],I[0]],[x-.04,I[1],I[0]],[-x+.04,T[1],T[0]],[x-.04,T[1],T[0]],M),h([-x+.02,T[1],T[0]],[x-.02,T[1],T[0]],.03,p),a>.05&&R(T[1],T[0]);return}let P=Math.max(0,t.d-y)*a,D=[I[0]+P,I[1]-P*Math.tan(w)];if(P>.01){g([-x+.04,I[1],I[0]],[x-.04,I[1],I[0]],[-x+.04,D[1],D[0]],[x-.04,D[1],D[0]],M);let S=Math.max(.3,(t.d-y)/2+.05);for(let F of[-1,1]){let A=F*(x-.12),T=[A,e+.02,C-.04],N=[A,D[1]-.02,D[0]],U=Math.hypot(N[2]-T[2],N[1]-T[1]),k=Math.sqrt(Math.max(0,S*S-(U/2)**2)),z=[A-F*Math.min(k,x-.15),(T[1]+N[1])/2,(T[2]+N[2])/2];h(T,z,.018,p),h(z,N,.018,p)}}h([-x+.02,D[1],D[0]],[x-.02,D[1],D[0]],.03,p),P>.05&&R(D[1],D[0])}function Z0(i,t,e,n,r){let o=i.p.length;bM(i,t,e,n,r),t.mirror&&K0(i,o)}function bM(i,t,e,n,r){let o=t.rotation*le,s=Math.cos(o),a=Math.sin(o),l=t.mirror?-1:1,c=(y,M)=>[t.x+l*y*s-M*a,t.z+l*y*a+M*s],h=e+.05,u=e+t.h-.02,f=new nt(.75,.1,.14),d=new nt(O.dark),p=new nt(O.accent),b=t.w/2-.006,m=(y,M,w)=>{let R=w/g,v=new nt(2043212).lerp(f,R),E=new nt(O.body).lerp(f,R*.8),C=Math.cos(w),I=Math.sin(w),P=(F,A)=>c(y+M*(F*C-A*I),t.d/2+F*I+A*C),D=(F,A,T,N)=>{let[U,k,z,W]=F;i.tri([U[0],A,U[1]],[k[0],A,k[1]],[z[0],T,z[1]],N),i.tri([U[0],A,U[1]],[z[0],T,z[1]],[W[0],T,W[1]],N)},S=(F,A,T,N,U,k,z,W=z)=>{let G=[P(F,k),P(A,k),P(A,U),P(F,U)];D([G[0],G[1],G[1],G[0]],T,N,W),D([G[3],G[2],G[2],G[3]],T,N,z),D([G[0],G[3],G[3],G[0]],T,N,z),D([G[1],G[2],G[2],G[1]],T,N,z),D([G[0],G[1],G[2],G[3]],N,N,z),D([G[3],G[2],G[1],G[0]],T,T,z)};return S(0,b,h,u,-q0,0,E,v),S(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),S},g=1.83;m(-t.w/2,1,n*g)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),m(t.w/2,-1,r*g)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function xM(i,t,e,n){tr(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.dark,O.dark,pt);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=o*e/.62;i.cyl(a,l,s,n,n+.004,O.dark,1451583,12,Kt)}}function yM(i,t,e,n){tr(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,pt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,pt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,O.whiteTop,O.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,O.whiteTop,O.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,O.metal,O.metal,Kt),i.cyl(0,-e/2+.05,.02,n,n+.28,O.metal,O.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,O.metal)}function vM(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,O.white,O.whiteTop,pt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,O.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,O.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,O.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,O.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,O.glass,O.glass,Kt),i.cyl(-t/2+.04,0,.02,n,n+.12,O.metal,O.metal,8)}function _M(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,O.whiteTop,O.whiteTop,pt),i.cyl(0,0,.04,.05,.052,O.metal,O.metal,8);for(let[r,o,s,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,o,s,.05,a,Kt),i.seg(r,n,o,s,n,a,Kt),i.seg(s,.05,a,s,n,a,Kt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,O.metal,O.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,O.metal,O.metal,12,Kt)}function MM(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,O.white,O.whiteTop,pt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,O.white,O.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,O.white,O.whiteTop,12,pt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,O.whiteTop)}function SM(i,t,e,n){tr(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,O.white,O.whiteTop,pt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,O.glass,O.glass,Kt),i.cyl(0,-e/2+.06,.018,n,n+.2,O.metal,O.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,O.glass,O.glass,Kt)}function wM(i,t,e,n){tr(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,O.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,O.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-e/2+.12,-e/2+.16,O.dark,O.dark,Kt)}function TM(i,t,e,n){let r=Math.min(t,e)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,O.pot,O.pot,10,pt),i.cyl(0,0,r*.08,o,n*.55,O.wood,O.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),h=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-o)*.16,O.plant,O.plantTop,8,a===s-1?Dt:null)}}function EM(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,O.fabric,O.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,o,s,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,o,s,.014,a,pt)}function AM(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),o=n/r,s=e/r;for(let h=0;h<r;h++){let u=e/2-s*h,f=u-s,d=o*(h+1);i.box(-t/2,t/2,0,d,f,u,O.wood,O.woodTop),i.seg(-t/2,d,u,t/2,d,u,pt)}i.seg(-t/2,0,e/2,-t/2,o,e/2,pt);for(let h of[-t/2,t/2])i.seg(h,o,e/2,h,n,-e/2+s,Dt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,o+a,e/2-s/2,l,o*c+a,e/2-s*(c-.5),Kt);for(let h=0;h<c;h+=3){let u=e/2-s*(h+.5),f=o*(h+1);i.seg(l,f,u,l,f+a,u,Dt)}}function RM(i,t,e,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:h}=Nf(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,p=t/2,b=-e/2+l;for(let R=0;R<o;R++){let v=e/2-c*R,E=h*(R+1);i.box(u,f,0,E,v-c,v,O.wood,O.woodTop),i.seg(u,E,v,f,E,v,pt)}i.seg(u,0,e/2,u,h,e/2,pt);let m=h*r,g=.2;i.box(u,f,0,m,-e/2,b,O.wood,O.woodTop),i.box(f,p,Math.max(0,m-g),m,-e/2,b,O.wood,O.woodTop),i.seg(u,m,b,f,m,b,pt);for(let R=0;R<s;R++){let v=b+c*R,E=h*(r+1+R);i.box(d,p,Math.max(0,E-h-g),E,v,v+c,O.wood,O.woodTop),i.seg(d,E,v,p,E,v,pt)}i.seg(u,h,e/2,u,m,b,Dt),i.seg(p,m,b,p,n,b+c*(s-1),Dt);let x=.9,_=f-.03,y=d+.03,M=b-.03,w=Math.max(1,s-4);i.seg(_,h+x,e/2-c/2,_,m+x,M,Kt),i.seg(_,m+x,M,y,m+x,M,Kt),i.seg(y,m+x,M,y,h*(r+w)+x,b+c*(w-.5),Kt);for(let R=0;R<o;R+=3){let v=e/2-c*(R+.5);i.seg(_,h*(R+1),v,_,h*(R+1)+x,v,Dt)}for(let R of[_,y])i.seg(R,m,M,R,m+x,M,Dt);for(let R=2;R<w;R+=3){let v=b+c*(R+.5);i.seg(y,h*(r+1+R),v,y,h*(r+1+R)+x,v,Dt)}}function PM(i,t,e,n){Ir(i,t,e,.12,.03,.04,O.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,O.wood,O.woodTop,pt),Rs(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function CM(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,O.wood,O.woodTop,pt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,O.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=e/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-t/2,a,o,t/2,a,o,Dt)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,Kt)}}function IM(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,O.wood,O.woodTop,pt),Rs(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,O.body,O.bodyTop,pt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.wood,O.woodTop,pt);let r=Math.max(2,Math.round(t/.25));for(let o=0;o<r;o++){let s=-t/2+t/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,O.metal,O.metal)}}function V0(i,t,e,n,r){let s=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+s,O.wood,O.woodTop,pt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,O.wood,O.woodTop,pt),i.box(-t/2+(r?s:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+s,O.cushion,O.cushion,Dt),r&&(i.box(-t/2,-t/2+s,0,.45-.06,-e/2+s,e/2,O.wood,O.woodTop,pt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,O.wood,O.woodTop,pt),i.box(-t/2+a,-t/2+s,.45-.06,.45+.02,-e/2+a,e/2-.02,O.cushion,O.cushion,Dt))}function LM(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,O.metal,O.metal,12),i.cyl(0,0,.025,.02,n-.05,O.metal,O.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,O.metal,O.metal,12,Dt),i.cyl(0,0,r,n-.05,n,O.cushion,O.fabricTop,14,pt)}function FM(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,O.metal),i.box(-.03,.03,.04,.08,-r,r,O.metal),i.cyl(0,0,.06,.02,.1,O.dark,O.dark,8),i.cyl(0,0,.025,.1,.44,O.metal,O.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,O.fabric,O.cushion,pt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,O.fabric,O.fabricTop,pt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,O.metal)}function DM(i,t,e,n){Ir(i,t,e,.08,.04,.05,O.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,O.fabric,O.cushion,pt)}function NM(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,O.body,O.bodyTop,pt),Rs(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function OM(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,O.body,O.bodyTop,pt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,O.dark,O.dark,Kt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,Kt);for(let o of[.85,1.45])i.seg(-t/2,o,r,t/2,o,r,Dt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,Kt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,Kt)}function UM(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,O.body,O.bodyTop,pt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,O.dark),Rs(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,pt)}function BM(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,O.body,O.bodyTop,pt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Kt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,pt)}function G0(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,O.white,O.whiteTop,pt);let o=e/2-.012;i.seg(-t/2,n-.14,o,t/2,n-.14,o,Dt),i.seg(t/2-.16,n-.07,o,t/2-.08,n-.07,o,Kt);let s=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,s+Math.sin(h)*a,o,Math.cos(u)*a,s+Math.sin(u)*a,o,Kt),r||i.seg(Math.cos(h)*a*.72,s+Math.sin(h)*a*.72,o,Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Dt)}}function kM(i,t,e,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(t/2)-(s>0?.05:0),s*(t/2)+(s<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),O.wood,O.woodTop);for(let s of[.25,n-.55])i.box(-t/2,t/2,s,s+.08,-e/2,e/2,O.wood,O.woodTop,pt),i.box(-t/2+.04,t/2-.04,s+.08,s+.24,-e/2+.05,e/2-.05,O.white,O.whiteTop,Dt),i.box(-t/2+.05,t/2-.05,s+.24,s+.33,-e/2+.08,-e/2+.4,O.whiteTop,O.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,O.wood,O.woodTop);let o=t/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,e/2+.02,s,n-.15,e/2+.02,pt);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,e/2+.02,o+.18,s,e/2+.02,Dt)}function zM(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,O.metal,O.metal,12),i.cyl(0,0,.05,.03,n-.04,O.wood,O.wood,8),i.cyl(0,0,r,n-.04,n,O.wood,O.woodTop,20,pt)}function VM(i,t,e,n){Ir(i,t,e,n-.03,.04,.03,O.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,O.wood,O.woodTop,pt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,O.body,O.bodyTop,Dt)}function GM(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,O.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,O.dark,O.dark,Kt)}function WM(i,t,e,n){let r=zh;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,O.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,O.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,O.white,O.whiteTop,pt);let o=Math.max(3,Math.round(t/.1));for(let s=1;s<o;s++){let a=-t/2+t/o*s;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Dt)}}function HM(i,t,e,n){let r=Vh;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,O.white,O.whiteTop,pt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,O.white,O.white,pt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,O.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Dt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,Kt)}function Eo(i,t,e,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,Kt)}}function XM(i,t,e,n,r){let s=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.dark,O.body,pt),i.seg(-t*.25,1.1+n*.15,s+.004,-t*.25,1.1+n*.85,s+.004,Kt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,s,s+.005,O.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.white,O.whiteTop,pt),Eo(i,0,1.1+n*.66,Math.min(t,n)*.22,s+.004),i.seg(-t*.08,1.1+n*.66,s+.005,t*.08,1.1+n*.66,s+.005,Kt);for(let a of[-1,1])Eo(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.white,O.whiteTop,pt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,O.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Kt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Dt)}function YM(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,O.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,O.metal,O.metal,pt);for(let s of[-t*.4,-t*.25,-t*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,Dt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,O.dark,O.body,14,pt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,O.glass,O.glass,14);let o=Math.min(t*.2,e*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,t*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,Kt)}}function qM(i,t,e,n,r){let o=Math.min(t,e)/2;if(i.cyl(0,0,o*.95,0,n*.08,O.dark,O.dark,16),i.cyl(0,0,o,n*.08,n*.78,O.dark,O.body,18,pt),i.cyl(0,0,o*.75,n*.78,n*.84,O.dark,O.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,O.dark,O.metal,pt),Eo(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,O.dark,O.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,O.dark,O.metal,16,pt);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,Kt)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,O.dark,O.body)}function $M(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,O.white,O.whiteTop,pt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,O.dark);let r=Math.min(n*.38,t*.3),o=-t*.15,s=n*.53;Eo(i,o,s,r,e/2+.004,24),Eo(i,o,s,r*.55,e/2+.004,16),i.seg(o-r,s,e/2+.005,o+r,s,e/2+.005,Dt),i.seg(o,s-r,e/2+.005,o,s+r,e/2+.005,Dt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,O.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,Kt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Dt)}function ZM(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,O.white,O.whiteTop,pt);for(let o of[-1,1])Eo(i,o*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,Kt);for(let o of[-1,1])i.box(o*t*.25-t*.18,o*t*.25+t*.18,0,n*.5,-e/2,e/2,O.white,O.glass,Dt)}function KM(i,t,e,n){let r=Cf-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,O.metal,O.metal,pt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,O.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,O.accent,O.accent)}function JM(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,O.dark,O.body,pt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,O.dark,O.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Kt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Dt)}function jM(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,O.dark,O.body,pt);let o=Math.min(t,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,e/2+.003,Math.cos(h)*o,s+Math.sin(h)*o,e/2+.003,Kt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,O.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,O.dark,O.body)}function QM(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,O.white,O.whiteTop,pt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Dt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Dt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,O.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,O.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Kt)}function t2(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,O.white,O.whiteTop,pt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Kt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Dt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,O.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,O.dark,O.body,pt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Kt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,O.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,O.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-t/2,t/2,.06+a*s+.004,.06+(a+1)*s,-e/2,e/2,O.white,O.whiteTop,pt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Kt)}}var zh=.12,Vh=2.05;function Gh(i,t){let e=e2(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function e2(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=jf(i.type);if(o){let l=t?rn(t,i):0,c=(o.x-o.w/2)*e,h=(o.x+o.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+o.y*r+u,y1:l+(o.y+o.h)*r-u,z:(o.z+o.d/2)*n}}let s=t&&i.type!=="fridge_smart"?rn(t,i)-sr(i):0,a=n2(i,e,n,r,t);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function n2(i,t,e,n,r){if(i.type==="pool_pump"){let o=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let o=Math.min(t,e)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let o=Math.min(t*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-e/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:o+.02,y1:o+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let o=r?rn(r,i):0;return{x0:.06,x1:t/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:zh+.02,y1:zh+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:Vh+.015,y1:Vh+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function i2(i,t,e,n,r){let o=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),s=new nt(1-r,1-r,1-r),a=new nt(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],h=[t(-e/2-o,-n/2-o),t(e/2+o,-n/2-o),t(e/2+o,n/2+o),t(-e/2-o,n/2+o)],u=d=>[d[0],l,d[1]],f=i.p.length;i.tri(u(c[0]),u(c[1]),u(c[2]),s),i.tri(u(c[0]),u(c[2]),u(c[3]),s);for(let d=0;d<4;d++){let p=(d+1)%4;i.tri(u(c[d]),u(h[d]),u(h[p]),s,a,a),i.tri(u(c[d]),u(h[p]),u(c[p]),s,a,s)}H0(t)&&K0(i,f)}function gc(i,t,e,n,r=0,o=!1){r2(i,t,e,n,r,o)}function K0(i,t){let e=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function r2(i,t,e,n,r,o=!1){let s=we(n.type)?0:r-sr(n);if(we(n.type)||Math.abs(s)<.001)return W0(i,t,e,n,r,o);let a=i.p.length,l=t.p.length;W0(i,t,r<.05?e:new jt,n,0);for(let c=a+1;c<i.p.length;c+=3)i.p[c]+=s;for(let c=l+1;c<t.p.length;c+=3)t.p[c]+=s}function W0(i,t,e,n,r,o=!1){let s=n.rotation*le,a=Math.cos(s),l=Math.sin(s),c=n.mirror?-1:1,h=(b,m)=>[n.x+c*b*a-m*l,n.z+c*b*l+m*a],u=new er(i,t,h),f=Math.max(.05,n.w),d=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":k0(u,f,d,p,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":k0(u,f,d,p,1);break;case"sofa_l":z0(u,f,d,p,!1);break;case"sofa_u":z0(u,f,d,p,!0);break;case"bed":rM(u,f,d,p);break;case"chair":oM(u,f,d,p);break;case"table":sM(u,f,d,p);break;case"desk":aM(u,f,d,p);break;case"nightstand":tr(u,f,d,p,1,p*.72,!0),u.seg(-f/2,p*.5,d/2-.02,f/2,p*.5,d/2-.02,Dt);break;case"wardrobe":tr(u,f,d,p,Math.max(2,Math.round(f/.5)),p*.5);break;case"shelf":lM(u,f,d,p);break;case"kitchen":cM(u,f,d,p);break;case"fridge":uM(u,f,d,p);break;case"fridge_smart":gM(u,f,d,p);break;case"waste_bin":{let b=i.c.length;hM(u,f,d,p,R0(n),L0(n,I0())),As&&Y0(i.c,b);break}case"mailbox":{let b=i.p.length,m=t.p.length;mM(u,f,d,p,P0(n));let g=sr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=g;for(let x=m+1;x<t.p.length;x+=3)t.p[x]+=g;if(g>0)return;break}case"wifi_ap":dM(u,f,d,p,n.variant==="wall");return;case"water_heater":if(pM(u,f,d,p,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,m=t.p.length;fM(u,f,d,p,Bf(n).length,n.type==="wall_socket",n.variant==="outdoor");let g=sr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=g;for(let x=m+1;x<t.p.length;x+=3)t.p[x]+=g;return}case"awning":return;case"stove":xM(u,f,d,p);break;case"sink":yM(u,f,d,p);break;case"bathtub":vM(u,f,d,p);break;case"shower":_M(u,f,d,p);break;case"wc":MM(u,f,d,p);break;case"washbasin":SM(u,f,d,p);break;case"tv_board":wM(u,f,d,p);break;case"plant":TM(u,f,d,p);break;case"rug":EM(u,f,d);return;case"stairs":AM(u,f,d,p);break;case"stairs_u":RM(u,f,d,p);break;case"stairwell":return;case"sideboard":PM(u,f,d,p);break;case"dresser":CM(u,f,d,p);break;case"tall_cabinet":tr(u,f,d,p,1,p*.5);break;case"coat_rack":IM(u,f,d,p);break;case"bench":V0(u,f,d,p,!1);break;case"corner_bench":V0(u,f,d,p,!0);break;case"bar_stool":LM(u,f,d,p);break;case"office_chair":FM(u,f,d,p);break;case"stool":DM(u,f,d,p);break;case"kitchen_wall":NM(u,f,d,p);return;case"kitchen_tall":OM(u,f,d,p);break;case"island":UM(u,f,d,p);break;case"worktop":u.box(-f/2,f/2,Math.max(0,p-.04),p,-d/2,d/2,O.whiteTop,O.whiteTop,pt);return;case"dishwasher":BM(u,f,d,p);break;case"washer":G0(u,f,d,p,!1);break;case"dryer":G0(u,f,d,p,!0);break;case"bunk_bed":kM(u,f,d,p);break;case"table_round":zM(u,f,d,p);break;case"coffee_table":VM(u,f,d,p);break;case"tv_wall":GM(u,f,d,p);return;case"parking":{let m=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let g=0;g<4;g++)u.seg(m[g][0],.012,m[g][1],m[(g+1)%4][0],.012,m[(g+1)%4][1],Dt);u.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,pt),u.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,pt);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,p,-d/2,-d/2+d*.3,O.white,O.whiteTop,pt),u.box(-f*.2,f*.2,p*.5,p*.62,-d/2+d*.3,-d/2+d*.31,O.accent);return;case"radiator":WM(u,f,d,p);return;case"ac_unit":HM(u,f,d,p);return;case"inverter":XM(u,f,d,p,n.variant??null);return;case"grid_point":JM(u,f,d,p);break;case"wallbox":jM(u,f,d,p);return;case"pool_pump":YM(u,f,d,p);break;case"pool_filter":qM(u,f,d,p,n.variant??null);break;case"pool_heat_pump":$M(u,f,d,p);break;case"pool_dosing":ZM(u,f,d,p);break;case"pool_valve":KM(u,f,d,p);return;case"meter":QM(u,f,d,p);return;case"home_battery":if(t2(u,f,d,p,n.variant??null),n.variant==="wall")return;break;default:{let b=we(n.type);if(b){let m=na(n.type),g=m?x=>Hc(m,x):qf(n.type)&&!o?Oo:null;if(Ps(u,b,f,d,p,r,null,null,g),r>.05)return}else u.box(-f/2,f/2,0,p,-d/2,d/2,O.body,O.bodyTop,pt)}}i2(e,h,f,d,n.type==="plant"?.35:.5)}function J0(i){return!!we(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function kh(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=O;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Ps(i,t,e,n,r,o,s,a=null,l=null){let c=!!a;for(let h of fc(t,e,n,r)){if(l?.(h)||a&&!a(h))continue;let u=c?{...h,glow:!0,w:h.w+.006/e,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=u.glow&&s!==null,d=f?s:kh(u.color,!1)??O.body,p=f?s:kh(u.top,!1)??kh(u.color,!0)??zt(d,1.25).getHex(),b=o+u.y*r,m=o+Math.min(r,(u.y+u.h)*r),g=i.colors.length,x=u.edges==="glow"?ji:u.edges==="faint"?Dt:u.edges?pt:null,_=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))_.lyingCyl(u.axis,u.x*e,u.z*n,b,m,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,d,p,14,x);else if(u.shape==="cyl")_.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,b,m,d,p,14,x);else if(u.shape==="loft"){let y=u.tx??u.x,M=u.tz??u.z,w=u.tw??u.w,R=u.td??u.d;_.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(y-w/2)*e,(y+w/2)*e,(M-R/2)*n,(M+R/2)*n],b,m,d,p,x)}else _.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,b,m,(u.z-u.d/2)*n,(u.z+u.d/2)*n,d,p,x);As&&!f&&!c&&(u.color?.startsWith("#")||u.top?.startsWith("#"))&&Y0(i.colors,g)}}function j0(i,t,e,n,r,o){let s=o*le,a=Math.cos(s),l=Math.sin(s),c=(p,b)=>[e+p*a-b*l,r+p*l+b*a],h=new er(i,new Ne,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,O.accent,O.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,O.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Q0(i,t,e,n,r){let o=$f(t)*n,s=new er(i,new Ne,(c,h)=>[c,h-o]);Ps(s,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,Oo);let a=0,l=0;for(let c of fc(t,e,n,r)){if(!Oo(c))continue;let h=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function Cs(i,t,e,n,r,o=s=>!!s.glow){let s=e.rotation*le,a=Math.cos(s),l=Math.sin(s),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];Ps(new er(i,new Ne,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,o)}function tm(i,t,e,n,r,o){let s=o2(t,e,o,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*le,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];Ps(new er(i,new Ne,u),{...t,parts:s},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function o2(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),o=i.parts.filter(a=>Hc(t,a)),s;if(t==="curtain")s=o.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...o.map(c=>c.y+c.h)),l=Math.max(.02,1-r);s=o.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return s}function em(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),o=Math.max(.005,t.h),s=0,a=0,l=0,c=0;for(let m of fc(i,n,r,o)){if(!m.glow)continue;let g=(m.x+(m.shape==="loft"?m.tx??m.x:m.x))/2*n,x=(m.z+(m.shape==="loft"?m.tz??m.z:m.z))/2*r,_=m.y*o,y=Math.min(o,(m.y+m.h)*o),M=Math.max(1e-6,m.w*n*m.d*r*Math.max(0,y-_));s+=M,a+=g*M,l+=(_+y)/2*M,c+=x*M}if(!s)return null;let h=a/s,u=c/s,f=t.rotation*le,d=Math.cos(f),p=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*h*d-u*p,e+l/s,t.z+b*h*p+u*d]}function bc(i,t,e,n,r){let o=e.rotation*le,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*s-u*a,e.z+l*h*a+u*s];Ps(new er(i,new Ne,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}function s2(i){let t=i.point_ids;return!!t&&t.length===i.points.length&&t.every(e=>typeof e=="string"&&e.length>0)&&new Set(t).size===t.length}function a2(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],o=e[1]-t[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-o*u)/(s*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*p-n[0],l[1]+f*p-n[1])<.4}))}function xc(i,t){if(t.type!=="balcony"||t.points.length<3)return[];let e=s2(t)?t.point_ids:void 0,n=i.elevation+ui(i,t)+Ci.balcony,r=t.height&&t.height>.3?t.height:1,o=[];for(let s=0;s<t.points.length;s++){let a=(s+1)%t.points.length,l=t.points[s],c=t.points[a];a2(i,l,c)||o.push({floorId:i.id,areaId:t.id,index:s,startIndex:s,endIndex:a,start:l,end:c,...e?{startId:e[s],endId:e[a]}:{},surfaceY:n,height:r})}return o}var l2={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function im(i,t){return t.type==="pool"?js(i,t):ui(i,t)+(Dn(t.type)?.01:Ci[t.type])}function Is(i){return xn(i)>=0?i:[...i].reverse()}function c2(i,t){let e=i[t];if(Dn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===t||!(o.cut&&r>t||o.type==="pool")||o.points.length<3||o.points.every(s=>te(s,e.points))&&n.push(Is(o.points))}return n}function nm(i,t,e,n,r,o,s,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Fe(i,Is([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,o,s,a,{aoFrom:r-1});return}let p=(y,M)=>[t[0]+f*M,y,t[1]+d*M],b=(y,M)=>[e[0]+f*M,y+l,e[1]+d*M],m=(y,M)=>{i.tri(y[0],y[1],y[2],M,M,M,void 0,Zt),i.tri(y[0],y[2],y[3],M,M,M,void 0,Zt),i.tri(y[0],y[2],y[1],M,M,M,void 0,Zt),i.tri(y[0],y[3],y[2],M,M,M,void 0,Zt)},g=new nt(a),x=new nt(zt(s,.9)),_=new nt(zt(s,.6));m([p(o,1),b(o,1),b(o,-1),p(o,-1)],g),m([p(r,1),b(r,1),b(r,-1),p(r,-1)],_),m([p(r,1),b(r,1),b(o,1),p(o,1)],x),m([p(r,-1),b(r,-1),b(o,-1),p(o,-1)],x),m([p(r,1),p(r,-1),p(o,-1),p(o,1)],x),m([b(r,1),b(r,-1),b(o,-1),b(o,1)],x)}function rm(i,t,e,n){let r=e.outdoor??[];r.forEach((o,s)=>{if(o.points.length<3)return;let a=ui(e,o),l=(x,_)=>a-Do(e,o,x,_),c=a-(o.type==="pool"?0:o.slope??0),h=Dn(o.type)&&o.height?o.height:Ci[o.type],u={...l2[o.type],top:h},f=Is(o.points),d=zt(u.edge,u.edgeAlpha),p=o.open&&(o.type==="fence"||o.type==="pergola")?f.length-1:-1,b=x=>{if(o.outline!==!1)for(let _=0;_<f.length;_++){if(_===p)continue;let y=f[_],M=f[(_+1)%f.length];t.seg([y[0],x(y[0],y[1]),y[1]],[M[0],x(M[0],M[1]),M[1]],d,Zt)}},m=n??i,g=new nt(n?1734832:u.color);switch(o.type){case"pool":{let x=new nt(u.side),_=new nt(zt(u.side,.55)),y=new nt(932440),M=js(e,o),w=Js(e,o),R=Rf(e,o);for(let[v,E,C]of li(f)){let I=f[v],P=f[E],D=f[C];(n?m:i).tri([I[0],M,I[1]],[D[0],M,D[1]],[P[0],M,P[1]],g,g,g,void 0,Zt),i.tri([I[0],R,I[1]],[D[0],R,D[1]],[P[0],R,P[1]],y,y,y,void 0,Zt)}for(let v=0;v<f.length;v++){let E=f[v],C=f[(v+1)%f.length];i.tri([C[0],R,C[1]],[C[0],w,C[1]],[E[0],w,E[1]],_,x,x,void 0,Zt),i.tri([C[0],R,C[1]],[E[0],w,E[1]],[E[0],R,E[1]],_,x,_,void 0,Zt)}if(!o.above&&Bc(e,o)){let v=new nt(660258),E=new nt(396054),C=R-.2,I=Math.min(a,w);for(let P=0;P<f.length;P++){let D=f[P],S=f[(P+1)%f.length];i.tri([D[0],C,D[1]],[D[0],I,D[1]],[S[0],I,S[1]],E,v,v,void 0,Zt),i.tri([D[0],C,D[1]],[S[0],I,S[1]],[S[0],C,S[1]],E,v,E,void 0,Zt)}for(let[P,D,S]of li(f)){let F=f[P],A=f[D],T=f[S];i.tri([F[0],C,F[1]],[A[0],C,A[1]],[T[0],C,T[1]],E,E,E,void 0,Zt)}if(o.outline!==!1)for(let P=0;P<f.length;P++){let D=f[P],S=f[(P+1)%f.length];t.seg([D[0],C,D[1]],[S[0],C,S[1]],zt(u.edge,u.edgeAlpha*.35),Zt),t.seg([D[0],C,D[1]],[D[0],I,D[1]],zt(u.edge,u.edgeAlpha*.25),Zt)}}if(w>a+.02){let v=new nt(2044240),E=new nt(1187123);for(let C=0;C<f.length;C++){let I=f[C],P=f[(C+1)%f.length];i.tri([I[0],a,I[1]],[I[0],w,I[1]],[P[0],w,P[1]],E,v,v,void 0,Zt),i.tri([I[0],a,I[1]],[P[0],w,P[1]],[P[0],a,P[1]],E,v,E,void 0,Zt)}b(()=>a+.005)}if(b(()=>w),b(()=>M+.005),o.outline!==!1)for(let v=0;v<f.length;v++){let E=f[v],C=f[(v+1)%f.length];t.seg([E[0],R+.005,E[1]],[C[0],R+.005,C[1]],zt(u.edge,u.edgeAlpha*.4),Zt)}break}case"fence":{for(let x=0;x<f.length;x++){if(x===p)continue;let _=f[x],y=f[(x+1)%f.length],M=Math.hypot(y[0]-_[0],y[1]-_[1]),w=Math.max(1,Math.round(M/2)),R=p>=0&&x===p-1?w:w-1;for(let v=0;v<=R;v++){let E=v/w,C=_[0]+(y[0]-_[0])*E,I=_[1]+(y[1]-_[1])*E,P=l(C,I);Fe(i,Is([[C-.04,I-.04],[C+.04,I-.04],[C+.04,I+.04],[C-.04,I+.04]]),P,P+u.top,u.side,u.color)}for(let v of[.35,.85])t.seg([_[0],l(_[0],_[1])+v*u.top,_[1]],[y[0],l(y[0],y[1])+v*u.top,y[1]],d,Zt)}break}case"pergola":{let x=u.top;for(let[_,y]of f){let M=l(_,y);Fe(i,Is([[_-.06,y-.06],[_+.06,y-.06],[_+.06,y+.06],[_-.06,y+.06]]),M,M+x,u.side,u.color)}for(let _=0;_<f.length;_++){if(_===p)continue;let y=f[_],M=f[(_+1)%f.length],w=l(y[0],y[1])+x;if(nm(i,y,M,.12,w-.16,w,u.side,u.color,l(M[0],M[1])-l(y[0],y[1])),o.bracing){let R=l(y[0],y[1]),v=l(M[0],M[1]);t.seg([y[0],R+.25,y[1]],[M[0],v+x-.25,M[1]],d,Zt),t.seg([M[0],v+.25,M[1]],[y[0],R+x-.25,y[1]],d,Zt)}}if(kc(f)){let _=Gf(f),y=_.x1-_.x0,M=_.z1-_.z0,w=y>=M,R=w?y:M,v=Math.max(1,Math.round(R/.6));for(let E=1;E<v;E++){let C=(w?_.x0:_.z0)+R*E/v,I=w?[C,_.z0+.06]:[_.x0+.06,C],P=w?[C,_.z1-.06]:[_.x1-.06,C],D=l(I[0],I[1])+x;nm(i,I,P,.06,D-.04,D+.08,u.side,u.color,l(P[0],P[1])-l(I[0],I[1]))}}b((_,y)=>l(_,y)+x+.004);break}case"balcony":{Fe(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let _=zt(9417983,.42),y=zt(3662079,.55);for(let M of xc(e,o)){let w=M.start,R=M.end,v=Math.hypot(R[0]-w[0],R[1]-w[1]),E=M.surfaceY-e.elevation;t.seg([w[0],E+M.height,w[1]],[R[0],E+M.height,R[1]],y,Zt),t.seg([w[0],E+.1,w[1]],[R[0],E+.1,R[1]],_,Zt);let C=Math.max(1,Math.round(v/.12));for(let I=0;I<=C;I++){let P=I/C,D=w[0]+(R[0]-w[0])*P,S=w[1]+(R[1]-w[1])*P;t.seg([D,E,S],[D,E+M.height,S],I===0||I===C?y:_,Zt)}}break}default:{let x=(y,M)=>l(y,M)+u.top,_=c2(r,s);if(Fe(i,f,c,o.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:_}),b((y,M)=>x(y,M)+.004),o.type==="hedge"&&b((y,M)=>l(y,M)+.004),o.outline!==!1)for(let y of _)for(let M=0;M<y.length;M++){let w=y[M],R=y[(M+1)%y.length];t.seg([w[0],x(w[0],w[1])+.004,w[1]],[R[0],x(R[0],R[1])+.004,R[1]],d,Zt)}}}})}var vc=Math.PI/180,u2=1.13,h2=1.72,Wh=.025,Lr=.07,om=.25;function sm(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=si(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,h=-s/l,u=o.slope?[[0,Er(o.slope,o.a[0],o.a[1])],[l,Er(o.slope,o.b[0],o.b[1])]]:void 0,f=o.profile&&u?Ss([o.profile,u],l)??o.profile:o.profile??u,d=f?.length?Math.max(...f.map(([,g])=>g)):Math.min(n.height,o.height??n.height),p=o.sources.find(g=>g.room_id===o.roomLeft)?.edge??null,b={floorId:n.id,room:o.roomLeft,edge:p,free:!!o.free},m=(g,x,_,y,M)=>e.push({key:g,section:null,side:"top",flat:!1,o:x,eu:_,es:[0,1,0],n:y,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[y[0],y[2]],wall:{...b,...M?{profile:M}:{}}});m(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+h*o.right],[s/l,0,a/l],[c,0,h],f),o.free&&m(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-h*o.left],[-s/l,0,-a/l],[-c,0,-h],f?M2(f,l):void 0)}}return e}var Hh="ground";function Xh(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function am(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],o=Xh(i),s=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:Af(o,s,a)):t.base??0;return{key:Hh,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function f2(i,t){let e=[];for(let n of i.floors)if(!(t&&n.id!==t))for(let r of n.outdoor??[])for(let o of xc(n,r)){if(!o.startId||!o.endId)continue;let s=o.end[0]-o.start[0],a=o.end[1]-o.start[1],l=Math.hypot(s,a);if(l<1e-9)continue;let c=[s/l,0,a/l],h=xn(r.points)>=0?1:-1,u=[h*a/l,0,-h*s/l],f=o.startId,d=o.endId,p={floorId:n.id,balconyId:r.id,pointAId:f,pointBId:d,height:o.height};e.push({key:`balcony:${n.id}:${r.id}:${f}:${d}`,section:null,side:"top",flat:!1,o:[o.start[0],o.surfaceY,o.start[1]],eu:c,es:[0,1,0],n:u,lu:l,ls:o.height,pitch:90,span:()=>[0,l],facing:[u[0],u[2]],rail:p})}return e}function d2(i,t){let e=i.rail;if(e.pointAId===t.point_a_id&&e.pointBId===t.point_b_id)return i;let n=[i.o[0]+i.eu[0]*i.lu,i.o[1]+i.eu[1]*i.lu,i.o[2]+i.eu[2]*i.lu];return{...i,key:`balcony:${e.floorId}:${e.balconyId}:${t.point_a_id}:${t.point_b_id}`,o:n,eu:[-i.eu[0],-i.eu[1],-i.eu[2]],rail:{...e,pointAId:t.point_a_id,pointBId:t.point_b_id}}}function lm(i,t){let e=f2(i,t);return(i.settings.roof.solar??[]).flatMap(n=>{let r=n.balcony_mount;if(!r||r.floor_id!==t)return[];let o=e.find(s=>{let a=s.rail;return!!a&&a.balconyId===r.balcony_id&&(a.pointAId===r.point_a_id&&a.pointBId===r.point_b_id||a.pointAId===r.point_b_id&&a.pointBId===r.point_a_id)});return o?[{face:d2(o,r),field:n}]:[]})}function p2(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Dr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>m2(x,cc(i,x,x.overhang??t.overhang)));let e=p2(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(_=>_[0])),r=e.rooms.flatMap(x=>x.points.map(_=>_[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=e.elevation+e.height;if(t.type==="flat")return[cm("main",null,s,l,a,c,h+om)];let u=a-s>=c-l,f=t.ridge==="short"?!u:u,d=(f?c-l:a-s)/2,p=d*Math.tan(t.pitch*vc),b=(x,_,y)=>f?[x,h+y,(l+c)/2+_]:[(s+a)/2+_,h+y,x],[m,g]=f?[s,a]:[l,c];return[-1,1].map(x=>yc(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(m,x*d,0),b(g,x*d,0),b(m,0,p),t.pitch,()=>[0,g-m]))}function m2(i,t){let e=gn(i),n=cn(i),r=(_,y,M)=>{let[w,R]=e.at(_,y);return[w,M,R]},o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=e.at(a,-o),y=e.at(l,e.w+s);return[cm(i.id,i.id,Math.min(_[0],y[0]),Math.min(_[1],y[1]),Math.max(_[0],y[0]),Math.max(_[1],y[1]),i.eave_a+om)]}if(i.shape==="pent")return[yc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,e.w+s,n.y(e.w+s)),i.pitch_a,()=>[0,c])];let h=lc(i),u=h?Th(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",p=i.shape==="pyramid"?(e.u1-e.u0)/2:f?u.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,m=f?e.u0+p-a:0,g=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let _=Math.hypot(n.vr+o,n.rh-n.y(-o));x.push(yc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,y=>[m*(y/_),c-g*(y/_)]))}if(e.w-n.vr>.3){let _=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));x.push(yc(`${i.id}:b`,i.id,"b",r(l,e.w+s,n.y(e.w+s)),r(a,e.w+s,n.y(e.w+s)),r(l,n.vr,n.rh),i.pitch_b,y=>[g*(y/_),c-m*(y/_)]))}if(f||d){let _=n.y(-o),y=n.y(e.w+s),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+s,y),r(a,-o,_),r(e.u0+p,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-o,_),r(l,e.w+s,y),r(e.u1-b,n.vr,n.rh)]);for(let[w,R,v,E,C]of M){let I=g2(w,i.id,R,v,E,C);I&&x.push(I)}}return x}function g2(i,t,e,n,r,o){let s=Ls(Fr(r,n));if(s<.3)return null;let a=nr(Fr(r,n)),l=Fr(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=Ls(h);if(u<.3)return null;let f=nr(h),d=nr(fm(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=nr([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/vc;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:s,ls:u,pitch:b,span:g=>{let x=Math.min(1,Math.max(0,g/u));return[c*x,s-(s-c)*x]},facing:[p[0],p[2]]}}function yc(i,t,e,n,r,o,s,a){let l=nr(Fr(r,n)),c=nr(Fr(o,n)),h=nr(fm(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=nr([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:Ls(Fr(r,n)),ls:Ls(Fr(o,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function cm(i,t,e,n,r,o,s){let a=r-e>=o-n,l=a?r-e:o-n,c=a?o-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function um(i){let t=i.module_w||u2,e=i.module_h||h2;return i.portrait===!1?[e,t]:[t,e]}function b2(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function hm(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*vc:i.wall||i.rail?Math.min(90,Math.max(0,t.tilt??0))*vc:0}function x2(i,t){let[,e]=um(t),n=hm(i,t);return i.wall||i.rail?e*Math.cos(n)+Wh:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Wh}function Fs(i,t,e=!1){let[n,r]=um(t),o=[],s=hm(i,t),a=r*Math.cos(s),l=x2(i,t),c=b2(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,m,g)=>[i.o[0]+i.eu[0]*b+i.es[0]*m+i.n[0]*g,i.o[1]+i.eu[1]*b+i.es[1]*m+i.n[1]*g,i.o[2]+i.eu[2]*b+i.es[2]*m+i.n[2]*g],p=(b,m)=>{if(i.rail||i.unbounded)return!0;if(m<-1e-6||m>i.ls+1e-6||i.wall?.profile&&m>ln(i.wall.profile,b)+1e-6)return!1;let[g,x]=i.span(m);return b>=g-1e-6&&b<=x+1e-6};return c.forEach((b,m)=>{let g=t.align==="right"?h-b:t.align==="center"?(h-b)/2:0;for(let x=0;x<b;x++){let _=`${m}:${x}`,y=u.has(_);if(y&&!e)continue;let M=t.u+(x+g)*(n+Wh),w=t.v+m*l,R=M+n,v=w+(i.flat||i.wall||i.rail?a:r);if(f){if(!(p((M+R)/2,w)&&p((M+R)/2,v)))continue}else if(![[M,w],[R,w],[R,v],[M,v]].every(([S,F])=>p(S,F)))continue;if(i.wall?.profile&&!S2(i.wall.profile,M,R,v))continue;if((i.wall||i.rail)&&s>.001){let S=Lr+r*Math.sin(s),[F,A]=t.flip?[S,Lr]:[Lr,S],T=[d(M,w,F),d(R,w,F),d(R,v,A),d(M,v,A)],N=t.flip?w:v,U=[M+.05,R-.05].map(k=>[d(k,N,0),d(k,N,S)]);o.push({corners:T,posts:U,cell:_,skipped:y});continue}if(!i.flat){o.push({corners:[d(M,w,Lr),d(R,w,Lr),d(R,v,Lr),d(M,v,Lr)],posts:[],cell:_,skipped:y});continue}let E=.15,C=E+r*Math.sin(s),[I,P]=t.flip?[v,w]:[w,v],D=[d(M,I,E),d(R,I,E),d(R,P,C),d(M,P,C)];o.push({corners:D,posts:[M+.05,R-.05].flatMap(S=>[[d(S,I,0),d(S,I,E)],[d(S,P,0),d(S,P,C)]]),cell:_,skipped:y})}}),o}function Fr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Ls(i){return Math.hypot(i[0],i[1],i[2])}function nr(i){let t=Ls(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function fm(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var y2=.78,v2=1.18;function _2(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||y2,module_h:i.h||v2}}function _c(i,t){let e=Fs(i,_2(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Mc(i,t,e){let n=t?_c(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,o=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>o)continue;let l=a.rooms.find(c=>te([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}function M2(i,t){return[...i].reverse().map(([e,n])=>[t-e,n])}function S2(i,t,e,n){let r=i[i.length-1][0],o=Math.max(0,Math.min(r,Math.min(t,e))),s=Math.max(0,Math.min(r,Math.max(t,e)));return ln(i,o)<n-1e-6||ln(i,s)<n-1e-6?!1:i.every(([a,l])=>a<=o+1e-6||a>=s-1e-6||l>=n-1e-6)}var Ds=1712952,Ns=2239816,gm=1318193,ir=zt(3662079,.9),Ao=zt(5995775,.45),Ze=.14,w2=9427199,T2=13226982,E2=14936565,A2={black:{glass:new nt(329483),edge:zt(9082544,.32),cells:zt(2766160,.22)},blue:{glass:new nt(1386842),edge:zt(10467583,.55),cells:zt(4025599,.35)}},R2=zt(13226982,.5),P2=zt(13226982,.85),C2=zt(16757575,.95),dm=new nt(2845583),pm=new nt(1713986),I2=new nt(3662079).multiplyScalar(.35),mm=new nt(4871791);function L2(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function bm(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:N2(i),r=e?.type==="custom"?O2(i,e.sections??[],e.overhang):n?[n]:[];return D2(i,r),F2(i,r,t),r}function F2(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Dr(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?_c(s,o):null;if(!s||!a)continue;let l=s.section?t.find(A=>A.sections?.includes(s.section)):t[0];if(!l)continue;let c=o.float?Mc(i,s,o):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=A=>[A[0],A[1]-u,A[2]],[d,p,b,m]=a.map(f),g=e.get(o.id)??{open:0,tilt:0,cover:0},x=!!c&&(h!==null||c.floor.id===l.floor.id),_=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new jt,lines:new Ne,glass:new jt}).get(h.id):x?l.win??={solid:new jt,lines:new Ne,glass:new jt}:l.winRoof??={solid:new jt,lines:new Ne,glass:new jt},y=(A,T)=>[A[0]+s.n[0]*T,A[1]+s.n[1]*T,A[2]+s.n[2]*T],M=(A,T,N)=>[A[0]+(T[0]-A[0])*N,A[1]+(T[1]-A[1])*N,A[2]+(T[2]-A[2])*N],w=g.open>.02||g.tilt>.02?C2:P2,R=[d,p,b,m].map(A=>y(A,.06)),v=[d,p,b,m].map(A=>y(A,-.02));for(let A=0;A<4;A++){_.lines.seg(R[A],R[(A+1)%4],w);let T=(A+1)%4;_.solid.tri(v[A],v[T],R[T],mm),_.solid.tri(v[A],R[T],R[A],mm)}let E=(g.open>.02?30*Math.min(1,g.open):g.tilt>.5?12:0)*le,C=Math.hypot(b[0]-p[0],b[1]-p[1],b[2]-p[2]),I=A=>{let T=s.es;return[A[0]-T[0]*C*Math.cos(E)+s.n[0]*C*Math.sin(E),A[1]-T[1]*C*Math.cos(E)+s.n[1]*C*Math.sin(E),A[2]-T[2]*C*Math.cos(E)+s.n[2]*C*Math.sin(E)]},P=y(m,.065),D=y(b,.065),S=I(P),F=I(D);_.glass.tri(S,F,D,dm),_.glass.tri(S,D,P,dm);for(let[A,T]of[[S,F],[F,D],[D,P],[P,S]])_.lines.seg(A,T,w);if(g.cover>.02){let A=Math.min(1,g.cover),T=y(M(P,S,A),.01),N=y(M(D,F,A),.01),U=y(P,.01),k=y(D,.01);_.solid.tri(T,N,k,pm),_.solid.tri(T,k,U,pm);let z=Math.max(1,Math.round(C*A/.05));for(let W=1;W<=z;W++){let G=W/z;_.lines.seg(y(M(U,T,G),.004),y(M(k,N,G),.004),I2)}}}}function D2(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Dr(i).map(r=>[r.key,r]));for(let r of e){let o=n.get(r.face);if(!o)continue;let s=o.section?t.find(a=>a.sections?.includes(o.section)):t[0];s&&Yh(s.solid,s.lines,o,r,s.floor.elevation+s.base)}}function Yh(i,t,e,n,r){let o=c=>[c[0],c[1]-r,c[2]],s=A2[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Fs(e,n)){let[h,u,f,d]=c.corners.map(o);i.tri(h,u,f,s.glass),i.tri(h,f,d,s.glass),i.tri(h,f,u,s.glass),i.tri(h,d,f,s.glass);let p=(g,x=.004)=>[g[0]+e.n[0]*x,g[1]+e.n[1]*x,g[2]+e.n[2]*x],b=(g,x,_)=>[g[0]+(x[0]-g[0])*_,g[1]+(x[1]-g[1])*_,g[2]+(x[2]-g[2])*_],m=[h,u,f,d].map(g=>p(g));for(let g=0;g<4;g++)t.seg(m[g],m[(g+1)%4],s.edge);for(let g=1;g<a;g++)t.seg(p(b(h,u,g/a)),p(b(d,f,g/a)),s.cells);for(let g=1;g<l;g++)t.seg(p(b(h,d,g/l)),p(b(u,f,g/l)),s.cells);for(let[g,x]of c.posts)t.seg(o(g),o(x),R2)}}function N2(i){let t=i.settings.roof,e=L2(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(C=>C.points.map(I=>I[0])),r=e.rooms.flatMap(C=>C.points.map(I=>I[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=new jt,u=new Ne;if(t.type==="flat"){Fe(h,[[s,l],[a,l],[a,c],[s,c]],0,.25,Ds,Ns,{bottom:!0});let C=.252;for(let[I,P]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])u.seg([I[0],C,I[1]],[P[0],C,P[1]],ir),u.seg([I[0],0,I[1]],[P[0],0,P[1]],Ao);return{floor:e,base:e.height,solid:h,lines:u,glass:new jt}}let f=a-s>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-s)/2,b=p*Math.tan(t.pitch*le),m=(C,I,P)=>d?[C,P,(l+c)/2+I]:[(s+a)/2+I,P,C],[g,x]=d?[s,a]:[l,c],_=new nt(Ns),y=new nt(Ds),M=(C,I,P,D,S)=>{h.tri(C,I,P,S),h.tri(C,P,D,S)};for(let C of[-1,1]){M(m(g,C*p,0),m(x,C*p,0),m(x,0,b),m(g,0,b),_),M(m(g,C*p,-Ze),m(g,0,b-Ze),m(x,0,b-Ze),m(x,C*p,-Ze),y),M(m(g,C*p,-Ze),m(x,C*p,-Ze),m(x,C*p,0),m(g,C*p,0),y);for(let I of[g,x])M(m(I,C*p,-Ze),m(I,C*p,0),m(I,0,b),m(I,0,b-Ze),y);u.seg(m(g,C*p,0),m(x,C*p,0),Ao);for(let I of[g,x])u.seg(m(I,C*p,0),m(I,0,b),Ao)}let w=t.overhang,R=new nt(gm),v=p-w,E=v*Math.tan(t.pitch*le);for(let C of[g+w,x-w])h.tri(m(C,-v,-Ze),m(C,v,-Ze),m(C,0,E-Ze),R),h.tri(m(C,v,-Ze),m(C,-v,-Ze),m(C,0,E-Ze),R);return u.seg(m(g,0,b+.004),m(x,0,b+.004),ir),{floor:e,base:e.height,solid:h,lines:u,glass:new jt}}function O2(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,o=new Map(Dr(i).map(l=>[l.key,l])),s=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(s.map(l=>{let c=Rr(t,l),h=c?null:g0(t,l),u=c?Eh(c,l):h?x0(l,h):l,f=cc(i,c?u:l,u.overhang??e),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,p=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:p?p0(u,Pr(u,d).faces):[]}]}));for(let l of s){let c=a.get(l),h=u0(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new jt,lines:new Ne,glass:new jt,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,p=h.elevation+h.height>l.base+.05&&!l.dormer&&!d,b=t.filter(y=>y!==l&&Rr(t,y)===l).flatMap(y=>c0(l,y));for(let y of i.settings.roof.windows??[]){let M=o.get(y.face),w=M&&M.section===l.id?_c(M,y):null;if(!w)continue;let R=w.map(v=>Mi(l,v[0],v[2]));b.push({u0:Math.min(...R.map(v=>v[0])),u1:Math.max(...R.map(v=>v[0])),v0:Math.min(...R.map(v=>v[1])),v1:Math.max(...R.map(v=>v[1]))})}let m=c.drawn,g=c.junction?1-c.junction.end:null;if(d){let y=gn(m),M=Pr(d,{u0:0,u1:0,a:0,b:0}),w=R=>{let[v,E]=y.at(R,y.w/2),[C,I]=Mi(d,v,E);return Es(M,C,I)??cn(d).y(I)};g=w(y.u0)<=w(y.u1)?0:1}let x=s.filter(y=>m0(t,l,y)),_=x.length?{covers:Ph(m,x.flatMap(y=>a.get(y).covers)),lines:Ph(m,x.filter(y=>s.indexOf(y)>s.indexOf(l)).flatMap(y=>a.get(y).covers)),wallU:c.junction?[gn(l).u0,gn(l).u1]:null}:null;U2(f.solid,f.lines,m,c.ov,h.elevation,f.glass,p,b,g,_)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function U2(i,t,e,n,r,o=i,s=!1,a=[],l=null,c=null){let h=gn(e),u=cn(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),p=Math.max(0,f.b),b=h.w,m=h.u0-Math.max(0,f.u0),g=h.u1+Math.max(0,f.u1),x=(A,T,N)=>{let[U,k]=h.at(A,T);return[U,N-r,k]},_=new nt(Ns),y=new nt(Ds),M=new nt(gm),w=(A,T)=>{for(let N=1;N+1<A.length;N++)i.tri(A[0],A[N],A[N+1],T)},R=[],v=[],E=[],C=[null,null],I=[];if(e.shape==="flat"||e.shape==="parapet"){let A=e.eave_a,T=e.shape==="parapet",N=e.points&&e.points.length>=3?s0(e,T?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):T?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,b),h.at(h.u0,b)]:[h.at(m,-d),h.at(g,-d),h.at(g,b+p),h.at(m,b+p)];Fe(i,N,A-r,A-r+.25,Ds,Ns,{bottom:!0});for(let U=0;U<N.length;U++){let k=N[U],z=N[(U+1)%N.length];t.seg([k[0],A-r+.252,k[1]],[z[0],A-r+.252,z[1]],ir),t.seg([k[0],A-r,k[1]],[z[0],A-r,z[1]],Ao)}if(T){let U=G=>Nn(G)>=0?G:[...G].reverse(),k=U(N),z=ac(k,-.2),W=k.length;for(let G=0;G<W;G++){let H=U([k[G],k[(G+1)%W],z[(G+1)%W],z[G]]);Fe(i,H,A-r+.25,A-r+.65,Ds,Ns),t.seg([k[G][0],A-r+.652,k[G][1]],[k[(G+1)%W][0],A-r+.652,k[(G+1)%W][1]],ir),t.seg([z[G][0],A-r+.652,z[G][1]],[z[(G+1)%W][0],A-r+.652,z[(G+1)%W][1]],ir)}}}else{let A=Pr(e,f);R=A.faces;for(let T of a)R=R.flatMap(N=>Ah(N,T));if(v=A.rim,E=A.ridges,C=A.gables,c){for(let T of R)for(let N of c.lines){let U=d0(T,N.poly);if(U)for(let[k,z]of Rh(U[0],U[1],c.covers.filter(W=>W!==N)))I.push([k,z])}R=R.flatMap(T=>f0(T,c.covers))}}let P=!!e.open,D=new nt(w2);for(let A of R){if(P){for(let T=1;T+1<A.length;T++)o.tri(x(A[0][0],A[0][1],A[0][2]),x(A[T][0],A[T][1],A[T][2]),x(A[T+1][0],A[T+1][1],A[T+1][2]),D);continue}w(A.map(([T,N,U])=>x(T,N,U)),_),w(A.map(([T,N,U])=>x(T,N,U-Ze)),y)}let S=(A,T)=>c?Rh(A,T,c.covers):[[A,T]];for(let A=0;A<v.length;A++)for(let[[T,N,U],[k,z,W]]of S(v[A],v[(A+1)%v.length]))P||w([x(T,N,U),x(k,z,W),x(k,z,W-Ze),x(T,N,U-Ze)],y),t.seg(x(T,N,U),x(k,z,W),P?ir:Ao);if(P){B2(i,t,h,u,f,x,r);return}for(let[A,T]of E)for(let[[N,U,k],[z,W,G]]of S(A,T))t.seg(x(N,U,k+.004),x(z,W,G+.004),ir);for(let[[A,T,N],[U,k,z]]of I)t.seg(x(A,T,N+.004),x(U,k,z+.004),ir);let F=e.base;if(!s){for(let A of[0,1]){let T=C[A];if(!T||l!==null&&l!==A)continue;let N=k2(T,F-Ze),U=A===0?h.u0:h.u1;N.length>=3&&w(N.map(([k,z])=>x(U,k,z)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[A,T]=c?.wallU??[h.u0,h.u1];for(let N of[0,b]){let U=u.y(N)-Ze;U>F+.02&&w([x(A,N,F),x(T,N,F),x(T,N,U),x(A,N,U)],M)}}else if(e.eave_a>F+.02)for(let[A,T,N,U]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,b],[h.u1,b,h.u0,b],[h.u0,b,h.u0,0]])w([x(A,T,F),x(N,U,F),x(N,U,e.eave_a),x(A,T,e.eave_a)],M)}}function B2(i,t,e,n,r,o,s){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,p=(g,x,_,y,M,w)=>{let R=[e.at(g,_),e.at(x,_),e.at(x,y),e.at(g,y)],v=(R[1][0]-R[0][0])*(R[2][1]-R[0][1])-(R[2][0]-R[0][0])*(R[1][1]-R[0][1]);Fe(i,v<0?[...R].reverse():R,M-s,w-s,T2,E2,{bottom:!0})},b=s;for(let[g,x]of[[0,h],[a,u]]){if(!x)continue;let _=n.y(g)-.03,y=g===0?0:a-l;p(e.u0,e.u1,y,y+l,_-c,_),t.seg(o(e.u0,g,_-c),o(e.u1,g,_-c),Ao)}for(let[g,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let _=0;_<6;_++){let y=a*_/6,M=a*(_+1)/6,w=Math.min(n.y(y),n.y(M))-.03;p(g,g+l,y,M,w-c,w)}let m=[];for(let[g,x]of[[0,h],[a-l,u]]){if(!x)continue;let _=e.u1-e.u0-l,y=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<=y;M++){let w=e.u0+_*M/y;M===0&&!f||M===y&&!d||m.push([w,g])}}if(!h&&!u)for(let g of[e.u0,e.u1-l])(g===e.u0&&f||g!==e.u0&&d)&&m.push([g,a/2-l/2]);for(let[g,x]of m){let _=n.y(x+l/2)-.03-c;p(g,g+l,x,x+l,b,_)}}function k2(i,t){let e=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=t&&e.push([s,a]);let l=i[o+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([s+(l[0]-s)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Os={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},xm={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},en=.2,z2=-.06,V2=.01,Us=8,Sc=.42,qh=.42;function Sm(i,t,e,n=[],r=[],o){let{walls:s,open:a}=si(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(S,F,A,T)=>{let N=A;if(T?.profile){let k=T.b[0]-T.a[0],z=T.b[1]-T.a[1],W=Math.hypot(k,z)||1,G=Math.max(0,Math.min(W,((S-T.a[0])*k+(F-T.a[1])*z)/W));N=Math.min(N,ln(T.profile,G))}T?.slope&&(N=Math.min(N,Er(T.slope,S,F)));let U=o?o(S,F):null;return Math.max(.05,U===null?N:Math.min(N,U))},c=(S,F)=>{let A=o?o(S,F):null;return A!==null&&A<z2},h=(S,F,A,T,N,U)=>{if(!o&&!U?.profile&&!U?.slope)return N;let k=N,z=[A,T];if(o||U?.slope){let W=Math.max(2,Math.ceil((T-A)/.25)+1);for(let G=0;G<W;G++)z.push(A+(T-A)*G/(W-1))}U?.profile&&z.push(...U.profile.map(([W])=>W).filter(W=>W>A&&W<T));for(let W of z)k=Math.min(k,l(S[0]+F[0]*W,S[1]+F[1]*W,N,U));return k},u=new jt(!0,!0),f=[],d=new Ne,p=[];for(let S of i.rooms){if(S.points.length<3)continue;let F=wc(S.points),A=xm[S.floor_material]??xm.wood,T=new nt(A.color),N=n.flatMap(H=>{if(S0(H,F))return[H];if(!v0(H))return[];let j=So(F,H);return j.length>=3&&Math.abs(Nn(j))>.01?[wc(j)]:[]}),U=M0(N).map(H=>w0(wc(H),.003));p.push(...U);let k=[...F,...U.flat()],z=u.count;for(let[H,j,st]of li(F,U)){let X=k[H],Z=k[j],tt=k[st];u.tri([X[0],0,X[1]],[tt[0],0,tt[1]],[Z[0],0,Z[1]],T,T,T,[X[0],X[1],tt[0],tt[1],Z[0],Z[1]],Zt,A.tile)}f.push({roomId:S.id,start:z,end:u.count,color:A.color});let W=new nt(Os.slab),G=H=>{for(let j=0;j<H.length;j++){let st=H[j],X=H[(j+1)%H.length];u.tri([st[0],-en,st[1]],[st[0],0,st[1]],[X[0],0,X[1]],W),u.tri([st[0],-en,st[1]],[X[0],0,X[1]],[X[0],-en,X[1]],W)}};G(F);for(let H of U){G([...wc(H)].reverse());for(let j=0;j<H.length;j++){let st=H[j],X=H[(j+1)%H.length];d.seg([st[0],.006,st[1]],[X[0],.006,X[1]],ji),d.seg([st[0],-en,st[1]],[X[0],-en,X[1]],Si)}}}let b=new Map,m=[],g=new Map;for(let S of s){let F="interior",A=null;if(S.exterior){let N=S.b[0]-S.a[0],U=S.b[1]-S.a[1],k=Math.hypot(N,U)||1,z=[U/k,-N/k],W=(Math.round(Math.atan2(z[1],z[0])/(2*Math.PI)*Us)%Us+Us)%Us;F=`s${W}`;let G=W/Us*2*Math.PI;A=[Math.cos(G),Math.sin(G)]}let T=b.get(F);T===void 0&&(T=m.length,b.set(F,T),m.push(A)),g.set(S,T)}let x=new Map,_=[];for(let S of i.openings){let F=vo(S,i.rooms,i.walls??[]);if(!F)continue;let A=_o(s,S,F);if(!A)continue;let{wall:T,s:N}=A,U=Bs([T.b[0]-T.a[0],T.b[1]-T.a[1]]),k=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),z=N-S.width/2<-1e-6?_h(s,T,!1):null,W=N+S.width/2>k+1e-6?_h(s,T,!0):null,G=Vt=>Vt?Math.hypot(Vt.b[0]-Vt.a[0],Vt.b[1]-Vt.a[1]):0,H=-G(z),j=k+G(W),st=Math.min(S.width,j-H),X=Math.max(H,Math.min(j-st,N-st/2)),Z=F.room.points,tt=T.free?U[0]*(Z[1][0]-Z[0][0])+U[1]*(Z[1][1]-Z[0][1])>0:T.exterior||T.roomLeft===S.room_id,q=[-U[1],U[0]],Q=tt?q:[-q[0],-q[1]],dt=Math.min(h(T.a,U,X,X+st,Ro(T,i.height),T)-.02,S.sill+S.height),gt=Math.max(0,Math.min(S.sill,dt-.1)),bt=[Q[1],-Q[0]],vt=U[0]*bt[0]+U[1]*bt[1]>0,Et={opening:S,bucket:g.get(T),start:[T.a[0]+U[0]*X,T.a[1]+U[1]*X],axis:U,width:st,toRoom:Q,faceRoom:tt?T.left:T.right,faceOut:tt?T.right:T.left,sill:gt,top:dt,hingeAtStart:S.hinge==="left"===vt,exterior:T.exterior};_.push(Et);let xt=x.get(T);xt||x.set(T,xt=[]),xt.push({s0:X,s1:X+st,sill:gt,top:dt,info:Et});for(let Vt of[z,W]){if(!Vt)continue;let Se=Y=>(T.a[0]+U[0]*Y-Vt.a[0])*U[0]+(T.a[1]+U[1]*Y-Vt.a[1])*U[1],Oe=Math.max(0,Se(X)),de=Math.min(G(Vt),Se(X+st));if(de-Oe<1e-4)continue;let Qt=x.get(Vt);Qt||x.set(Vt,Qt=[]),Qt.push({s0:Oe,s1:de,sill:gt,top:dt,info:Et,cont:!0})}}let y=Math.min(i.cut_height,i.height),M=new jt;for(let S of s){let F=g.get(S),A=Bs([S.b[0]-S.a[0],S.b[1]-S.a[1]]),T=(x.get(S)??[]).sort((q,Q)=>q.s0-Q.s0),N=Ro(S,i.height),U=Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1]),k=[0,U,...S.profile?.map(([q])=>q)??[]];if(o){let q=Math.max(1,Math.ceil(U/.3));for(let Q=1;Q<q;Q++)k.push(U*Q/q)}let z=[...new Set(k)].sort((q,Q)=>q-Q),W=q=>l(S.a[0]+A[0]*q,S.a[1]+A[1]*q,N,S),G=[];for(let q=0;q+1<z.length;q++){let Q=z[q],dt=z[q+1],gt=W(Q)-y,bt=W(dt)-y;gt*bt<-1e-12&&G.push(Q+(dt-Q)*gt/(gt-bt))}let H=[],j=[-1/0,...new Set([...T.flatMap(q=>[q.s0,q.s1]),...z,...G]).values(),1/0].sort((q,Q)=>q-Q);for(let q=0;q+1<j.length;q++){let Q=j[q],dt=j[q+1];if(dt-Q<1e-6)continue;let gt=Number.isFinite(Q)&&Number.isFinite(dt)?(Q+dt)/2:Number.isFinite(Q)?Q+1:dt-1,bt=T.filter(xt=>xt.s0<gt&&xt.s1>gt).map(xt=>[xt.sill,xt.top]).sort((xt,Vt)=>xt[0]-Vt[0]),vt=[],Et=-en;for(let[xt,Vt]of bt)xt>Et+1e-4&&vt.push([Et,xt<1e-4?-V2:xt]),Et=Math.max(Et,Vt);N>Et+1e-4&&vt.push([Et,N]),H.push({t0:Q,t1:dt,ranges:vt})}let st=!!((o||S.slope)&&h(S.a,A,0,U,N,S)<N-.001),X=st?H.flatMap(q=>{let Q=Math.max(q.t0,-.5),dt=Math.min(q.t1,U+.5),gt=Math.max(1,Math.ceil((dt-Q)/.3));return Array.from({length:gt},(bt,vt)=>({t0:vt===0?q.t0:Q+(dt-Q)*vt/gt,t1:vt===gt-1?q.t1:Q+(dt-Q)*(vt+1)/gt,ranges:q.ranges,inner0:vt>0,inner1:vt<gt-1}))}):H.map(q=>({...q,inner0:!1,inner1:!1})),Z=q=>(q[0]-S.a[0])*A[0]+(q[1]-S.a[1])*A[1],tt=q=>{if(!o)return[q];let Q=$h(S.footprint,S.a,A,q.t0,q.t1),dt=Q.filter(([Et,xt])=>c(Et,xt)).length;if(dt===0)return[q];if(dt===Q.length)return[];let gt=Math.max(q.t0,-.5),bt=Math.min(q.t1,U+.5),vt=Math.max(1,Math.ceil((bt-gt)/.05));return Array.from({length:vt},(Et,xt)=>({t0:xt===0?q.t0:gt+(bt-gt)*xt/vt,t1:xt===vt-1?q.t1:gt+(bt-gt)*(xt+1)/vt,ranges:q.ranges,inner0:xt>0||q.inner0,inner1:xt<vt-1||q.inner1})).filter(Et=>!$h(S.footprint,S.a,A,Et.t0,Et.t1).every(([xt,Vt])=>c(xt,Vt)))};for(let q of st?X.flatMap(tt):X){let Q=$h(S.footprint,S.a,A,q.t0,q.t1);if(Q.length<3)continue;let dt=(Et,xt)=>Math.abs(Z(Et)-xt)<1e-4,gt=(Et,xt)=>q.inner0&&dt(Et,q.t0)&&dt(xt,q.t0)||q.inner1&&dt(Et,q.t1)&&dt(xt,q.t1),bt=st||!!S.profile||!!S.slope,vt=bt?Math.min(...Q.map(([Et,xt])=>l(Et,xt,N,S))):N;for(let[Et,xt]of q.ranges){let Vt=Math.min(xt,bt?Math.max(...Q.map(([Qt,Y])=>l(Qt,Y,N,S))):xt);if(Vt-Et<1e-4||vt-Et<.01)continue;let Se=Et>.01,Oe=bt&&xt>vt,de=(Qt,Y)=>Math.min(xt,l(Qt,Y,N,S));if(Et<y-1e-6){let Qt=Vt>y+1e-6?D0+F:Qi+F,Y=Oe&&vt<y?(Ue,pe)=>Math.min(y,de(Ue,pe)):Math.min(Vt,y);Fe(M,Q,Et,Y,Os.wall,Os.wallTop,{aoFrom:0,bottom:Se,fold:Qi+F,topFold:Qt,skipSide:gt})}Vt>y+1e-6&&Fe(M,Q,Math.max(Et,y),Oe?de:Vt,Os.wall,Os.wallTop,{aoFrom:0,fold:F,bottom:Se&&Et>=y,skipSide:gt})}}}let w=s.flatMap(S=>S.footprint),R=H2(s,w),v=new Ne;v.p.push(...d.p),v.c.push(...d.c),v.f.push(...d.f);let E=(S,F)=>(x.get(S)??[]).filter(F);for(let S of R.edges){let F=g.get(S.wall);for(let[T,N]of Tc(S,E(S.wall,U=>U.sill<=.005)))v.seg([T[0],.004,T[1]],[N[0],.004,N[1]],F0);for(let[T,N]of Tc(S,E(S.wall,U=>U.sill<y&&U.top>y)))for(let[U,k]of Y2(T,N,S.wall,y,i.height,o))v.seg([U[0],y,U[1]],[k[0],y,k[1]],Oh,pc+F);let A=Ro(S.wall,i.height);for(let[T,N]of Tc(S,E(S.wall,U=>!S.wall.profile&&!S.wall.slope&&U.top>=A-.021))){if(!o&&!S.wall.profile&&!S.wall.slope){v.seg([T[0],A,T[1]],[N[0],A,N[1]],ji,A<=y+1e-6?Qi+F:F);continue}let U=Bs([S.wall.b[0]-S.wall.a[0],S.wall.b[1]-S.wall.a[1]]),k=(T[0]-S.wall.a[0])*U[0]+(T[1]-S.wall.a[1])*U[1],z=(N[0]-S.wall.a[0])*U[0]+(N[1]-S.wall.a[1])*U[1],W=[k,z];if(o||S.wall.slope){let G=Math.max(1,Math.ceil(Math.abs(z-k)/.3));for(let H=1;H<G;H++)W.push(k+(z-k)*H/G)}S.wall.profile&&W.push(...S.wall.profile.map(([G])=>G).filter(G=>G>Math.min(k,z)&&G<Math.max(k,z))),W.sort((G,H)=>z>=k?G-H:H-G);for(let G=0;G+1<W.length;G++){let H=(W[G]-k)/(z-k||1),j=(W[G+1]-k)/(z-k||1),st=[T[0]+(N[0]-T[0])*H,T[1]+(N[1]-T[1])*H],X=[T[0]+(N[0]-T[0])*j,T[1]+(N[1]-T[1])*j];if(c(st[0],st[1])&&c(X[0],X[1]))continue;let Z=l(st[0],st[1],A,S.wall),tt=l(X[0],X[1],A,S.wall);v.seg([st[0],Z,st[1]],[X[0],tt,X[1]],ji,Math.max(Z,tt)<=y+1e-6?Qi+F:F)}}}let C=(S,F)=>l(F[0],F[1],Ro(S,i.height),S);for(let S of R.corners){if(c(S.p[0],S.p[1]))continue;let F=S.walls.reduce((T,N)=>C(N,S.p)>C(T,S.p)+1e-6?N:T,S.wall),A=l(S.p[0],S.p[1],Ro(F,i.height),F);v.segSplit([S.p[0],.004,S.p[1]],[S.p[0],A,S.p[1]],Si,Math.min(y,A),g.get(F))}for(let S of R.joints){let[F,A]=S.walls,T=[C(F,S.a),C(A,S.a)],N=[C(F,S.b),C(A,S.b)];if(Math.abs(T[0]-T[1])<.01&&Math.abs(N[0]-N[1])<.01)continue;let U=T[1]+N[1]>=T[0]+N[0]?A:F,k=g.get(U),z=Math.max(...T),W=Math.max(...N);v.seg([S.a[0],z,S.a[1]],[S.b[0],W,S.b[1]],ji,Math.max(z,W)<=y+1e-6?Qi+k:k);for(let[G,H]of[[S.a,T],[S.b,N]]){let j=Math.min(...H),st=Math.max(...H);st-j>.01&&v.segSplit([G[0],j,G[1]],[G[0],st,G[1]],Si,y,k)}}for(let S of x.values())for(let F of S)F.cont||G2(v,F,y);let I=X2(R.edges,i.rooms,x),P=new jt;rm(M,v,i,P);for(let S of r)Yh(M,v,S.face,S.field,i.elevation);let D=[];for(let S of i.furniture){if(Of(S.type))continue;let F=M.count,A=v.p.length/6,T=S,N=rn(i,T);if(ta.has(T.type)){let U=rc(s,T,i.height,N);T={...T,x:U.x,z:U.z},N=U.y}gc(M,v,I,T,N),N+T.h>y+.05&&(N0(M,F,y,Uh),O0(v,A,y,Uh)),D.push({id:T.id,start:F,end:M.count})}return{floor:u.geometry(),roomTris:f,holes:p,walls:M.geometry(),water:P.geometry(),lines:v.geometry(),shadow:I.geometry(),buckets:m,openings:_,walls2d:s,openRooms:a,wallBuckets:s.map(S=>g.get(S)),furnitureTris:D,roofUnder:o}}function G2(i,t,e){let{info:n}=t,r=n.bucket,o=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],s=l=>l>e+1e-6?r:Zt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(o(c,l,a),o(c,l,t.top),Si,e,r);i.seg(o(t.s0,l,t.top),o(t.s1,l,t.top),Si,s(t.top)),t.sill>.01&&i.seg(o(t.s0,l,t.sill),o(t.s1,l,t.sill),Si,s(t.sill))}for(let l of[t.s0,t.s1])i.seg(o(l,n.faceRoom,t.top),o(l,-n.faceOut,t.top),Si,s(t.top)),t.sill>.01&&i.seg(o(l,n.faceRoom,t.sill),o(l,-n.faceOut,t.sill),Si,s(t.sill)),t.sill<e&&t.top>e&&i.seg(o(l,n.faceRoom,e),o(l,-n.faceOut,e),Oh,pc+r)}function $h(i,t,e,n,r){let o=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],s=i;return Number.isFinite(n)&&(s=ym(s,a=>o(a)-n)),Number.isFinite(r)&&(s=ym(s,a=>r-o(a))),s}function ym(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=t(r),a=t(o);if(s>=0&&e.push(r),s>=0!=a>=0){let l=s/(s-a);e.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return e}var vm=i=>Math.round(i*1e3),ks=i=>`${vm(i[0])},${vm(i[1])}`,_m=(i,t)=>{let e=ks(i),n=ks(t);return e<n?`${e}|${n}`:`${n}|${e}`};function W2(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*s+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+s*u,r[1]+a*u];ks(f)!==ks(h)&&e.push([h,f]),h=f}e.push([h,o])}return e}function H2(i,t){let e=i.map(h=>({wall:h,edges:W2(h.footprint,t)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of e)for(let[f,d]of u){let p=_m(f,d);n.set(p,(n.get(p)??0)+1);let b=r.get(p);b?b.walls.push(h):r.set(p,{a:f,b:d,walls:[h]})}let o=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&o.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let s=[],a=new Map,l=(h,u,f)=>{let d=ks(h),p=a.get(d);p||a.set(d,p={p:h,wall:u,walls:[],d:[]}),p.d.push(f),p.walls.includes(u)||p.walls.push(u)};for(let{wall:h,edges:u}of e)for(let[f,d]of u){if(n.get(_m(f,d))!==1)continue;let p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<1e-4)continue;s.push({a:f,b:d,wall:h});let b=[(d[0]-f[0])/p,(d[1]-f[1])/p];l(f,h,b),l(d,h,b)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(p=>d.some(b=>Math.abs(p[0]*b[1]-p[1]*b[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:s,corners:c,joints:o}}function Tc(i,t){if(!t.length)return[[i.a,i.b]];let e=Bs([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Bs([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let p=[];return u.s0>f&&p.push([f,u.s0]),u.s1<d&&p.push([u.s1,d]),p});let h=u=>{let f=(u-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>o<=s?[h(u),h(f)]:[h(f),h(u)])}function X2(i,t,e){let n=new jt,r=new nt(qh,qh,qh),o=new nt(1,1,1),s=.002;for(let a of i)for(let[l,c]of Tc(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(g=>g.points.length>=3&&te(p,g.points)))continue;let b=[l[0]+d[0]*Sc,l[1]+d[1]*Sc],m=[c[0]+d[0]*Sc,c[1]+d[1]*Sc];n.tri([l[0],s,l[1]],[b[0],s,b[1]],[m[0],s,m[1]],r,o,o),n.tri([l[0],s,l[1]],[m[0],s,m[1]],[c[0],s,c[1]],r,o,r)}return n}function wm(i,t){let e=t.furniture.filter(o=>o.type==="stairwell").map(Li),n=i.filter(o=>o.elevation<t.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return e;let r=n.furniture.filter(o=>(Df.has(o.type)||we(o.type)?.hole)&&n.elevation+o.h>=t.elevation-.3).map(Li);return[...e,...r]}function Ro(i,t){let e=Math.min(t,i.height??t),n=i.profile?.length?Math.max(...i.profile.map(([,o])=>o)):e,r=i.slope?Math.max(i.slope.h0,i.slope.h1):e;return Math.max(e,n,r)}function Mm(i,t,e,n,r){let o=i.b[0]-i.a[0],s=i.b[1]-i.a[1],a=Math.hypot(o,s)||1,l=Math.max(0,Math.min(a,((e-i.a[0])*o+(n-i.a[1])*s)/a)),c=i.profile?ln(i.profile,l):Ro(i,t),h=i.slope?Math.min(c,Er(i.slope,e,n)):c,u=r?.(e,n);return Math.max(.05,u==null?h:Math.min(h,u))}function Y2(i,t,e,n,r,o){let s=e.b[0]-e.a[0],a=e.b[1]-e.a[1],l=Math.hypot(s,a)||1,c=s/l,h=a/l,u=(i[0]-e.a[0])*c+(i[1]-e.a[1])*h,f=(t[0]-e.a[0])*c+(t[1]-e.a[1])*h,d=[0,1];if(e.profile)for(let[m]of e.profile){let g=(m-u)/(f-u||1);g>1e-8&&g<1-1e-8&&d.push(g)}if(o||e.slope){let m=Math.max(1,Math.ceil(Math.hypot(t[0]-i[0],t[1]-i[1])/.25));for(let g=1;g<m;g++)d.push(g/m)}d.sort((m,g)=>m-g);let p=m=>[i[0]+(t[0]-i[0])*m,i[1]+(t[1]-i[1])*m],b=[];for(let m=0;m+1<d.length;m++){let g=d[m],x=d[m+1],_=p(g),y=p(x),M=Mm(e,r,_[0],_[1],o),w=Mm(e,r,y[0],y[1],o);if(M<n&&w<n)continue;if(M>=n&&w>=n){b.push([_,y]);continue}let R=(n-M)/(w-M),v=[_[0]+(y[0]-_[0])*R,_[1]+(y[1]-_[1])*R];b.push(M>=n?[_,v]:[v,y])}return b}function Bs(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function wc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var q2=new nt(1516340),$2=new nt(527897),Zh=new nt(1779256),zs=new nt(1120808),Z2=new nt(4163256),Tm=new nt(5995161),K2=new nt(2240842),J2=new nt(1318704),j2=.35,Po=.8,Q2=.2,Em=.1;function tS(i,t,e,n){let r=-1/0;for(let o of i.floors)if(!(o.elevation>.3))for(let s of o.outdoor??[])s.points.length<3||s.type==="pool"||s.type==="balcony"||Dn(s.type)||!te(e,s.points)||(r=Math.max(r,o.elevation+ui(o,s)+Ci[s.type]-t.elevation));return r>n?r-n:0}function Am(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=Ch(i,t);if(!r)return null;let o=(p,b)=>kr(p,b)-t.elevation,s=n&&r.some(([p,b])=>o(p,b)<-en-.03);if(!s&&!Ih(i,t))return null;let a=t.height,l=-j2,c=(p,b)=>Math.min(a,kr(p,b)-t.elevation),h=new jt,u=new jt,f=new Ne,d=(p,b,m,g,x,_,y,M)=>{let w=[b[0]-p[0],b[2]-p[2]];-w[1]*x[0]+w[0]*x[1]>0?(M.tri(p,b,m,_,_,y),M.tri(p,m,g,_,y,y)):(M.tri(p,m,b,_,y,_),M.tri(p,g,m,_,y,y))};for(let p=0;p<r.length;p++){let b=r[p],m=r[(p+1)%r.length],g=Math.hypot(m[0]-b[0],m[1]-b[1]);if(g<1e-4)continue;let x=[(m[0]-b[0])/g,(m[1]-b[1])/g],_=[x[1],-x[0]],y=[(b[0]+m[0])/2+_[0]*.05,(b[1]+m[1])/2+_[1]*.05];te(y,r)&&(_=[-_[0],-_[1]]);let M=(C,I=.012)=>[b[0]+x[0]*C+_[0]*I,b[1]+x[1]*C+_[1]*I],w=[];for(let C of e){if(C.opening.type!=="window"||!C.exterior||C.opening.well===!1)continue;let I=C.start[0]+C.axis[0]*(C.width/2)-C.toRoom[0]*C.faceOut,P=C.start[1]+C.axis[1]*(C.width/2)-C.toRoom[1]*C.faceOut,D=(I-b[0])*x[0]+(P-b[1])*x[1];Math.abs((I-b[0])*_[0]+(P-b[1])*_[1])>.08||D<-.05||D>g+.05||y0(i,t,C.exterior,C.sill,[I,P])&&w.push({s0:Math.max(0,D-C.width/2-Em),s1:Math.min(g,D+C.width/2+Em),bottom:Math.max(l+.05,C.sill-Q2),rim:C.opening.well_rim??0})}let R=new Set([0,g]);for(let C of w)R.add(C.s0),R.add(C.s1);let v=[...R].sort((C,I)=>C-I),E=[];for(let C=0;C<v.length-1;C++){let I=Math.max(1,Math.ceil((v[C+1]-v[C])/.5));for(let P=0;P<I;P++)E.push(v[C]+(v[C+1]-v[C])*P/I)}E.push(g);for(let C=0;C<E.length-1;C++){let I=E[C],P=E[C+1],D=w.find(W=>I>=W.s0-1e-6&&P<=W.s1+1e-6),S=M(I),F=M(P),A=c(S[0],S[1]),T=c(F[0],F[1]),N=D?Math.min(A,D.bottom):A,U=D?Math.min(T,D.bottom):T;if(N>l+.01||U>l+.01){let W=Math.min(N,l),G=Math.min(U,l);d([S[0],W,S[1]],[F[0],G,F[1]],[F[0],Math.max(U,l),F[1]],[S[0],Math.max(N,l),S[1]],_,$2,q2,h)}let k=o(S[0],S[1]),z=o(F[0],F[1]);if(s&&(k<-en-.01||z<-en-.01)&&d([S[0],Math.min(k,-en),S[1]],[F[0],Math.min(z,-en),F[1]],[F[0],-en,F[1]],[S[0],-en,S[1]],_,J2,K2,h),A>l||T>l||s&&(k<-en||z<-en)){let W=s?Math.min(k,Math.max(A,l)):Math.max(A,l),G=s?Math.min(z,Math.max(T,l)):Math.max(T,l);f.seg([S[0],W+.004,S[1]],[F[0],G+.004,F[1]],Z2)}}for(let C of w){let I=M(C.s0,0),P=M(C.s1,0),D=[I[0]+_[0]*Po,I[1]+_[1]*Po],S=[P[0]+_[0]*Po,P[1]+_[1]*Po],F=[(I[0]+P[0]+D[0]+S[0])/4,(I[1]+P[1]+D[1]+S[1])/4],A=tS(i,t,F,c(F[0],F[1])),T=Math.max(C.rim,A>0?A+.02:0),N=H=>c(H[0],H[1])+T,U=C.bottom,k=(H,j)=>[H[0],j,H[1]];u.tri(k(I,U),k(P,U),k(S,U),zs),u.tri(k(I,U),k(S,U),k(D,U),zs);let z=(H,j)=>{u.tri(k(H,U),k(j,U),k(j,N(j)),zs,zs,Zh),u.tri(k(H,U),k(j,N(j)),k(H,N(H)),zs,Zh,Zh)};z(I,D),z(P,S),z(D,S);let W=H=>[H[0],N(H)+.01,H[1]];for(let[H,j]of[[I,P],[P,S],[S,D],[D,I]])f.seg(W(H),W(j),Tm);let G=Math.max(3,Math.round((C.s1-C.s0)/.12));for(let H=1;H<G;H++){let j=H/G,st=[I[0]+(P[0]-I[0])*j,I[1]+(P[1]-I[1])*j];f.seg(W(st),W([st[0]+_[0]*Po,st[1]+_[1]*Po]),Tm)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var Rm=i=>Math.round(i*1e3)/1e3;function eS(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let o=[(n[0]-e[0])/r,(n[1]-e[1])/r],s=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),a=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Pm(i,t,e,n,r,o=.05){let s=i.rooms.find(f=>f.points.length>=3&&te([t.x,t.z],f.points));if(!s)return[e,n];let a=s.points,l=xn(a)>=0?1:-1,c=Li({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=Li({...t,x:h,z:u});for(let p=0;p<a.length;p++){let b=a[p],m=a[(p+1)%a.length],g=Math.hypot(m[0]-b[0],m[1]-b[1]);if(g<.05)continue;let x=[(m[0]-b[0])/g,(m[1]-b[1])/g],_=[-x[1]*l,x[0]*l],y=eS(i,s.id,b,m)?r/2:0,M=0;d.forEach((w,R)=>{let v=(w[0]-b[0])*x[0]+(w[1]-b[1])*x[1];if(v<-.01||v>g+.01)return;let E=(w[0]-b[0])*_[0]+(w[1]-b[1])*_[1]-y,C=c[R];(C[0]-b[0])*_[0]+(C[1]-b[1])*_[1]-y<-o||E<M&&(M=E)}),M<-1e-4&&(h-=_[0]*M,u-=_[1]*M)}}return[Rm(h),Rm(u)]}var nS=500,Cm=.12,Im=1.35,iS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Ec=class{view={target:new $,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(o,s,a)=>{t.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=iS(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Kh(this.view.phi+this.velocity.phi,Cm,Im),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},o=t.theta??r.theta;for(;o-r.theta>Math.PI;)o-=2*Math.PI;for(;o-r.theta<-Math.PI;)o+=2*Math.PI;let s=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:o,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:r,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},nS)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let o=e.type==="mouse";if(o&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=Kh(this.view.phi+c,Cm,Im),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=Kh(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new $(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new $(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-t*r),this.view.target.addScaledVector(s,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Kh(i,t,e){return Math.min(e,Math.max(t,i))}function ci(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var Pc=5,Ac=512,Lm=.7,Rc=class{projectors=new Map;loader=new yr;loggedIds="";depthMaterial=new ne({colorWrite:!1,side:ge});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,o]of this.projectors)e.has(r)||this.drop(o);for(let[r,o]of e){let s=this.projectors.get(r);if(!s){let a=new Qe(Ac,Ac);a.depthTexture=new Qn(Ac,Ac),s={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new Je(60,16/9,Lm,40),target:a,matrix:new Ae,uniforms:{uProjMat:{value:new Ae},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},s.camera.layers.set(Pc),this.projectors.set(r,s)}s.url=o,this.fetch(s)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Be;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,o){for(let s of this.projectors.values()){let a=s.texture?r(s.id):null;if(s.texture&&!a&&!s.noPoseLogged&&(s.noPoseLogged=!0,console.warn(`NeonPlan lab: ${s.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of s.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,m]of s.overlays)l.has(b)||(m.parent?.remove(m),m.material.dispose(),s.overlays.delete(b));for(let b of n){let m=s.overlays.get(b.key);(!m||m.parent!==b.parent)&&(m&&(m.parent?.remove(m),m.material.dispose()),m=new Ut(b.geometry,this.material(s,b.masks)),m.renderOrder=2.5,m.frustumCulled=!1,b.parent.add(m),s.overlays.set(b.key,m)),m.geometry!==b.geometry&&(m.geometry=b.geometry),m.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${s.aspect.toFixed(3)},${o}`;if(c===s.poseKey)continue;s.poseKey=c;let h=s.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/s.aspect)*180/Math.PI,h.aspect=s.aspect,h.far=a.reach,h.near=Lm,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),s.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),s.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let m of b.overlays.values())m.visible&&f.push(m);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),p=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(s.target),t.clear(),t.render(e,h),t.setRenderTarget(d),e.overrideMaterial=p;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new ne({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?ci(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(o,s)=>{r?.(o,s),Object.assign(o.uniforms,t.uniforms),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function Fm(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function Dm(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=Fm(o,s),c=Fm(s,a),h=Math.min(t,l*.45,c*.45),u=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],f=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(s);continue}let d=[s[0]+u[0]*h,s[1]+u[1]*h,s[2]+u[2]*h],p=[s[0]+f[0]*h,s[1]+f[1]*h,s[2]+f[2]*h];for(let b=0;b<=e;b++){let m=b/e,g=(1-m)*(1-m),x=2*(1-m)*m,_=m*m;n.push([g*d[0]+x*s[0]+_*p[0],g*d[1]+x*s[1]+_*p[1],g*d[2]+x*s[2]+_*p[2]])}}return n.push(i[i.length-1]),n}var Nm=new nt(7568261),Om=new nt(4869974),rS=new nt(3116287),Um=new nt(3948872),Jh=Nr([.35,.85,.4]),Bm=10;function Nr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Vs(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function km(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Nr(Vs(i,t));return[e,Nr(Vs(i,e))]}function wi(i,t){let e=.5+.5*Math.max(0,t[0]*Jh[0]+t[1]*Jh[1]+t[2]*Jh[2]);return i.clone().multiplyScalar(e)}function Co(i,t,e,n,r,o=!1){let s=Nr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=km(s),c=(h,u)=>{let f=u/Bm*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<Bm;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),p=c(e,h+1);i.tri(u.p,p.p,d.p,wi(r,u.n),wi(r,p.n),wi(r,d.n)),i.tri(u.p,f.p,p.p,wi(r,u.n),wi(r,f.n),wi(r,p.n)),o&&(i.tri([...t],f.p,u.p,wi(r,[-s[0],-s[1],-s[2]])),i.tri([...e],d.p,p.p,wi(r,s)))}}function oS(i,t,e,n,r,o,s,a){let l=Nr(Vs(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*o+l[0]*d*s,t[1]+e[1]*u*r+n[1]*f*o+l[1]*d*s,t[2]+e[2]*u*r+n[2]*f*o+l[2]*d*s],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=wi(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function zm(i,t){if(t.points.length<2)return;let e=t.radius,n=Dm(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?Nm.clone().multiplyScalar(.55):Nm;Co(i,o,s,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);Co(i,s,a,e*1.22,Om,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);Co(i,s,a,e*1.08,t.water?new nt(...t.water).multiplyScalar(.9):new nt(10475240),!0);for(let l of o(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Co(i,c,h,e*1.3,Om,!0)}}else{let[s,a]=o(.055);Co(i,s,a,e*1.4,Um,!0);let[l]=km(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];Co(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,Um,!0);let u=r.open===!1?Nr(Vs(r.dir,c)):r.dir,f=Nr(Vs(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];oS(i,d,u,f,.1,.028,.012,rS)}}}var jh=1.62,Cc=.2,Qh=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let o=si(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=o.walls;let s=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=vo(a,e.rooms,e.walls??[]);if(!c)continue;let h=_o(this.walls,a,c);if(!h)continue;let u=s.get(h.wall)??[];u.push([h.s-a.width/2+.05,h.s+a.width/2-.05]),s.set(h.wall,u);let f=h.wall,d=f.b[0]-f.a[0],p=f.b[1]-f.a[1],b=Math.hypot(d,p)||1,m=d/b,g=p/b,x=[f.a[0]+m*h.s,f.a[1]+g*h.s],_=f.left+.45,y=f.right+.45;this.doors.push({centre:x,p:[[x[0]-g*_,x[1]+m*_],[x[0]+g*y,x[1]-m*y]]})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c);h<1e-6||this.solids.push({a:a.a,u:[l/h,c/h],len:h,left:a.left,right:a.right,gaps:s.get(a)??[]})}}blocked(t,e=Cc){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=Cc){for(let n of this.obstacles){let r=t[0]-n.c[0],o=t[1]-n.c[1];if(Math.abs(r*n.u[0]+o*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+o*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=Cc){for(let n of this.solids){let r=t[0]-n.a[0],o=t[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-e||s>n.len+e)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>s>l+e*.6&&s<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]))return!1}return!0}roomAt(t){return this.rooms.find(e=>te(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let p=this.path(d,e);return p?[d,...p]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let p=this.path(t,d);return p?[...p,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>sS(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let p=Cc+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([m,g])=>[d.c[0]+d.u[0]*m*(d.hw+p)+b[0]*g*(d.hd+p),d.c[1]+d.u[1]*m*(d.hw+p)+b[1]*g*(d.hd+p)])}).filter(d=>!this.blocked(d)),o=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],s=o.length,a=new Array(s).fill(1/0),l=new Array(s).fill(-1),c=new Array(s).fill(!1);a[0]=0;let h=new Map,u=(d,p)=>{let b=d<p?`${d}:${p}`:`${p}:${d}`,m=h.get(b);return m===void 0&&(m=this.clear(o[d],o[p]),h.set(b,m)),m};for(;;){let d=-1;for(let p=0;p<s;p++)!c[p]&&a[p]<1/0&&(d<0||a[p]<a[d])&&(d=p);if(d<0)return null;if(d===1)break;c[d]=!0;for(let p=0;p<s;p++){if(c[p]||p===d)continue;let b=Math.hypot(o[d][0]-o[p][0],o[d][1]-o[p][1]);a[d]+b>=a[p]||u(d,p)&&(a[p]=a[d]+b,l[p]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(o[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let o=vo(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=_o(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*s.s,a.a[1]+f*s.s],p=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,o)=>Vm(o)-Vm(r))[0],n=e?this.freeNear(Ii(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),o=Math.sin(e);for(let s=.2;s<n;s+=.15)if(this.blocked([t[0]+r*s,t[1]+o*s],.05))return s;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(t,s);if(e!==null){let l=Math.abs(s-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function sS(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r||1,s=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o));return Math.hypot(i[0]-(t[0]+n*s),i[1]-(t[1]+r*s))}function Vm(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,o]=e[n],[s,a]=e[(n+1)%e.length];t+=r*a-s*o}return Math.abs(t/2)}var tf=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=e.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let s of t.floors)s.mask.standing.value=65535,s.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+jh}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(t,o,e),this.v.camera.lookAt(t+Math.cos(n)*s,o+Math.sin(r),e+Math.sin(n)*s),this.v.controls.view.target.set(t,o-jh,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(Ii(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,h=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,o=1-(e-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(s)*d,Math.sin(a),Math.sin(s)*d],b=[-Math.sin(s),0,Math.cos(s)],m=[p[1]*b[2]-p[2]*b[1],p[2]*b[0]-p[0]*b[2],p[0]*b[1]-p[1]*b[0]],g=[-m[0],-m[1],-m[2]],x=[p[0]+b[0]*r*u*f+g[0]*o*u,p[1]+b[1]*r*u*f+g[1]*o*u,p[2]+b[2]*r*u*f+g[2]*o*u];if(x[1]>=-.02)return null;let _=jh/-x[1];return[l+x[0]*_,c+x[2]*_]}bind(){let t=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",s=>{e||(e={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),t(this.surface,"pointermove",s=>{if(!e||s.pointerId!==e.id)return;let a=s.clientX-e.x,l=s.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=s.clientX,e.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!e||s.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function aS(i,t){let e=we(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function ef(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,o=r?aS(n,r):null;return o?[n,o]:[n]});return{...i,furniture:e}}function nf(i,t){let e=[],n=[],r=[],o=[],s=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=lS(c.id)%1e3/1e3;for(let b of Fs(l,c)){let[m,g,x,_]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),y=[[m,0,0],[g,1,0],[x,1,1],[_,0,1]];for(let M of[0,1,2,0,2,3]){let[w,R,v]=y[M];e.push(w[0],w[1],w[2]),n.push(R,v),r.push(u,f),o.push(d)}}let p=e.length/3-h;p&&s.push({id:c.id,start:h,count:p})}if(!e.length)return null;let a=new ee;return a.setAttribute("position",new Xt(e,3)),a.setAttribute("uv",new Xt(n,2)),a.setAttribute("aCells",new Xt(r,2)),a.setAttribute("aPhase",new Xt(o,1)),a.setAttribute("aLevel",new Xt(new Float32Array(e.length/3),1)),{geometry:a,ranges:s}}function Gs(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,t.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return e.needsUpdate=!0,r}function rf(i){let t=new ne({transparent:!0,blending:Ge,depthWrite:!1,side:ge});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function lS(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var Wm=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,cS=`
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
`,uS=Wm,hS=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Gm(i,t){let e=[];for(let[r,o,s]of li(i))for(let a of[r,s,o])e.push(i[a][0],t,i[a][1]);let n=new ee;return n.setAttribute("position",new Xt(e,3)),n}function Hm(i,t){let e=new Ve;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new Ut(Gm(n.points,s),new pn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:Wm,fragmentShader:cS,transparent:!0,blending:Ge,depthWrite:!1,side:ge}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(m=>m[0]),a=n.points.map(m=>m[1]),[l,c,h,u]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),p=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],b=So(n.points,p);if(b.length>=3){let m=new Ut(Gm(b,n.y+.03),new pn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:uS,fragmentShader:hS,transparent:!0,side:ge}));m.renderOrder=6,e.add(m);let g=[];for(let _=0;_<b.length;_++){let y=b[_],M=b[(_+1)%b.length];g.push(y[0],n.y+.032,y[1],M[0],n.y+.032,M[1])}let x=new ee;x.setAttribute("position",new Xt(g,3)),e.add(new tn(x,new sn({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Xm(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var Ym=["neon","blueprint","day"];function qm(i){return Ym.indexOf(i)}var Io={value:new $(.22,.88,1)},Lo={value:0};function $m(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var fS=`
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
`;function nn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=t,o.uniforms.uAccent=Io,o.uniforms.uAccentOn=Lo,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${fS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function Ws(i){return i==="day"?Xi:Ge}var Ti=.012,dS=.012;function Km(i,t,e,n,r,o=[],s){let a=[],l=[],c=[],h=[],u=(x,_,y,M,w,R,v)=>{for(let E of[x,_,y,x,y,M])a.push(E[0],E[1],E[2]),l.push(w[0],w[1],w[2]),c.push(R),h.push(v)},f=(x,_,y,M)=>{for(let w=1;w+1<x.length;w++)for(let R of[x[0],x[w],x[w+1]])a.push(R[0],R[1],R[2]),l.push(_[0],0,_[1]),c.push(y),h.push(M)};i.rooms.forEach((x,_)=>{if(x.points.length<3)return;let y=x.points.map(P=>P[0]),M=x.points.map(P=>P[1]),w=Math.min(...y),R=Math.min(...M),v=Math.max(...y),E=Math.max(...M),C=Math.max(1,Math.ceil((v-w)/r)),I=Math.max(1,Math.ceil((E-R)/r));for(let P=0;P<C;P++)for(let D=0;D<I;D++){let S=w+P*r,F=R+D*r,A=Math.min(S+r,v),T=Math.min(F+r,E),N=So(x.points,[[S,F],[A,F],[A,T],[S,T]]),U=N.length>=3?Math.abs(yS(N)):0;if(U<1e-4)continue;let k=vS(N);if(!o.some(z=>te(k,z))){if(U>(A-S)*(T-F)-1e-6){u([S,Ti,F],[S,Ti,T],[A,Ti,T],[A,Ti,F],[0,1,0],_,-1);continue}for(let[z,W,G]of li(N)){let H=N[z],j=N[G],st=N[W];(st[1]-H[1])*(j[0]-H[0])-(st[0]-H[0])*(j[1]-H[1])<0&&([H,j]=[j,H]),u([H[0],Ti,H[1]],[st[0],Ti,st[1]],[j[0],Ti,j[1]],[j[0],Ti,j[1]],[0,1,0],_,-1)}}}});let d=i.rooms.length,p=(i.outdoor??[]).filter(x=>x.points.length>=3&&!Dn(x.type));if(p.length){let x=p.flatMap(E=>E.points.map(C=>C[0])),_=p.flatMap(E=>E.points.map(C=>C[1])),y=Math.floor(Math.min(...x)/r)*r,M=Math.floor(Math.min(..._)/r)*r,w=Math.max(1,Math.ceil((Math.max(...x)-y)/r)),R=Math.max(1,Math.ceil((Math.max(..._)-M)/r)),v=(E,C,I)=>im(i,E)-Do(i,E,C,I)+Ti;for(let E=0;E<w;E++)for(let C=0;C<R;C++){let I=y+E*r,P=M+C*r,D,S=[I+r/2,P+r/2];D=p.find(A=>A.type==="pool"&&te(S,A.points));for(let A=p.length-1;A>=0&&!D;A--)te(S,p[A].points)&&(D=p[A]);if(!D)continue;let F=(A,T)=>[A,v(D,A,T),T];u(F(I,P),F(I,P+r),F(I+r,P+r),F(I+r,P),[0,1,0],d,-1)}}let b=Math.min(i.cut_height,i.height),m=[];t.forEach((x,_)=>{let y=x.profile?.length?Math.max(...x.profile.map(([,T])=>T)):Math.min(i.height,x.height??i.height),M=Math.min(b,y-.02),w=x.b[0]-x.a[0],R=x.b[1]-x.a[1],v=Math.hypot(w,R);if(v<.05)return;let E=[w/v,R/v],C=[-E[1],E[0]],I=e[_],P=mS(x,E,v,n),D=(T,N)=>T?i.rooms.findIndex(U=>U.id===T):N?d:-1;m.push({a:x.a,b:x.b,h:y,...x.profile?{profile:x.profile}:{},...s?{roofUnder:s}:{},ra:D(x.roomLeft,!1),rb:D(x.roomRight,x.exterior),gaps:P});let S=(T,N,U)=>[N,U,...T.filter(k=>k>N+.005&&k<U-.005)].sort((k,z)=>k-z).filter((k,z,W)=>z===0||k>W[z-1]+.005),F=S([M,(M+y)/2,...P.flatMap(T=>[T.y0+.01,T.y1-.01])],.02,y-.02),A=S([...P.flatMap(T=>[T.s0,T.s1]),...x.profile?.map(([T])=>T)??[]],0,v);for(let T of[1,-1]){let N=T>0?x.roomLeft:x.roomRight,U=N?i.rooms.findIndex(j=>j.id===N):x.exterior?d:-1;if(U<0)continue;let k=(T>0?x.left:x.right)+dS,z=[C[0]*T,C[1]*T],W=(j,st)=>[x.a[0]+E[0]*j+z[0]*k,st,x.a[1]+E[1]*j+z[1]*k],G=j=>{let st=W(j,0),X=s?.(st[0],st[2]);return X==null?1/0:X-.02},H=j=>Math.min(x.profile?ln(x.profile,j):y,G(j));for(let j=0;j<A.length-1;j++){let st=A[j+1]-A[j],X=Math.max(1,Math.ceil(st/r));for(let Z=0;Z<X;Z++){let tt=A[j]+st/X*Z,q=A[j]+st/X*(Z+1),Q=(tt+q)/2;for(let dt=0;dt<F.length-1;dt++){let gt=F[dt],bt=F[dt+1];if(bt-gt<.01)continue;let vt=(gt+bt)/2;if(P.some(Qt=>Q>Qt.s0&&Q<Qt.s1&&vt>Qt.y0&&vt<Qt.y1))continue;let Et=gt>=b-1e-6?I:Qi+I,xt=Math.min(bt,H(tt)),Vt=Math.min(bt,H(q));if(xt<=gt+.005&&Vt<=gt+.005)continue;let Se=[[tt,gt],[q,gt],[q,bt],[tt,bt]],Oe=Qt=>H(Qt),de=[];for(let Qt=0;Qt<Se.length;Qt++){let Y=Se[Qt],Ue=Se[(Qt+1)%Se.length],pe=Oe(Y[0])-Y[1],V=Oe(Ue[0])-Ue[1],L=pe>=-1e-7,et=V>=-1e-7;if(L&&de.push(Y),L!==et){let ot=pe/(pe-V);de.push([Y[0]+(Ue[0]-Y[0])*ot,Y[1]+(Ue[1]-Y[1])*ot])}}de.length<3||(T<0&&de.reverse(),f(de.map(([Qt,Y])=>W(Qt,Y)),z,U,Et))}}}}});let g=[];for(let x of n){if(x.opening.type!=="door")continue;let _=t.find(w=>Jm(w,x)&&pS(w,x));if(!_||!_.roomLeft||!_.roomRight)continue;let y=i.rooms.findIndex(w=>w.id===_.roomLeft),M=i.rooms.findIndex(w=>w.id===_.roomRight);y<0||M<0||g.push({id:x.opening.id,a:y,b:M,x:x.start[0]+x.axis[0]*(x.width/2),y:Math.min(1.1,x.top*.55),z:x.start[1]+x.axis[1]*(x.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:g,blockers:m}}function Jm(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function pS(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,o=t.start[0]+t.axis[0]*(t.width/2),s=t.start[1]+t.axis[1]*(t.width/2),a=((o-i.a[0])*e+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function mS(i,t,e,n){let r=[];for(let o of n){if(!Jm(i,o))continue;let s=(o.start[0]-i.a[0])*t[0]+(o.start[1]-i.a[1])*t[1],l=o.axis[0]*t[0]+o.axis[1]*t[1]>0?s:s-o.width;l>e||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function gS(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function bS(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Zm(i,t,e,n,r,o,s){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=bS(i),d=1/(1+h/(f*f)),p=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*o+c*s)/u);return i.level*p*(.2+.8*b)*gS(i.kind,l/u)}function jm(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,p]of[[h.a,h.b],[h.b,h.a]]){let b=[0,0,0];for(let g of t){if(g.room!==d)continue;let x=g.x-h.x,_=g.y-h.y,y=g.z-h.z,M=Math.hypot(x,_,y)||1,w=Zm(g,h.x,h.y,h.z,x/M,_/M,y/M);b[0]+=g.color[0]*w,b[1]+=g.color[1]*w,b[2]+=g.color[2]*w}let m=Math.max(b[0],b[1],b[2]);m<.01||r.push({x:h.x,y:h.y,z:h.z,color:[b[0]/m,b[1]/m,b[2]/m],level:Math.min(1,m*.9*(.35+.65*f)),kind:"wall",room:p})}});let o=new Map;for(let h of r){let u=i.blockers.filter(d=>d.ra===h.room||d.rb===h.room),f={...h,color:h.color.map(d=>Math.pow(d,1.5)),walls:u};o.set(h.room,[...o.get(h.room)??[],f])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let h=0;h<l.length;h++){let u=o.get(l[h]);if(!u)continue;let f=h*3,d=0,p=0,b=0;for(let m of u){if(m.walls.length&&xS(m,m.walls,s[f],s[f+1],s[f+2]))continue;let g=Zm(m,s[f],s[f+1],s[f+2],a[f],a[f+1],a[f+2]);d+=m.color[0]*g,p+=m.color[1]*g,b+=m.color[2]*g}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-p*e*1.6),c[f+2]=1-Math.exp(-b*e*1.6)}return c}function xS(i,t,e,n,r){let o=e-i.x,s=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=o*c-s*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let p=(u*s-f*o)/h;if(p<0||p>1)continue;let b=i.y+(n-i.y)*d,m=p*Math.hypot(l,c),g=l/Math.hypot(l,c),x=c/Math.hypot(l,c),_=a.roofUnder?.(a.a[0]+g*m,a.a[1]+x*m),y=a.profile?ln(a.profile,m):a.h;if(!(b>=(_==null?y:Math.min(y,_)))&&!a.gaps.some(M=>m>M.s0&&m<M.s1&&b>M.y0&&b<M.y1))return!0}return!1}function of(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&te([t,e],r.points));return n<0?i.rooms.length:n}function Hs(i,t){return i&&t>=0&&t<i.length?i[t]:t}function yS(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function vS(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var Xs={open:0,open2:0,tilt:0,tilt2:0,cover:null},Qm=2043986,tg=2769520,_S=2242399,sf=1845831,MS=1450554,Ei=16758087,Ic=3662079,SS=1.2,wS=1.5,TS=1846349,ES=2572395,AS=1120816,RS=1845831,eg=5995775,ng=9085695,Fo=zt(3662079,.08),PS=.2;function Lc(i,t,e,n,r,o,s,a,l,c,h){let u=(d,p,b)=>t(d,p,b),f=[[u(e,r,a),u(n,r,a),u(n,o,a),u(e,o,a),c],[u(e,r,s),u(n,r,s),u(n,o,s),u(e,o,s),zt(l.getHex(),.6)],[u(e,o,s),u(n,o,s),u(n,o,a),u(e,o,a),l],[u(e,r,s),u(n,r,s),u(n,r,a),u(e,r,a),zt(l.getHex(),.85)],[u(e,r,s),u(e,o,s),u(e,o,a),u(e,r,a),zt(l.getHex(),.92)],[u(n,r,s),u(n,o,s),u(n,o,a),u(n,r,a),zt(l.getHex(),.92)]];for(let[d,p,b,m,g]of f)i.tri(d,p,b,g,g,g,void 0,h),i.tri(d,b,m,g,g,g,void 0,h)}function be(i,t,e,n,r,o,s,a,l,c,h,u){if(a<=h+1e-6)return Lc(i,t,e,n,r,o,s,a,l,c,Zt);if(s>=h-1e-6)return Lc(i,t,e,n,r,o,s,a,l,c,u);Lc(i,t,e,n,r,o,s,h,l,c,Zt),Lc(i,t,e,n,r,o,h,a,l,c,u)}function rr(i,t,e,n,r,o,s,a,l,c,h=0){let u=(f,d,p)=>{let b=y=>h?(s-y)/h:.5,m=t(e,r,f),g=t(n,r,f),x=t(n,r,d),_=t(e,r,d);i.tri(m,g,x,a,a,a,[0,b(f),1,b(f),1,b(d)],p),i.tri(m,x,_,a,a,a,[0,b(f),1,b(d),0,b(d)],p)};s<=l+1e-6?u(o,s,Zt):o>=l-1e-6?u(o,s,c):(u(o,l,Zt),u(l,s,c))}function CS(i,t,e,n,r,o,s,a,l,c){let h=t(e,r,s),u=t(n,r,s),f=t(n,o,s),d=t(e,o,s),p=0,b=(o-r)/c;i.tri(h,u,f,a,a,a,[0,p,1,p,1,b],l),i.tri(h,f,d,a,a,a,[0,p,1,b,0,b],l)}function IS(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let o=e*r.axis[0]+n*r.axis[1];if(Math.abs(o)<.999)continue;let s=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(s*n-a*e)>.03)continue;let l=s*e+a*n,c=o>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function LS(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside"){let r=i.sill>.05;return{inside:r&&e==="inside",outside:r&&e==="outside"}}let n=i.sill>.3&&!IS(i,t);return{inside:n,outside:n&&i.exterior}}function ig(i,t,e){let n=new jt,r=new jt,o=new jt(!0),s=new nt(Qm),a=new nt(tg),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,p=o.count,b=t.get(u.opening.id)??Xs,m=u.width,{sill:g,top:x,bucket:_}=u,y=(v,E,C)=>[u.start[0]+u.axis[0]*v+u.toRoom[0]*E,C,u.start[1]+u.axis[1]*v+u.toRoom[1]*E],M=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",R=u.opening.type==="door"&&ar(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!R||u.opening.type==="garage"){let v=-u.faceOut-.012,E=u.faceRoom+.012,C=u.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),I=C?zt(Ei,.8):new nt(Qm),P=C?zt(Ei,1):new nt(tg);be(n,y,-.045,.02,v,E,0,x+.045,I,P,e,_),be(n,y,m-.02,m+.045,v,E,0,x+.045,I,P,e,_),be(n,y,.02,m-.02,v,E,x-.02,x+.045,I,P,e,_)}if(u.opening.type==="door"){let v=ar(u.opening,u.exterior),E=Vf(v),C=u.opening.swing==="out"?-1:1,I=C>0?u.faceRoom:-u.faceOut,P=u.opening.leaves===2,D=.02,S=m-.02,F=zf(m,v,u.hingeAtStart,u.opening);if(F){let U=-u.faceOut-.012,k=u.faceRoom+.012,z=I-C*(E?.06:.04)/2,W=.06;for(let[G,H]of F.panels)be(n,y,G,G+W,U,k,.02,x-.02,s,a,e,_),be(n,y,H-W,H,U,k,.02,x-.02,s,a,e,_),be(n,y,G+W,H-W,U,k,.02,.12,s,a,e,_),rr(r,y,G+W,H-W,z,.12,x-.02,Fo,e,_);D=F.x0,S=F.x1}let A=P?(S-D)/2-.004:S-D,T=E?.06:.04;E&&(be(n,y,.02,m-.02,-u.faceOut-.02,u.faceRoom,0,.02,new nt(sf),a,e,_),u.exterior&&be(n,y,m/2-.08,m/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,zt(Ei,.55),zt(Ei,.85),e,Zt));let N=R?[]:[[u.hingeAtStart,b.open]];P&&!R&&N.push([!u.hingeAtStart,b.open2??0]);for(let[U,k]of N){let z=Math.min(1,Math.max(0,k)),W=v==="sliding"?0:z*wS,G=v==="sliding"?z*A:0,H=(gt,bt,vt)=>{let Et=gt*Math.cos(W)-bt*Math.sin(W)-G,xt=I+C*(bt*Math.cos(W)+gt*Math.sin(W)+(G?.05:0));return y(U?D+Et:S-Et,xt,vt)},j=z>.05?Zt:_,st=w?!!b.sensed&&z<.05:z>.9,X=st?zt(Ei,.7):new nt(E?AS:TS),Z=st?zt(Ei,.9):new nt(E?RS:ES);v==="glass"?(be(n,H,0,.05,-T,0,.01,x-.01,X,Z,e,j),be(n,H,A-.05,A,-T,0,.01,x-.01,X,Z,e,j),be(n,H,.05,A-.05,-T,0,.01,.12,X,Z,e,j),be(n,H,.05,A-.05,-T,0,x-.08,x-.01,X,Z,e,j),rr(r,H,.05,A-.05,-T/2,.12,x-.08,Fo,e,j)):be(n,H,0,A,-T,0,.01,x-.01,X,Z,e,j),v==="front_glass"?rr(r,H,.12,A-.12,.001,x*.55,x-.18,Fo,e,j):E&&rr(r,H,.1,.18,.001,.3,x-.3,Fo,e,j);let tt=Math.min(1.05,x*.5),q=E?.3:.012,Q=E?A-.11:A-.16,dt=E?A-.08:A-.05;be(n,H,Q,dt,.004,.05,tt-q,tt+q,new nt(eg),new nt(ng),e,j),be(n,H,Q,dt,-T-.05,-T-.004,tt-q,tt+q,new nt(eg),new nt(ng),e,j),b.unlocked&&U===u.hingeAtStart&&be(n,H,A-.022,A+.004,-T-.006,.006,.03,x-.03,zt(Ic,.85),zt(Ic,1),e,j)}}else if(u.opening.type==="garage"){let v=Math.min(1,Math.max(0,b.cover??1)),E=new nt(13951231),C=u.faceRoom-.03,I=x*(1-v);v>.01&&rr(o,y,.02,m-.02,C,I,x,E,e,_,.5);let P=(1-v)*x;P>.01&&CS(o,y,.02,m-.02,C,C+P,x+.03,E,_,.5)}else if(ar(u.opening,u.exterior)==="glass_wall"){be(n,y,0,.04,M-.025,M+.025,g,x,s,a,e,_),be(n,y,m-.04,m,M-.025,M+.025,g,x,s,a,e,_),be(n,y,.04,m-.04,M-.025,M+.025,g,g+.03,s,a,e,_),be(n,y,.04,m-.04,M-.025,M+.025,x-.04,x,s,a,e,_);let C=Math.max(1,Math.round((m-2*.04)/.9)),I=(m-2*.04)/C;for(let P=1;P<C;P++){let D=.04+P*I;be(n,y,D-.02,D+.02,M-.025,M+.025,g+.03,x-.04,s,a,e,_)}for(let P=0;P<C;P++){let D=.04+P*I+(P?.02:0),S=.04+(P+1)*I-(P<C-1?.02:0);rr(r,y,D,S,M,g+.03,x-.04,Fo,e,_)}}else{be(n,y,0,.06,M-.035,M+.035,g,x,s,a,e,_),be(n,y,m-.06,m,M-.035,M+.035,g,x,s,a,e,_),be(n,y,.06,m-.06,M-.035,M+.035,g,g+(g>.05?.06:.03),s,a,e,_),be(n,y,.06,m-.06,M-.035,M+.035,x-.06,x,s,a,e,_);let C=LS(u,i);C.inside&&be(n,y,-.04,m+.04,M+.035,u.faceRoom+.07,g-.03,g,new nt(sf),a,e,_),C.outside&&be(n,y,-.03,m+.03,-u.faceOut-.06,M-.035,g-.04,g-.02,new nt(sf),a,e,_);let I=.055,P=g+(g>.05?.06:.03),D=x-.06,S=M+.035,F=M+.035+.06,T=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:m/2,x1:u.hingeAtStart?m/2:m-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?m/2:.06,x1:u.hingeAtStart?m-.06:m/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:m-.06,open:b.open,tilt:b.tilt}];for(let N of T){let U=N.open>.02||N.tilt>.02,k=w?!!b.sensed&&!U:U,z=k?zt(Ei,.75):new nt(_S),W=k?zt(Ei,.95):a,G=N.x0,H=N.x1,j=H-G,st=N.open*SS*(u.opening.swing==="out"?-1:1),X=N.tilt*PS,Z=(q,Q,dt)=>{let gt=dt-P,bt=Q+gt*Math.sin(X),vt=P+gt*Math.cos(X),Et=q*Math.cos(st)-(bt-S)*Math.sin(st);bt=S+(bt-S)*Math.cos(st)+q*Math.sin(st);let xt=N.atStart?G+Et:H-Et;return y(xt,bt,vt)},tt=Math.abs(st)>.05?Zt:_;if(be(n,Z,0,I,S,F,P,D,z,W,e,tt),be(n,Z,j-I,j,S,F,P,D,z,W,e,tt),be(n,Z,I,j-I,S,F,P,P+I,z,W,e,tt),be(n,Z,I,j-I,S,F,D-I,D,z,W,e,tt),rr(r,Z,I,j-I,(S+F)/2,P+I,D-I,k?zt(Ei,.16):Fo,e,tt),b.unlocked&&N.atStart===u.hingeAtStart&&be(n,Z,j-.022,j+.004,S-.006,F+.006,P+.02,D-.02,zt(Ic,.85),zt(Ic,1),e,tt),ar(u.opening,u.exterior)==="bars"){let q=(P+D)/2,Q=(S+F)/2;be(n,Z,I,j-I,Q-.012,Q+.012,q-.012,q+.012,z,W,e,tt),be(n,Z,j/2-.012,j/2+.012,Q-.012,Q+.012,P+I,D-I,z,W,e,tt)}}}if(b.cover!==null){let v=-u.faceOut,E=x+.2;be(n,y,-.05,m+.05,v-.15,v,x,E,new nt(MS),a,e,_);let C=Math.min(1,Math.max(0,b.cover));if(C>.01){let I=x-C*(x-g);rr(o,y,0,m,v-.07,I,x,new nt(16777215),e,_,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:p,end:o.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:o.geometry(),frameTris:l,glassTris:c,blindTris:h}}var FS=.3,rg=2.6;function og(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),o=i.map(M=>M[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),h=c-l>=a-s,u=e*.7071,f=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],R=[...w,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return w.every(v=>te(v,i))&&!n.some(v=>R.some(E=>te(E,v)))},d=(M,w)=>f(h?[M,w]:[w,M]),p=(M,w)=>{let R=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let v=1;v<R;v++)if(!f([M[0]+(w[0]-M[0])*v/R,M[1]+(w[1]-M[1])*v/R]))return!1;return!0},[b,m,g,x]=h?[s,a,l,c]:[l,c,s,a],_=[],y=!0;for(let M=b+e;M<=m-e+1e-6;M+=t){let w=null,R=null,v=.05;for(let P=g;P<=x+1e-6;P+=v)if(d(M,P)&&(R??=P),(!d(M,P)||P+v>x+1e-6)&&R!==null){let D=d(M,P)?P:P-v;(!w||D-R>w[1]-w[0])&&(w=[R,D]),R=null}if(!w||w[1]-w[0]<.2)continue;let E=P=>{let[D,S]=P?w:[w[1],w[0]];return[h?[M,D]:[D,M],h?[M,S]:[S,M]]},C=E(y),I=_[_.length-1];if(I&&n.length&&!p(I,C[0])){let P=E(!y);if(!p(I,P[0]))continue;C=P,y=!y}_.push(C[0],C[1]),y=!y}return _}function lf(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let o=r/e*Math.PI*2;return[i[0]+Math.cos(o)*t,i[1]+Math.sin(o)*t]})}var af=i=>Math.atan2(Math.sin(i),Math.cos(i));function sg(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=af(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),rg*e),!0)}let a=Math.atan2(r,o),l=af(a-i.heading);if(i.heading=af(i.heading+Math.sign(l)*Math.min(Math.abs(l),rg*e)),Math.abs(l)<.35){let c=Math.min(s,FS*e);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}var Ln=null,ag=new Map;function cg(i,t=0){let e=new jt,n=new Ne,r=we(i.type);if(r?.light)bc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)cf(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};gc(e,n,new jt,o,0,!0)}return{buf:e,lines:n}}function DS(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,o=ag.get(r);if(o)return o;e&&No(e),Ln??=new wr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Ln.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Ln.setSize(t,t,!1),Ln.setClearColor(0,0);let{buf:s,lines:a}=cg(i),l=new zi,c=new Ut(s.geometry(),new ne({vertexColors:!0,color:new nt(n,n,n)})),h=new tn(a.geometry(),new sn({vertexColors:!0,color:new nt(n*1.8,n*1.8,n*1.8)}));l.add(c,h);let u=new yn().setFromObject(c),f=u.getCenter(new $),d=new ti(-1,1,1,-1,.01,100);d.position.copy(f).add(new $(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let p=.05;for(let g of[u.min.x,u.max.x])for(let x of[u.min.y,u.max.y])for(let _ of[u.min.z,u.max.z]){let y=new $(g,x,_).applyMatrix4(d.matrixWorldInverse);p=Math.max(p,Math.abs(y.x),Math.abs(y.y))}let b=p*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),Ln.render(l,d);let m=Ln.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose(),ag.set(r,m),m}function NS(i,t,e=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,s=lg.get(o);if(s)return s;n&&No(n);let{buf:a,lines:l}=cg(i,t),c=new Ut(a.geometry(),new ne({vertexColors:!0,color:new nt(r,r,r)})),h=new tn(l.geometry(),new sn({vertexColors:!0,color:new nt(r*1.8,r*1.8,r*1.8)})),u=new yn().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,p=Math.max(0,u.min.y),b=u.max.y,m=Math.max(1,Math.min(1024,Math.round((d-f)*e))),g=Math.max(1,Math.min(1024,Math.round((b-p)*e)));Ln??=new wr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Ln.setPixelRatio(1),Ln.setSize(m,g,!1),Ln.setClearColor(0,0);let x=new zi;x.add(c,h);let _=new ti(f,d,b,p,.01,100);_.position.set(0,0,50),_.lookAt(0,0,0),_.updateProjectionMatrix(),Ln.render(x,_);let y=Ln.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let M={url:y,x0:f,x1:d,y0:p,y1:b};return lg.set(o,M),M}var lg=new Map;var SP={Group:Ve,Mesh:Ut,MeshBasicMaterial:ne,CanvasTexture:xi,Color:nt,PlaneGeometry:yi,BufferGeometry:ee,Float32BufferAttribute:Xt,DoubleSide:ge},hg={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},OS=[.22,.88,1],US=2.4,fg=1.4,BS=.22,dg=.94,pg=140,mg=1.5;function kS(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[o,s]=e[r],[a,l]=e[(r+1)%e.length],c=a-o,h=l-s,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-o)*c+(t-s)*h)/u));n=Math.min(n,Math.hypot(i-(o+c*f),t-(s+h*f)))}return n}var hf=32,zS=500,gg=160,bg=33,xg=.028,VS=.09,ie=2767456,GS=2240847,WS=3096944,HS=1911110,XS=1,yg=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),Fc=450,vg=125,YS=.08,Ys={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},qS=new nt(1714765);function $S(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var ff=class{host;options;renderer;scene=new zi;camera=new Je(38,1,.1,400);controls;labels;root=new Ve;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new tn(new ee,new sn({color:10471679,transparent:!0,opacity:.4,blending:Ge,depthWrite:!1}));snow=new ao(new ee,new br({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Ut(new ts(1,28),new ne({color:16767370,transparent:!0,opacity:0,blending:Ge,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=KS(),this.blindTexture=jS(),this.haloTexture=tw(),this.ground=new Ut(new yi(1,1),new ne({transparent:!1,blending:Ge,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){No(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,Tf(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>Ks(h.floor).some(u=>u.id===t)),n=e?Ks(e.floor).find(h=>h.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=Ii(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new $(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[o,s]=Ii(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new $(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new $(o,e.floor.elevation+e.ty+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let o=r.el;r.icon!==n.icon&&(r.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let s=n.caption??"";r.caption!==s&&(r.caption=s,o.querySelector(".fp3d-dev-name").textContent=s);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,o.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,o.title=n.name,o.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?o.style.setProperty("--fp3d-glow",c):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])Gs(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&Gs(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Xm(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Hm(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ve;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=t.filter(c=>c.floorId===n.floor.id),s=.03;for(let c of o)if(c.playing)for(let h=0;h<3;h++){let u=new Ut(new os(.92,1,48),new ne({color:3662079,transparent:!0,opacity:0,blending:Ge,depthWrite:!1,side:ge}));u.rotation.x=-Math.PI/2,u.position.set(c.x,s+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of o)for(let h of c.members){let u=o.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,s+.02,c.z,u.x,s+.02,u.z))}if(a.length){let c=new ee;c.setAttribute("position",new Xt(a,3));let h=new tn(c,new sn({color:3662079,transparent:!0,opacity:.45,blending:Ge,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(e*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let o=uf(r),s=_g(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?e*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}buildPipes(t){let e=this.pipes.filter(o=>o.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new jt;for(let o of e)zm(r,o);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let o=document.createElement("img");o.src=n.picture,o.alt="",o.addEventListener("error",()=>o.replaceWith(document.createTextNode(n.initials))),r.append(o)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=$m(t),n=e?1:0;n===Lo.value&&(!e||Io.value.equals(new $(...e)))||(Lo.value=n,e&&Io.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=qm(t),X0(t!=="neon"),this.building?.floors.some(o=>o.furniture.some(s=>s.type==="waste_bin"||J0(s.type)))&&this.rebuild();let n=Ws(t),r=[...this.floors.map(o=>o.materials.lines),...this.roof?[this.roof.lines]:[]];for(let o of r)o.blending=n,o.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new nt(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new Zo(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,o=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let o=this.weatherBox,s=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=o.x0+Math.random()*(o.x1-o.x0),u=o.y0+Math.random()*(o.y1-o.y0),f=o.z0+Math.random()*(o.z1-o.z0);s.set([h,u,f],c*3),n&&s.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new ee;l.setAttribute("position",new Xt(s,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+s*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-s*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(s+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*le,s=(r?t.azimuth+180:t.azimuth)*le,a=Math.max(10,Math.abs(t.elevation))*le,l=this.weatherBox,c=new $((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),h=Math.min(300,Math.max(80,this.houseRadius*5)),u=new $(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(u,h),this.skyDisc.scale.setScalar(h*(r?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(r?13621486:16767370),f.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=t.get(o)??Xs,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed&&!!l.unlocked==!!s.unlocked||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let o=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};o.tl=r.left?1:0,o.tr=r.right?1:0,this.fridges.set(n,o)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let o=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(o.to=r.moving>0?1:0,o.speed=1/Math.max(2,r.time)):(o.to=r.out,o.speed=0),this.awnings.set(n,o)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,o]of this.awnings){let s=o.to-o.cur;if(Math.abs(s)<.002){s!==0&&(o.cur=o.to,e.add(r));continue}o.cur=o.speed>0?o.cur+Math.sign(s)*Math.min(Math.abs(s),o.speed*t/1e3):o.cur+s*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/gg),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new jt;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Z0(e,n,rn(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&$0(e,n,rn(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=na(n.type),o=r?we(n.type):void 0;r&&o&&tm(e,o,r,n,rn(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new Rc(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*le,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.05,(e.tilt??(o?65:20))*le)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y);return{position:new $(e.x,a,e.z),direction:new $(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s)),fov:Math.min(e.fov??(o?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(o?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let o of[n.floorMesh,n.wallMesh])o.layers.enable(Pc);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(Pc),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&$S();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new wr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Be,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Ec(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",e.append(n,r,o,s);let a,l=!1;e.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=t;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},zS)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",h=>h.preventDefault()),e.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),e.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Km(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=Mg(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Hs(r,a.ra),a.rb=Hs(r,a.rb)}t.lightSurface=n;let o=new ee;o.setAttribute("position",new Xt(n.pos,3)),o.setAttribute("color",new Xt(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new Xt(n.fold,1));let s=new mr(new Uint32Array(n.pos.length/3),1);s.setUsage(Yu),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=o,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=we(t.pack);if(!e)return null;let[n,r,o]=t.size??Ys.wall;return em(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let o=n.top??t.floor.height,s=of(t.floor,n.x,n.z),a=Hs(t.lightZones,s),[l,,c]=n.size??(n.lamp?Ys[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[o-.12,"ceiling"],downlight:[o-.03,"spot"],spot:[o-c,"spot"],panel:[o-.05,"ceiling"],pendant:[Math.max(.5,o-c),"pendant"],fan:[Math.max(.5,o-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<XS?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],p=n.lightY??f,b=r.color;if(n.lamp==="strip"){let m=(n.rotation??0)*le,g=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let _=(n.rise??0)*le;e.push({x:n.x+Math.cos(m)*l*x*Math.cos(_),y:p+Math.sin(_)*l*x,z:n.z+Math.sin(m)*l*x*Math.cos(_),color:b,level:r.level*.55,kind:g||_?"omni":d,room:a})}}else{let m=this.packLightAt(n);e.push({x:m?m[0]:n.x,y:m?m[1]:p,z:m?m[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(o=>o!==t&&Math.abs(o.floor.elevation-e)<.8&&o.geo.holes.length);if(!n)return[];let r=[];for(let o of n.geo.holes){if(o.length<3)continue;let s=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=te([h.x,h.z],o)?0:kS(h.x,h.z,o);if(f>mg)continue;let d=u.level*(1-f/mg);for(let p=0;p<3;p++)a[p]+=u.color[p]*d;s+=d}if(s<.02)continue;let[l,c]=Ii(o);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/s,a[1]/s,a[2]/s],level:Math.min(1,s)*.6,kind:"ceiling",room:Hs(t.lightZones,of(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(u=>{let f=t.geo.openings.find(p=>p.opening.id===u.id);if(f&&ar(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),o=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(o===t.glowSig)return;t.glowSig=o;let s=t.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=jm(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}s.index.needsUpdate=!0,s.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:nn(new ne({vertexColors:!0}),this.themeUniform),pattern:JS(this.patternTexture),wall:nn(ci(new ne({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:ci(new ne({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new ne({vertexColors:!0,blending:us,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ge,polygonOffset:!0,polygonOffsetFactor:-1}),lines:nn(ci(new sn({vertexColors:!0,transparent:!0,blending:Ws(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:ci(new ne({vertexColors:!0,transparent:!0,blending:Ge,depthWrite:!1,side:ge,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:nn(ci(new ne({vertexColors:!0,side:ge}),t),this.themeUniform),glass:ci(new ne({vertexColors:!0,transparent:!0,blending:Ge,depthWrite:!1,side:ge}),t),blinds:nn(ci(new ne({map:this.blindTexture,vertexColors:!0,side:ge}),t),this.themeUniform),water:nn(new ne({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ge}),this.themeUniform),flow:QS(this.flowTime),solarLive:rf(this.flowTime),lamps:nn(new ne({vertexColors:!0}),this.themeUniform),halos:new br({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ge,depthWrite:!1}),cones:new ne({vertexColors:!0,transparent:!0,blending:Ge,depthWrite:!1,side:ge}),screens:new ne({vertexColors:!0,transparent:!0,blending:Ge,depthWrite:!1,side:ge}),earth:nn(new ne({vertexColors:!0}),this.themeUniform),earthWell:nn(new ne({vertexColors:!0,side:ge}),this.themeUniform),earthLines:nn(new sn({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),e=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=Xh(n)?.id===o.id?s.filter(tt=>tt.face===Hh).map(tt=>({field:tt,face:am(n,tt)})):[],l=s.filter(tt=>tt.face.startsWith(`wall:${o.id}:`));if(l.length){let tt=new Map(sm(n,o.id).map(q=>[q.key,q]));for(let q of l){let Q=tt.get(q.face);Q&&a.push({field:q,face:Q})}}a.push(...lm(n,o.id));let h=Mh(n).some(tt=>r0(tt,o.elevation+o.height)&&wh(tt,o.elevation))?(tt,q)=>{let Q=o0(n,tt,q,o.elevation);return Q===null?null:Q-o.elevation}:void 0,u=Sm(ef(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,wm(n.floors,o),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),p=new Ve,b=new Ut(u.floor,d.floor),m=new Ut(u.shadow,d.shadow);m.renderOrder=1;let g=new Ut(u.floor,d.pattern);g.renderOrder=2;let x=new Ut(new ee,d.glow);x.renderOrder=3,x.visible=!1;let _=new Ut(new ee,d.frames),y=new Ut(new ee,d.blinds),M=new Ut(new ee,d.glass);M.renderOrder=4;let w=new Ut(new ee,d.lamps);w.visible=!1;let R=new Ut(new ee,d.cones);R.visible=!1,R.renderOrder=3;let v=new ao(new ee,d.halos);v.visible=!1,v.renderOrder=7;let E=new Ut(new ee,d.cones);E.visible=!1,E.renderOrder=7;let C=new Ut(new ee,d.cones);C.visible=!1,C.renderOrder=7;let I=new Ut(new ee,d.lamps);I.visible=!1;let P=new Ut(new ee,d.lamps);P.visible=!1;let D=new Ut(new ee,d.screens);D.visible=!1,D.renderOrder=5;let S=new Ut(new ee,d.flow);S.renderOrder=5,S.frustumCulled=!1;let F=nf(a,o.elevation),A=F?new Ut(F.geometry,d.solarLive):null;A&&(A.renderOrder=6,Gs(F,this.solarLevels));for(let tt of[_,y,M])tt.frustumCulled=!1;let T=new Ut(u.walls,d.glassWall),N=new Ut(u.walls,d.wall);T.renderOrder=6;let U=new Ut(u.water,d.water);U.renderOrder=4;let k=Math.min(...n.floors.filter(tt=>tt.rooms.length).map(tt=>tt.elevation)),z=Am(n,o,u.openings,o.elevation===k),W=z?[new Ut(z.earth.geometry(),d.earth),new Ut(z.wells.geometry(),d.earthWell),new tn(z.lines.geometry(),d.earthLines)]:[];for(let tt of W)tt.userData.earth=!0;p.add(b,m,g,x,N,U,new tn(u.lines,d.lines),_,y,M,S,w,R,v,E,C,I,P,D,T,...A?[A]:[],...W),this.root.add(p);let G=document.createElement("button");G.className="fp3d-pin fp3d-pin-floor",G.dataset.floor=o.id;let H=document.createElement("b");H.textContent=o.name||"\u2013";let j=document.createElement("span");j.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",G.append(H,j),G.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(G);let st=t.get(o.id),X=[],Z=null;for(let tt of Ks(o)){let q=document.createElement("button");q.className="fp3d-pin",q.dataset.room=tt.id,q.dataset.floor=o.id,this.fillRoomPin(q,tt.name,this.roomInfo.get(tt.id)),q.addEventListener("click",()=>this.options.onRoomTap?.(o.id,tt.id)),this.labels.append(q);let[Q,dt]=Ii(tt.points);if(X.push({pin:q,room:tt,cx:Q,cz:dt}),!tt.outdoor)for(let[gt,bt]of tt.points)Z??={x0:gt,x1:gt,z0:bt,z1:bt},Z.x0=Math.min(Z.x0,gt),Z.x1=Math.max(Z.x1,gt),Z.z0=Math.min(Z.z0,bt),Z.z1=Math.max(Z.z1,bt)}this.floors.push({floor:o,rank:r.indexOf(o),group:p,geo:u,floorMesh:b,shadowMesh:m,patternMesh:g,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:_,glassMesh:M,blindsMesh:y,flowMesh:S,solarMesh:A,solarLive:F,lampMesh:w,sunMesh:R,sunSig:"",haloMesh:v,coneMesh:E,trailMesh:C,fridgeMesh:I,pipeMesh:P,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:N,screenMesh:D,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:Z,roomPins:X,labelSize:null,materials:d,mask:f,openings:new Map,y:st?.y??0,o:st?.o??1,ty:0,to:1,appliedO:-1,label:G})}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildPipes(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=e.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Xs);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(g=>g.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(g=>g.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?bm(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(Dr(this.building).map(g=>[g.key,g])),n=this.building.settings.roof?.solar??[],r=rf(this.flowTime),o=[],s=new Ve,a=nn(new ne({vertexColors:!0,transparent:!0,side:ge}),this.themeUniform),l=nn(new sn({vertexColors:!0,transparent:!0,blending:Ws(this.theme),depthWrite:!1}),this.themeUniform,!0),c=nn(new ne({vertexColors:!0,transparent:!0,side:ge,depthWrite:!1}),this.themeUniform),h=new Ve,u=nn(new ne({vertexColors:!0,side:ge}),this.themeUniform),f=nn(new ne({vertexColors:!0,transparent:!0,opacity:.35,side:ge,depthWrite:!1}),this.themeUniform),d=nn(new ne({vertexColors:!0,transparent:!0,opacity:.35,side:ge,depthWrite:!1}),this.themeUniform),p=nn(new sn({vertexColors:!0,transparent:!0,blending:Ws(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],m=t.map(g=>{let x=new Ve;x.add(new Ut(g.solid.geometry(),a),new tn(g.lines.geometry(),l)),g.glass.count&&x.add(new Ut(g.glass.geometry(),c));let _=n.flatMap(w=>{let R=e.get(w.face);return R&&(R.section?g.sections?.includes(R.section):g===t[0])?[{face:R,field:w}]:[]}),y=nf(_,g.floor.elevation+g.base);if(y){let w=new Ut(y.geometry,r);w.renderOrder=9,x.add(w),o.push(y),Gs(y,this.solarLevels)}g.winRoof?.solid.count&&x.add(new Ut(g.winRoof.solid.geometry(),u),new tn(g.winRoof.lines.geometry(),p)),g.winRoof?.glass.count&&x.add(new Ut(g.winRoof.glass.geometry(),d)),x.renderOrder=8,s.add(x);let M=null;(g.win?.solid.count||g.win?.glass.count)&&(M=new Ve,M.add(new Ut(g.win.solid.geometry(),u),new tn(g.win.lines.geometry(),p)),g.win.glass.count&&M.add(new Ut(g.win.glass.geometry(),f)),h.add(M));for(let[w,R]of g.winBelow??[]){if(!R.solid.count&&!R.glass.count)continue;let v=new Ve;v.add(new Ut(R.solid.geometry(),u),new tn(R.lines.geometry(),p)),R.glass.count&&v.add(new Ut(R.glass.geometry(),f)),h.add(v),b.push({floorId:w,win:v})}return{group:x,floorId:g.floor.id,rideId:h0(this.building,g.floor,g.sections??[]),base:g.base,lift:g.lift!==!1,win:M}});s.renderOrder=8,this.scene.add(s),this.scene.add(h),this.roof={group:s,parts:m,below:b,solid:a,lines:l,glass:c,live:r,lives:o,wins:h,winSolid:u,winLines:p,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/dg)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),o=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?dg*n:0,s=1-Math.exp(-t/pg),a=this.roofO;this.roofO+=(o-this.roofO)*s,Math.abs(o-this.roofO)<.004&&(this.roofO=o),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*fg:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*fg:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==o}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;e?n.rank>e.rank?(r=5+n.rank,o=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:BS)):r=this.explode?n.rank*US:0,n.ty=r,n.to=o;let a=e===n?an:ei;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let o=r.mesh.material;o.transparent=t.o<.999,o.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/pg);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/gg);for(let r of this.floors){let o=!1;for(let[s,a]of r.openings){let l=this.openingTargets.get(s)??Xs,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed&&!!l.unlocked==!!a.unlocked)continue;let h={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed,unlocked:l.unlocked},u=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,p=a[f]??0,b=d-p;Math.abs(b)<.003?h[f]=d:(h[f]=p+b*n,u=!0)}if(l.cover===null||a.cover===null)h.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?h.cover=l.cover:(h.cover=a.cover+f*n,u=!0)}(h.open!==a.open||h.open2!==(a.open2??0)||h.tilt!==a.tilt||h.tilt2!==(a.tilt2??0)||h.cover!==a.cover||!!h.sensed!=!!a.sensed||!!h.unlocked!=!!a.unlocked)&&(r.openings.set(s,h),o=!0),e||=u}o&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new nt(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*YS+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>Fc?.5+.5*Math.sin(f/140):f/Fc;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.rise??0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0}`).join(";"),s=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${s[u]?`${s[u].level.toFixed(3)},${s[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let h=new jt,u=[],f=[],d=new Map,p=t.floor.height;for(let b of r){let m=b.lamp==="strip"?(b.base??p)>Math.min(t.floor.cut_height,p):b.lamp?yg.has(b.lamp)&&(b.top??p)>Math.min(t.floor.cut_height,p):b.model==="camera_ceiling";if(!b.lamp&&!b.model||m&&this.wallMode==="cut")continue;let g=h.count,x=b.pack?we(b.pack):void 0,[_,y,M]=b.size??[.3,.3,.3];b.model?j0(h,b.model,b.x,b.model==="camera_ceiling"?p:b.y,b.z,b.rotation??0):x?bc(h,x,{x:b.x,z:b.z,rotation:b.rotation??0,w:_,d:y,h:M,mirror:b.mirror},b.base??0,65280):cf(h,{...b,lamp:b.lamp},b.top??p,65280,b.lamp!=="fan"),d.set(b.furnitureId??b.id,{start:g,end:h.count}),b.pickable!==!1&&u.push({id:b.id,start:g,end:h.count}),b.furnitureId&&f.push({id:b.furnitureId,start:g,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=Kp(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=s[u],p=d?.55+.45*d.level:0,b=d?new nt(...d.color.map(x=>Math.min(1,x*p))):new nt(HS),m=n(h.id);m>0&&b.lerp(new nt(1,1,1),.7*m);let g=new nt(b.getHex());Jp(c,t.lampShade,f,[g.r,g.g,g.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*le,r=this.weather?.cloud??0,o=Mg(t.floor,t.geo.openRooms),s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===t.sunSig)return;t.sunSig=s;let a=new jt;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*le,h=e.azimuth*le,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let p=[-d.toRoom[0],-d.toRoom[1]],b=p[0]*u[0]+p[1]*u[1];if(b<.05)continue;let m=t.openings.get(d.opening.id),g=d.top-(m?.cover??0)*(d.top-d.sill);if(g-d.sill<.05)continue;let x=(I,P)=>{let D=Math.min(7,P*f);return[d.start[0]+d.axis[0]*I+d.toRoom[0]*d.faceRoom-u[0]*D,.02,d.start[1]+d.axis[1]*I+d.toRoom[1]*d.faceRoom-u[1]*D]},_=.14*l*Math.min(1,b*1.5),y=new nt(1*_,.82*_,.55*_),M=y.clone().multiplyScalar(.45),w=t.floor.rooms.findIndex(I=>I.id===d.opening.room_id);if(w<0||t.floor.rooms[w].points.length<3)continue;let R=o[w],v=t.floor.rooms.filter((I,P)=>o[P]===R&&I.points.length>=3).map(I=>I.points),E=Math.max(1,Math.ceil(Math.min(7,g*f)/.25)),C=Math.max(1,Math.ceil(d.width/.3));for(let I=0;I<E;I++){let P=d.sill+(g-d.sill)*I/E,D=d.sill+(g-d.sill)*(I+1)/E,S=I/E,F=(I+1)/E,A=y.clone().lerp(M,S),T=y.clone().lerp(M,F);for(let N=0;N<C;N++){let U=d.width*N/C,k=d.width*(N+1)/C,z=x((U+k)/2,(P+D)/2);if(!v.some(st=>te([z[0],z[2]],st)))continue;let W=x(U,P),G=x(k,P),H=x(k,D),j=x(U,D);a.tri(W,G,H,A,A,T),a.tri(W,H,j,A,T,T)}}}this.pushRoofSun(t,a,o,u,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,o,s){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(Dr(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(o),Math.sin(o),r[1]*Math.cos(o)];for(let u of l){let f=c.get(u.face),d=Mc(a,f,u);if(!f||!d||d.floor.id!==t.floor.id)continue;let p=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[b,m,g,x]=d.corners,_=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(_>.95)continue;let y=(S,F,A)=>[S[0]+(F[0]-S[0])*A,S[1]+(F[1]-S[1])*A,S[2]+(F[2]-S[2])*A],M=y(x,b,_),w=y(g,m,_),R=t.floor.rooms.findIndex(S=>S.id===d.roomId);if(R<0)continue;let v=t.floor.rooms.filter((S,F)=>n[F]===n[R]&&S.points.length>=3).map(S=>S.points),E=(S,F)=>{let A=(N,U)=>y(y(S[0],S[1],N),y(S[3],S[2],N),U);for(let N=0;N<6;N++)for(let U=0;U<6;U++){let k=A((N+.5)/6,(U+.5)/6);if(!v.some(j=>te([k[0],k[2]],j)))continue;let z=A(N/6,U/6),W=A((N+1)/6,U/6),G=A((N+1)/6,(U+1)/6),H=A(N/6,(U+1)/6);e.tri(z,W,G,F,F,F),e.tri(z,G,H,F,F,F)}},C=S=>[S[0],.019,S[2]],I=.06*s;if(E([C(b),C(m),C(w),C(M)],new nt(.75*I,.85*I,1*I)),p<.05)continue;let P=S=>{let F=Math.min(7,(S[1]-t.floor.elevation)/Math.tan(o));return[S[0]-r[0]*F,.02,S[2]-r[1]*F]},D=.16*s*Math.min(1,p*1.5);E([P(b),P(m),P(w),P(M)],new nt(1*D,.84*D,.6*D))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],o=new jt,s=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*le,_=[-Math.sin(x),Math.cos(x)],y=l.model==="camera_ceiling",M=l.reach??(y?3:4.5),w=(l.fov??(y?360:90))*le/2,R=l.motion?new nt(.9,.12,.16):new nt(.04,.22,.28),v=new nt(0,0,0),E=Math.max(4,Math.round(w/.15)),C=.015,I=t.geo.walls2d,P=T=>{let N=T.b[0]-T.a[0],U=T.b[1]-T.a[1],k=N*N+U*U||1,z=Math.max(0,Math.min(1,((l.x-T.a[0])*N+(l.z-T.a[1])*U)/k));return Math.hypot(l.x-(T.a[0]+N*z),l.z-(T.a[1]+U*z))},D=null;for(let T of I)P(T)<.45&&(!D||P(T)<P(D))&&(D=T);let S=T=>{let N=_[0]*Math.cos(T)-_[1]*Math.sin(T),U=_[1]*Math.cos(T)+_[0]*Math.sin(T),k=M;for(let z of I){let W=z.b[0]-z.a[0],G=z.b[1]-z.a[1],H=N*G-U*W;if(Math.abs(H)<1e-9)continue;let j=((z.a[0]-l.x)*G-(z.a[1]-l.z)*W)/H,st=((z.a[0]-l.x)*U-(z.a[1]-l.z)*N)/H;z===D&&j<=.45||j>.02&&j<k&&st>=0&&st<=1&&(k=j)}return k},F=T=>{let N=S(T);return[l.x+(_[0]*Math.cos(T)-_[1]*Math.sin(T))*N,C,l.z+(_[1]*Math.cos(T)+_[0]*Math.sin(T))*N]},A=o.count;for(let T=0;T<E;T++)o.tri([l.x,C,l.z],F(-w+2*w*(T+1)/E),F(-w+2*w*T/E),R,v,v);s.push({id:l.id,start:A,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||yg.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??Ys[l.lamp],p=l.base??0,b=(l.rotation??0)*le,m={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,fan:Math.max(.5,h-Math.max(.25,d))+.02,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],g=(x,_,y=1)=>{n.push(x,m,_),r.push(...c.color.map(M=>M*c.level*.7*y))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,p+u*(.5+x),l.z),r.push(...c.color.map(_=>_*c.level*.7*.6));else if(l.rise){let _=l.rise*le;n.push(l.x+Math.cos(b)*u*x*Math.cos(_),m+Math.sin(_)*u*x,l.z+Math.sin(b)*u*x*Math.cos(_)),r.push(...c.color.map(y=>y*c.level*.7*.6))}else g(l.x+Math.cos(b)*u*x,l.z+Math.sin(b)*u*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(_=>_*c.level*.7))):g(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else g(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new nt(...c.color.map(R=>R*.09*c.level)),_=new nt(0,0,0),y=Math.max(.03,u/2),M=.45+.35*c.level,w=16;for(let R=0;R<w;R++){let v=R/w*Math.PI*2,E=(R+1)/w*Math.PI*2,C=[l.x+Math.cos(v)*y,m,l.z+Math.sin(v)*y],I=[l.x+Math.cos(E)*y,m,l.z+Math.sin(E)*y],P=[l.x+Math.cos(v)*M,.02,l.z+Math.sin(v)*M],D=[l.x+Math.cos(E)*M,.02,l.z+Math.sin(E)*M];o.tri(C,P,D,x,_,_),o.tri(C,D,I,x,_,x)}}}let a=new ee;a.setAttribute("position",new Xt(n,3)),a.setAttribute("color",new Xt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=o.geometry(),t.coneMesh.visible=o.count>0,t.coneTris=s}buildScreens(t){let e=ef(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),r=(Lo.value?Io.value.toArray().map(s=>Math.round(s*255)).join(","):"")+"|"+e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let o=new jt;for(let s of e){let a=this.screens.get(s.id),l=ta.has(s.type)?rc(t.geo.walls2d,s,t.floor.height,rn(t.floor,s)):null,c=l?{...s,x:l.x,z:l.z,mount_y:l.y}:s,h=c.rotation*le,u=Math.cos(h),f=Math.sin(h),d=(R,v,E)=>[c.x+R*u-E*f,v,c.z+R*f+E*u];if(a.faces){let R=Math.max(.05,c.w)*(c.mirror?-1:1),v=Math.max(.05,c.d),E=Math.max(.005,c.h),C=rn(t.floor,c);for(let I of a.faces){if(I.part==="lights"){let W=we(c.type),G=H=>["#e8f4ff","#ff3b4f"].includes(H.color.toLowerCase());if(W&&W.parts.some(G)){let H=new nt(...I.color.map(j=>Math.min(1,j*(.4+.6*I.level))));Cs(o,W,c,C,H.getHex(),G)}continue}if(I.part==="cabin"){let W=we(c.type),G=H=>H.color.toLowerCase()==="#13283a"||H.color==="glass";if(W&&W.parts.some(G)){let H=new nt(...I.color.map(j=>Math.min(1,j*(.3+.5*I.level))));Cs(o,W,c,C,H.getHex(),G);continue}}if(I.part==="burners"&&we(c.type)){let W=we(c.type),G=new nt(...I.color.map(H=>Math.min(1,H*(.25+.6*I.level))));Cs(o,W,c,C,G.getHex(),Yf);continue}if(I.part==="burners"){let W=new nt(...I.color.map(H=>Math.min(1,H*(.25+.6*I.level)))),G=C+E+.008;for(let[H,j,st]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let X=H*Math.abs(R)/.6,Z=j*v/.62,tt=14;for(let q=0;q<tt;q++){let Q=q/tt*Math.PI*2,dt=(q+1)/tt*Math.PI*2;o.tri(d(X,G,Z),d(X+Math.cos(Q)*st,G,Z+Math.sin(Q)*st),d(X+Math.cos(dt)*st,G,Z+Math.sin(dt)*st),W)}}continue}if(I.part==="band"||I.part==="cabin"){let W=I.part==="cabin",G=C+E*(W?.6:.42),H=W?C+E*.86:G+.07,j=new nt(...I.color.map(tt=>Math.min(1,tt*(.3+.45*I.level)))),st=Math.abs(R)/2+(W?.012:.02),X=v/2+(W?.012:.02),Z=[[-st,-X],[st,-X],[st,X],[-st,X]];for(let tt=0;tt<4;tt++){let q=Z[tt],Q=Z[(tt+1)%4],dt=d(q[0]*Math.sign(R),G,q[1]),gt=d(Q[0]*Math.sign(R),G,Q[1]),bt=d(Q[0]*Math.sign(R),H,Q[1]),vt=d(q[0]*Math.sign(R),H,q[1]);o.tri(dt,gt,bt,j),o.tri(dt,bt,vt,j)}continue}if(I.part==="apring"){let W=c.variant==="wall",G=Math.abs(R),H=W?Math.min(G,E)*.3:Math.min(G,v)*.3,j=new nt(...I.color.map(tt=>Math.min(1,tt*(.4+.6*I.level)))),st=new nt(0,0,0),X=24,Z=(tt,q)=>W?d(Math.cos(tt)*q,C+E/2+Math.sin(tt)*q,v/2+.004):d(Math.cos(tt)*q,C-.003,Math.sin(tt)*q);for(let tt=0;tt<X;tt++){let q=tt/X*Math.PI*2,Q=(tt+1)/X*Math.PI*2;o.tri(Z(q,H*.8),Z(q,H),Z(Q,H),j),o.tri(Z(q,H*.8),Z(Q,H),Z(Q,H*.8),j),o.tri(Z(q,H),Z(q,H*1.5),Z(Q,H*1.5),j,st,st),o.tri(Z(q,H),Z(Q,H*1.5),Z(Q,H),j,st,j)}continue}if(I.part==="drum"){let W=Math.abs(R),G=Math.min(W*.36,(E-.2)*.42),H=C+(E-.14)/2+.04,j=v/2-.006,st=new nt(...I.color.map(Q=>Math.min(1,Q*(.35+.65*I.level)))),X=st.clone().multiplyScalar(.12),Z=new nt(0,0,0),tt=28,q=(Q,dt)=>d(Math.cos(Q)*dt,H+Math.sin(Q)*dt,j);for(let Q=0;Q<tt;Q++){let dt=Q/tt*Math.PI*2,gt=(Q+1)/tt*Math.PI*2;o.tri(d(0,H,j),q(dt,G*.78),q(gt,G*.78),X),o.tri(q(dt,G*.78),q(dt,G),q(gt,G),st),o.tri(q(dt,G*.78),q(gt,G),q(gt,G*.78),st),o.tri(q(dt,G),q(dt,G*1.18),q(gt,G*1.18),st,Z,Z),o.tri(q(dt,G),q(gt,G*1.18),q(gt,G),st,Z,st)}continue}if(I.part==="gang"){let W=Math.max(1,I.of??1),G=Math.abs(R),H=G/W,j=(-G/2+H*((I.index??0)+.5))*Math.sign(R),st=v/2+(c.variant==="outdoor"?.02:.008),X=I.accent?Lo.value?Io.value.toArray():OS:I.color,Z=new nt(...X.map(xt=>Math.min(1,xt*(.35+.65*I.level)))),tt=Z.clone().multiplyScalar(.5),q=new nt(0,0,0),Q=H*.34,dt=C+E*.16,gt=C+E*.84,bt=[d(j-Q,dt,st),d(j+Q,dt,st),d(j+Q,gt,st),d(j-Q,gt,st)];o.tri(bt[0],bt[1],bt[2],Z),o.tri(bt[0],bt[2],bt[3],Z);let vt=.012+.015*I.level,Et=[d(j-Q-vt,dt-vt,st-.001),d(j+Q+vt,dt-vt,st-.001),d(j+Q+vt,gt+vt,st-.001),d(j-Q-vt,gt+vt,st-.001)];for(let xt=0;xt<4;xt++){let Vt=(xt+1)%4;o.tri(bt[xt],Et[Vt],Et[xt],tt,q,q),o.tri(bt[xt],bt[Vt],Et[Vt],tt,tt,q)}continue}if(I.part==="beacon"){let W=new nt(...I.color.map(gt=>Math.min(1,gt*(.25+.45*I.level)))),G=new nt(0,0,0),H=C+E+.01,j=.6+.6*I.level,st=Math.min(Math.abs(R),v)*.38;for(let[gt,bt]of[[st,0],[0,st]]){let vt=d(-gt,H,-bt),Et=d(gt,H,bt),xt=d(gt*.4,H+j,bt*.4),Vt=d(-gt*.4,H+j,-bt*.4);o.tri(vt,Et,xt,W,W,G),o.tri(vt,xt,Vt,W,G,G)}let X=rn(t.floor,{...c,mount_y:0})+.012,Z=Math.abs(R)/2+.03,tt=v/2+.03,q=.22+.18*I.level,Q=(gt,bt,vt)=>d(gt*(Z+vt),X,bt*(tt+vt)),dt=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let gt=0;gt<4;gt++){let[bt,vt]=dt[gt],[Et,xt]=dt[(gt+1)%4];o.tri(Q(bt,vt,0),Q(Et,xt,0),Q(Et,xt,q),W,W,G),o.tri(Q(bt,vt,0),Q(Et,xt,q),Q(bt,vt,q),W,G,G)}continue}let P=I.part==="right"?.03:-Math.abs(R)/2+.03,D=I.part==="left"?-.03:Math.abs(R)/2-.03,S=C+(I.part==="bottom"?E*.45:E)+.006,F=new nt(...I.color.map(W=>Math.min(1,W*(.35+.65*I.level)))),A=new nt(0,0,0),T=(W,G,H=S)=>d(W*Math.sign(R),H,G),N=[T(P,-v/2+.03),T(D,-v/2+.03),T(D,v/2-.03),T(P,v/2-.03)];o.tri(N[0],N[2],N[1],F),o.tri(N[0],N[3],N[2],F);let U=I.part==="lid"?.025+.02*I.level:.12+.1*I.level,k=F.clone().multiplyScalar(I.part==="lid"?.7:.5),z=[T(P-U,-v/2-U,S+.004),T(D+U,-v/2-U,S+.004),T(D+U,v/2+U,S+.004),T(P-U,v/2+U,S+.004)];for(let W=0;W<4;W++){let G=(W+1)%4;o.tri(N[W],z[G],z[W],k,A,A),o.tri(N[W],N[G],z[G],k,k,A)}}continue}let p=we(c.type);if(p&&!p.light&&a.ring&&p.parts.some(R=>R.glow)){let R=new nt(...a.color.map(v=>Math.min(1,v*(.45+.55*a.level))));Cs(o,p,c,rn(t.floor,c),R.getHex())}let b=Gh(c,t.floor);if(!b)continue;let m=new nt(...a.color.map(R=>Math.min(1,R*(.35+.65*a.level)))),g=new nt(0,0,0),x=b.z+.004;if(o.tri(d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),m),o.tri(d(b.x0,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x),m),a.plain)continue;let _=.18+.12*a.level,y=m.clone().multiplyScalar(.5),M=[d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x)],w=[d(b.x0-_,b.y0-_,x+.01),d(b.x1+_,b.y0-_,x+.01),d(b.x1+_,b.y1+_,x+.01),d(b.x0-_,b.y1+_,x+.01)];for(let R=0;R<4;R++){let v=(R+1)%4;o.tri(M[R],w[R],w[v],y,g,g),o.tri(M[R],w[v],M[v],y,g,y)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=o.geometry(),t.screenMesh.visible=o.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of t.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),t.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=Gh(o,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Ut(new yi(1,1),new ne({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new yr().load(s.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=Be,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,o,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture)}}placeScreenPicture(t,e,n,r){let o=r.image,s=o?.width&&o?.height?o.width/o.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*s),h=c/s,u=e.rotation*le,f=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,h,1),t.rotation.set(0,-u,0),t.position.set(e.x+f*Math.cos(u)-d*Math.sin(u),(n.y0+n.y1)/2,e.z+f*Math.sin(u)+d*Math.cos(u))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(h=>h.floorId===t.floor.id).map(uf).join(";"),n=[],r=[],o=[],s=[],a=[];for(let h of this.flows){if(h.floorId!==t.floor.id)continue;let u=this.flowPhase.get(uf(h))??{speed:_g(h.power),offset:0},f=h.power>.5?Math.min(1,.5+h.power/2500):.22,d=h.color.map(x=>x*f),p=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(p<1e-4)continue;let b=[(h.b[0]-h.a[0])/p,(h.b[1]-h.a[1])/p,(h.b[2]-h.a[2])/p],m=[];if(Math.abs(b[1])<.5){let x=Math.hypot(b[0],b[2])||1;m.push([-b[2]/x,0,b[0]/x])}else m.push([1,0,0],[0,0,1]);let g=this.lowQuality?[[xg*1.4,1]]:[[VS,.25],[xg,1]];for(let[x,_]of g)for(let y of m){let M=x/2,w=(v,E)=>[v[0]+y[0]*M*E,v[1]+y[1]*M*E,v[2]+y[2]*M*E],R=[[w(h.a,-1),h.dist,0],[w(h.b,-1),h.dist+p,0],[w(h.b,1),h.dist+p,1],[w(h.a,1),h.dist,1]];for(let v of[0,1,2,0,2,3]){let[E,C,I]=R[v];n.push(E[0],E[1],E[2]),r.push(d[0]*_,d[1]*_,d[2]*_),o.push(C,I),s.push(u.speed),a.push(u.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[h,u]of[["color",r],["flowSpeed",s],["flowOffset",a]]){let f=l.getAttribute(h);f.array.set(u),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new ee;c.setAttribute("position",new Xt(n,3)),c.setAttribute("color",new Xt(r,3)),c.setAttribute("uv",new Xt(o,2)),c.setAttribute("flowSpeed",new Xt(s,1)),c.setAttribute("flowOffset",new Xt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=ig(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let r=new nt(n.color),o=this.roomTint?.get(n.roomId);o&&r.lerp(new nt(...o).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(qS,o?.3:.75);for(let s=n.start*3;s<n.end*3;s++)e.setXYZ(s,r.r,r.g,r.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new yn;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let d of u.floor.rooms)for(let[p,b]of d.points)e.expandByPoint(new $(p,f,b)),e.expandByPoint(new $(p,f+u.floor.height,b))}e.isEmpty()&&e.set(new $(-4,0,-4),new $(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new $),r=e.getSize(new $),o=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.keepNext){this.keepNext=!1;let u=this.controls.view;this.controls.flyTo({target:new $(u.target.x,n.y,u.target.z),radius:u.radius,phi:u.phi,theta:u.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:o,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new yn,e=1/0;for(let s of this.floors){e=Math.min(e,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=ew();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=t.getCenter(new $),r=t.getSize(new $),o=hf*Math.ceil((Math.max(r.x,r.z)+16)/hf);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,e-en-.02,n.z)}distanceFor(t){let e=this.camera.fov*le,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new ls;return r.setFromCamera(new ce(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),s=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let h=s(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Zt;if(f!==Zt&&Math.floor(f/16)===0)continue}let h=s(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),u=h?this.pickOpenings.get(h):void 0;if(u)return{entity:u}}else if(a.object===c.wallMesh){let h=s(c.geo.furnitureTris,l),u=h?this.pickFurniture.get(h):void 0;if(u)return{entity:u};if(!h&&a.face&&a.face.normal.y>.7){let f=Oc(c.floor).find(d=>te([a.point.x,a.point.z],d.points));if(f)return{floorId:c.floor.id,roomId:f.id}}if(a.face&&!h){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),p=f%16,b=this.wallMode==="cut"&&d===0,m=(c.mask.glass.value&1<<p)!==0;if(!b){let g=n.ray.direction,x=Math.hypot(g.x,g.z)||1,_=[a.point.x-g.x/x*.3,a.point.z-g.z/x*.3],y=c.floor.rooms.find(M=>M.points.length>=3&&te(_,M.points))?.id??null;if(this.roomId!==null){if(y===this.roomId)return{floorId:c.floor.id,roomId:y}}else if(!m&&y)return{floorId:c.floor.id,roomId:y}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:s(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Fc),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||o(u).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let o of t.floor.furniture){let s=o.rotation*le,a=e-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,h=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:o.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let o=this.rayAt(e,n),s=r??t.floor.elevation+t.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(t,e),l=s??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&r.has(h))&&this.grabItem(c,l,t,e)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,t,e):this.grabItem(a,s,t,e)}let o=this.furnitureAt(t,e);if(!o){let s=this.pick(t,e);return s&&"entity"in s?this.grabDevice(s.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,t,e,o.y)}grabItem(t,e,n,r,o){let s=t.floor.furniture.find(u=>u.id===e),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!s||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(o!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new $),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],b=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),m=this.renderer.domElement.getBoundingClientRect().height||1,g=2*b*Math.tan(this.camera.fov*Math.PI/360)/m;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-p[1],p[0]],fwd:p,perPx:g,gain:Math.min(2,1/Math.max(.5,-h.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,e,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(m=>m.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((p[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let f=(t-s.x0)*s.perPx,d=(e-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*f-s.fwd[0]*d-r.offset[0],s.fz+s.right[1]*f-s.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(o,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?Pm(o.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Ne,n;for(let r of t){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(e,o,s,r===this.selectedFurniture?new nt(.25,.9,1):new nt(1,.71,.28)))}n&&(this.ghost=new tn(e.geometry(),new sn({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let o=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=we(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?rn(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:rn(e.floor,n),u=n.rotation*le,f=Math.cos(u),d=Math.sin(u),p=(m,g,x)=>[o+m*f-g*d,x,s+m*d+g*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let m=0;m<4;m++){let[g,x]=b[m],[_,y]=b[(m+1)%4];t.seg(p(g,x,h+.01),p(_,y,h+.01),r),t.seg(p(g,x,h+c),p(_,y,h+c),r),t.seg(p(g,x,h+.01),p(g,x,h+c),r)}t.seg(p(-n.w/2,n.d/2+.03,h+.02),p(n.w/2,n.d/2+.03,h+.02),new nt(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(t,e);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:o.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(g=>g.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(t*r),s=Math.round(e*r),a=new Qe(o,s);a.texture.colorSpace=Be;let l=new ti(-1,1,1,-1,.1,400),c=this.floors.map(g=>({fv:g,visible:g.group.visible,y:g.y,o:g.o,standing:g.mask.standing.value,glass:g.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(o*s*4),p=document.createElement("canvas");p.width=o,p.height=s;let b=p.getContext("2d"),m=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let g of n){for(let D of this.floors)D.group.visible=D===g;g.y=0,g.o=1,this.applyFloor(g),g.group.visible=!0,g.mask.standing.value=0,g.mask.glass.value=0;let x=g.floor.rooms.flatMap(D=>D.points),_=g.floor.elevation,y=new yn(new $(Math.min(...x.map(D=>D[0]))-.3,_,Math.min(...x.map(D=>D[1]))-.3),new $(Math.max(...x.map(D=>D[0]))+.3,_+Math.min(g.floor.cut_height,g.floor.height),Math.max(...x.map(D=>D[1]))+.3)),M=y.getCenter(new $),w=-.6,R=.8,v=new $(Math.sin(R)*Math.sin(w),Math.cos(R),Math.sin(R)*Math.cos(w));l.position.copy(M).addScaledVector(v,100),l.lookAt(M),l.updateMatrixWorld();let E=.5,C=.5;for(let D of[y.min.x,y.max.x])for(let S of[y.min.y,y.max.y])for(let F of[y.min.z,y.max.z]){let A=new $(D,S,F).applyMatrix4(l.matrixWorldInverse);E=Math.max(E,Math.abs(A.x)),C=Math.max(C,Math.abs(A.y))}let I=o/s;E/C>I?C=E/I:E=C*I,l.left=-E*1.05,l.right=E*1.05,l.top=C*1.05,l.bottom=-C*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,d);let P=b.createImageData(o,s);for(let D=0;D<s;D++)P.data.set(d.subarray((s-1-D)*o*4,(s-D)*o*4),D*o*4);b.putImageData(P,0,0),m.push({floorId:g.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let g of c)g.fv.y=g.y,g.fv.o=g.o,g.fv.mask.standing.value=g.standing,g.fv.mask.glass.value=g.glass,this.applyFloor(g.fv),g.fv.group.visible=g.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return m}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?og(n.room,void 0,void 0,n.obstacles):lf(n.rest),l=a.length?a:lf(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!te(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(hg[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let o of r.own)o.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&we(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new ne({color:hg[t.mode]}),r=this.robotModelKey(t),o=t.model?we(t.model.type):void 0;if(t.model&&o&&r){let{w:a,d:l,h:c}=t.model,h=new jt,{radius:u,top:f}=Q0(h,o,a,l,c),d=new jt,p=Math.min(.05,u*.3),b=Math.min(.1,u*.55);Fe(d,[[-p,b],[p,b],[p,b+p*.8],[-p,b+p*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new ne({vertexColors:!0});let m=[h.geometry(),d.geometry()],g=new Ve;return g.add(new Ut(m[0],this.robotMat),new Ut(m[1],n)),{info:t,motion:e,group:g,led:n,own:m,modelKey:r}}if(!this.robotGeo){let a=new jt,l=(h,u,f,d,p)=>{let b=[];for(let m=0;m<20;m++)b.push([Math.cos(m/20*Math.PI*2)*h,Math.sin(m/20*Math.PI*2)*h]);Fe(a,b,u,f,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new ne({vertexColors:!0});let c=new jt;Fe(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let s=new Ve;return s.add(new Ut(this.robotGeo,this.robotMat),new Ut(this.robotLedGeo,n)),{info:t,motion:e,group:s,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[o,,s]=n.size??Ys.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=o/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new jt;wg(h,0,0,0,l,0),this.fanMat??=new ne({vertexColors:!0});let u=new Ut(h.geometry(),this.fanMat),f=new Ve;f.add(u),f.rotation.y=-((n.rotation??0)*le),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=Sg(a,s),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let o=this.floorMap.get(r.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(o.floor.cut_height,o.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),e>0?n=sg(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new nt(.25-.2*a,.95-.83*a,1-.7*a),r=new nt(0,0,0),o=new nt(.3,1,.6),s=.02;for(let a of this.floors){let l=new jt;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let p=h.points[d-1];if(p){let b=Math.hypot(u-p[0],f-p[1])||1,m=-(f-p[1])/b*.1,g=(u-p[0])/b*.1;l.tri([p[0]+m,s,p[1]+g],[u+m,s,f+g],[u-m,s,f-g],o,o,o),l.tri([p[0]+m,s,p[1]+g],[u-m,s,f-g],[p[0]-m,s,p[1]-g],o,o,o)}for(let b=0;b<10;b++){let m=b/10*Math.PI*2,g=(b+1)/10*Math.PI*2;l.tri([u,s,f],[u+Math.cos(g)*.35,s,f+Math.sin(g)*.35],[u+Math.cos(m)*.35,s,f+Math.sin(m)*.35],o,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,p=(h.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,s,c.z+p],[h.x+d,s,h.z+p],[h.x-d,s,h.z-p],b,u,u),l.tri([c.x+d,s,c.z+p],[h.x-d,s,h.z-p],[c.x-d,s,c.z-p],b,u,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([h.x,s,h.z],[h.x+Math.cos(p)*.22,s,h.z+Math.sin(p)*.22],[h.x+Math.cos(d)*.22,s,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*le,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(e.tilt??(o?65:20))*le)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y),l=new $(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new $(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+Fc;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,o,s){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new $(e,a.floor.elevation+a.ty+r,n),radius:s?.radius??5.5,phi:s?.phi??.78,...s?.theta!==void 0?{theta:s.theta}:{}},900),o){this.flashes.set(o,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),o=this.stepFloors(e),s=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let p=new Set;for(let[b,m]of this.flashes){let g=this.deviceFloor.get(b);g&&p.add(g),m<=t&&this.flashes.delete(b)}a=this.flashes.size>0;for(let b of this.floors)p.has(b.floor.id)&&this.buildLamps(b)}let l=this.placeRoof(e),c=this.stepRobots(t),h=this.stepFans(t),u=this.stepWeather(t),f=r||o||s||a||l,d=[];if((r||this.controls.busy)&&d.push("camera"),o&&d.push("floors"),s&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),c&&d.push("robot"),h&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),f&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let p=this.lowQuality?2*vg:vg;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=p/1e3,this.effectTick=!0;for(let b of this.floors)b.o<.02||!this.effectFloors.has(b.floor.id)||(this.buildLamps(b),this.buildGlow(b));this.invalidate()},p)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&h&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},this.lowQuality?83:50)),!f&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*bg:bg))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,o=Math.hypot(n,r)||1;for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/o+h[1]*r/o>=.25:a;!l&&f&&(c|=1<<u)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new $,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,h=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let m of[a.z0,a.z1]){n.set(b,h,m).project(this.camera);let g=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||g<l.x)&&(l={x:g,y:x}),(!c||g>c.x)&&(c={x:g,y:x})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let u=s.labelSize.w,f=8+this.labelInset,d=l.x-u-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),o.push({fv:s,left:Math.max(f,Math.min(t-u-8,d)),y:p,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new $(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),s.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(s.near!==void 0&&u>s.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new $(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*s.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new $,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null);continue}n.set(o.x,a.floor.elevation+a.y+.9,o.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let h=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==h&&(this.pinMode.set(s,h),s.classList.toggle("fp3d-dev-full",h==="full"),s.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(s,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=ZS(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function ZS(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function KS(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(s,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(s,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(s,a,l)=>{e.save(),e.beginPath(),e.rect(s*256,a*256,256,256),e.clip(),l(s*256,a*256),e.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let h=s+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(s+u+.75,c,s+u+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new xi(t);return o.flipY=!1,o.wrapS=wn,o.wrapT=wn,o.anisotropy=4,o.colorSpace=Be,o}function JS(i){let t=new ne({map:i,transparent:!0,blending:Ge,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function jS(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new xi(i);return e.wrapS=pr,e.wrapT=pr,e.colorSpace=Be,e}function uf(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function _g(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function QS(i){let t=new ne({vertexColors:!0,transparent:!0,blending:Ge,depthWrite:!1,side:ge});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Mg(i,t){let e=i.rooms.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,o]of t){let s=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,o)=>n(o))}function tw(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new xi(t);return r.colorSpace=Be,r}function ew(){let t=hf,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=t;s++){let a=Math.round(s/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new xi(e);return o.anisotropy=4,o.colorSpace=Be,o}function NP(i,t){return new ff(i,t)}function Sg(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function wg(i,t,e,n,r,o){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=o+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([p,b])=>[t+p*h-b*u,n+p*u+b*h]);Fe(i,d,e-.006,e+.006,GS,WS,{aoFrom:0,bottom:!0})}}function cf(i,t,e,n,r=!0){let[o,s,a]=t.size??Ys[t.lamp],l=t.base??0,c=(t.rotation??0)*le,h=Math.cos(c),u=Math.sin(c),f=(m,g)=>[t.x+m*h-g*u,t.z+m*u+g*h],d=(m,g,x,_,y,M=14)=>{let w=[];for(let R=0;R<M;R++){let v=R/M*Math.PI*2;w.push([t.x+Math.cos(v)*m,t.z+Math.sin(v)*m])}Fe(i,w,g,x,_,y,{aoFrom:0,bottom:!0})},p=(m,g,x,_,y,M,w,R=w)=>Fe(i,[f(m,x),f(g,x),f(g,_),f(m,_)],y,M,w,R,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(o,s)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,ie,ie,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let m=Math.max(.4,e-a);d(.06,e-.02,e,ie,ie,8);let g=t.variant==="globe"?m+2*b:t.variant==="drum"?m+.24:m+.2;if(d(.008,g,e-.02,ie,ie,5),t.variant==="globe")for(let _=0;_<7;_++){let y=Math.PI*(_/7),M=Math.PI*((_+1)/7);d(b*Math.max(.2,Math.sin((y+M)/2)),m+b-b*Math.cos(y),m+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)d(b*(.25+.75*(4-_)/4),m+.06*_,m+.06*(_+1),n,n,16);else t.variant==="drum"?d(b,m,m+.24,n,n,18):(d(b*.35,m+.14,m+.2,n,n,12),d(b,m,m+.14,n,n,16));break}case"fan":{let m=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,ie,ie,10),d(.012,m+.16,e-.03,ie,ie,6),d(.13,m+.07,m+.16,ie,ie,16),d(.11,m,m+.07,n,n,16),r&&wg(i,t.x,Sg(e,a),t.z,o/2,c);break}case"downlight":d(b,e-.012,e,ie,ie,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,ie,ie,10),d(b,e-Math.max(.06,a),e-.02,ie,ie,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":p(-o/2,o/2,-s/2,s/2,e-Math.max(.015,a),e,ie,ie),p(-o/2+.02,o/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,ie,ie),d(.014,l+.03,l+a-.12,ie,ie,6),d(b,l+a-.14,l+a-.02,ie,ie),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,ie,ie,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,ie,ie,10);break;case"garden":d(.012,l,l+a-.08,ie,ie,5),d(b,l+a-.08,l+a-.01,ie,ie,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,ie,ie),d(.014,l+.03,l+a-.28,ie,ie,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,ie,ie),d(.012,l+.03,l+a-.16,ie,ie,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let m=t.base??Qs;p(-o/2+.03,o/2-.03,-s/2,-s/2+.02,m,m+a,ie),p(-o/2,o/2,-s/2+.02,s/2,m+a*.15,m+a*.85,n);break}case"strip":{let m=Math.max(.02,a),g=t.base!=null?t.base+m:e-.04;if(!t.roll&&!t.upright&&!t.rise){p(-o/2,o/2,-s/2,s/2,g-m,g,n);break}let x=(t.roll??0)*le,_=Math.cos(x),y=Math.sin(x),M=t.upright?l+o/2:g-m/2,w=(t.upright?0:t.rise??0)*le,R=(P,D,S)=>{let F=P,A=D*_-S*y,T=D*y+S*_;return w&&([F,A]=[F*Math.cos(w)-A*Math.sin(w),F*Math.sin(w)+A*Math.cos(w)]),t.upright&&([F,A]=[-A,F]),[t.x+F*h-T*u,M+A,t.z+F*u+T*h]},v=[R(-o/2,-m/2,-s/2),R(o/2,-m/2,-s/2),R(o/2,-m/2,s/2),R(-o/2,-m/2,s/2),R(-o/2,m/2,-s/2),R(o/2,m/2,-s/2),R(o/2,m/2,s/2),R(-o/2,m/2,s/2)],E=new nt(n),C=[t.x,M,t.z],I=(P,D,S,F)=>{let[A,T,N]=[v[P],v[D],v[S]],U=[(T[1]-A[1])*(N[2]-A[2])-(T[2]-A[2])*(N[1]-A[1]),(T[2]-A[2])*(N[0]-A[0])-(T[0]-A[0])*(N[2]-A[2]),(T[0]-A[0])*(N[1]-A[1])-(T[1]-A[1])*(N[0]-A[0])],k=[A[0]-C[0],A[1]-C[1],A[2]-C[2]],z=U[0]*k[0]+U[1]*k[1]+U[2]*k[2]<0,[W,G,H,j]=z?[v[F],v[S],v[D],v[P]]:[v[P],v[D],v[S],v[F]];i.tri(W,G,H,E,E,E),i.tri(W,H,j,E,E,E)};I(0,1,2,3),I(4,5,6,7),I(0,1,5,4),I(1,2,6,5),I(2,3,7,6),I(3,0,4,7);break}}}export{Qh as FloorMap,ff as FloorplanViewer,tf as WalkCamera,NP as createViewer,SP as funLib,NS as furnitureFront,DS as furniturePreview,$S as isLowEnd,wg as pushFanBlades,cf as pushLampModel};
