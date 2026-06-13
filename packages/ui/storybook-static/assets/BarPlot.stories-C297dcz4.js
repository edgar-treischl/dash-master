import{s as e}from"./iframe--tdpl_s0.js";import{t}from"./react-DIrxHmC8.js";import{t as n}from"./jsx-runtime-BXk01PjQ.js";var r=e(t(),1),i={GS:`#264653`,MS:`#2a9d8f`,RS:`#e9c46a`,GY:`#f4a261`,IGS:`#e76f51`},a={top:40,right:60,bottom:80,left:90};function o(e){return`${e.toFixed(2)}%`}var s={GS:`Grundschulen`,MS:`Mittelschulen`,RS:`Realschulen`,GY:`Gymnasien`,IGS:`Int. Gesamtschule`},c=n();function l({data:e,year:t,maxPercent:n}){let r=800-a.left-a.right,l=n??Math.max(...e.map(e=>e.percent),50),u=e=>e/l*r;return(0,c.jsxs)(`svg`,{viewBox:`0 0 800 500`,width:800,height:500,style:{border:`1px solid #eee`},children:[(0,c.jsx)(`text`,{x:a.left,y:a.top-10,fontSize:`12`,children:t}),e.map((e,t)=>{let n=a.top+t*70,r=u(e.percent);return(0,c.jsxs)(`g`,{children:[(0,c.jsx)(`text`,{x:a.left-10,y:n+50/2,textAnchor:`end`,fontSize:`12`,fill:`#666`,children:s[e.type]}),(0,c.jsx)(`rect`,{x:a.left,y:n,width:r,height:50,fill:i[e.type]}),(0,c.jsx)(`text`,{x:a.left+r+10,y:n+50/2,fontSize:`12`,children:o(e.percent)})]},e.type)})]})}var u=(0,r.memo)(l);l.__docgenInfo={description:``,methods:[],displayName:`BarPlotComponent`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  type: SchoolType
  count: number
  percent: number
}`,signature:{properties:[{key:`type`,value:{name:`unknown[number]`,raw:`(typeof SCHOOL_TYPES)[number]`,required:!0}},{key:`count`,value:{name:`number`,required:!0}},{key:`percent`,value:{name:`number`,required:!0}}]}}],raw:`BarData[]`},description:``},year:{required:!0,tsType:{name:`string`},description:``},maxPercent:{required:!1,tsType:{name:`number`},description:``}}};var d={title:`Components/BarPlot`,component:u,parameters:{layout:`centered`},tags:[`autodocs`]},f={args:{data:[{type:`GS`,count:120,percent:75},{type:`MS`,count:40,percent:25}],year:`2024/25`}},p={args:{data:[{type:`GS`,count:200,percent:90},{type:`MS`,count:100,percent:80},{type:`RS`,count:50,percent:60}],year:`2023/24`}},m={args:{data:[{type:`GS`,count:180,percent:85},{type:`MS`,count:120,percent:70},{type:`RS`,count:95,percent:65},{type:`GY`,count:110,percent:75},{type:`IGS`,count:60,percent:55}],year:`2024/25`}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    year: '2024/25'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      type: 'GS',
      count: 200,
      percent: 90
    }, {
      type: 'MS',
      count: 100,
      percent: 80
    }, {
      type: 'RS',
      count: 50,
      percent: 60
    }],
    year: '2023/24'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      type: 'GS',
      count: 180,
      percent: 85
    }, {
      type: 'MS',
      count: 120,
      percent: 70
    }, {
      type: 'RS',
      count: 95,
      percent: 65
    }, {
      type: 'GY',
      count: 110,
      percent: 75
    }, {
      type: 'IGS',
      count: 60,
      percent: 55
    }],
    year: '2024/25'
  }
}`,...m.parameters?.docs?.source}}};var h=[`Default`,`HighValues`,`AllSchoolTypes`];export{m as AllSchoolTypes,f as Default,p as HighValues,h as __namedExportsOrder,d as default};