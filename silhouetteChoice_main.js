var timeline = [];
//var repo_site = "https://joviec.github.io/silhouetteChoice/img/";
var condition = Qualtrics.SurveyEngine.getEmbeddedData('condition');
//var condition = "general";

var practice_list = [
 {
   "name": "finalPicsFemaleG1Age1.2P2FemaleG6Age88P1MaleG3Age5P1MaleG5Age24P2.png"
 },
 {
   "name": "finalPicsFemaleG1Age0.3P1FemaleG6Age66P1MaleG3Age5P1MaleG2Age2P2.png"
 },
 {
   "name": "finalPicsFemaleG3Age11P2FemaleG2Age4P2MaleG4Age14P1FemaleG5Age29P2.png"
 },
 {
   "name": "finalPicsFemaleG5Age21P2MaleG4Age14P1MaleG1Age0.1P2MaleG3Age5P2.png"
 },
 {
   "name": "finalPicsFemaleG5Age26P1FemaleG6Age72P2MaleG3Age8P2FemaleG1Age1.4P2.png"
 },
 ]


var pic_list = [
{
   "name": "finalPicsMaleG6Age74P2FemaleG2Age4P2FemaleG1Age1.1P2MaleG5Age29P1.png"
 },
 {
  "name": "finalPicsFemaleG2Age4P2FemaleG6Age82P2FemaleG3Age7P1FemaleG5Age48P2.png"
},
{
  "name": "finalPicsMaleG6Age65P1MaleG3Age5P1MaleG1Age1.4P2MaleG4Age15P1.png"
},
{
  "name": "finalPicsFemaleG3Age8P1FemaleG4Age16P2MaleG1Age0.4P1MaleG2Age2P2.png"
},
{
  "name": "finalPicsFemaleG4Age14P2MaleG6Age67P2MaleG5Age21P2P1.png"
},
{
  "name": "finalPicsMaleG2Age2P1MaleG1Age0.7P2FemaleG6Age81P2FemaleG5Age56P2.png"
},
{
  "name": "finalPicsFemaleG5Age22P2MaleG4Age13P1MaleG1Age0.4P1P1.png"
},
{
  "name": "finalPicsFemaleG5Age20P2FemaleG1Age0.7P1FemaleG2Age4P1FemaleG6Age99P2.png"
},
{
  "name": "finalPicsMaleG2Age2P2FemaleG6Age89P2MaleG5Age22P1FemaleG3Age9P2.png"
},
{
  "name": "finalPicsMaleG1Age0.7P2MaleG3Age6P1MaleG2Age4P1MaleG4Age13P1.png"
},
{
  "name": "finalPicsMaleG5Age37P2FemaleG1Age0.1P2MaleG2Age2P2FemaleG4Age13P2.png"
},
{
  "name": "finalPicsFemaleG2Age4P1FemaleG5Age28P1MaleG3Age8P1MaleG6Age66P2.png"
},
{
  "name": "finalPicsMaleG2Age3P1MaleG3Age6P2MaleG5Age28P2MaleG6Age70P1.png"
},
{
  "name": "finalPicsFemaleG4Age15P2FemaleG3Age5P1FemaleG6Age73P2FemaleG5Age33P2.png"
},
{
  "name": "finalPicsMaleG4Age14P2FemaleG5Age36P2MaleG3Age6P2FemaleG6Age86P2.png"
},
{
  "name": "finalPicsFemaleG5Age32P2FemaleG1Age0.2P2FemaleG2Age3P2P1.png"
},
{
  "name": "finalPicsMaleG3Age11P1FemaleG2Age4P1FemaleG1Age1.3P2MaleG4Age17P2.png"
},
{
  "name": "finalPicsFemaleG4Age14P2FemaleG2Age3P1FemaleG1Age0.7P1FemaleG3Age8P2.png"
},
{
  "name": "finalPicsMaleG2Age2P1MaleG6Age73P2MaleG1Age1.4P1MaleG5Age31P2.png"
},
{
  "name": "finalPicsMaleG5Age22P1MaleG2Age2P2MaleG1Age0.7P2MaleG4Age16P2.png"
},
{
  "name": "finalPicsMaleG6Age68P2FemaleG1Age0.2P1MaleG3Age7P1P1.png"
},
{
  "name": "finalPicsFemaleG4Age17P2FemaleG6Age69P1FemaleG3Age7P1P1.png"
},
{
  "name": "finalPicsMaleG3Age5P1MaleG4Age16P2MaleG6Age72P2MaleG5Age38P2.png"
},
{
  "name": "finalPicsMaleG4Age14P1FemaleG3Age6P2FemaleG6Age67P1MaleG1Age1.4P1.png"
},
{
  "name": "finalPicsMaleG1Age0.9P1FemaleG4Age15P2FemaleG2Age2P1MaleG5Age20P1.png"
},
{
  "name": "finalPicsFemaleG3Age9P1MaleG5Age40P1FemaleG6Age79P1P1.png"
},
{
  "name": "finalPicsFemaleG5Age30P2MaleG4Age17P1MaleG3Age11P1FemaleG1Age0.7P2.png"
},
{
  "name": "finalPicsMaleG3Age7P2MaleG5Age21P1FemaleG2Age2P2MaleG4Age18P2.png"
},
{
  "name": "finalPicsFemaleG4Age19P1FemaleG3Age9P1FemaleG1Age0.3P2MaleG5Age22P1.png"
},
{
  "name": "finalPicsMaleG1Age1.2P1MaleG4Age12P1MaleG2Age2P2P1.png"
},
{
  "name": "finalPicsFemaleG1Age0.7P2FemaleG2Age3P2MaleG5Age24P2FemaleG3Age5P2.png"
},
{
  "name": "finalPicsFemaleG3Age7P2MaleG1Age0.6P1MaleG6Age81P1MaleG5Age36P2.png"
},
{
  "name": "finalPicsFemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"
},
{
  "name": "finalPicsFemaleG2Age2P1MaleG4Age16P1MaleG3Age5P1FemaleG5Age44P2.png"
},
{
  "name": "finalPicsFemaleG6Age66P2FemaleG3Age8P2MaleG2Age3P1FemaleG1Age0.2P2.png"
},
{
  "name": "finalPicsFemaleG6Age69P2FemaleG5Age52P2MaleG4Age16P1MaleG1Age0.5P2.png"
},
{
  "name": "finalPicsMaleG5Age21P2FemaleG6Age65P1MaleG3Age6P1P1.png"
},
{
  "name": "finalPicsFemaleG3Age6P1MaleG4Age13P2MaleG6Age77P2MaleG5Age35P1.png"
},
{
  "name": "finalPicsMaleG3Age6P1FemaleG4Age15P1FemaleG5Age26P1MaleG1Age0.6P2.png"
},
{
  "name": "finalPicsFemaleG1Age0.3P1FemaleG6Age98P1MaleG5Age23P1FemaleG2Age2P2.png"
},
{
  "name": "finalPicsFemaleG5Age21P2MaleG4Age14P1MaleG1Age0.1P2MaleG3Age5P2.png"
},
{
  "name": "finalPicsMaleG3Age5P2MaleG1Age1.5P1FemaleG6Age94P2FemaleG4Age19P2.png"
},
{
  "name": "finalPicsMaleG6Age65P1FemaleG2Age2P1MaleG5Age31P1P1.png"
},
{
  "name": "finalPicsMaleG4Age14P2MaleG6Age65P2FemaleG1Age0.5P1MaleG5Age45P1.png"
},
{
  "name": "finalPicsMaleG1Age1.4P1MaleG4Age14P2MaleG2Age2P2P1.png"
},
{
  "name": "finalPicsFemaleG2Age2P1FemaleG4Age16P2FemaleG5Age24P2FemaleG3Age6P2.png"
},
{
  "name": "finalPicsMaleG1Age0.4P1MaleG4Age16P2MaleG6Age79P2MaleG5Age34P1.png"
},
{
  "name": "finalPicsMaleG2Age3P2FemaleG4Age14P1MaleG5Age46P1MaleG1Age1.5P1.png"
},
{
  "name": "finalPicsFemaleG1Age0.9P1FemaleG4Age18P1MaleG2Age4P1MaleG6Age66P2.png"
},
{
  "name": "finalPicsFemaleG3Age6P2FemaleG1Age1.2P1FemaleG2Age2P1P1.png"
},
{
  "name": "finalPicsFemaleG2Age2P2MaleG4Age15P2MaleG6Age91P2MaleG5Age30P2.png"
},
{
  "name": "finalPicsFemaleG1Age0.3P2MaleG5Age22P1FemaleG2Age2P2MaleG3Age8P2.png"
},
{
  "name": "finalPicsMaleG6Age69P1FemaleG5Age21P1MaleG4Age13P2P1.png"
},
{
  "name": "finalPicsFemaleG3Age7P1FemaleG5Age25P2MaleG2Age3P1MaleG6Age66P1.png"
},
{
  "name": "finalPicsFemaleG5Age41P2MaleG4Age18P1MaleG2Age4P2P1.png"
},
{
  "name": "finalPicsFemaleG5Age22P1FemaleG3Age6P1MaleG6Age80P2FemaleG4Age12P2.png"
},
{
  "name": "finalPicsFemaleG5Age26P1MaleG1Age0.8P2FemaleG3Age6P2P1.png"
},
{
  "name": "finalPicsMaleG2Age4P1MaleG5Age23P2FemaleG1Age0.1P2MaleG3Age7P2.png"
},
{
  "name": "finalPicsFemaleG2Age2P1FemaleG1Age0.1P2MaleG3Age6P1P1.png"
},
{
  "name": "finalPicsFemaleG5Age46P2MaleG4Age15P1MaleG2Age4P2FemaleG1Age0.9P2.png"
},
{
  "name": "finalPicsFemaleG5Age23P1MaleG6Age65P1MaleG2Age2P2MaleG3Age9P2.png"
},
{
  "name": "finalPicsMaleG6Age69P1MaleG1Age0.3P1FemaleG4Age13P1P1.png"
},
{
  "name": "finalPicsMaleG6Age74P1FemaleG4Age13P1FemaleG1Age0.9P1MaleG5Age23P1.png"
},
{
  "name": "finalPicsFemaleG2Age2P1MaleG6Age66P2MaleG1Age0.7P1FemaleG4Age16P2.png"
},
{
  "name": "finalPicsFemaleG3Age10P2FemaleG1Age1.4P2FemaleG6Age97P2P1.png"
},
{
  "name": "finalPicsFemaleG5Age27P1MaleG2Age4P2MaleG3Age5P1MaleG4Age16P2.png"
},
{
  "name": "finalPicsMaleG3Age10P1MaleG1Age0.2P1MaleG6Age72P2MaleG2Age3P1.png"
},
{
  "name": "finalPicsFemaleG1Age0.5P1FemaleG5Age23P1FemaleG3Age5P2FemaleG4Age16P2.png"
},
{
  "name": "finalPicsMaleG3Age6P2MaleG2Age4P2MaleG5Age22P2MaleG1Age0.4P2.png"
},
{
  "name": "finalPicsMaleG4Age19P1MaleG2Age2P1FemaleG6Age71P1MaleG1Age1.3P1.png"
},
{
  "name": "finalPicsFemaleG3Age5P1FemaleG2Age4P2MaleG6Age67P1P1.png"
},
{
  "name": "finalPicsFemaleG6Age65P1FemaleG3Age5P1FemaleG1Age0.2P1MaleG4Age12P1.png"
},
{
  "name": "finalPicsMaleG6Age72P2MaleG5Age24P2FemaleG4Age18P1MaleG1Age0.7P2.png"
},
{
  "name": "finalPicsFemaleG3Age6P2FemaleG5Age21P1MaleG2Age3P1P1.png"
},
{
  "name": "finalPicsFemaleG6Age67P2MaleG3Age5P2MaleG1Age1.5P1P1.png"
},
{
  "name": "finalPicsFemaleG3Age5P2FemaleG6Age65P2MaleG2Age2P2MaleG1Age0.2P1.png"
},
{
  "name": "finalPicsFemaleG4Age13P2MaleG1Age0.1P2MaleG3Age6P1MaleG2Age2P2.png"
},
{
  "name": "finalPicsFemaleG3Age8P1FemaleG1Age0.8P1MaleG6Age67P2P1.png"
},
{
  "name": "finalPicsFemaleG1Age0.7P1FemaleG2Age2P2FemaleG5Age48P1MaleG6Age68P2.png"
},
{
  "name": "finalPicsMaleG5Age21P2MaleG1Age0.5P1FemaleG4Age19P2P1.png"
},
{
  "name": "finalPicsMaleG1Age0.8P1MaleG6Age96P2FemaleG2Age3P1MaleG5Age31P1.png"
},
{
  "name": "finalPicsMaleG2Age3P2FemaleG5Age23P2FemaleG4Age13P2MaleG1Age1.3P2.png"
},
{
  "name": "finalPicsMaleG1Age0.2P2FemaleG3Age5P2MaleG6Age100P2P1.png"
},
{
  "name": "finalPicsFemaleG1Age0.6P1MaleG2Age4P1FemaleG3Age7P1P1.png"
},
{
  "name": "finalPicsFemaleG1Age0.2P2FemaleG6Age67P1MaleG4Age14P2MaleG2Age2P2.png"
},
{
  "name": "finalPicsFemaleG6Age65P2MaleG3Age6P2MaleG2Age4P1P1.png"
},
{
  "name": "finalPicsFemaleG1Age0.3P1FemaleG6Age66P1MaleG3Age5P1MaleG2Age2P2.png"
},
{
  "name": "finalPicsMaleG3Age6P2FemaleG6Age66P2FemaleG2Age2P1MaleG4Age13P2.png"
},
{
  "name": "finalPicsMaleG4Age18P2FemaleG6Age67P2MaleG2Age2P1P1.png"
},
{
  "name": "finalPicsMaleG6Age67P2FemaleG3Age10P1MaleG4Age13P1P1.png"
},
{
  "name": "finalPicsFemaleG6Age66P2FemaleG2Age4P1MaleG4Age14P2MaleG1Age0.1P2.png"
},
{
  "name": "finalPicsFemaleG2Age2P2FemaleG4Age12P1MaleG3Age7P1FemaleG6Age65P2.png"
},
{
  "name": "finalPicsMaleG6Age80P2MaleG2Age2P1FemaleG3Age7P1MaleG4Age16P2.png"
},
{
  "name": "finalPicsFemaleG4Age14P1FemaleG6Age71P2MaleG1Age0.6P1P1.png"
},
{
  "name": "finalPicsMaleG5Age33P2FemaleG6Age65P2FemaleG4Age14P2MaleG3Age6P1.png"
},
{
  "name": "finalPicsMaleG5Age20P1MaleG4Age15P1FemaleG1Age0.4P2P1.png"
},
{
  "name": "finalPicsMaleG1Age1P1FemaleG3Age10P1MaleG5Age28P1MaleG2Age2P1.png"
},
{
  "name": "finalPicsMaleG6Age72P1MaleG5Age62P2FemaleG4Age14P1MaleG2Age2P1.png"
},
{
  "name": "finalPicsFemaleG2Age4P2MaleG4Age17P1FemaleG1Age0.1P2FemaleG3Age6P2.png"
},
{
  "name": "finalPicsFemaleG6Age72P2FemaleG4Age16P1MaleG2Age2P1MaleG5Age25P1.png"
},
{
  "name": "finalPicsMaleG4Age12P1MaleG6Age75P1FemaleG1Age0.2P2MaleG3Age11P1.png"
},
{
  "name": "finalPicsFemaleG3Age10P1MaleG5Age21P1MaleG2Age2P2MaleG6Age70P2.png"
},
{
  "name": "finalPicsMaleG2Age2P1FemaleG3Age7P1FemaleG1Age1P1FemaleG5Age42P2.png"
},
{
  "name": "finalPicsFemaleG2Age2P1MaleG6Age66P1FemaleG4Age14P2MaleG3Age7P2.png"
},
{
  "name": "finalPicsMaleG2Age4P1MaleG3Age5P1FemaleG6Age70P2FemaleG5Age22P2.png"
},
{
  "name": "finalPicsFemaleG1Age0.6P1FemaleG5Age20P1MaleG4Age13P1MaleG6Age70P2.png"
},
{
  "name": "finalPicsMaleG3Age7P2MaleG4Age19P1MaleG5Age21P2P1.png"
},
{
  "name": "finalPicsMaleG3Age10P2FemaleG2Age2P2FemaleG1Age1.2P1MaleG6Age66P1.png"
},
{
  "name": "finalPicsMaleG6Age93P1FemaleG4Age13P2MaleG3Age5P2MaleG2Age2P2.png"
},
{
  "name": "finalPicsMaleG3Age11P2FemaleG4Age12P2FemaleG5Age47P2MaleG2Age2P2.png"
},
{
  "name": "finalPicsFemaleG5Age22P2MaleG2Age3P2MaleG4Age13P1MaleG6Age87P1.png"
},
{
  "name": "finalPicsFemaleG4Age12P1MaleG6Age65P2MaleG2Age2P2P1.png"
},
{
  "name": "finalPicsMaleG3Age5P2MaleG5Age36P2MaleG6Age65P2FemaleG4Age13P2.png"
},
{
  "name": "finalPicsFemaleG3Age7P1FemaleG2Age2P2FemaleG4Age13P2FemaleG6Age66P2.png"
},
{
  "name": "finalPicsFemaleG2Age3P1FemaleG3Age6P1MaleG4Age14P2MaleG5Age24P1.png"
},
{
  "name": "finalPicsFemaleG1Age1.1P1MaleG4Age12P1FemaleG3Age6P2MaleG5Age20P2.png"
},
{
  "name": "finalPicsFemaleG5Age32P1MaleG3Age7P2MaleG2Age2P1MaleG1Age0.4P2.png"
},
{
  "name": "finalPicsMaleG6Age99P2MaleG1Age0.2P1FemaleG2Age3P2MaleG4Age17P1.png"
},
{
  "name": "finalPicsMaleG5Age23P2MaleG6Age66P1FemaleG1Age0.1P2P1.png"
},
{
  "name": "finalPicsFemaleG1Age0.7P2FemaleG5Age20P2FemaleG3Age5P1MaleG4Age16P1.png"
},
{
  "name": "finalPicsMaleG6Age68P1MaleG4Age15P2FemaleG3Age10P2P1.png"
},
{
  "name": "finalPicsMaleG5Age31P2MaleG4Age19P2FemaleG6Age67P2FemaleG1Age1P2.png"
},
{
  "name": "finalPicsFemaleG3Age9P1MaleG2Age4P1MaleG6Age66P2MaleG1Age1.3P2.png"
},
{
  "name": "finalPicsFemaleG6Age65P2MaleG3Age6P1MaleG2Age3P2MaleG1Age1.3P1.png"
},
{
  "name": "finalPicsFemaleG4Age13P1FemaleG2Age3P1MaleG3Age7P2MaleG5Age49P2.png"
},
{
  "name": "finalPicsFemaleG2Age2P1FemaleG1Age0.7P1FemaleG4Age18P1MaleG5Age26P2.png"
},
{
  "name": "finalPicsMaleG2Age3P2MaleG1Age0.6P1FemaleG5Age35P2MaleG6Age67P1.png"
},
{
  "name": "finalPicsFemaleG2Age3P2FemaleG5Age45P1FemaleG6Age69P2MaleG4Age13P1.png"
},
{
  "name": "finalPicsMaleG3Age7P2MaleG6Age74P1MaleG5Age29P2FemaleG2Age2P2.png"
},
{
  "name": "finalPicsFemaleG6Age67P1FemaleG4Age16P1FemaleG5Age24P1P1.png"
},
{
  "name": "finalPicsFemaleG3Age8P2MaleG4Age19P1MaleG5Age46P1P1.png"
},
{
  "name": "finalPicsMaleG5Age21P1MaleG4Age16P1MaleG3Age9P1MaleG1Age1.2P1.png"
},
{
  "name": "finalPicsMaleG1Age0.8P1FemaleG6Age74P2MaleG5Age25P2FemaleG2Age2P2.png"
},
{
  "name": "finalPicsFemaleG3Age5P2MaleG5Age37P2FemaleG2Age3P1FemaleG4Age14P2.png"
},
{
  "name": "finalPicsMaleG3Age10P2MaleG5Age35P2MaleG1Age0.4P2FemaleG6Age66P2.png"
},
{
  "name": "finalPicsFemaleG2Age2P2FemaleG5Age41P1MaleG3Age7P2FemaleG4Age15P2.png"
},
{
  "name": "finalPicsFemaleG6Age72P2FemaleG3Age9P2FemaleG5Age42P2MaleG2Age4P2.png"
},
{
  "name": "finalPicsFemaleG1Age0.3P2MaleG2Age2P1MaleG4Age12P2MaleG6Age74P2.png"
},
{
  "name": "finalPicsMaleG2Age4P1FemaleG1Age0.9P1FemaleG6Age97P1P1.png"
},
{
  "name": "finalPicsFemaleG1Age1P1MaleG6Age94P2FemaleG2Age3P1FemaleG4Age12P2.png"
},
{
  "name": "finalPicsFemaleG1Age0.8P1FemaleG6Age65P1MaleG2Age3P2MaleG5Age22P2.png"
},
{
  "name": "finalPicsMaleG4Age16P2MaleG5Age20P2MaleG1Age1.5P1P1.png"
},
{
  "name": "finalPicsMaleG3Age8P1FemaleG5Age24P1FemaleG6Age76P2FemaleG2Age2P2.png"
},
{
  "name": "finalPicsFemaleG1Age1.1P2MaleG6Age73P1FemaleG5Age20P2P1.png"
},
{
  "name": "finalPicsFemaleG2Age2P1MaleG6Age67P2FemaleG3Age8P2MaleG5Age29P2.png"
},
{
  "name": "finalPicsFemaleG3Age8P2MaleG2Age3P2FemaleG5Age49P1MaleG1Age0.5P2.png"
},
{
  "name": "finalPicsFemaleG6Age74P2FemaleG1Age0.7P2MaleG2Age2P2P1.png"
},
{
  "name": "finalPicsMaleG1Age0.3P1MaleG5Age50P2MaleG3Age6P1P1.png"
},
{
  "name": "finalPicsFemaleG6Age66P2MaleG2Age2P1FemaleG3Age5P1P1.png"
},
{
  "name": "finalPicsFemaleG1Age1.2P1MaleG4Age18P1FemaleG6Age70P1P1.png"
},
{
  "name": "finalPicsFemaleG4Age12P1MaleG3Age9P2FemaleG1Age0.1P1MaleG5Age57P2.png"
},
{
  "name": "finalPicsFemaleG5Age49P2FemaleG1Age0.1P1MaleG6Age90P2MaleG3Age6P1.png"
},
{
  "name": "finalPicsFemaleG4Age13P2FemaleG6Age79P1FemaleG5Age28P2FemaleG2Age3P2.png"
},
{
  "name": "finalPicsFemaleG3Age9P2MaleG1Age1.5P1MaleG4Age13P1MaleG5Age37P1.png"
},
{
  "name": "finalPicsFemaleG4Age15P2FemaleG5Age63P1FemaleG6Age76P1MaleG2Age4P1.png"
},
{
  "name": "finalPicsFemaleG4Age19P1MaleG3Age5P2MaleG5Age47P1MaleG2Age3P2.png"
},
{
  "name": "finalPicsFemaleG3Age5P1MaleG5Age28P2FemaleG4Age16P2MaleG2Age2P1.png"
},
{
  "name": "finalPicsFemaleG5Age35P1FemaleG4Age13P1FemaleG1Age0.2P2MaleG2Age4P1.png"
},
{
  "name": "finalPicsMaleG6Age69P2MaleG4Age15P1MaleG1Age0.3P2MaleG2Age4P2.png"
},
{
  "name": "finalPicsMaleG5Age30P1FemaleG2Age3P2FemaleG3Age5P1MaleG1Age0.5P2.png"
},
{
  "name": "finalPicsFemaleG5Age27P2MaleG3Age6P1FemaleG6Age80P2MaleG1Age0.5P1.png"
},
{
  "name": "finalPicsMaleG1Age0.3P2MaleG3Age6P2FemaleG2Age2P1FemaleG4Age19P2.png"
},
{
  "name": "finalPicsMaleG3Age8P2FemaleG5Age31P1FemaleG1Age0.1P2FemaleG2Age3P2.png"
},
{
  "name": "finalPicsMaleG6Age72P2MaleG1Age1P1FemaleG2Age3P1MaleG3Age7P1.png"
},
{
  "name": "finalPicsFemaleG2Age4P1MaleG4Age14P1FemaleG6Age93P2P1.png"
},
{
  "name": "finalPicsMaleG5Age29P1MaleG6Age77P1FemaleG1Age0.3P1MaleG3Age8P2.png"
},
{
  "name": "finalPicsMaleG2Age2P2FemaleG1Age0.2P2MaleG5Age44P2P1.png"
},
{
  "name": "finalPicsMaleG6Age65P1MaleG1Age0.8P1FemaleG3Age8P1P1.png"
},
{
  "name": "finalPicsMaleG5Age21P2MaleG1Age1.3P1MaleG3Age11P2MaleG6Age70P2.png"
},
{
  "name": "finalPicsFemaleG1Age0.4P2FemaleG2Age2P1FemaleG5Age21P2P1.png"
},
{
  "name": "finalPicsFemaleG1Age1.2P2FemaleG6Age88P1MaleG3Age5P1MaleG5Age24P2.png"
},
{
  "name": "finalPicsFemaleG5Age21P2MaleG3Age11P1MaleG1Age0.5P1FemaleG2Age2P2.png"
},
{
  "name": "finalPicsMaleG6Age67P2FemaleG1Age0.3P1FemaleG5Age21P1FemaleG4Age15P2.png"
},
{
  "name": "finalPicsMaleG2Age2P1FemaleG1Age0.1P2MaleG5Age21P1MaleG6Age66P2.png"
},
{
  "name": "finalPicsMaleG3Age5P2FemaleG1Age0.4P2FemaleG5Age21P2P1.png"
},
{
  "name": "finalPicsMaleG5Age32P2FemaleG4Age19P2FemaleG2Age2P2P1.png"
},
{
  "name": "finalPicsMaleG3Age7P1MaleG1Age0.2P2MaleG4Age13P1P1.png"
},
{
  "name": "finalPicsFemaleG2Age2P1FemaleG5Age29P1MaleG6Age91P2P1.png"
},
{
  "name": "finalPicsFemaleG2Age4P2FemaleG1Age1P1MaleG4Age12P2MaleG6Age100P2.png"
},
{
  "name": "finalPicsFemaleG2Age2P2FemaleG5Age30P1FemaleG1Age0.1P2MaleG4Age17P1.png"
},
{
  "name": "finalPicsMaleG2Age2P1MaleG4Age15P1MaleG5Age22P1MaleG6Age66P2.png"
},
{
  "name": "finalPicsMaleG6Age89P1FemaleG1Age0.4P2FemaleG3Age9P1P1.png"
},
{
  "name": "finalPicsMaleG1Age0.3P2MaleG5Age34P1MaleG4Age17P2FemaleG6Age76P2.png"
},
{
  "name": "finalPicsMaleG4Age12P1FemaleG5Age29P1MaleG6Age71P1MaleG1Age1.4P1.png"
},
{
  "name": "finalPicsFemaleG3Age6P2FemaleG6Age79P1FemaleG4Age13P2MaleG1Age1.1P2.png"
},
{
  "name": "finalPicsFemaleG2Age2P1FemaleG3Age11P1MaleG1Age1P2MaleG4Age13P1.png"
},
{
  "name": "finalPicsFemaleG4Age19P2FemaleG5Age39P2FemaleG2Age3P2MaleG1Age0.1P1.png"
},
{
  "name": "finalPicsMaleG3Age7P1MaleG4Age12P2MaleG1Age0.3P1P1.png"
},
{
  "name": "finalPicsMaleG1Age0.6P2FemaleG6Age65P1MaleG5Age20P1FemaleG4Age19P2.png"
},
{
  "name": "finalPicsMaleG4Age17P1MaleG5Age20P2MaleG3Age10P1P1.png"
},
{
  "name": "finalPicsFemaleG1Age0.8P2FemaleG6Age83P1FemaleG4Age15P1MaleG3Age8P1.png"
},
{
  "name": "finalPicsMaleG4Age17P1FemaleG3Age5P2FemaleG2Age3P2P1.png"
},
{
  "name": "finalPicsFemaleG2Age2P2FemaleG3Age8P1FemaleG4Age16P1MaleG1Age0.6P1.png"
},
{
  "name": "finalPicsMaleG5Age36P2MaleG2Age2P1MaleG4Age15P2MaleG3Age5P1.png"
},
{
  "name": "finalPicsFemaleG4Age12P1FemaleG1Age0.5P1MaleG5Age21P2FemaleG6Age66P2.png"
},
{
  "name": "finalPicsMaleG2Age2P1MaleG5Age22P1FemaleG6Age67P2MaleG3Age6P2.png"
},
{
  "name": "finalPicsFemaleG5Age60P2FemaleG4Age14P1FemaleG6Age66P1MaleG3Age5P2.png"
},
{
  "name": "finalPicsFemaleG6Age69P2MaleG1Age0.9P1FemaleG5Age36P1FemaleG4Age16P2.png"
},
{
  "name": "finalPicsFemaleG5Age30P1MaleG2Age3P2MaleG6Age71P1P1.png"
},
{
  "name": "finalPicsFemaleG1Age0.8P2FemaleG3Age5P2MaleG2Age2P1MaleG4Age14P1.png"
},
{
  "name": "finalPicsFemaleG2Age4P2MaleG1Age0.8P2FemaleG5Age45P2MaleG6Age65P1.png"
},
{
  "name": "finalPicsFemaleG3Age7P2FemaleG5Age47P1MaleG1Age0.3P1MaleG4Age18P1.png"
},
{
  "name": "finalPicsMaleG1Age0.1P2MaleG6Age69P2FemaleG4Age15P1MaleG2Age2P1.png"
},
{
  "name": "finalPicsFemaleG2Age2P2FemaleG1Age0.5P2FemaleG4Age17P2FemaleG6Age67P2.png"
},
{
  "name": "finalPicsMaleG5Age26P2FemaleG6Age66P1MaleG2Age4P2MaleG4Age18P1.png"
},
{
  "name": "finalPicsMaleG4Age15P1MaleG2Age2P2FemaleG1Age0.8P2MaleG5Age41P1.png"
},
{
  "name": "finalPicsMaleG6Age69P1FemaleG3Age8P1FemaleG5Age21P2MaleG4Age19P2.png"
},
{
  "name": "finalPicsFemaleG3Age11P2FemaleG2Age4P1MaleG1Age0.5P2FemaleG5Age29P2.png"
},
{
  "name": "finalPicsMaleG2Age2P1MaleG4Age13P1FemaleG3Age5P2MaleG5Age20P2.png"
},
{
  "name": "finalPicsMaleG1Age1.5P1MaleG3Age5P1FemaleG5Age20P1MaleG6Age65P1.png"
},
{
  "name": "finalPicsFemaleG4Age19P1MaleG3Age8P1MaleG2Age3P2FemaleG1Age0.1P2.png"
},
{
  "name": "finalPicsMaleG3Age6P1MaleG1Age1.4P1FemaleG4Age13P2MaleG6Age67P1.png"
},
{
  "name": "finalPicsMaleG5Age28P1MaleG2Age2P1MaleG1Age1.1P2FemaleG6Age66P2.png"
},
{
  "name": "finalPicsMaleG1Age0.6P1FemaleG3Age5P1FemaleG4Age12P1MaleG6Age75P1.png"
},
{
  "name": "finalPicsFemaleG4Age19P2FemaleG3Age7P2MaleG1Age0.9P2FemaleG5Age20P2.png"
},
{
  "name": "finalPicsFemaleG5Age26P2MaleG3Age8P1MaleG6Age95P1P1.png"
},
{
  "name": "finalPicsFemaleG3Age11P2FemaleG2Age4P2MaleG4Age14P1FemaleG5Age29P2.png"
},
{
  "name": "finalPicsMaleG6Age97P1FemaleG4Age12P2MaleG2Age4P2P1.png"
},
{
  "name": "finalPicsMaleG2Age2P2MaleG3Age5P2MaleG4Age12P2FemaleG1Age1.1P2.png"
},
{
  "name": "finalPicsFemaleG3Age7P2MaleG6Age67P2MaleG1Age1.3P1MaleG4Age14P1.png"
},
{
  "name": "finalPicsFemaleG1Age0.4P2MaleG3Age6P2MaleG6Age68P2MaleG2Age3P1.png"
},
{
  "name": "finalPicsFemaleG6Age77P1FemaleG4Age12P1MaleG1Age0.1P2MaleG2Age2P2.png"
},
{
  "name": "finalPicsFemaleG5Age25P1MaleG6Age74P1MaleG3Age9P1MaleG4Age17P2.png"
},
{
  "name": "finalPicsFemaleG6Age65P1FemaleG3Age6P1FemaleG5Age24P1MaleG4Age14P1.png"
},
{
  "name": "finalPicsFemaleG3Age9P1MaleG1Age1.4P2MaleG5Age20P2FemaleG6Age65P2.png"
},
{
  "name": "finalPicsMaleG1Age0.7P2FemaleG5Age54P1FemaleG2Age2P1P1.png"
},
{
  "name": "finalPicsFemaleG6Age65P1MaleG5Age20P1FemaleG3Age5P2FemaleG4Age12P2.png"
},
{
  "name": "finalPicsFemaleG1Age0.5P1FemaleG6Age66P2MaleG5Age23P1P1.png"
},
{
  "name": "finalPicsFemaleG4Age15P2FemaleG1Age0.2P2MaleG3Age8P1P1.png"
},
{
  "name": "finalPicsFemaleG4Age13P2MaleG6Age65P1FemaleG3Age7P2FemaleG2Age4P2.png"
},
{
  "name": "finalPicsFemaleG3Age5P2FemaleG2Age2P1FemaleG6Age66P2MaleG1Age1.1P2.png"
},
{
  "name": "finalPicsFemaleG1Age1.1P2FemaleG6Age68P1MaleG3Age8P2MaleG4Age14P1.png"
},
{
  "name": "finalPicsMaleG5Age45P1MaleG3Age5P1FemaleG4Age14P1MaleG1Age0.1P1.png"
},
{
  "name": "finalPicsMaleG2Age3P1MaleG4Age16P2MaleG3Age11P1MaleG6Age85P1.png"
},
{
  "name": "finalPicsMaleG5Age20P2FemaleG6Age71P2FemaleG2Age3P1MaleG4Age13P2.png"
},
{
  "name": "finalPicsMaleG2Age3P2FemaleG5Age63P1FemaleG3Age6P1MaleG4Age13P2.png"
},
{
  "name": "finalPicsFemaleG5Age26P1FemaleG6Age72P2MaleG3Age8P2FemaleG1Age1.4P2.png"
},
{
  "name": "finalPicsMaleG6Age67P1MaleG3Age7P2FemaleG2Age4P1MaleG4Age13P1.png"
},
{
  "name": "finalPicsMaleG3Age11P2MaleG2Age2P2MaleG4Age12P2FemaleG6Age66P2.png"
},
 {
   "name": "finalPicsMaleG6Age70P1FemaleG3Age7P2MaleG2Age3P1P1.png"
 },
 {
   "name": "finalPicsMaleG6AgenaP0FemaleG6AgenaP0.png"
 },
 {
   "name": "finalPicsMaleG3AgenaP0FemaleG3AgenaP0.png"
 },
 {
   "name": "finalPicsMaleG2AgenaP0FemaleG2AgenaP0.png"
 },
 {
   "name": "finalPicsFemaleG5AgenaP0MaleG5AgenaP0.png"
 },
 {
   "name": "finalPicsFemaleG4AgenaP0MaleG4AgenaP0.png"
 },
 {
   "name": "finalPicsFemaleG1AgenaP0MaleG1AgenaP0.png"
 }
]


var picture = [];
//var picture = '<img src="https://joviec.github.io/silhouetteChoice/img/finalPicsFemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"/>'
for (i = 0; i < pic_list.length; i++) {
  var source = "https://joviec.github.io/silhouetteChoice/img/" + pic_list[i].name;
  picture.push(source);
}


var preload_pic = {
      type:'preload',
      auto_preload:true,
      images: picture,
      show_detailed_errors: true,
      message: 'Please wait while the files load...',
      max_load_time: 1000000
  };

timeline.push(preload_pic);

//var practiceTrialNum = new Array(1, 2, 3, 4, 5);
var practice = [];
//var picture = '<img src="https://joviec.github.io/silhouetteChoice/img/finalPicsFemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"/>'
for (i = 201; i < 206; i++) {
  var practicesrc = "<img src=\"" + picture[i] + "\"/>";
  practice.push(practicesrc);
}


var foursilhouettes = [];
//var picture = '<img src="https://joviec.github.io/silhouetteChoice/img/finalPicsFemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"/>'
for (i = 0; i < picture.length-6; i++) {
  var imgsrc = "<img src=\"" + picture[i] + "\"/>";
  foursilhouettes.push(imgsrc);
}

var twosilhouettes = [];
//var picture = '<img src="https://joviec.github.io/silhouetteChoice/img/finalPicsFemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"/>'
for (i = picture.length-6; i < picture.length; i++) {
  var gendersrc = "<img src=\"" + picture[i] + "\"/>";
  twosilhouettes.push(gendersrc);
}



var welcome = {
    type: 'instructions',
    pages: [`You will start the choice task now. 
    <br><br>Please click "Next", read the task instructions carefully and make decisions accordingly.`],
    show_clickable_nav: true
        };

timeline.push(welcome);

if(condition == "baseline"){
var intro = {
    type: 'instructions',
    pages: [
    `We are interested in your opinions about <b>saving</b> different human lives. 
    <br>There are situations when resources are limited and not all human lives can be <b>saved</b>. 
    <br>Imagine you are the captain of a ship. One day, a storm hits your ship and it is sinking. 
    <br>However, not enough lifeboats are available, so you can only <b>save</b> some of your passengers. 
    <br><br>Please click "Next" to proceed.`,
    `In this task, you will see many groups of human lives presented as silhouettes. 
    <br>The number on each silhouette indicates the age of that person and the hairstyle indicates their gender.
    <br>In each group, please choose one so that person will <b>get on the lifeboat and be saved</b>. 
    <br>At the beginning of every trial, you will see a white box with a black fixation cross in the center of the screen.
    <br>If you feel tired, you can stay on the fixation cross page and take a rest. 
    <br>When you are ready, please click on the fixation cross to proceed to the next screen. 
    <br>After the black cross disappears, silhouettes will show up. 
    <br>To make a choice, click on the white box on the silhouette you wish to <b>save</b>. 
    <br>Then, the fixation cross will show up again and please click it to proceed.
    <br><br>Please click "Next" to proceed`,
    `You will do some practice now.
    <br><br>Please click "Next" to proceed.`
    ],
    show_clickable_nav: true
};
} else if (condition == "general") {
var intro = {
  type: 'instructions',
  pages: [`We are interested in <b>policy-making</b> about saving different human lives. 
  <br>There are situations when resources are limited and not all human lives can be saved. 
  <br>For example, in case a storm hits a ship and it is sinking, yet not enough lifeboats are available,
  a <b>policy</b> that determines which passengers to save is needed. 
  <br><br>Please press "Next" to proceed.`, 
  `In this task, you will see many groups of human lives presented as silhouettes. 
  <br>The number on each silhouette indicates the age of that person and the hairstyle indicates their gender.
  <br>In each group, please choose one so that person will <b>always</b> be saved in cases of resource shortage.
  <br>At the beginning of every trial, you will see a white box with a black fixation cross in the center of the screen.
  <br>If you feel tired, you can stay on the fixation cross page and take a rest. 
  <br>When you are ready, please click on the fixation cross to proceed to the next screen. 
  <br>After the black cross disappears, silhouettes will show up. 
  <br>To make a choice, click on the white box on the silhouette the <b>policy</b> should prioritize. 
  <br>Then, the fixation cross will show up again and please click it to proceed.
  <br><br>Please click "Next" to proceed`,
  `You will do some practice now.
  <br><br>Please click "Next" to proceed.`
  ],
  show_clickable_nav: true
};
} else if (condition == "negative") {
  var intro = {
    type: 'instructions',
    pages: [`We are interested in your opinions about <b>giving up</b> different human lives. 
    <br>There are situations when resources are limited and some human lives have to be <b>left to die</b>. 
    <br>Imagine you are the captain of a ship. One day, a storm hits your ship and it is sinking. 
    <br>However, not enough lifeboats are available, so you have to <b>let some of your passengers die</b>. 
    <br><br>Please click "Next" to proceed.`,
    `In this task, you will see many groups of human lives presented as silhouettes. 
    <br>The number on each silhouette indicates the age of that person and the hairstyle indicates their gender.
    <br>In each group, please choose one so that person will be <b>left to die</b>. 
    <br>At the beginning of every trial, you will see a white box with a black fixation cross in the center of the screen.
    <br>If you feel tired, you can stay on the fixation cross page and take a rest. 
    <br>When you are ready, please click on the fixation cross to proceed to the next screen. 
    <br>After the black cross disappears, silhouettes will show up. 
    <br>To make a choice, click on the white box on the silhouette you wish to <b>give up</b>. 
    <br>Then, the fixation cross will show up again and please click it to proceed.
    <br><br>Please click "Next" to proceed`,
    `You will do some practice now.
    <br><br>Please click "Next" to proceed.`],
    show_clickable_nav: true
  }
}
timeline.push(intro);

for (var practiceValues of practice) {
  var fixation = {
      type: 'html-button-response',
      stimulus: ' ',
      choices:['+'],
      //trial_duration: 500,
      response_ends_trial: true
  };
  timeline.push(fixation);

  var trial = {
      type: 'html-button-response',
      stimulus: practiceValues,
      //stimulus: '<img src="https://joviec.github.io/silhouetteChoice/img/finalPicsFemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"/>',
      choices: [' ',' ',' ',' '],
      button_html: ['<button class="jspsych-btn" style = "position:relative; left:-135px; top: -400px">%choice%</button>',//upper left
                    '<button class="jspsych-btn" style = "position:relative; right:-200px; top: -400px">%choice%</button>', //upper right 
                    '<button class="jspsych-btn" style = "position:relative; left:160px; top: -80px">%choice%</button>', //lower right
                    '<button class="jspsych-btn" style = "position:relative; right:255px; top: -80px">%choice%</button>'] //lower left
      //prompt: "<p> hello </p>"
  };
  timeline.push(trial);
  };


var finishedPractice = {
  type: 'instructions',
  pages: ['You have finished the practice, now you will proceed to the formal experiment with the same task. <br><br>Please click "Next" to proceed.'
  ],
  show_clickable_nav: true
};

timeline.push(finishedPractice);

if(condition == "baseline"){
  var conditionInst = {
    type: 'instructions',
    pages: [`Imagine you are the captain of a ship. One day, a storm hits your ship, and it is sinking. However, not enough lifeboats are available. 
    <br>Only about one fourth of the passengers can get on a lifeboat and be saved, and you have to decide who will get on.
    <br>Keep in mind that these are <b>your personal decisions, so please follow your heart</b>. 
    <br><br>Please click "Next" to start.`],
    show_clickable_nav: true
  };
} else if (condition == "general"){
  var conditionInst = {
    type: 'instructions',
    pages: [`Imagine you are making a <b>policy</b> to determine which human lives to save in cases of resource shortage.
    <br>Only about one fourth of the lives can be saved.
    <br>Keep in mind that your answers serve as <b>criteria for policies and those you choose to save will always be prioritized in future cases of resource shortage</b>. 
    <br><br>Please click "Next" to start.`],
    show_clickable_nav: true
  };
} else if (condition == "negative") {
  var conditionInst = {
    type: 'instructions',
    pages: [`Imagine you are the captain of a ship. One day, a storm hits your ship, and it is sinking. However, not enough lifeboats are available. 
    <br>About one fourth of the passengers can <b>not</b> get on a lifeboat, and you have to decide who to <b>let die</b>.
    <br>Keep in mind that these are your personal decisions, so please follow your heart. 
    <br><br>Please click "Next" to start.`],
    show_clickable_nav: true
  }
}
timeline.push(conditionInst)


for (var values of foursilhouettes) {

  timeline.push(fixation);

  var trial = {
      type: 'html-button-response',
      stimulus: values,
      //stimulus: '<img src="https://joviec.github.io/silhouetteChoice/img/finalPicsFemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"/>',
      choices: [' ',' ',' ',' '],
      button_html: ['<button class="jspsych-btn" style = "position:relative; left:-135px; top: -400px">%choice%</button>',//upper left
                    '<button class="jspsych-btn" style = "position:relative; right:-200px; top: -400px">%choice%</button>', //upper right 
                    '<button class="jspsych-btn" style = "position:relative; left:160px; top: -80px">%choice%</button>', //lower right
                    '<button class="jspsych-btn" style = "position:relative; right:255px; top: -80px">%choice%</button>'] //lower left
      //prompt: "<p> hello </p>"
  };
  timeline.push(trial);
  };

  if (condition == "baseline") {
    var genderChoice = {
    type: 'instructions',
    pages: ['Now you will see a few groups of human lives that are the same age but differ in gender.<br>Please left click on the one you wish to <b>save</b>. <br><br>Please click "Next" to proceed.'],
    show_clickable_nav: true
    };
  } else if (condition == "negative") {
    var genderChoice = {
     type: 'instructions',
     pages: ['Now you will see a few groups of human lives that are the same age but differ in gender.<br>Please left click on the one you wish to <b>give up</b>. <br><br>Please click "Next" to proceed.'], 
     show_clickable_nav: true
    };
  } else if (condition == "general") {
    var genderChoice = {
    type: 'instructions',
    pages: ['Now you will see a few groups of human lives that are the same age but differ in gender.<br>Please left click on the life the <b>policy should save</b>. <br><br>Please click "Next" to proceed.'],
    show_clickable_nav: true
    };
  };

timeline.push(genderChoice);


  for (var valuesNew of twosilhouettes) {

  timeline.push(fixation);

  var genderTrial = {
      type: 'html-button-response',
      stimulus: valuesNew,
      choices: [' ',' '],
      button_html: ['<button class="jspsych-btn" style = "position:relative; left:-140px; top: -200px">%choice%</button>',//upper left
                    '<button class="jspsych-btn" style = "position:relative; right:-140px; top: -200px">%choice%</button>',] //upper right 
      //prompt: "<p> hello </p>"
  };
  timeline.push(genderTrial);
  };

              

// var trials_with_variables1 = {
//     timeline: [fixation, trial],
//     timeline_variables: pic_list//.slice(0,STIM_N/2)
//     };

// timeline.push(trials_with_variables1);

var debrief_block = {
            type: "html-button-response",
            stimulus: 'Please click the button below to complete the experiment. Thank you! ',
            choices: ' ',
            response_ends_trial: true
            };
        timeline.push(debrief_block);
