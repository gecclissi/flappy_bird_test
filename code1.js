gdjs.GameoverCode = {};
gdjs.GameoverCode.localVariables = [];
gdjs.GameoverCode.GDRetryObjects1= [];
gdjs.GameoverCode.GDRetryObjects2= [];
gdjs.GameoverCode.GDHomeObjects1= [];
gdjs.GameoverCode.GDHomeObjects2= [];
gdjs.GameoverCode.GDbgObjects1= [];
gdjs.GameoverCode.GDbgObjects2= [];


gdjs.GameoverCode.mapOfGDgdjs_9546GameoverCode_9546GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.GameoverCode.GDRetryObjects1});
gdjs.GameoverCode.mapOfGDgdjs_9546GameoverCode_9546GDHomeObjects1Objects = Hashtable.newFrom({"Home": gdjs.GameoverCode.GDHomeObjects1});
gdjs.GameoverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.GameoverCode.GDRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameoverCode.mapOfGDgdjs_9546GameoverCode_9546GDRetryObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "jogando", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.GameoverCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameoverCode.mapOfGDgdjs_9546GameoverCode_9546GDHomeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena sem título", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.GameoverCode.GDbgObjects1);
{for(var i = 0, len = gdjs.GameoverCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDbgObjects1[i].setXOffset(gdjs.GameoverCode.GDbgObjects1[i].getXOffset() + (1));
}
}}

}


};

gdjs.GameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameoverCode.GDRetryObjects1.length = 0;
gdjs.GameoverCode.GDRetryObjects2.length = 0;
gdjs.GameoverCode.GDHomeObjects1.length = 0;
gdjs.GameoverCode.GDHomeObjects2.length = 0;
gdjs.GameoverCode.GDbgObjects1.length = 0;
gdjs.GameoverCode.GDbgObjects2.length = 0;

gdjs.GameoverCode.eventsList0(runtimeScene);
gdjs.GameoverCode.GDRetryObjects1.length = 0;
gdjs.GameoverCode.GDRetryObjects2.length = 0;
gdjs.GameoverCode.GDHomeObjects1.length = 0;
gdjs.GameoverCode.GDHomeObjects2.length = 0;
gdjs.GameoverCode.GDbgObjects1.length = 0;
gdjs.GameoverCode.GDbgObjects2.length = 0;


return;

}

gdjs['GameoverCode'] = gdjs.GameoverCode;
