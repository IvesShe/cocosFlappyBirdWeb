System.register("chunks:///_virtual/main",["./MoveBg.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/MoveBg.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,r,n,a,s,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){n=t.cclegacy,a=t._decorator,s=t.Node,u=t.Component}],execute:function(){var l,c,v,g,p,f,M,h;n._RF.push({},"8458b2Xzv1K2YZaf99VkdOD","MoveBg",void 0);var y=a.ccclass,T=a.property;t("MoveBg",(l=y("MoveBg"),c=T(s),v=T(s),l((f=e((p=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n))||this,i(e,"target1ToMove",f,r(e)),i(e,"target2ToMove",M,r(e)),i(e,"moveSpeed",h,r(e)),e}o(e,t);var n=e.prototype;return n.start=function(){},n.update=function(t){var e=this.moveSpeed*t,o=this.target1ToMove.getPosition();this.target1ToMove.setPosition(o.x-e,o.y);var i=this.target2ToMove.getPosition();this.target2ToMove.setPosition(i.x-e,i.y),o.x<-720&&(i=this.target2ToMove.getPosition(),this.target1ToMove.setPosition(i.x+720,i.y)),i.x<-720&&(o=this.target1ToMove.getPosition(),this.target2ToMove.setPosition(o.x+720,o.y))},e}(u)).prototype,"target1ToMove",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=e(p.prototype,"target2ToMove",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=e(p.prototype,"moveSpeed",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),g=p))||g));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});