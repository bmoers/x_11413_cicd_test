/* 
 * Application : CICD Test Application
 * ClassName   : sys_script_fix
 * Created On  : 2020-08-26 12:33:10
 * Created By  : admin
 * Updated On  : 2020-08-26 12:33:10
 * Updated By  : admin
 * URL         : /sys_script_fix.do?sys_id=5198ffeedbbe5010fcf4178039961906
 */
var gr = new GlideQuery('sys_user')
    .where('userSTARTSWITHad')
    .select()
    .forEach(function(r){
      gs.log(r);
    });
