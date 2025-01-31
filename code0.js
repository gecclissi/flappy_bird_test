gdjs.Cena_32sem_32t_237tuloCode = {};
gdjs.Cena_32sem_32t_237tuloCode.localVariables = [];
gdjs.Cena_32sem_32t_237tuloCode.GDnomeObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDnomeObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDStartObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDStartObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDbgObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDbgObjects2= [];


gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Cena_32sem_32t_237tuloCode.GDStartObjects1});
gdjs.Cena_32sem_32t_237tuloCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Cena_32sem_32t_237tuloCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDStartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "jogando", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.Cena_32sem_32t_237tuloCode.GDbgObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDbgObjects1[i].setXOffset(gdjs.Cena_32sem_32t_237tuloCode.GDbgObjects1[i].getXOffset() + (1));
}
}}

}


};

gdjs.Cena_32sem_32t_237tuloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_32sem_32t_237tuloCode.GDnomeObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDnomeObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDStartObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDStartObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbgObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbgObjects2.length = 0;

gdjs.Cena_32sem_32t_237tuloCode.eventsList0(runtimeScene);
gdjs.Cena_32sem_32t_237tuloCode.GDnomeObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDnomeObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDStartObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDStartObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbgObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbgObjects2.length = 0;


return;

}

gdjs['Cena_32sem_32t_237tuloCode'] = gdjs.Cena_32sem_32t_237tuloCode;
