/*
 * @Author: tackchen
 * @Date: 2021-11-17 14:54:43
 * @LastEditors: tackchen
 * @FilePath: \type\src\object\enemy.js
 * @Description: Coding something
 */
import J from 'jetterjs';
import {getDieImg, getEnemyImg} from '../resource';
import {Const, Game, Size} from '../store';

let EnemySpeed = 0;
let EnemySpeedMax = 5;

initEnemySpeed();


export function initEnemySpeed () {
    EnemySpeed = 1;
}

export function setEnemySpeed (speed, max) {
    EnemySpeed = speed;
    if (max) EnemySpeedMax = max;
}

export function addEnemySpeed () {
    if (EnemySpeed >= EnemySpeedMax) return;

    if (Game.loopIndex % 200 === 0) {
        EnemySpeed += 0.1;
    }
}
 
export const singleWord = ['与丐丑专中丰丹为之乌书予云互五井亢什仁仅仆仇今介仍从仑仓允元公六兮内临举亭亮亲侮侯侵万丈三上下个丫丸久么义乞也习乡于亏亡亿凡刃勺千卫叉口土士夕大女子便两严串丽乱亨亩伯估伴伸伺似但位低住佐佑体何余佛作促俄俊俏俐俑俗俘保俞罗者耶肃股肢肤肥肩信俩俪俭修兹养冒冠剃削前', ['希望', '憧憬', '友爱', '团结', '合作', '愉快', '勤奋', '刻苦', '认真', '专注', '钻研', '踏实', '勤恳', '潇洒', '坚强', '美丽', '漂亮', '自信', '干净', '壮观', '小巧', '玲珑', '健壮', '慈祥', '温柔', '赞许', '欣喜', '安详', '坦然', '腼腆', '害羞', '优美', '努力', '爱心', '甜蜜', '积极', '友好', '自信', '勇敢', '坚定', '整齐', '俏丽', '端庄', '文静', '动人', '典雅', '豁达', '美满', '和谐', '尊敬', '快乐', '舒心', '整洁', '温暖', '舒服', '称赞', '简洁', '秀丽', '妩媚', '可爱', '匀称', '标致', '喜悦', '感激', '欣慰', '甜美', '魅力', '优秀', '幸福', '兴奋', '英俊', '关切', '坚强', '清净', '欢喜', '消瘦', '细挑', '富态', '富相', '臃肿', '丽质', '标致', '精悍', '短小', '粗实', '粗犷', '笨重', '黑瘦', '彪壮', '强健', '刚健', '单薄', '憔悴', '纤弱', '秀丽', '巍峨', '高耸', '陡峭', '聪慧', '大方', '俏丽', '俊秀', '帅气', '潇洒', '迷人', '魅力', '美丽', '可爱', '陶醉', '吟诵', '风铃', '悦耳', '清脆', '动听', '优美', '消瘦', '细挑', '富态', '富相', '臃肿', '干瘪', '丽质', '黑瘦', '彪壮', '强健', '刚健', '单薄', '憔悴', '肥大', '耳廓', '瘦削', '耳轮', '耳垂', '浓黑', '细长', '浓重', '墨黑', '粗长', '媚眼', '杏眼', '斜眼', '美目', '俊目', '秀目', '朗目', '星眸', '失望', '慈祥', '敏锐', '呆滞', '凝视', '眺望', '慧眼', '秋波', '明亮', '温柔', '赞许', '狡诈', '专注', '深邃', '浑浊', '关切', '坚定', '苗条', '丰满', '丰腴', '魁梧', '结实', '强壮', '匀称', '标致', '精悍', '短小', '粗实', '粗犷', '笨重', '消瘦', '细挑', '富态', '富相', '臃肿', '干瘪', '丽质', '黑瘦', '彪壮', '强健', '刚健', '单薄', '憔悴', '纤弱', '秀丽', '巍峨', '高耸', '陡峭', '聪慧', '大方', '俏丽', '俊秀', '帅气', '潇洒', '迷人', '魅力', '美丽', '可爱', '陶醉', '吟诵', '风铃', '悦耳', '清脆', '动听', '优美', '消瘦', '细挑', '富态', '富相', '臃肿', '干瘪', '丽质', '黑瘦', '彪壮', '强健', '刚健', '单薄', '憔悴', '肥大', '耳廓', '瘦削', '耳轮', '耳垂', '凤眼', '媚眼', '杏眼', '斜眼', '美目'], ['长生果', '捉迷藏', '红领巾', '舍不得', '加拿大', '少不了', '过不去', '黑沉沉', '量角器', '井冈山', '亮闪闪', '卫生间', '穿山甲', '亮晶晶', '怎么办', '夜猫子', '共和国', '毛毛雨', '植树节', '一会儿', '天安门', '自来水', '大别山', '一大半', '包心菜', '录像机', '燕尾服', '男子汉', '长白山', '数不清', '停机坪', '三角形', '降落伞', '发动机', '静悄悄', '笔记本', '黄鼠狼', '百家姓', '山水画', '香喷喷', '悄悄话', '自行车', '交朋友', '黄花菜', '金灿灿', '干豆腐', '胖乎乎', '黑压压', '太平洋', '王府井', '柏油路', '泼水节', '够意思', '钻空子', '笑哈哈', '小册子', '水汪汪', '北京市', '讲故事', '一阵风', '立交桥', '杜鹃花', '托儿所', '来不及', '办公室', '国庆节', '石灰岩', '蜘蛛网', '沉甸甸', '候车室', '打雪仗', '气冲冲', '台湾省', '宇航员', '泼冷水', '富春江', '一刹那', '恨不得', '普通话', '老百姓', '后脑勺', '孤零零', '忍不住', '白茫茫', '凤尾竹', '差不多', '一转眼', '记忆力', '难为情', '微生物', '绿油油', '黑乎乎', '工艺品', '主席台', '显微镜', '慢吞吞', '放大镜', '一眨眼', '懒洋洋', '急匆匆', '俱乐部', '齐刷刷', '兵马俑', '博物馆', '笑盈盈', '葡萄灰', '九寨沟', '土地庙', '飘飘然', '催眠曲', '卷铺盖', '白皑皑', '顶梁柱', '葡萄干', '糖尿病', '暖烘烘', '原子核', '一锅端', '搁得住', '敲门砖', '敬亭山', '兴冲冲', '睁眼瞎', '昆明湖', '颐和园', '绿葱葱', '万寿山', '五粮液', '哲学家', '煤油灯', '手榴弹', '不由得', '红扑扑', '风向标', '扭秧歌', '火辣辣', '摄氏度', '绿茵茵', '障碍物', '水墨画', '共产党', '凉飕飕', '和氏璧', '宿营地', '弓弩手', '威尼斯', '军令状', '乱哄哄', '下马威', '炊事员', '明晃晃', '黑糊糊', '麦芽糖', '霎时间', '里程碑', '欣欣然', '本命年', '风景线', '口头禅', '麻麻亮', '冷飕飕', '空荡荡', '试帖诗', '迫击炮', '鹅卵石', '戈壁滩', '霓虹灯', '白洋淀', '颤巍巍', '文邹邹', '冼星海', '金銮殿', '挖墙脚', '可怜相', '佼佼者', '潜意识', '打牙祭', '出风头', '闭门羹', '笑吟吟', '度假村', '侦察兵', '年轻人', '想象力', '轩辕氏', '国子监', '万户侯', '挪窝儿', '球面镜', '不送气', '自治县', '可怜见', '吨海里', '动物学', '贱骨头', '小金库', '豆嘴儿', '枪榴弹', '脑门儿', '更年期', '现世报', '唯心论', '毛细管', '检字法', '大约摸', '马蜂窝', '讨人嫌', '进行曲', '开尔文', '中立国', '门鼻儿', '协奏曲', '打野外', '再生产', '溜溜儿', '古生物', '同盟军', '见世面', '辩护人', '冥王星', '橡皮膏', '小性儿', '清道夫', '动肝火', '八月节', '画等号', '小老婆', '珂罗版', '秤盘子', '不要脸', '高岭土', '公平秤', '大杂烩', '崩龙族', '火车头', '过家伙'], ['取长补短', '青山绿水', '和风细雨', '冷言冷语', '不由自主', '热火朝天', '五光十色', '瓜田李下', '十字路口', '东山再起', '兴高采烈', '一言为定', '先入为主', '白日做梦', '各种各样', '一事无成', '红男绿女', '五花八门', '一表人才', '张三李四', '不以为然', '风平浪静', '春风化雨', '千人一面', '答非所问', '十指连心', '植树造林', '炎黄子孙', '自以为是', '你追我赶', '舍己为人', '众多非一', '风和日丽', '火烧眉毛', '安居乐业', '百花齐放', '窗明几净', '快言快语', '再三再四', '长年累月', '面目全非', '一心一意', '自由自在', '万紫千红', '古今中外', '满面春风', '古往今来', '安身立命', '常来常往', '千军万马', '一团和气', '念念不忘', '莺歌燕舞', '三心二意', '走马观花', '非亲非故', '天网恢恢', '先人后己', '助人为乐', '马到成功', '头头是道', '贪生怕死', '多多少少', '鸟语花香', '骑马找马', '忘乎所以', '落地生根', '乐极生悲', '毛手毛脚', '南来北往', '一五一十', '诗情画意', '山清水秀', '明明白白', '自知之明', '多种多样', '百发百中', '星星点点', '冬虫夏草', '目中无人', '人来人往', '大吃大喝', '一路平安', '春暖花开', '旁若无人', '十全十美', '回天无力', '心直口快', '一马当先', '自言自语', '落花流水', '顶天立地', '张灯结彩', '白手起家', '狗急跳墙', '先来后到', '水深火热', '语重心长', '天罗地网', '别有洞天', '无影无踪', '面红耳赤', '坐井观天', '美中不足', '两面三刀', '喝西北风', '弱肉强食', '名胜古迹', '万众一心', '哄堂大笑', '川流不息', '显而易见', '七上八下', '刨根问底', '卓尔不群', '勾心斗角', '隐隐约约', '一鸣惊人', '耳聪目明', '亡羊补牢', '活蹦乱跳', '志同道合', '灵丹妙药', '五谷丰登', '尺有所短', '实话实说', '光彩夺目', '另眼相看', '八仙过海', '奇形怪状', '欣欣向荣', '天寒地冻', '推陈出新', '枯木逢春', '后继有人', '航天飞机', '五彩缤纷', '一知半解', '脱口而出', '一动不动', '求之不得', '九牛一毛', '单刀直入', '滴水穿石', '龙飞凤舞', '怦然心动', '度日如年', '井底之蛙', '束手无策', '焦头烂额', '神话故事', '惊涛骇浪', '众志成城', '鹅毛大雪', '无边无际', '自取灭亡', '探头探脑', '一年一度', '过眼云烟', '寿比南山', '千家万户', '指手画脚', '弯弯曲曲', '风餐露宿', '整装待发', '鸡犬不宁', '蹦蹦跳跳', '宇宙飞船', '寸有所长', '繁荣昌盛', '二话不说', '出尔反尔', '应有尽有', '代代相传', '丰功伟绩', '转弯抹角', '少数民族', '独树一帜', '天高云淡', '轰轰烈烈', '引人注目', '雨过天晴', '漫不经心', '漫山遍野', '举世闻名', '纹丝不动', '省吃俭用', '枝繁叶茂', '小题大做', '呼风唤雨', '凤毛麟角', '大显身手', '千变万化', '春华秋实', '脚踏实地', '甜言蜜语', '斤斤计较', '自始至终', '蛛丝马迹', '画龙点睛', '四面八方', '叫苦连天', '日积月累', '少年儿童', '吞吞吐吐', '目不转睛', '千秋万代', '隐姓埋名', '饥寒交迫', '乘风破浪', '转来转去', '朝思暮想', '名不虚传', '姹紫嫣红', '妙不可言', '鸦雀无声', '荒无人烟', '密密麻麻', '聚精会神', '窃窃私语', '心急火燎', '魂牵梦萦', '面面相觑', '数不胜数', '眉开眼笑', '神气十足', '首屈一指', '千呼万唤', '日月如梭', '成群结队', '迫不及待', '一本正经', '名列前茅', '喜出望外', '情不自禁', '口是心非', '翩翩起舞', '全神贯注', '亭亭玉立', '惊弓之鸟']];

const EnemySize = [{
    w: 33,
    h: 50
},
{
    w: 34,
    h: 65
},
{
    w: 67,
    h: 50
},
{
    w: 59,
    h: 100
}];
const HPHeight = 3,
    HPPerWidth = 4; // 生命值单位长度宽度

export class Enemy {
    constructor (x, y, a) {
        this.speed = EnemySpeed;
        this.type = J.checkArg(a, J.random(0, 3));
        this.w = EnemySize[this.type].w;
        this.h = EnemySize[this.type].h;
        this.x = J.checkArg(x, J.random(0, Size.gameWidth));
        this.y = J.checkArg(y, -this.h);
        this.words = singleWord[this.type][J.random(0, singleWord[this.type].length - 1)];
        this.pinyin = this.words.spell('low');
        this.hp = this.pinyin.length;
        this.hpBarW = this.hp * HPPerWidth;
        this.index = 0;
        this.img = getEnemyImg()[this.type];
        this.deg = -Math.atan((this.x - Game.player.x) / (this.y - Game.player.y));
        if (this.type == 0) {
            this.speed += 0.2;
        } else if (this.type == 3) {
            this.sendMax = 15000;
            this.sendIndex = 0;
        }
        this.dieImg = getDieImg();
        this.isDie = false;
        this.dieIndex = -1;
        this.dieLen = 100;
        this.isRemove = false;
    }
    
    act () {
        if (!this.isRemove) {
            if (this.isDie) {
                this.dieIndex++;
                if (this.dieIndex >= this.dieImg.length) {
                    this.dieIndex--;
                    this.remove();
                }
            } else {
                if (this.type == 3) {
                    this.sendIndex += Const.LoopTime;
                    if (this.sendIndex > this.sendMax) {
                        this.sendIndex = 0;
                        Game.enemys.insert(new Enemy(this.x, this.y, 0), Game.enemys.indexOf(this) + 1);
                    }
                }
                this.x -= this.speed * Math.sin(this.deg);
                this.y += this.speed * Math.cos(this.deg);
                if (this.touchTarget()) {
                    Game.player.die();
                }
            }
            this.draw();
        }
    }
    draw () {
        Game.ctx.save();
        Game.ctx.translate(this.x, this.y);
        Game.ctx.rotate(this.deg);
        Game.ctx.translate( - this.x, -this.y);
        if (this.isDie) {
            Game.ctx.drawImage(this.dieImg[this.dieIndex], this.x - this.dieLen / 2, this.y - this.dieLen / 2, this.dieLen, this.dieLen);
        } else {
            Game.ctx.font = '20px MicrosoftYahei';
            let a = this.y - this.h / 2;
            Game.ctx.drawImage(this.img, this.x - this.w / 2, a, this.w, this.h);
            Game.ctx.fillText(this.words, this.x, a - 8);
            Game.ctx.fillStyle = '#f44';
            a += this.h;
            Game.ctx.fillRect(this.x - this.hpBarW / 2, a + HPPerWidth, this.hpBarW, HPHeight);
            Game.ctx.fillText(this.pinyin.substring(0, this.pinyin.length - this.hp), this.x, a + HPPerWidth * 5);
            Game.ctx.fillStyle = '#4f4';
            Game.ctx.fillRect(this.x - this.hpBarW / 2, a + HPPerWidth, this.hp * HPPerWidth, HPHeight);
        }
        Game.ctx.restore();
    }
    hurt () {
        this.hp--;
        this.x += this.speed * Math.sin(this.deg) * 3;
        this.y -= this.speed * Math.cos(this.deg) * 3;
        if (this.hp == 0) {
            this.die();
        }
    }
    touchTarget () {
        return (this.y + this.h / 2 > Game.player.y - Game.player.h / 2);
    }
    die () {
        this.dieIndex = 0;
        this.isDie = true;
    }
    remove () {
        this.isRemove = true;
        Game.player.setScore();
        Game.enemys.remove(this);
        Game.enemys.sortByAttr('y', false);
    }
    check (a) {
        if (this.index < this.pinyin.length) {
            if (a == this.pinyin[this.index]) {
                this.index++;
                return true;
            }
        }
        return false;
    }
    resetDeg () {
        this.deg = -Math.atan((this.x - Game.player.x) / (this.y - Game.player.y));
    }
}