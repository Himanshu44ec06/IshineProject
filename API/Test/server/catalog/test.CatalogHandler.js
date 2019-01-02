const assert = require('assert');
const handler = require('../../../Server/modules/catalog/handler/CatalogHandler');
var   Tree  = require('../../../Server/modules/shared/handler/CatalogGenerate');


describe("CataLog Handler",()=>{

        it("Add  Category",(done)=>{

           

            var  BaseTree =     new Tree.Catalog();
            var  applicationRepair = BaseTree.add("ApplicationRepair");

                var gyser = BaseTree.add("Gyser",applicationRepair.id);

                    BaseTree.add("Installation",gyser.id);
                    BaseTree.add("Uninstallation",gyser.id);
                    BaseTree.add("Repair",gyser.id);
                    BaseTree.add("Replace",gyser.id);
                
                var TVDTH = BaseTree.add("TV  & DTH",applicationRepair.id);

                        var TV =  BaseTree.add("TV (LCD/LED)",TVDTH.id);
                                var upto42  =   BaseTree.add("Upto 42' ",TV.id);
                                    BaseTree.add("Installation",upto42.id);
                                    BaseTree.add("Uninstallation",upto42.id);
                                    BaseTree.add("Repair",upto42.id);
                                

                                var above42 =    BaseTree.add("Above 42' ",TV.id);
                                    BaseTree.add("Installation",above42.id);
                                    BaseTree.add("Uninstallation",above42.id);
                                    BaseTree.add("Repair",above42.id);
                        
                        var DTH =  BaseTree.add("DTH",TVDTH.id);
                            BaseTree.add("Installation",DTH.id);
                            BaseTree.add("Uninstallation",DTH.id);
                            BaseTree.add("Repair",DTH.id);
                
                var General = BaseTree.add("General",applicationRepair.id);

                    var WaterPurifier =  BaseTree.add("Water Purifier",General.id);
                            BaseTree.add("Servicing / Cleaning",WaterPurifier.id);
                            BaseTree.add("Installation",WaterPurifier.id);
                            BaseTree.add("Uninstallation",WaterPurifier.id);
                            BaseTree.add("Repair",WaterPurifier.id);
                            BaseTree.add("Replace",WaterPurifier.id);
                    
                    var Chimney =  BaseTree.add("Chimney",General.id);
                        var basicChimney  = BaseTree.add("Basic Chimney",Chimney.id);
                            BaseTree.add("Servicing",basicChimney.id);
                            BaseTree.add("Repair",basicChimney.id);
                            BaseTree.add("Installation",basicChimney.id);
                            BaseTree.add("Uninstallation",basicChimney.id);
                            
                            
                        var StandardChimney  = BaseTree.add("Standard Chimney",Chimney.id);
                            BaseTree.add("Servicing",StandardChimney.id);
                            BaseTree.add("Repair",StandardChimney.id);
                            BaseTree.add("Installation",StandardChimney.id);
                            BaseTree.add("Uninstallation",StandardChimney.id);
                    
                    var WashingMachine =  BaseTree.add("Washing Machine",General.id);
                        var topLoad  = BaseTree.add("Top Load",WashingMachine.id);
                            BaseTree.add("Installation",topLoad.id);
                            BaseTree.add("Uninstallation",topLoad.id);
                            BaseTree.add("Repair",topLoad.id);
                        var frontLoad  = BaseTree.add("Front Load",WashingMachine.id);
                            BaseTree.add("Installation",frontLoad.id);
                            BaseTree.add("Uninstallation",frontLoad.id);
                            BaseTree.add("Repair",frontLoad.id);
                    
                    var Refrigerator =  BaseTree.add("Refrigerator",General.id);
                        var singleDoor   = BaseTree.add("Single Door",Refrigerator.id);
                            BaseTree.add("Cleaning",singleDoor.id);
                            BaseTree.add("Repair",singleDoor.id);
                        var doubleDoor   = BaseTree.add("Double Door",Refrigerator.id);
                            BaseTree.add("Cleaning",doubleDoor.id);
                            BaseTree.add("Repair",doubleDoor.id);
                    
                    var MicrowareOven =  BaseTree.add("Mircowave/Oven",General.id);
                        BaseTree.add("Repair",MicrowareOven.id);
                    
                    var AC =  BaseTree.add("AC",General.id);
                        var splitAc = BaseTree.add("Split AC",AC.id);
                            BaseTree.add("Installation",splitAc.id);
                            BaseTree.add("Uninstallation",splitAc.id);
                            BaseTree.add("Wet Servicing",splitAc.id);
                        var windowAc = BaseTree.add("Window AC",AC.id);
                            BaseTree.add("Installation",windowAc.id);
                            BaseTree.add("Uninstallation",windowAc.id);
                            BaseTree.add("Wet Servicing",windowAc.id);
                        var gasRefilling = BaseTree.add("Gas Refilling",AC.id);
                            BaseTree.add("0-1 Ton",gasRefilling.id);
                            BaseTree.add("1-2 Ton",gasRefilling.id);
                            BaseTree.add("2+  Ton",gasRefilling.id);
                        var gasTopUp = BaseTree.add("Gas Topup",AC.id);
                            BaseTree.add("0-1 Ton",gasTopUp.id);
                            BaseTree.add("1-2 Ton",gasTopUp.id);
                            BaseTree.add("2+ Ton",gasTopUp.id);
                    
                    var Hometheather =  BaseTree.add("Home Theather",General.id);
                        BaseTree.add("Installation",Hometheather.id);
                        BaseTree.add("Uninstallation",Hometheather.id);
                        BaseTree.add("Repair",Hometheather.id);
                    
                    var WaterMotor =  BaseTree.add("Water Motor",General.id);
                        BaseTree.add("Installation",WaterMotor.id);
                        BaseTree.add("Uninstallation",WaterMotor.id);
                        BaseTree.add("Repair",WaterMotor.id);
                        BaseTree.add("Replace",WaterMotor.id);
                    
                    var Invertor =  BaseTree.add("Invertor",General.id);
                        BaseTree.add("Installation",Invertor.id);
                        BaseTree.add("Uninstallation",Invertor.id);
                        BaseTree.add("Repair",Invertor.id);
                        BaseTree.add("Battery Replace",Invertor.id);
                        BaseTree.add("Servicing / Water top ups",Invertor.id);
                        BaseTree.add("Replace",Invertor.id);
                    
                    var Others =  BaseTree.add("Others",General.id);
                        BaseTree.add("Vaccum Cleaner",Others.id);
                        BaseTree.add("Jucier Mixer Grinder",Others.id);
                        BaseTree.add("Electric Kettle",Others.id);
                        BaseTree.add("Coffee Maker",Others.id);
                        BaseTree.add("Room Heater/Blower",Others.id);
                        BaseTree.add("TreadMill",Others.id);
                        BaseTree.add("Iron",Others.id);
                        BaseTree.add("Dryer",Others.id);
                        BaseTree.add("Dish Washer",Others.id);
                        BaseTree.add("Gas Stoves",Others.id);
                        BaseTree.add("Hand Blender",Others.id);
                        BaseTree.add("Snadwich Maker",Others.id);
                        BaseTree.add("Induction Cooktops",Others.id);
                        BaseTree.add("Grill & Tandoor",Others.id);
                        BaseTree.add("Toaster & Griller",Others.id);
                        BaseTree.add("Food Processor",Others.id);

                        handler.Add({
                            CatalogName  : "ApplicationRepair",
                            CatalogObject  : BaseTree.root
                        }).then((response)=>{
                            console.log(response);
                            if(response)
                                    assert(true);
                            else 
                                assert(false);
                            done();
                        }).catch((err)=>{
                            console.log(err);
                            assert(false);
                            done();
                        });
            
        });

})