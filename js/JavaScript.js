function setFontSize() {
    var screenWidth2 = window.screen.width;
    var screenHeight2 = window.screen.height;
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var aspectRatio = screenWidth2 / screenHeight2;
    const image = document.getElementById('content');

    if (aspectRatio > 1920 / 1080) {
        var fontSize = screenWidth * 0.07;
        document.documentElement.style.fontSize = fontSize + 'px';
        image.style.position = 'absolute';
        image.style.top = '1.5rem';
        image.style.left = '1.5rem';
        image.style.width = '9rem';
        image.style.height = '5rem';
    } else {
        var fontSize = screenWidth / 10;
        document.documentElement.style.fontSize = fontSize + 'px';
    }
}
setFontSize();
window.addEventListener('resize', setFontSize);


function LeftButtomChangeLeft() {
    var input = document.getElementById('TeamChangeInput1');
    var team1 = document.getElementById('team1');
    team1.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput1');
    var team1player1 = document.getElementById('team1player1');
    team1player1.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput2');
    var team1player2 = document.getElementById('team1player2');
    team1player2.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput3');
    var team1player3 = document.getElementById('team1player3');
    team1player3.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput4');
    var team1player4 = document.getElementById('team1player4');
    team1player4.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput5');
    var team1player5 = document.getElementById('team1player5');
    team1player5.innerHTML = input.value;
}

function LeftButtomChangeRight() {
    var input = document.getElementById('TeamChangeInput1');
    var team2 = document.getElementById('team2');
    team2.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput1');
    var team2player6 = document.getElementById('team2player6');
    team2player6.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput2');
    var team2player7 = document.getElementById('team2player7');
    team2player7.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput3');
    var team2player8 = document.getElementById('team2player8');
    team2player8.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput4');
    var team2player9 = document.getElementById('team2player9');
    team2player9.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput5');
    var team2player10 = document.getElementById('team2player10');
    team2player10.innerHTML = input.value;
}

function RightButtomChangeLeft() {
    var input = document.getElementById('TeamChangeInput2');
    var team1 = document.getElementById('team1');
    team1.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput6');
    var team1player1 = document.getElementById('team1player1');
    team1player1.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput7');
    var team1player2 = document.getElementById('team1player2');
    team1player2.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput8');
    var team1player3 = document.getElementById('team1player3');
    team1player3.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput9');
    var team1player4 = document.getElementById('team1player4');
    team1player4.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput10');
    var team1player5 = document.getElementById('team1player5');
    team1player5.innerHTML = input.value;
}

function RightButtomChangeRight() {
    var input = document.getElementById('TeamChangeInput2');
    var team2 = document.getElementById('team2');
    team2.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput6');
    var team2player6 = document.getElementById('team2player6');
    team2player6.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput7');
    var team2player7 = document.getElementById('team2player7');
    team2player7.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput8');
    var team2player8 = document.getElementById('team2player8');
    team2player8.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput9');
    var team2player9 = document.getElementById('team2player9');
    team2player9.innerHTML = input.value;

    var input = document.getElementById('PlayerChangeInput10');
    var team2player10 = document.getElementById('team2player10');
    team2player10.innerHTML = input.value;
}

function fullscreen() {
    var element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ScoreTeam1").addEventListener("change", function () {
        var ScoreTeam1 = this.value;
        var ScoreReplaceTeam1 = document.getElementById("ScoreReplaceTeam1");
        if (ScoreTeam1 === "0") {
            ScoreReplaceTeam1.innerHTML = '<img src="imgs/scores/0.png">';
        } else if (ScoreTeam1 === "1") {
            ScoreReplaceTeam1.innerHTML = '<img src="imgs/scores/1.png">';
        } else if (ScoreTeam1 === "2") {
            ScoreReplaceTeam1.innerHTML = '<img src="imgs/scores/2.png">';
        } else if (ScoreTeam1 === "3") {
            ScoreReplaceTeam1.innerHTML = '<img src="imgs/scores/3.png">';
        } else {
            ScoreReplaceTeam1.innerHTML = '';
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ScoreTeam2").addEventListener("change", function () {
        var ScoreTeam2 = this.value;
        var ScoreReplaceTeam2 = document.getElementById("ScoreReplaceTeam2");
        if (ScoreTeam2 === "0") {
            ScoreReplaceTeam2.innerHTML = '<img src="imgs/scores/0.png">';
        } else if (ScoreTeam2 === "1") {
            ScoreReplaceTeam2.innerHTML = '<img src="imgs/scores/1.png">';
        } else if (ScoreTeam2 === "2") {
            ScoreReplaceTeam2.innerHTML = '<img src="imgs/scores/2.png">';
        } else if (ScoreTeam2 === "3") {
            ScoreReplaceTeam2.innerHTML = '<img src="imgs/scores/3.png">';
        } else {
            ScoreReplaceTeam2.innerHTML = '';
        }
    });
});

var herosbans = [
    {parent: "A", value: "a_ke", text: "阿轲"},
    {parent: "A", value: "ai_lin", text: "艾琳"},
    {parent: "A", value: "an_qi_la", text: "安琪拉"},
    {parent: "A", value: "a_gu_duo", text: "阿古朵"},
    {parent: "A", value: "ao_yin", text: "敖隐"},

    {parent: "B", value: "bai_qi", text: "白起"},
    {parent: "B", value: "bai_li_shou_yue", text: "百里守约"},
    {parent: "B", value: "bai_li_xuan_ce", text: "百里玄策"},
    {parent: "B", value: "bian_que", text: "扁鹊"},
    {parent: "B", value: "bu_zhi_huo_wu", text: "不知火舞"},

    {parent: "C", value: "cai_wen_ji", text: "蔡文姬"},
    {parent: "C", value: "cao_cao", text: "曹操"},
    {parent: "C", value: "chang_e", text: "嫦娥"},
    {parent: "C", value: "cheng_ji_si_han", text: "成吉思汗"},
    {parent: "C", value: "cheng_yao_jin", text: "程咬金"},

    {parent: "D", value: "da_ji", text: "妲己"},
    {parent: "D", value: "da_mo", text: "达摩"},
    {parent: "D", value: "da_qiao", text: "大乔"},
    {parent: "D", value: "da_si_ming", text: "大司命"},
    {parent: "D", value: "di_ren_jie", text: "狄仁杰"},
    {parent: "D", value: "dian_wei", text: "典韦"},
    {parent: "D", value: "diao_chan", text: "貂蝉"},
    {parent: "D", value: "dong_huang_tai_yi", text: "东皇太一"},
    {parent: "D", value: "dun_shan", text: "盾山"},
    {parent: "D", value: "duo_li_ya", text: "朵莉亚"},

    {parent: "E", value: "none", text: "无英雄可选"},

    {parent: "F", value: "fei", text: "暃"},

    {parent: "G", value: "gan_jiang_mo_ye", text: "干将莫邪"},
    {parent: "G", value: "gao_jian_li", text: "高渐离"},
    {parent: "G", value: "ge_ya", text: "戈娅"},
    {parent: "G", value: "gong_sun_li", text: "公孙离"},
    {parent: "G", value: "gong_ben_wu_zang", text: "宫本武藏"},
    {parent: "G", value: "guan_yu", text: "关羽"},
    {parent: "G", value: "gui_gu_zi", text: "鬼谷子"},

    {parent: "H", value: "han_xin", text: "韩信"},
    {parent: "H", value: "hai_yue", text: "海月"},
    {parent: "H", value: "hou_yi", text: "后羿"},
    {parent: "H", value: "hua_mu_lan", text: "花木兰"},
    {parent: "H", value: "huang_zhong", text: "黄忠"},
    {parent: "H", value: "hai_nuo", text: "海诺"},

    {parent: "I", value: "none", text: "无英雄可选"},

    {parent: "J", value: "ji_xiao_man", text: "姬小满"},
    {parent: "J", value: "jiang_zi_ya", text: "姜子牙"},
    {parent: "J", value: "jin_chan", text: "金蝉"},
    {parent: "J", value: "jing", text: "镜"},
    {parent: "J", value: "jia_luo", text: "伽罗"},
    {parent: "J", value: "ju_you_jing", text: "橘右京"},

    {parent: "K", value: "kai", text: "铠"},
    {parent: "K", value: "kuang_tie", text: "狂铁"},

    {parent: "L", value: "lai_xi_ao", text: "莱西奥"},
    {parent: "L", value: "lan_ling_wang", text: "兰陵王"},
    {parent: "L", value: "lan", text: "澜"},
    {parent: "L", value: "lao_fu_zi", text: "老夫子"},
    {parent: "L", value: "li_bai", text: "李白"},
    {parent: "L", value: "li_xin", text: "李信"},
    {parent: "L", value: "li_yuan_fang", text: "李元芳"},
    {parent: "L", value: "lian_po", text: "廉颇"},
    {parent: "L", value: "liu_bang", text: "刘邦"},
    {parent: "L", value: "liu_bei", text: "刘备"},
    {parent: "L", value: "liu_shan", text: "刘禅"},
    {parent: "L", value: "lu_na", text: "露娜"},
    {parent: "L", value: "lu_ban_da_shi", text: "鲁班大师"},
    {parent: "L", value: "lu_ban_qi_hao", text: "鲁班七号"},
    {parent: "L", value: "lv_bu", text: "吕布"},

    {parent: "M", value: "ma_chao", text: "马超"},
    {parent: "M", value: "ma_ke_bo_luo", text: "马可波罗"},
    {parent: "M", value: "meng_tian", text: "蒙恬"},
    {parent: "M", value: "meng_ya", text: "蒙犽"},
    {parent: "M", value: "meng_qi", text: "梦奇"},
    {parent: "M", value: "mi_lai_di", text: "米莱迪"},
    {parent: "M", value: "mi_yue", text: "芈月"},
    {parent: "M", value: "ming_shi_yin", text: "明世隐"},
    {parent: "M", value: "mo_zi", text: "墨子"},

    {parent: "N", value: "ne_zha", text: "哪吒"},
    {parent: "N", value: "na_ke_lu_lu", text: "娜可露露"},
    {parent: "N", value: "niu_mo", text: "牛魔"},
    {parent: "N", value: "nv_wa", text: "女娲"},
   
    {parent: "O", value: "none", text: "无英雄可选"},

    {parent: "P", value: "pan_gu", text: "盘古"},
    {parent: "P", value: "pei_qin_hu", text: "裴擒虎"},

    {parent: "Q", value: "none", text: "无英雄可选"},

    {parent: "R", value: "none", text: "无英雄可选"},

    {parent: "S", value: "sang_qi", text: "桑启"},
    {parent: "S", value: "shang_guan_wan_er", text: "上官婉儿"},
    {parent: "S", value: "shen_meng_xi", text: "沈梦溪"},
    {parent: "S", value: "si_kong_zhen", text: "司空震"},
    {parent: "S", value: "si_ma_yi", text: "司马懿"},
    {parent: "S", value: "su_lie", text: "苏烈"},
    {parent: "S", value: "sun_bin", text: "孙膑"},
    {parent: "S", value: "sun_ce", text: "孙策"},
    {parent: "S", value: "sun_shang_xiang", text: "孙尚香"},
    {parent: "S", value: "sun_wu_kong", text: "孙悟空"},

    {parent: "T", value: "tai_yi_zhen_ren", text: "太乙真人"},

    {parent: "U", value: "none", text: "无英雄可选"},

    {parent: "V", value: "none", text: "无英雄可选"},

    {parent: "W", value: "wang_zhao_jun", text: "王昭君"},
    {parent: "W", value: "wu_ze_tian", text: "武则天"},

    {parent: "X", value: "xi_shi", text: "西施"},
    {parent: "X", value: "xia_hou_dun", text: "夏侯惇"},
    {parent: "X", value: "xia_luo_te", text: "夏洛特"},
    {parent: "X", value: "xiang_yu", text: "项羽"},
    {parent: "X", value: "xiao_qiao", text: "小乔"},

    {parent: "Y", value: "ya_dian_na", text: "雅典娜"},
    {parent: "Y", value: "ya_lian", text: "亚连"},
    {parent: "Y", value: "ya_se", text: "亚瑟"},
    {parent: "Y", value: "yang_jian", text: "杨戬"},
    {parent: "Y", value: "yang_yu_huan", text: "杨玉环"},
    {parent: "Y", value: "yao_2", text: "瑶"},
    {parent: "Y", value: "yao_4", text: "曜"},
    {parent: "Y", value: "yi_xing", text: "弈星"},
    {parent: "Y", value: "ying_zheng", text: "嬴政"},
    {parent: "Y", value: "yu_ji", text: "虞姬"},
    {parent: "Y", value: "yuan_ge", text: "元歌"},
    {parent: "Y", value: "yun_ying", text: "云缨"},
    {parent: "Y", value: "yun_zhong_jun", text: "云中君"},

    {parent: "Z", value: "zhang_fei", text: "张飞"},
    {parent: "Z", value: "zhang_liang", text: "张良"},
    {parent: "Z", value: "zhao_huai_zhen", text: "赵怀真"},
    {parent: "Z", value: "zhao_yun", text: "赵云"},
    {parent: "Z", value: "zhen_ji", text: "甄姬"},
    {parent: "Z", value: "zhong_kui", text: "钟馗"},
    {parent: "Z", value: "zhong_wu_yan", text: "钟无艳"},
    {parent: "Z", value: "zhou_yu", text: "周瑜"},
    {parent: "Z", value: "zhu_ge_liang", text: "诸葛亮"},
    {parent: "Z", value: "zhu_ba_jie", text: "猪八戒"},
    {parent: "Z", value: "zhuang_zhou", text: "庄周"},
];
var herospicks = [
    {parent: "A", value: "a_ke", text: "阿轲"},
    {parent: "A", value: "ai_lin", text: "艾琳"},
    {parent: "A", value: "an_qi_la", text: "安琪拉"},
    {parent: "A", value: "a_gu_duo", text: "阿古朵"},
    {parent: "A", value: "ao_yin", text: "敖隐"},

    {parent: "B", value: "bai_qi", text: "白起"},
    {parent: "B", value: "bai_li_shou_yue", text: "百里守约"},
    {parent: "B", value: "bai_li_xuan_ce", text: "百里玄策"},
    {parent: "B", value: "bian_que", text: "扁鹊"},
    {parent: "B", value: "bu_zhi_huo_wu", text: "不知火舞"},

    {parent: "C", value: "cai_wen_ji", text: "蔡文姬"},
    {parent: "C", value: "cao_cao", text: "曹操"},
    {parent: "C", value: "chang_e", text: "嫦娥"},
    {parent: "C", value: "cheng_ji_si_han", text: "成吉思汗"},
    {parent: "C", value: "cheng_yao_jin", text: "程咬金"},

    {parent: "D", value: "da_ji", text: "妲己"},
    {parent: "D", value: "da_mo", text: "达摩"},
    {parent: "D", value: "da_qiao", text: "大乔"},
    {parent: "D", value: "da_si_ming", text: "大司命"},
    {parent: "D", value: "di_ren_jie", text: "狄仁杰"},
    {parent: "D", value: "dian_wei", text: "典韦"},
    {parent: "D", value: "diao_chan", text: "貂蝉"},
    {parent: "D", value: "dong_huang_tai_yi", text: "东皇太一"},
    {parent: "D", value: "dun_shan", text: "盾山"},
    {parent: "D", value: "duo_li_ya", text: "朵莉亚"},

    {parent: "E", value: "none", text: "无英雄可选"},

    {parent: "F", value: "fei", text: "暃"},

    {parent: "G", value: "gan_jiang_mo_ye", text: "干将莫邪"},
    {parent: "G", value: "gao_jian_li", text: "高渐离"},
    {parent: "G", value: "ge_ya", text: "戈娅"},
    {parent: "G", value: "gong_sun_li", text: "公孙离"},
    {parent: "G", value: "gong_ben_wu_zang", text: "宫本武藏"},
    {parent: "G", value: "guan_yu", text: "关羽"},
    {parent: "G", value: "gui_gu_zi", text: "鬼谷子"},

    {parent: "H", value: "han_xin", text: "韩信"},
    {parent: "H", value: "hai_yue", text: "海月"},
    {parent: "H", value: "hou_yi", text: "后羿"},
    {parent: "H", value: "hua_mu_lan", text: "花木兰"},
    {parent: "H", value: "huang_zhong", text: "黄忠"},
    {parent: "H", value: "hai_nuo", text: "海诺"},

    {parent: "I", value: "none", text: "无英雄可选"},

    {parent: "J", value: "ji_xiao_man", text: "姬小满"},
    {parent: "J", value: "jiang_zi_ya", text: "姜子牙"},
    {parent: "J", value: "jin_chan", text: "金蝉"},
    {parent: "J", value: "jing", text: "镜"},
    {parent: "J", value: "jia_luo", text: "伽罗"},
    {parent: "J", value: "ju_you_jing", text: "橘右京"},

    {parent: "K", value: "kai", text: "铠"},
    {parent: "K", value: "kuang_tie", text: "狂铁"},

    {parent: "L", value: "lai_xi_ao", text: "莱西奥"},
    {parent: "L", value: "lan_ling_wang", text: "兰陵王"},
    {parent: "L", value: "lan", text: "澜"},
    {parent: "L", value: "lao_fu_zi", text: "老夫子"},
    {parent: "L", value: "li_bai", text: "李白"},
    {parent: "L", value: "li_xin", text: "李信"},
    {parent: "L", value: "li_yuan_fang", text: "李元芳"},
    {parent: "L", value: "lian_po", text: "廉颇"},
    {parent: "L", value: "liu_bang", text: "刘邦"},
    {parent: "L", value: "liu_bei", text: "刘备"},
    {parent: "L", value: "liu_shan", text: "刘禅"},
    {parent: "L", value: "lu_na", text: "露娜"},
    {parent: "L", value: "lu_ban_da_shi", text: "鲁班大师"},
    {parent: "L", value: "lu_ban_qi_hao", text: "鲁班七号"},
    {parent: "L", value: "lv_bu", text: "吕布"},

    {parent: "M", value: "ma_chao", text: "马超"},
    {parent: "M", value: "ma_ke_bo_luo", text: "马可波罗"},
    {parent: "M", value: "meng_tian", text: "蒙恬"},
    {parent: "M", value: "meng_ya", text: "蒙犽"},
    {parent: "M", value: "meng_qi", text: "梦奇"},
    {parent: "M", value: "mi_lai_di", text: "米莱迪"},
    {parent: "M", value: "mi_yue", text: "芈月"},
    {parent: "M", value: "ming_shi_yin", text: "明世隐"},
    {parent: "M", value: "mo_zi", text: "墨子"},

    {parent: "N", value: "ne_zha", text: "哪吒"},
    {parent: "N", value: "na_ke_lu_lu", text: "娜可露露"},
    {parent: "N", value: "niu_mo", text: "牛魔"},
    {parent: "N", value: "nv_wa", text: "女娲"},
   
    {parent: "O", value: "none", text: "无英雄可选"},

    {parent: "P", value: "pan_gu", text: "盘古"},
    {parent: "P", value: "pei_qin_hu", text: "裴擒虎"},

    {parent: "Q", value: "none", text: "无英雄可选"},

    {parent: "R", value: "none", text: "无英雄可选"},

    {parent: "S", value: "sang_qi", text: "桑启"},
    {parent: "S", value: "shang_guan_wan_er", text: "上官婉儿"},
    {parent: "S", value: "shen_meng_xi", text: "沈梦溪"},
    {parent: "S", value: "si_kong_zhen", text: "司空震"},
    {parent: "S", value: "si_ma_yi", text: "司马懿"},
    {parent: "S", value: "su_lie", text: "苏烈"},
    {parent: "S", value: "sun_bin", text: "孙膑"},
    {parent: "S", value: "sun_ce", text: "孙策"},
    {parent: "S", value: "sun_shang_xiang", text: "孙尚香"},
    {parent: "S", value: "sun_wu_kong", text: "孙悟空"},

    {parent: "T", value: "tai_yi_zhen_ren", text: "太乙真人"},

    {parent: "U", value: "none", text: "无英雄可选"},

    {parent: "V", value: "none", text: "无英雄可选"},

    {parent: "W", value: "wang_zhao_jun", text: "王昭君"},
    {parent: "W", value: "wu_ze_tian", text: "武则天"},

    {parent: "X", value: "xi_shi", text: "西施"},
    {parent: "X", value: "xia_hou_dun", text: "夏侯惇"},
    {parent: "X", value: "xia_luo_te", text: "夏洛特"},
    {parent: "X", value: "xiang_yu", text: "项羽"},
    {parent: "X", value: "xiao_qiao", text: "小乔"},

    {parent: "Y", value: "ya_dian_na", text: "雅典娜"},
    {parent: "Y", value: "ya_lian", text: "亚连"},
    {parent: "Y", value: "ya_se", text: "亚瑟"},
    {parent: "Y", value: "yang_jian", text: "杨戬"},
    {parent: "Y", value: "yang_yu_huan", text: "杨玉环"},
    {parent: "Y", value: "yao_2", text: "瑶"},
    {parent: "Y", value: "yao_4", text: "曜"},
    {parent: "Y", value: "yi_xing", text: "弈星"},
    {parent: "Y", value: "ying_zheng", text: "嬴政"},
    {parent: "Y", value: "yu_ji", text: "虞姬"},
    {parent: "Y", value: "yuan_ge", text: "元歌"},
    {parent: "Y", value: "yun_ying", text: "云缨"},
    {parent: "Y", value: "yun_zhong_jun", text: "云中君"},

    {parent: "Z", value: "zhang_fei", text: "张飞"},
    {parent: "Z", value: "zhang_liang", text: "张良"},
    {parent: "Z", value: "zhao_huai_zhen", text: "赵怀真"},
    {parent: "Z", value: "zhao_yun", text: "赵云"},
    {parent: "Z", value: "zhen_ji", text: "甄姬"},
    {parent: "Z", value: "zhong_kui", text: "钟馗"},
    {parent: "Z", value: "zhong_wu_yan", text: "钟无艳"},
    {parent: "Z", value: "zhou_yu", text: "周瑜"},
    {parent: "Z", value: "zhu_ge_liang", text: "诸葛亮"},
    {parent: "Z", value: "zhu_ba_jie", text: "猪八戒"},
    {parent: "Z", value: "zhuang_zhou", text: "庄周"},
];

function populateOptions(selectId, options) {
    var selectList = document.getElementById(selectId);
    selectList.innerHTML = "";

    options.forEach(function (option) {
        var optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.text = option.text;
        selectList.appendChild(optionElement);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("BanList").addEventListener("change", function () {
        var selectedValue = this.value;
        var filteredOptions = herospicks.filter(function (option) {
            return option.parent === selectedValue;
        });
        populateOptions("BanSelectName", filteredOptions);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("PickHeroList").addEventListener("change", function () {
        var selectedValue2 = this.value;
        var filteredOptions2 = herospicks.filter(function (option) {
            return option.parent === selectedValue2;
        });
        populateOptions("PickHeroName", filteredOptions2);
    });
});


function showImage1() { // BAN1
    var HeroBanList = document.getElementById("BanSelectName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("ban1place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/bans/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function showImage2() { // BAN2
    var HeroBanList = document.getElementById("BanSelectName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("ban2place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/bans/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function showImage3() { // BAN3
    var HeroBanList = document.getElementById("BanSelectName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("ban3place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/bans/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function showImage4() { // BAN4
    var HeroBanList = document.getElementById("BanSelectName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("ban4place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/bans/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function showImage5() { // BAN5
    var HeroBanList = document.getElementById("BanSelectName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("ban5place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/bans/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function showImage6() { // BAN6
    var HeroBanList = document.getElementById("BanSelectName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("ban6place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/bans/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function showImage7() { // BAN7
    var HeroBanList = document.getElementById("BanSelectName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("ban7place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/bans/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function showImage8() { // BAN8
    var HeroBanList = document.getElementById("BanSelectName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("ban8place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/bans/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}

function SureBan1() { //SureBan1
    var imageContainer = document.getElementById('ban1sureplace');
    var existingImg = document.querySelector('#ban1sureplace img');
    if (existingImg) {
        setTimeout(function() {
            imageContainer.removeChild(existingImg);
        }, 10); 
    } 
    else {
        var img = document.createElement('img');
        img.src = 'imgs/Ban.png'; 
        img.classList.add('image-BAN');
        imageContainer.appendChild(img);
        setTimeout(function() {
            img.classList.add('show');
        }, 10);
    }
}
function SureBan2() { //SureBan2
    var imageContainer = document.getElementById('ban2sureplace');
    var existingImg = document.querySelector('#ban2sureplace img');
    if (existingImg) {
        setTimeout(function() {
            imageContainer.removeChild(existingImg);
        }, 10); 
    } 
    else {
        var img = document.createElement('img');
        img.src = 'imgs/Ban.png'; 
        img.classList.add('image-BAN');
        imageContainer.appendChild(img);
        setTimeout(function() {
            img.classList.add('show');
        }, 10);
    }
}
function SureBan3() { //SureBan3
    var imageContainer = document.getElementById('ban3sureplace');
    var existingImg = document.querySelector('#ban3sureplace img');
    if (existingImg) {
        setTimeout(function() {
            imageContainer.removeChild(existingImg);
        }, 10); 
    } 
    else {
        var img = document.createElement('img');
        img.src = 'imgs/Ban.png'; 
        img.classList.add('image-BAN');
        imageContainer.appendChild(img);
        setTimeout(function() {
            img.classList.add('show');
        }, 10);
    }
}
function SureBan4() { //SureBan4
    var imageContainer = document.getElementById('ban4sureplace');
    var existingImg = document.querySelector('#ban4sureplace img');
    if (existingImg) {
        setTimeout(function() {
            imageContainer.removeChild(existingImg);
        }, 10); 
    } 
    else {
        var img = document.createElement('img');
        img.src = 'imgs/Ban.png'; 
        img.classList.add('image-BAN');
        imageContainer.appendChild(img);
        setTimeout(function() {
            img.classList.add('show');
        }, 10);
    }
}
function SureBan5() { //SureBan5
    var imageContainer = document.getElementById('ban5sureplace');
    var existingImg = document.querySelector('#ban5sureplace img');
    if (existingImg) {
        setTimeout(function() {
            imageContainer.removeChild(existingImg);
        }, 10); 
    } 
    else {
        var img = document.createElement('img');
        img.src = 'imgs/Ban.png'; 
        img.classList.add('image-BAN');
        imageContainer.appendChild(img);
        setTimeout(function() {
            img.classList.add('show');
        }, 10);
    }
}
function SureBan6() { //SureBan6
    var imageContainer = document.getElementById('ban6sureplace');
    var existingImg = document.querySelector('#ban6sureplace img');
    if (existingImg) {
        setTimeout(function() {
            imageContainer.removeChild(existingImg);
        }, 10); 
    } 
    else {
        var img = document.createElement('img');
        img.src = 'imgs/Ban.png'; 
        img.classList.add('image-BAN');
        imageContainer.appendChild(img);
        setTimeout(function() {
            img.classList.add('show');
        }, 10);
    }
}
function SureBan7() { //SureBan7
    var imageContainer = document.getElementById('ban7sureplace');
    var existingImg = document.querySelector('#ban7sureplace img');
    if (existingImg) {
        setTimeout(function() {
            imageContainer.removeChild(existingImg);
        }, 10); 
    } 
    else {
        var img = document.createElement('img');
        img.src = 'imgs/Ban.png'; 
        img.classList.add('image-BAN');
        imageContainer.appendChild(img);
        setTimeout(function() {
            img.classList.add('show');
        }, 10);
    }
}
function SureBan8() { //SureBan8
    var imageContainer = document.getElementById('ban8sureplace');
    var existingImg = document.querySelector('#ban8sureplace img');
    if (existingImg) {
        setTimeout(function() {
            imageContainer.removeChild(existingImg);
        }, 10); 
    } 
    else {
        var img = document.createElement('img');
        img.src = 'imgs/Ban.png'; 
        img.classList.add('image-BAN');
        imageContainer.appendChild(img);
        setTimeout(function() {
            img.classList.add('show');
        }, 10);
    }
}

function Player1PickHero() { //PICK1
    var HeroPickList = document.getElementById("PickHeroName");
    var selectedValue = HeroPickList.value;

    var imageContainer = document.getElementById("pick1place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/heros/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-PICK");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player2PickHero() { //PICK2
    var HeroPickList = document.getElementById("PickHeroName");
    var selectedValue = HeroPickList.value;

    var imageContainer = document.getElementById("pick2place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/heros/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-PICK");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player3PickHero() { //PICK3
    var HeroPickList = document.getElementById("PickHeroName");
    var selectedValue = HeroPickList.value;

    var imageContainer = document.getElementById("pick3place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/heros/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-PICK");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player4PickHero() { //PICK4
    var HeroPickList = document.getElementById("PickHeroName");
    var selectedValue = HeroPickList.value;

    var imageContainer = document.getElementById("pick4place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/heros/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-PICK");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player5PickHero() { //PICK5
    var HeroPickList = document.getElementById("PickHeroName");
    var selectedValue = HeroPickList.value;

    var imageContainer = document.getElementById("pick5place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/heros/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-PICK");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player6PickHero() { //PICK6
    var HeroPickList = document.getElementById("PickHeroName");
    var selectedValue = HeroPickList.value;

    var imageContainer = document.getElementById("pick6place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/heros/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-PICK2");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player7PickHero() { //PICK7
    var HeroPickList = document.getElementById("PickHeroName");
    var selectedValue = HeroPickList.value;

    var imageContainer = document.getElementById("pick7place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/heros/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-PICK2");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player8PickHero() { //PICK8
    var HeroPickList = document.getElementById("PickHeroName");
    var selectedValue = HeroPickList.value;

    var imageContainer = document.getElementById("pick8place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/heros/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-PICK2");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player9PickHero() { //PICK9
    var HeroPickList = document.getElementById("PickHeroName");
    var selectedValue = HeroPickList.value;

    var imageContainer = document.getElementById("pick9place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/heros/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-PICK2");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player10PickHero() { //PICK10
    var HeroPickList = document.getElementById("PickHeroName");
    var selectedValue = HeroPickList.value;

    var imageContainer = document.getElementById("pick10place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/heros/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-PICK2");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById('startButton');
    var ban1sure = document.getElementById('ban1sure');
    var ban2sure = document.getElementById('ban2sure');
    var ban3sure = document.getElementById('ban3sure');
    var ban4sure = document.getElementById('ban4sure');
    var ban5sure = document.getElementById('ban5sure');
    var ban6sure = document.getElementById('ban6sure');
    var ban7sure = document.getElementById('ban7sure');
    var ban8sure = document.getElementById('ban8sure');
    var pick1sure = document.getElementById('pick1sure');
    var pick2sure = document.getElementById('pick2sure');
    var pick3sure = document.getElementById('pick3sure');
    var pick4sure = document.getElementById('pick4sure');
    var pick5sure = document.getElementById('pick5sure');
    var pick6sure = document.getElementById('pick6sure');
    var resetbp = document.getElementById('resetbp');
    var pick7sure = document.getElementById('pick7sure');
    //var pick8sure = document.getElementById('pick8sure');
    //var pick9sure = document.getElementById('pick9sure');
    //var pick10sure = document.getElementById('pick10sure');
    var countdownInterval;

    resetbp.addEventListener('click',function(){

        var imageContainer = document.getElementById('ban1sureplace');
        var imageContainer2 = document.getElementById('ban2sureplace');
        var imageContainer3 = document.getElementById('ban3sureplace');
        var imageContainer4 = document.getElementById('ban4sureplace');
        var imageContainer5 = document.getElementById('ban5sureplace');
        var imageContainer6 = document.getElementById('ban6sureplace');
        var imageContainer7 = document.getElementById('ban7sureplace');
        var imageContainer8 = document.getElementById('ban8sureplace');

        var existingImg = document.querySelector('#ban1sureplace img');
        var existingImg2 = document.querySelector('#ban2sureplace img');
        var existingImg3 = document.querySelector('#ban3sureplace img');
        var existingImg4 = document.querySelector('#ban4sureplace img');
        var existingImg5 = document.querySelector('#ban5sureplace img');
        var existingImg6 = document.querySelector('#ban6sureplace img');
        var existingImg7 = document.querySelector('#ban7sureplace img');
        var existingImg8 = document.querySelector('#ban8sureplace img');

        if (existingImg,existingImg2,existingImg3,existingImg4,existingImg5,existingImg6,existingImg7,existingImg8) {
            setTimeout(function() {
                imageContainer.removeChild(existingImg);
                imageContainer2.removeChild(existingImg2);
                imageContainer3.removeChild(existingImg3);
                imageContainer4.removeChild(existingImg4);
                imageContainer5.removeChild(existingImg5);
                imageContainer6.removeChild(existingImg6);
                imageContainer7.removeChild(existingImg7);
                imageContainer8.removeChild(existingImg8);
            }, 10); 

        }
        startButton.style.display = 'block';
        countdownDisplay.style.display = 'none';

        ban1sure.style.display = 'none'
        ban2sure.style.display = 'none'
        ban3sure.style.display = 'none' 
        ban4sure.style.display = 'none' 
        ban5sure.style.display = 'none' 
        ban6sure.style.display = 'none' 
        ban7sure.style.display = 'none' 
        ban8sure.style.display = 'none' 

        pick1sure.style.display = 'none' 
        pick2sure.style.display = 'none' 
        pick3sure.style.display = 'none' 
        pick4sure.style.display = 'none' 
        pick5sure.style.display = 'none' 
        pick6sure.style.display = 'none' 

        pick1btn.style.display = 'none'
        pick2btn.style.display = 'none' 
        pick3btn.style.display = 'none' 
        pick4btn.style.display = 'none' 
        pick5btn.style.display = 'none' 
        pick6btn.style.display = 'none' 
        pick7btn.style.display = 'none' 
        pick8btn.style.display = 'none' 
        pick9btn.style.display = 'none' 
        pick10btn.style.display = 'none' 

        ban1btn.style.display = 'none'
        ban2btn.style.display = 'none' 
        ban3btn.style.display = 'none' 
        ban4btn.style.display = 'none' 
        ban5btn.style.display = 'none' 
        ban6btn.style.display = 'none' 
        ban7btn.style.display = 'none' 
        ban8btn.style.display = 'none' 
    })
    startButton.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        startButton.style.display = 'none'; // 隐藏按钮
        countdownDisplay.style.display = 'block';
        ban1btn.style.display = 'block';
        ban1sure.style.display = 'block';

    })
    pick1sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        pick1sure.style.display = 'none'; // 隐藏按钮
        pick2btn.style.display = 'block'
        pick3btn.style.display = 'block'
        pick2sure.style.display = 'block';
    })
    pick2sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        pick2sure.style.display = 'none'; // 隐藏按钮
        pick4btn.style.display = 'block';
        pick5btn.style.display = 'block';
        pick3sure.style.display = 'block';
    })
    pick3sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        pick3sure.style.display = 'none'; // 隐藏按钮
        pick6btn.style.display = 'block';
        pick4sure.style.display = 'block';
    })
    pick4sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        pick4sure.style.display = 'none'; // 隐藏按钮
        ban3btn.style.display = 'block';
        ban3sure.style.display = 'block';
    })
    pick5sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        pick5sure.style.display = 'none'; // 隐藏按钮
        pick8btn.style.display = 'block';
        pick9btn.style.display = 'block';
        pick6sure.style.display = 'block';
    })
    pick6sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        pick6sure.style.display = 'none'; // 隐藏按钮
        pick10btn.style.display = 'block';
        pick7sure.style.display = 'block';
    })
    pick7sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        countdownDisplay.style.display = 'none';
        pick7sure.style.display = 'none'; // 隐藏按钮
        skill1btn.style.display = 'block';
        skill2btn.style.display = 'block';
        skill3btn.style.display = 'block';
        skill4btn.style.display = 'block';
        skill5btn.style.display = 'block';
        skill6btn.style.display = 'block';
        skill7btn.style.display = 'block';
        skill8btn.style.display = 'block';
        skill9btn.style.display = 'block';
        skill10btn.style.display = 'block';
    })
    // pick8sure.addEventListener('click', function() {
    //     if (countdownInterval) {
    //         clearInterval(countdownInterval);
    //     }
    //     startCountdown();
    //     pick8sure.style.display = 'none'; // 隐藏按钮
    // })
    // pick9sure.addEventListener('click', function() {
    //     if (countdownInterval) {
    //         clearInterval(countdownInterval);
    //     }
    //     startCountdown();
    //     pick9sure.style.display = 'none'; // 隐藏按钮
    // })
    // pick10sure.addEventListener('click', function() {
    //     if (countdownInterval) {
    //         clearInterval(countdownInterval);
    //     }
    //     //startCountdown();
    //     countdownDisplay.style.display = 'none';
    //     pick10sure.style.display = 'none'; // 隐藏按钮
    // })

    ban1sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        ban1sure.style.display = 'none'; // 隐藏按钮
        ban8btn.style.display = 'block';
        ban8sure.style.display = 'block';
    })
    ban2sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        ban2sure.style.display = 'none'; // 隐藏按钮
        ban7btn.style.display = 'block';
        ban7sure.style.display = 'block';
    })
    ban3sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        ban3sure.style.display = 'none'; // 隐藏按钮
        ban6btn.style.display = 'block';
        ban6sure.style.display = 'block';
    })
    ban4sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        ban4sure.style.display = 'none'; // 隐藏按钮
        ban5btn.style.display = 'block';
        ban5sure.style.display = 'block';
    })
    ban5sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        ban5sure.style.display = 'none'; // 隐藏按钮
        pick7btn.style.display = 'block';
        pick5sure.style.display = 'block';
    })
    ban6sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        ban6sure.style.display = 'none'; // 隐藏按钮
        ban4btn.style.display = 'block';
        ban4sure.style.display = 'block';
    })
    ban7sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        ban7sure.style.display = 'none'; // 隐藏按钮
        pick1btn.style.display = 'block';
        pick1sure.style.display = 'block';
    })
    ban8sure.addEventListener('click', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown();
        ban8sure.style.display = 'none'; // 隐藏按钮
        ban2btn.style.display = 'block';
        ban2sure.style.display = 'block';
    });

    function startCountdown() {
        var countdownDisplay = document.getElementById('countdownDisplay');
        var timeLeft = 30;

        countdownDisplay.textContent = formatTime(timeLeft); // 初始显示
        countdownDisplay.classList.add('flashing');

        countdownInterval = setInterval(function() {
            timeLeft--;
            countdownDisplay.textContent = formatTime(timeLeft); // 更新显示

            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                countdownDisplay.textContent = "00";
                countdownDisplay.classList.remove('flashing');
            //     startButton.style.display = 'block'; // 倒计时结束后显示按钮
            }
        }, 1000);
    }
    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }
});
function ChangeSrue() {
    var select1Value = document.getElementById('changehero').value;
    var select2Value = document.getElementById('changehero2').value;

    document.getElementById('result').innerHTML = '';

    if (select1Value && select2Value) {
        var functionName = select1Value + '_' + select2Value;
        if (typeof window[functionName] === 'function') {
            window[functionName]();
        } else {
            document.getElementById('result').innerHTML = '没有找到对应的函数';
        }
    }
}
function ChangeSrue2() {
    var select1Value = document.getElementById('changehero3').value;
    var select2Value = document.getElementById('changehero4').value;

    document.getElementById('result').innerHTML = '';

    if (select1Value && select2Value) {
        var functionName = select1Value + '_' + select2Value;
        if (typeof window[functionName] === 'function') {
            window[functionName]();
        } else {
            document.getElementById('result').innerHTML = '没有找到对应的函数';
        }
    }
}
//P1-P5
function P1_P2() {
    document.getElementById('result').innerHTML = '执行函数 P1_P2';
    var pick1Container = document.getElementById("pick1place");
    var pick2Container = document.getElementById("pick2place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P2_P1 = P1_P2
function P1_P3() {
    document.getElementById('result').innerHTML = '执行函数 P1_P3';
    var pick1Container = document.getElementById("pick1place");
    var pick2Container = document.getElementById("pick3place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P3_P1 = P1_P3
function P1_P4() {
    document.getElementById('result').innerHTML = '执行函数 P1_P4';
    var pick1Container = document.getElementById("pick1place");
    var pick2Container = document.getElementById("pick4place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P4_P1 = P1_P4
function P1_P5() {
    document.getElementById('result').innerHTML = '执行函数 P1_P5';
    var pick1Container = document.getElementById("pick1place");
    var pick2Container = document.getElementById("pick5place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P5_P1 = P1_P5
function P2_P3() {
    document.getElementById('result').innerHTML = '执行函数 P2_P3';
    var pick1Container = document.getElementById("pick2place");
    var pick2Container = document.getElementById("pick3place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P3_P2 = P2_P3
function P2_P4() {
    document.getElementById('result').innerHTML = '执行函数 P2_P4';
    var pick1Container = document.getElementById("pick2place");
    var pick2Container = document.getElementById("pick4place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P4_P2 = P2_P4
function P2_P5() {
    document.getElementById('result').innerHTML = '执行函数 P2_P5';
    var pick1Container = document.getElementById("pick2place");
    var pick2Container = document.getElementById("pick5place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P5_P2 = P2_P5
function P3_P4() {
    document.getElementById('result').innerHTML = '执行函数 P3_P4';
    var pick1Container = document.getElementById("pick3place");
    var pick2Container = document.getElementById("pick4place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P4_P3 = P3_P4
function P3_P5() {
    document.getElementById('result').innerHTML = '执行函数 P3_P5';
    var pick1Container = document.getElementById("pick3place");
    var pick2Container = document.getElementById("pick5place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P5_P3 = P3_P5
function P4_P5() {
    document.getElementById('result').innerHTML = '执行函数 P4_P5';
    var pick1Container = document.getElementById("pick4place");
    var pick2Container = document.getElementById("pick5place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P5_P4 = P4_P5
//P6-P10 //6 = 10 //7 = 9 //8 = 8 //9 = 7 //10 = 6
function P6_P7() {
    document.getElementById('result').innerHTML = '执行函数 P6_P7';
    var pick1Container = document.getElementById("pick9place");
    var pick2Container = document.getElementById("pick10place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P7_P6 = P6_P7
function P6_P8() {
    document.getElementById('result').innerHTML = '执行函数 P6_P8';
    var pick1Container = document.getElementById("pick8place");
    var pick2Container = document.getElementById("pick10place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P8_P6 = P6_P8
function P6_P9() {
    document.getElementById('result').innerHTML = '执行函数 P6_P9';
    var pick1Container = document.getElementById("pick7place");
    var pick2Container = document.getElementById("pick10place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P9_P6 = P6_P9
function P6_P10() {
    document.getElementById('result').innerHTML = '执行函数 P6_P10';
    var pick1Container = document.getElementById("pick6place");
    var pick2Container = document.getElementById("pick10place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P10_P6 = P6_P10
function P7_P8() {
    document.getElementById('result').innerHTML = '执行函数 P7_P8';
    var pick1Container = document.getElementById("pick9place");
    var pick2Container = document.getElementById("pick8place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P8_P7 = P7_P8
function P7_P9() {
    document.getElementById('result').innerHTML = '执行函数 P7_P9';
    var pick1Container = document.getElementById("pick7place");
    var pick2Container = document.getElementById("pick9place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P9_P7 = P7_P9
function P7_P10() {
    document.getElementById('result').innerHTML = '执行函数 P7_P10';
    var pick1Container = document.getElementById("pick6place");
    var pick2Container = document.getElementById("pick9place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P10_P7 = P7_P10
function P8_P9() {
    document.getElementById('result').innerHTML = '执行函数 P8_P9';
    var pick1Container = document.getElementById("pick7place");
    var pick2Container = document.getElementById("pick8place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P9_P8 = P8_P9
function P8_P10() {
    document.getElementById('result').innerHTML = '执行函数 P8_P10';
    var pick1Container = document.getElementById("pick6place");
    var pick2Container = document.getElementById("pick8place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P10_P8 = P8_P10
function P9_P10() {
    document.getElementById('result').innerHTML = '执行函数 P9_P10';
    var pick1Container = document.getElementById("pick6place");
    var pick2Container = document.getElementById("pick7place");

    var pick1Image = pick1Container.querySelector("img");
    var pick2Image = pick2Container.querySelector("img");

    if (pick1Image && pick2Image) {
        var tempSrc = pick1Image.src;
        var tempAlt = pick1Image.alt;

        pick1Image.src = pick2Image.src;
        pick1Image.alt = pick2Image.alt;

        pick2Image.src = tempSrc;
        pick2Image.alt = tempAlt;
    }
}
var P10_P9 = P9_P10

var skillslist = [
    {parent: "skills", value: "cheng_ji", text: "惩击"},
    {parent: "skills", value: "gan_rao", text: "干扰"},
    {parent: "skills", value: "ji_pao", text: "疾跑"},
    {parent: "skills", value: "jing_hua", text: "净化"},
    {parent: "skills", value: "kuang_bao", text: "狂暴"},
    {parent: "skills", value: "ruo_hua", text: "弱化"},
    {parent: "skills", value: "shan_xian", text: "闪现"},
    {parent: "skills", value: "yun_xuan", text: "晕眩"},
    {parent: "skills", value: "zhi_liao", text: "治疗"},
    {parent: "skills", value: "zhong_jie", text: "终结"},
];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("TheSkills").addEventListener("change", function () {
        var selectedValue = this.value;
        var filteredOptions = skillslist.filter(function (option) {
            return option.parent === selectedValue;
        });
        populateOptions("TheSkillsName", filteredOptions);
    });
});

function Player1Skill() { // SKILL1
    var HeroBanList = document.getElementById("TheSkillsName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("skill1place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/skills/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player2Skill() { // SKILL2
    var HeroBanList = document.getElementById("TheSkillsName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("skill2place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/skills/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player3Skill() { // SKILL3
    var HeroBanList = document.getElementById("TheSkillsName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("skill3place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/skills/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player4Skill() { // SKILL4
    var HeroBanList = document.getElementById("TheSkillsName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("skill4place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/skills/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player5Skill() { // SKILL5
    var HeroBanList = document.getElementById("TheSkillsName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("skill5place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/skills/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player6Skill() { // SKILL6
    var HeroBanList = document.getElementById("TheSkillsName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("skill6place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/skills/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player7Skill() { // SKILL7
    var HeroBanList = document.getElementById("TheSkillsName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("skill7place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/skills/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player8Skill() { // SKILL8
    var HeroBanList = document.getElementById("TheSkillsName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("skill8place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/skills/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player9Skill() { // SKILL9
    var HeroBanList = document.getElementById("TheSkillsName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("skill9place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/skills/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}
function Player10Skill() { // SKILL10
    var HeroBanList = document.getElementById("TheSkillsName");
    var selectedValue = HeroBanList.value;

    var imageContainer = document.getElementById("skill10place");
    imageContainer.innerHTML = "";

    if (selectedValue) {
        var imageSrc = "imgs/skills/" + selectedValue + ".png";
        var imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = selectedValue;
        imageElement.classList.add("image-BAN");
        imageContainer.appendChild(imageElement);
        imageElement.offsetWidth;
        imageElement.classList.add("show");
    }
}

function Player1Skill2(skillName) {
    var imageContainer = document.getElementById("skill1place");
    imageContainer.innerHTML = "";

    if (!skillName) {
        skillName = "shan_xian";
    }
    var imageSrc = "imgs/skills/" + skillName + ".png";
    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = skillName;
    imageElement.classList.add("image-BAN");
    imageContainer.appendChild(imageElement);
    imageElement.offsetWidth;
    imageElement.classList.add("show");
}
function Player2Skill2(skillName) {
    var imageContainer = document.getElementById("skill2place");
    imageContainer.innerHTML = "";

    if (!skillName) {
        skillName = "shan_xian";
    }
    var imageSrc = "imgs/skills/" + skillName + ".png";
    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = skillName;
    imageElement.classList.add("image-BAN");
    imageContainer.appendChild(imageElement);
    imageElement.offsetWidth;
    imageElement.classList.add("show");
}
function Player3Skill2(skillName) {
    var imageContainer = document.getElementById("skill3place");
    imageContainer.innerHTML = "";

    if (!skillName) {
        skillName = "shan_xian";
    }
    var imageSrc = "imgs/skills/" + skillName + ".png";
    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = skillName;
    imageElement.classList.add("image-BAN");
    imageContainer.appendChild(imageElement);
    imageElement.offsetWidth;
    imageElement.classList.add("show");
}
function Player4Skill2(skillName) {
    var imageContainer = document.getElementById("skill4place");
    imageContainer.innerHTML = "";

    if (!skillName) {
        skillName = "shan_xian";
    }
    var imageSrc = "imgs/skills/" + skillName + ".png";
    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = skillName;
    imageElement.classList.add("image-BAN");
    imageContainer.appendChild(imageElement);
    imageElement.offsetWidth;
    imageElement.classList.add("show");
}
function Player5Skill2(skillName) {
    var imageContainer = document.getElementById("skill5place");
    imageContainer.innerHTML = "";

    if (!skillName) {
        skillName = "shan_xian";
    }
    var imageSrc = "imgs/skills/" + skillName + ".png";
    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = skillName;
    imageElement.classList.add("image-BAN");
    imageContainer.appendChild(imageElement);
    imageElement.offsetWidth;
    imageElement.classList.add("show");
}
function Player6Skill2(skillName) {
    var imageContainer = document.getElementById("skill6place");
    imageContainer.innerHTML = "";

    if (!skillName) {
        skillName = "shan_xian";
    }
    var imageSrc = "imgs/skills/" + skillName + ".png";
    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = skillName;
    imageElement.classList.add("image-BAN");
    imageContainer.appendChild(imageElement);
    imageElement.offsetWidth;
    imageElement.classList.add("show");
}
function Player7Skill2(skillName) {
    var imageContainer = document.getElementById("skill7place");
    imageContainer.innerHTML = "";

    if (!skillName) {
        skillName = "shan_xian";
    }
    var imageSrc = "imgs/skills/" + skillName + ".png";
    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = skillName;
    imageElement.classList.add("image-BAN");
    imageContainer.appendChild(imageElement);
    imageElement.offsetWidth;
    imageElement.classList.add("show");
}
function Player8Skill2(skillName) {
    var imageContainer = document.getElementById("skill8place");
    imageContainer.innerHTML = "";

    if (!skillName) {
        skillName = "shan_xian";
    }
    var imageSrc = "imgs/skills/" + skillName + ".png";
    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = skillName;
    imageElement.classList.add("image-BAN");
    imageContainer.appendChild(imageElement);
    imageElement.offsetWidth;
    imageElement.classList.add("show");
}
function Player9Skill2(skillName) {
    var imageContainer = document.getElementById("skill9place");
    imageContainer.innerHTML = "";

    if (!skillName) {
        skillName = "shan_xian";
    }
    var imageSrc = "imgs/skills/" + skillName + ".png";
    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = skillName;
    imageElement.classList.add("image-BAN");
    imageContainer.appendChild(imageElement);
    imageElement.offsetWidth;
    imageElement.classList.add("show");
}
function Player10Skill2(skillName) {
    var imageContainer = document.getElementById("skill10place");
    imageContainer.innerHTML = "";

    if (!skillName) {
        skillName = "shan_xian";
    }
    var imageSrc = "imgs/skills/" + skillName + ".png";
    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = skillName;
    imageElement.classList.add("image-BAN");
    imageContainer.appendChild(imageElement);
    imageElement.offsetWidth;
    imageElement.classList.add("show");
}