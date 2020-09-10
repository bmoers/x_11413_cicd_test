/* 
 * Application : CICD Test Application
 * ClassName   : sys_script_fix
 * Created On  : 2020-08-18 21:03:41
 * Created By  : admin
 * Updated On  : 2020-08-18 21:03:41
 * Updated By  : admin
 * URL         : /sys_script_fix.do?sys_id=e8a02898db3a5490fcf41780399619d2
 */
var gr = new GlideQuery('sys_user')
    .where('userSTARTSWITHad')
    .select()
    .forEach(function(r){
      gs.log(r);
    });
