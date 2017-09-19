/**
 * Created by Administrator on 2017/9/19 0019.
 */
//函数入口
jQuery(function () {
	//获取当前audio控件
	var audio = document.querySelector('audio');
	//获取当前歌曲集合列表
	var data = [
		//简单爱
		'http://dl.stream.qqmusic.qq.com/C4000009BCJK1nRaad.m4a?vkey=D088ADEC0E67B94B957F5032178B4E69C96D00EB61392238CE7B643D92FF37A14FBD8A6B42730418D31BD8238F02DE99A82D70A230F7C8A8&guid=7924253635&uin=0&fromtag=66',
		//	好久不见
		'http://dl.stream.qqmusic.qq.com/C400004M3yRr3kOfnS.m4a?vkey=0C2A73D2AE72ED402D3CB3F499DE2F9D8625733B93FB49EFE592D31CD1E726DB8CFE3332A01492393E142FDB1131B7862631EE297B9C3273&guid=7924253635&uin=0&fromtag=66',
		//大桥上
		'http://dl.stream.qqmusic.qq.com/C400001EicO642B91t.m4a?vkey=C02F97370DE00654A93FE7A7D3E03801E3CC1C8516D107470854B90EA80FCFC3A6B4601B66E5C29F5DDC448FE2279B4667AFDDCDDC5140DD&guid=7924253635&uin=0&fromtag=66',
		//红豆
		'http://dl.stream.qqmusic.qq.com/C4000005bR6m1gvsEL.m4a?vkey=477D1B0B9A9619BB7F699AA67FE5E32005ED619C5EB6FCA8B26AFCE9DC17E148FEF80B6BE398CC6F24DFBA58F6281DA66AAD6B5DAF091F6F&guid=7924253635&uin=0&fromtag=66',
		//六月的雨
		'http://dl.stream.qqmusic.qq.com/C400004ND60i0f49Tf.m4a?vkey=BDEAE4190DA7BB8DFF5539C9DE17ECE3BB9517C60B114D32861842342EBCA199BA587471F0628C13529A491F1800EE56F55AF98C31FE738B&guid=7924253635&uin=0&fromtag=66',
		//金鱼和木鱼
		'http://dl.stream.qqmusic.qq.com/C400001jvA2W2dw6CG.m4a?vkey=B653E3A7FE6A494BF61CDE0FD81FF19AD7E10F19038E2F375A93315B09AF57967BA2A07936E48E559BB8103E1E72FF95E5DBF393C9B20B15&guid=7924253635&uin=0&fromtag=66',
	];
	//
	var index = data.length - 1;

	//修改暂停与播放
	function puaseorplay() {
		jQuery('.sings-play>a').html('播放');
		jQuery('.sings-play>a').css({height: 35.75, fontSize: 15, lineHeight: 32 + 'px'});
	}

	jQuery('.close').on('tap', function () {
		//window.close();
		jQuery('#sing-class').close();
		jQuery('#singer-list').close();
		jQuery('#player-music').close();
	});//end 退出事件

//	获取audio标签
//	jQuery('audio')

	if (audio.preload) {
		audio.setAttribute('src', data[index]);
	}


//获取播放列表
	jQuery('.sings>li').on('tap', function () {
		index=jQuery(this).index();
		audio.setAttribute('src', data[index]);
		audio.play();
		console.log(index);
		puaseorplay();

	});//end 获取播放列表

//	上一曲绑定事件
	jQuery('.up-sing').on('tap', function () {
		index--;
		if (index < 0) {
			index = 5;
		}
		audio.setAttribute('src', data[index]);
		audio.play();
		console.log(index);
		puaseorplay();

	});//end 上一曲绑定事件


//	下一曲绑定事件
	jQuery('.next-sing').on('tap', function () {
		index++;
		if (index > 5) {
			index = 0;
		}
		audio.setAttribute('src', data[index]);
		audio.play();
		console.log(index);
		puaseorplay();
	});//end 下一曲绑定事件

//播放/暂停事件
	jQuery('.sings-play').on('tap', function () {
		if (jQuery('.sings-play>a').html() == '暂停') {
			audio.play();
			puaseorplay();
		} else {
			audio.pause();
			jQuery('.sings-play>a').html('暂停');
			jQuery('.sings-play>a').css({height: 35.75, fontSize: 15, lineHeight: 32 + 'px'});
		}
	});//end 播放/暂停事件

//随便听听
	jQuery('.others').on('tap', function () {
		index = parseInt(Math.random() * data.length);
		console.log(index);
		audio.setAttribute('src', data[index]);
		audio.play();
		console.log(index);
		puaseorplay();
	});//end 随便听听




});//end 函数结尾