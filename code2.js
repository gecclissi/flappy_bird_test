gdjs.jogandoCode = {};
gdjs.jogandoCode.localVariables = [];
gdjs.jogandoCode.GDbirdObjects2_1final = [];

gdjs.jogandoCode.GDborderObjects2_1final = [];

gdjs.jogandoCode.GDbottom_9595pipeObjects2_1final = [];

gdjs.jogandoCode.GDtop_9595pipeObjects2_1final = [];

gdjs.jogandoCode.GDNewTiledSpriteObjects1= [];
gdjs.jogandoCode.GDNewTiledSpriteObjects2= [];
gdjs.jogandoCode.GDNewTiledSpriteObjects3= [];
gdjs.jogandoCode.GDbirdObjects1= [];
gdjs.jogandoCode.GDbirdObjects2= [];
gdjs.jogandoCode.GDbirdObjects3= [];
gdjs.jogandoCode.GDtop_9595pipeObjects1= [];
gdjs.jogandoCode.GDtop_9595pipeObjects2= [];
gdjs.jogandoCode.GDtop_9595pipeObjects3= [];
gdjs.jogandoCode.GDbottom_9595pipeObjects1= [];
gdjs.jogandoCode.GDbottom_9595pipeObjects2= [];
gdjs.jogandoCode.GDbottom_9595pipeObjects3= [];
gdjs.jogandoCode.GDFlappy_9595bird_9595scoreObjects1= [];
gdjs.jogandoCode.GDFlappy_9595bird_9595scoreObjects2= [];
gdjs.jogandoCode.GDFlappy_9595bird_9595scoreObjects3= [];
gdjs.jogandoCode.GDborderObjects1= [];
gdjs.jogandoCode.GDborderObjects2= [];
gdjs.jogandoCode.GDborderObjects3= [];


gdjs.jogandoCode.eventsList0 = function(runtimeScene) {

};gdjs.jogandoCode.eventsList1 = function(runtimeScene) {

};gdjs.jogandoCode.mapOfGDgdjs_9546jogandoCode_9546GDtop_95959595pipeObjects1Objects = Hashtable.newFrom({"top_pipe": gdjs.jogandoCode.GDtop_9595pipeObjects1});
gdjs.jogandoCode.mapOfGDgdjs_9546jogandoCode_9546GDbottom_95959595pipeObjects1Objects = Hashtable.newFrom({"bottom_pipe": gdjs.jogandoCode.GDbottom_9595pipeObjects1});
gdjs.jogandoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe_spawn");
}}

}


{


gdjs.jogandoCode.eventsList0(runtimeScene);
}


{


gdjs.jogandoCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pipe_spawn") > 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8308156);
}
}
if (isConditionTrue_0) {
gdjs.jogandoCode.GDbottom_9595pipeObjects1.length = 0;

gdjs.jogandoCode.GDtop_9595pipeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.jogandoCode.mapOfGDgdjs_9546jogandoCode_9546GDtop_95959595pipeObjects1Objects, 460, gdjs.randomFloatInRange(70, 320), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.jogandoCode.mapOfGDgdjs_9546jogandoCode_9546GDbottom_95959595pipeObjects1Objects, 460, (( gdjs.jogandoCode.GDtop_9595pipeObjects1.length === 0 ) ? 0 :gdjs.jogandoCode.GDtop_9595pipeObjects1[0].getPointY("")) + 220, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe_spawn");
}}

}


};gdjs.jogandoCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8314836);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bird"), gdjs.jogandoCode.GDbirdObjects2);
{for(var i = 0, len = gdjs.jogandoCode.GDbirdObjects2.length ;i < len;++i) {
    gdjs.jogandoCode.GDbirdObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.jogandoCode.GDbirdObjects2.length ;i < len;++i) {
    gdjs.jogandoCode.GDbirdObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bird"), gdjs.jogandoCode.GDbirdObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.jogandoCode.GDbirdObjects2.length;i<l;++i) {
    if ( gdjs.jogandoCode.GDbirdObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.jogandoCode.GDbirdObjects2[k] = gdjs.jogandoCode.GDbirdObjects2[i];
        ++k;
    }
}
gdjs.jogandoCode.GDbirdObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.jogandoCode.GDbirdObjects2 */
{for(var i = 0, len = gdjs.jogandoCode.GDbirdObjects2.length ;i < len;++i) {
    gdjs.jogandoCode.GDbirdObjects2[i].rotate(60, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8713084);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bird"), gdjs.jogandoCode.GDbirdObjects1);
{for(var i = 0, len = gdjs.jogandoCode.GDbirdObjects1.length ;i < len;++i) {
    gdjs.jogandoCode.GDbirdObjects1[i].setAngle(320);
}
}}

}


};gdjs.jogandoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_score"), gdjs.jogandoCode.GDFlappy_9595bird_9595scoreObjects2);
{for(var i = 0, len = gdjs.jogandoCode.GDFlappy_9595bird_9595scoreObjects2.length ;i < len;++i) {
    gdjs.jogandoCode.GDFlappy_9595bird_9595scoreObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bird"), gdjs.jogandoCode.GDbirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("bottom_pipe"), gdjs.jogandoCode.GDbottom_9595pipeObjects1);
gdjs.copyArray(runtimeScene.getObjects("top_pipe"), gdjs.jogandoCode.GDtop_9595pipeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.jogandoCode.GDtop_9595pipeObjects1.length;i<l;++i) {
    if ( gdjs.jogandoCode.GDtop_9595pipeObjects1[i].getX() < (( gdjs.jogandoCode.GDbirdObjects1.length === 0 ) ? 0 :gdjs.jogandoCode.GDbirdObjects1[0].getPointX("Centre")) ) {
        isConditionTrue_0 = true;
        gdjs.jogandoCode.GDtop_9595pipeObjects1[k] = gdjs.jogandoCode.GDtop_9595pipeObjects1[i];
        ++k;
    }
}
gdjs.jogandoCode.GDtop_9595pipeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.jogandoCode.GDbottom_9595pipeObjects1.length;i<l;++i) {
    if ( gdjs.jogandoCode.GDbottom_9595pipeObjects1[i].getX() < (( gdjs.jogandoCode.GDbirdObjects1.length === 0 ) ? 0 :gdjs.jogandoCode.GDbirdObjects1[0].getPointX("Centre")) ) {
        isConditionTrue_0 = true;
        gdjs.jogandoCode.GDbottom_9595pipeObjects1[k] = gdjs.jogandoCode.GDbottom_9595pipeObjects1[i];
        ++k;
    }
}
gdjs.jogandoCode.GDbottom_9595pipeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.jogandoCode.GDtop_9595pipeObjects1.length;i<l;++i) {
    if ( gdjs.jogandoCode.GDtop_9595pipeObjects1[i].getX() > (( gdjs.jogandoCode.GDbirdObjects1.length === 0 ) ? 0 :gdjs.jogandoCode.GDbirdObjects1[0].getPointX("Centre")) - 60 ) {
        isConditionTrue_0 = true;
        gdjs.jogandoCode.GDtop_9595pipeObjects1[k] = gdjs.jogandoCode.GDtop_9595pipeObjects1[i];
        ++k;
    }
}
gdjs.jogandoCode.GDtop_9595pipeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.jogandoCode.GDbottom_9595pipeObjects1.length;i<l;++i) {
    if ( gdjs.jogandoCode.GDbottom_9595pipeObjects1[i].getX() > (( gdjs.jogandoCode.GDbirdObjects1.length === 0 ) ? 0 :gdjs.jogandoCode.GDbirdObjects1[0].getPointX("Centre")) - 60 ) {
        isConditionTrue_0 = true;
        gdjs.jogandoCode.GDbottom_9595pipeObjects1[k] = gdjs.jogandoCode.GDbottom_9595pipeObjects1[i];
        ++k;
    }
}
gdjs.jogandoCode.GDbottom_9595pipeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9181412);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.jogandoCode.mapOfGDgdjs_9546jogandoCode_9546GDbirdObjects3Objects = Hashtable.newFrom({"bird": gdjs.jogandoCode.GDbirdObjects3});
gdjs.jogandoCode.mapOfGDgdjs_9546jogandoCode_9546GDborderObjects3Objects = Hashtable.newFrom({"border": gdjs.jogandoCode.GDborderObjects3});
gdjs.jogandoCode.mapOfGDgdjs_9546jogandoCode_9546GDbirdObjects3Objects = Hashtable.newFrom({"bird": gdjs.jogandoCode.GDbirdObjects3});
gdjs.jogandoCode.mapOfGDgdjs_9546jogandoCode_9546GDtop_95959595pipeObjects3ObjectsGDgdjs_9546jogandoCode_9546GDbottom_95959595pipeObjects3Objects = Hashtable.newFrom({"top_pipe": gdjs.jogandoCode.GDtop_9595pipeObjects3, "bottom_pipe": gdjs.jogandoCode.GDbottom_9595pipeObjects3});
gdjs.jogandoCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("border"), gdjs.jogandoCode.GDborderObjects2);
{for(var i = 0, len = gdjs.jogandoCode.GDborderObjects2.length ;i < len;++i) {
    gdjs.jogandoCode.GDborderObjects2[i].hide();
}
}}

}


{

gdjs.jogandoCode.GDbirdObjects2.length = 0;

gdjs.jogandoCode.GDborderObjects2.length = 0;

gdjs.jogandoCode.GDbottom_9595pipeObjects2.length = 0;

gdjs.jogandoCode.GDtop_9595pipeObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.jogandoCode.GDbirdObjects2_1final.length = 0;
gdjs.jogandoCode.GDborderObjects2_1final.length = 0;
gdjs.jogandoCode.GDbottom_9595pipeObjects2_1final.length = 0;
gdjs.jogandoCode.GDtop_9595pipeObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bird"), gdjs.jogandoCode.GDbirdObjects3);
gdjs.copyArray(runtimeScene.getObjects("border"), gdjs.jogandoCode.GDborderObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogandoCode.mapOfGDgdjs_9546jogandoCode_9546GDbirdObjects3Objects, gdjs.jogandoCode.mapOfGDgdjs_9546jogandoCode_9546GDborderObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.jogandoCode.GDbirdObjects3.length; j < jLen ; ++j) {
        if ( gdjs.jogandoCode.GDbirdObjects2_1final.indexOf(gdjs.jogandoCode.GDbirdObjects3[j]) === -1 )
            gdjs.jogandoCode.GDbirdObjects2_1final.push(gdjs.jogandoCode.GDbirdObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.jogandoCode.GDborderObjects3.length; j < jLen ; ++j) {
        if ( gdjs.jogandoCode.GDborderObjects2_1final.indexOf(gdjs.jogandoCode.GDborderObjects3[j]) === -1 )
            gdjs.jogandoCode.GDborderObjects2_1final.push(gdjs.jogandoCode.GDborderObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("bird"), gdjs.jogandoCode.GDbirdObjects3);
gdjs.copyArray(runtimeScene.getObjects("bottom_pipe"), gdjs.jogandoCode.GDbottom_9595pipeObjects3);
gdjs.copyArray(runtimeScene.getObjects("top_pipe"), gdjs.jogandoCode.GDtop_9595pipeObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogandoCode.mapOfGDgdjs_9546jogandoCode_9546GDbirdObjects3Objects, gdjs.jogandoCode.mapOfGDgdjs_9546jogandoCode_9546GDtop_95959595pipeObjects3ObjectsGDgdjs_9546jogandoCode_9546GDbottom_95959595pipeObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.jogandoCode.GDbirdObjects3.length; j < jLen ; ++j) {
        if ( gdjs.jogandoCode.GDbirdObjects2_1final.indexOf(gdjs.jogandoCode.GDbirdObjects3[j]) === -1 )
            gdjs.jogandoCode.GDbirdObjects2_1final.push(gdjs.jogandoCode.GDbirdObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.jogandoCode.GDbottom_9595pipeObjects3.length; j < jLen ; ++j) {
        if ( gdjs.jogandoCode.GDbottom_9595pipeObjects2_1final.indexOf(gdjs.jogandoCode.GDbottom_9595pipeObjects3[j]) === -1 )
            gdjs.jogandoCode.GDbottom_9595pipeObjects2_1final.push(gdjs.jogandoCode.GDbottom_9595pipeObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.jogandoCode.GDtop_9595pipeObjects3.length; j < jLen ; ++j) {
        if ( gdjs.jogandoCode.GDtop_9595pipeObjects2_1final.indexOf(gdjs.jogandoCode.GDtop_9595pipeObjects3[j]) === -1 )
            gdjs.jogandoCode.GDtop_9595pipeObjects2_1final.push(gdjs.jogandoCode.GDtop_9595pipeObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.jogandoCode.GDbirdObjects2_1final, gdjs.jogandoCode.GDbirdObjects2);
gdjs.copyArray(gdjs.jogandoCode.GDborderObjects2_1final, gdjs.jogandoCode.GDborderObjects2);
gdjs.copyArray(gdjs.jogandoCode.GDbottom_9595pipeObjects2_1final, gdjs.jogandoCode.GDbottom_9595pipeObjects2);
gdjs.copyArray(gdjs.jogandoCode.GDtop_9595pipeObjects2_1final, gdjs.jogandoCode.GDtop_9595pipeObjects2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.jogandoCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.jogandoCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.jogandoCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.jogandoCode.GDNewTiledSpriteObjects1[i].setXOffset(gdjs.jogandoCode.GDNewTiledSpriteObjects1[i].getXOffset() + (1));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bird"), gdjs.jogandoCode.GDbirdObjects1);
{for(var i = 0, len = gdjs.jogandoCode.GDbirdObjects1.length ;i < len;++i) {
    gdjs.jogandoCode.GDbirdObjects1[i].rotateTowardAngle(gdjs.randomFloatInRange(-(90), 90), 50, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bottom_pipe"), gdjs.jogandoCode.GDbottom_9595pipeObjects1);
gdjs.copyArray(runtimeScene.getObjects("top_pipe"), gdjs.jogandoCode.GDtop_9595pipeObjects1);
{for(var i = 0, len = gdjs.jogandoCode.GDtop_9595pipeObjects1.length ;i < len;++i) {
    gdjs.jogandoCode.GDtop_9595pipeObjects1[i].addForce(-(100), 0, 0);
}
for(var i = 0, len = gdjs.jogandoCode.GDbottom_9595pipeObjects1.length ;i < len;++i) {
    gdjs.jogandoCode.GDbottom_9595pipeObjects1[i].addForce(-(100), 0, 0);
}
}}

}


{


gdjs.jogandoCode.eventsList2(runtimeScene);
}


{


gdjs.jogandoCode.eventsList3(runtimeScene);
}


{


gdjs.jogandoCode.eventsList4(runtimeScene);
}


{


gdjs.jogandoCode.eventsList5(runtimeScene);
}


};

gdjs.jogandoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.jogandoCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.jogandoCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.jogandoCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.jogandoCode.GDbirdObjects1.length = 0;
gdjs.jogandoCode.GDbirdObjects2.length = 0;
gdjs.jogandoCode.GDbirdObjects3.length = 0;
gdjs.jogandoCode.GDtop_9595pipeObjects1.length = 0;
gdjs.jogandoCode.GDtop_9595pipeObjects2.length = 0;
gdjs.jogandoCode.GDtop_9595pipeObjects3.length = 0;
gdjs.jogandoCode.GDbottom_9595pipeObjects1.length = 0;
gdjs.jogandoCode.GDbottom_9595pipeObjects2.length = 0;
gdjs.jogandoCode.GDbottom_9595pipeObjects3.length = 0;
gdjs.jogandoCode.GDFlappy_9595bird_9595scoreObjects1.length = 0;
gdjs.jogandoCode.GDFlappy_9595bird_9595scoreObjects2.length = 0;
gdjs.jogandoCode.GDFlappy_9595bird_9595scoreObjects3.length = 0;
gdjs.jogandoCode.GDborderObjects1.length = 0;
gdjs.jogandoCode.GDborderObjects2.length = 0;
gdjs.jogandoCode.GDborderObjects3.length = 0;

gdjs.jogandoCode.eventsList6(runtimeScene);
gdjs.jogandoCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.jogandoCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.jogandoCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.jogandoCode.GDbirdObjects1.length = 0;
gdjs.jogandoCode.GDbirdObjects2.length = 0;
gdjs.jogandoCode.GDbirdObjects3.length = 0;
gdjs.jogandoCode.GDtop_9595pipeObjects1.length = 0;
gdjs.jogandoCode.GDtop_9595pipeObjects2.length = 0;
gdjs.jogandoCode.GDtop_9595pipeObjects3.length = 0;
gdjs.jogandoCode.GDbottom_9595pipeObjects1.length = 0;
gdjs.jogandoCode.GDbottom_9595pipeObjects2.length = 0;
gdjs.jogandoCode.GDbottom_9595pipeObjects3.length = 0;
gdjs.jogandoCode.GDFlappy_9595bird_9595scoreObjects1.length = 0;
gdjs.jogandoCode.GDFlappy_9595bird_9595scoreObjects2.length = 0;
gdjs.jogandoCode.GDFlappy_9595bird_9595scoreObjects3.length = 0;
gdjs.jogandoCode.GDborderObjects1.length = 0;
gdjs.jogandoCode.GDborderObjects2.length = 0;
gdjs.jogandoCode.GDborderObjects3.length = 0;


return;

}

gdjs['jogandoCode'] = gdjs.jogandoCode;
