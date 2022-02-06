'use strict'

AFRAME.registerComponent('fire-effect', {
        
    init : function() {

        const CONTEXT_AF        = this;
        CONTEXT_AF.campfire     = document.querySelector('#campfire');
        CONTEXT_AF.light        = document.querySelector('#ambient-light');
        CONTEXT_AF.woodlog1     = document.querySelector('#woodlog1');
        CONTEXT_AF.woodlog2     = document.querySelector('#woodlog2');
        CONTEXT_AF.woodlog3     = document.querySelector('#woodlog3');
        CONTEXT_AF.isLit        = false;
        
        CONTEXT_AF.el.addEventListener('click', function() {
            if (CONTEXT_AF.isLit == true) {
                //Stop fire and make logs visible
                CONTEXT_AF.campfire.removeAttribute('fire');
                CONTEXT_AF.campfire.setAttribute('fire', 'particles', 0);
                CONTEXT_AF.light.setAttribute('light','intensity', 0);
                CONTEXT_AF.woodlog1.setAttribute('animation', {property: 'material.opacity', to:1 , dur:2000});
                CONTEXT_AF.woodlog2.setAttribute('animation', {property: 'material.opacity', to:1 , dur:2000});
                CONTEXT_AF.woodlog3.setAttribute('animation', {property: 'material.opacity', to:1 , dur:2000});
                CONTEXT_AF.isLit = false;
                //console.log("I am off");
            }
            else if (CONTEXT_AF.isLit == false){
                //Start fire and make logs invisible
                CONTEXT_AF.campfire.removeAttribute('fire');
                CONTEXT_AF.campfire.setAttribute('fire', 'particles', 500);
                CONTEXT_AF.light.setAttribute('light','intensity', 1.5);                
                CONTEXT_AF.woodlog1.setAttribute('animation', {property: 'material.opacity', to:0 , dur:3000});
                CONTEXT_AF.woodlog2.setAttribute('animation', {property: 'material.opacity', to:0 , dur:3000});
                CONTEXT_AF.woodlog3.setAttribute('animation', {property: 'material.opacity', to:0 , dur:3000});
                CONTEXT_AF.isLit = true;
                //console.log("I am on");
            }
        });
    }
})
