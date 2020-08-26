/* 
 * Application : CICD Test Application
 * ClassName   : sys_script_fix
 * Created On  : 2020-08-26 12:29:18
 * Created By  : admin
 * Updated On  : 2020-08-26 12:29:18
 * Updated By  : admin
 * URL         : /sys_script_fix.do?sys_id=7cb737eadbbe5010fcf41780399619cf
 */
var gr = new GlideQuery('sys_user')
    .where('userSTARTSWITHad')
    .select()
    .forEach(function(r){
      gs.log(r);
    });
