// c.crickety.com script
// 
// CHNG-ALL-MRKD ::WEBSITE:: !
///////// VARS ::WEBSITE:: ////////////
var siteName = "Crickety.com";
var writepost_frmGood_dest = "https://www.crickety.com/";
var writepostURL = "https://a.crickety.com/writepost/"; // if index.html then dir-trailslash must!
var gRedirURL = 'https://a.crickety.com/signin/auth/';
var staticDir = "/a_common/";
var goApCI = '\x35\x32\x35\x32\x35\x38\x30\x31\x37\x31\x33\x37\x2D\x64\x67\x64\x72\x69\x34\x70\x33\x72\x6D\x6E\x69\x68\x30\x62\x62\x62\x6B\x70\x30\x62\x6D\x36\x65\x31\x6E\x6C\x66\x36\x69\x6A\x6A\x2E\x61\x70\x70\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D';
var scGoAdd = "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x7A\x31\x62\x76\x68\x47\x6E\x42\x75\x64\x38\x32\x68\x70\x4E\x37\x4F\x56\x63\x6B\x62\x45\x77\x77\x61\x62\x42\x6F\x74\x64\x72\x74\x7A\x73\x65\x49\x4B\x5A\x4A\x31\x66\x73\x6C\x37\x79\x44\x2D\x68\x61\x5F\x2F\x65\x78\x65\x63";
var doGoAdd = '\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x66\x6F\x72\x6D\x73\x2F\x64\x2F\x65\x2F\x31\x46\x41\x49\x70\x51\x4C\x53\x63\x6D\x43\x48\x6F\x6B\x6E\x67\x32\x75\x77\x58\x4C\x68\x38\x6B\x6E\x67\x52\x68\x74\x43\x6B\x7A\x55\x7A\x6E\x65\x6F\x2D\x47\x4C\x6D\x68\x71\x48\x48\x41\x4E\x69\x37\x5A\x49\x4C\x61\x32\x4E\x51\x2F\x66\x6F\x72\x6D\x52\x65\x73\x70\x6F\x6E\x73\x65';
////////
////////
////////////////////////////
// 
///////// FUNCS ///////////
///// ::WEBSITE::
function writepost_frmValidate() {
	var formErrors = false;
	var title = document.getElementById('entry_1086184618').value;
	var img = document.getElementById('nonForm_img').value;
	var bodytext = document.getElementById('entry_1261143776').value;
	///
	if (bodytext.replace(/\s/gm, " ").length < 300) {
		formErrors = " Very short body text! Please write some more!   ";
	}
	var emlch = document.getElementById('entry_350910522').value;
	if (emlch.match(/@/)) {} else {
		return false;
	}
	if (formErrors) {
		alert(formErrors);
		return false;
	} else {
		/// join img with bodytext
		document.getElementById('entry_1261143776').value += '[' + img + ']';
		writepost_frmGood();
	}
};
///// ::WEBSITE::
function writepost_frmGood() {
	alert("Thank you! Your post will now be submitted and should be published soon!");
	window.location.href = writepost_frmGood_dest;
};
/**
 *
 * gAuth
 *
 */
function gAuth_login() {
	// If there's an access token, try an API request.
	// Otherwise, start OAuth 2.0 flow.
	var params = JSON.parse(localStorage.getItem('oauth2-params'));
	if (params && params['access_token']) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET',
			'https://www.googleapis.com/oauth2/v3/userinfo?' +
			'access_token=' + params['access_token']);
		xhr.onreadystatechange = function(e) {
			if (xhr.readyState === 4 && xhr.status === 200) {
				//// AUTH SUCCESS, store userinfo
				// 
				///// we're back to gRedirURL, hide signinbutton and display progress bar while subq fetches...
				$('#signinWrap').hide();
				$('#content').prepend('<div id="loadingDoneBar"><hr/><div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%"> </div> Loading... </div> <hr/> </div>');
				// 
				localStorage.setItem('userLoggedIn', xhr.response);
				var userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
				///////////////////
				//// abort if no email available
				if (userLoggedIn.hasOwnProperty('email')) {} else {
					window.location.href = gRedirURL;
				}
				///// NAME ///////
				//////// v2 algo /////////
				var email = (userLoggedIn.hasOwnProperty('email')) ? userLoggedIn.email : "a" + "no" + "nymo" + "us" + "@" + "g" + "ma" + "il." + "co" + "m";
				var name = "";
				//// c-wht-nms-v-hv-avlble
				var ga_name = (userLoggedIn.hasOwnProperty('name') && userLoggedIn.name.match(/.{2,}/)) ? userLoggedIn.name : "";
				var ga_given_name = (userLoggedIn.hasOwnProperty('given_name') && userLoggedIn.given_name.match(/.{1,}/)) ? userLoggedIn.given_name : "";
				var ga_family_name = (userLoggedIn.hasOwnProperty('family_name') && userLoggedIn.family_name.match(/.{1,}/)) ? userLoggedIn.family_name : "";
				//// do-v-hv-good-gvn-or-full?
				var fullname = ga_given_name + ' ' + ga_family_name;
				// console.log(fullname);
				if (fullname.match(/.{3,}/)) {
					//// v-hv-good-fullnme,then-tk-it
					name = fullname;
				} else {
					//// fllnm-faild-see-if-nm-good
					if (ga_name.match(/.{2,}/)) {
						name = ga_name;
					} else {
						/// all-faild-mk-emailid-the-name-or-Anonymous
						name = email.match(/^([^@]*)@/)[1];
					}
				}
				//////// /v2 algo /////////
				//// v1 disable ////
				// var email = userLoggedIn.email;
				//// if no name key, get from email (which should always exist because userinfo.email is endpoint)
				// var name = (userLoggedIn.hasOwnProperty('name')) ? userLoggedIn.name : email.match(/^([^@]*)@/)[1];
				//// /v1 disable ////
				///// /NAME ///////
				var sub = userLoggedIn.sub;
				var picture = userLoggedIn.picture;
				var qrstr = '?user_gUserNickName=' + name + '&user_gUserId=' + sub + '&user_gUserEmail=' + email + '&user_aim=' + picture + '&callback=?'; //// <--- this MUST for CORS (see app's source)
				// alert(qrstr);
				localStorage.setItem('temp', qrstr); // test
				//// use app to see user is member or make it if not
				var subq = scGoAdd + qrstr;
				// 
				$.ajax({
					method: "GET",
					dataType: "json",
					cache: true,
					url: subq
				})
					.done(function(json_file) {
						localStorage.setItem('memberInfo', JSON.stringify(json_file));
						// console.log(json_file);
						// $('#loadingDoneBar').remove();
						window.location.href = writepostURL;
					});
				//  
				// var a = JSON.parse(localStorage.getItem('userLoggedIn'));
				// var a = JSON.parse(xhr.response);
				// console.log(a);
				// console.log("this" + JSON.stringify(a));
				// console.log(a['picture']);
			} else if (xhr.readyState === 4 && xhr.status === 401) {
				// Token invalid, so prompt for user permission.
				gAuth_oauth2SignIn();
			}
		};
		xhr.send(null);
	} else {
		gAuth_oauth2SignIn();
	}
}

function gAuth_oauth2SignIn() {
	/*
	 * Create form to request access token from Google's OAuth 2.0 server.
	 */
	// Google's OAuth 2.0 endpoint for requesting an access token
	var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
	// Create element to open OAuth 2.0 endpoint in new window.
	var form = document.createElement('form');
	form.setAttribute('method', 'GET'); // Send as a GET request.
	form.setAttribute('action', oauth2Endpoint);
	// Parameters to pass to OAuth 2.0 endpoint.
	var params = {
		'client_id': goApCI,
		'redirect_uri': gRedirURL,
		'scope': 'https://www.googleapis.com/auth/userinfo.email',
		'state': 'auth_request_done',
		'include_granted_scopes': 'true',
		'response_type': 'token'
	};
	// Add form parameters as hidden input values.
	for (var p in params) {
		var input = document.createElement('input');
		input.setAttribute('type', 'hidden');
		input.setAttribute('name', p);
		input.setAttribute('value', params[p]);
		form.appendChild(input);
	}
	// Add form to page and submit it to open the OAuth 2.0 endpoint.
	document.body.appendChild(form);
	form.submit();
}
/**
 *
 * /gAuth
 *
 */
///// ::WEBSITE::
function htmlLogin() {
	return '' +
		'<div class="page-header"> ' +
		'<div id="signinWrap">' + ///// used to hide button upon auth success
		'<h1>Please Sign-In...</h1>' +
		// '<h3>Simple &amp; Easy One-Click Sign-In!<br/>  Use your existing account on</h3>' +
		'<style>.signin img {width:100%;max-width:300px;margin:5px 0;}</style>' +
		'<a id="signinbutton" onclick="gAuth_login();" class="signin"><img alt="Sign In with Google" role="button" src="' + staticDir + 'go_si.png"  /></a>' +
		'</div>' +
		'</div>' +
		'';
};
// WRITE FORM ///// ::WEBSITE::
function htmlWritePost(post_id, post_time, post_gUserNickName, post_gUserEmail, post_gUserId, post_forumId, user_level, user_banned, user_from, user_aim, user_id) {
	var a = '' +
		'<iframe name="OUR_hidden_iframe" id="OUR_hidden_iframe" style="display:none;" onload=""></iframe>' +
		'<form onSubmit="return writepost_frmValidate()" action="' + doGoAdd + '" name="unique_frm_name" id="unique_frm_id" target="OUR_hidden_iframe">' +
		'<!-- VISIBLE -->' +
		'<div class="form-group">' +
		'<label>Title</label>' +
		'<input class="form-control" name="entry.1086184618" id="entry_1086184618" data-comment="post_subject" value="" type="text"/>' +
		'</div>' +
		///// CUSTOM NON-FORM ADDITIONAL (joined with body in writepost_frmValidate() )
		'<div class="form-group">' +
		'<label>Image (URL)</label>' +
		'<input class="form-control" name="nonForm_img" id="nonForm_img" data-comment="nonForm_img" value="" type="text"/>' +
		'</div>' +
		/////
		'<div class="form-group">' +
		'<label>Body</label>' +
		'<textarea class="form-control" name="entry.1261143776" id="entry_1261143776" data-comment="post_text" autocomplete="off" rows="13" cols="40" class=""></textarea>' +
		'</div>' +
		'<!-- HIDDEN -->' +
		'<input name="entry.1229444498" id="entry_1229444498" data-comment="post_id" value="' + post_id + '" type="hidden"/>' +
		'<input name="entry.15022060" id="entry_15022060" data-comment="post_time" value="' + post_time + '" type="hidden"/>' +
		'<input name="entry.787973752" id="entry_787973752" data-comment="post_gUserNickName" value="' + post_gUserNickName + '" type="hidden"/>' +
		'<input name="entry.350910522" id="entry_350910522" data-comment="post_gUserEmail" value="' + post_gUserEmail + '" type="hidden"/>' +
		'<input name="entry.818193932" id="entry_818193932" data-comment="post_gUserId" value="' + post_gUserId + '" type="hidden"/>' +
		'<input name="entry.1765174204" id="entry_1765174204" data-comment="post_forumId" value="' + post_forumId + '" type="hidden"/>' +
		'<input name="entry.737832861" id="entry_737832861" data-comment="user_level" value="' + user_level + '" type="hidden"/>' +
		'<input name="entry.425750218" id="entry_425750218" data-comment="user_banned" value="' + user_banned + '" type="hidden"/>' +
		'<input name="entry.467679806" id="entry_467679806" data-comment="user_from" value="' + user_from + '" type="hidden"/>' +
		'<input name="entry.577644196" id="entry_577644196" data-comment="user_aim" value="' + user_aim + '" type="hidden"/>' +
		'<input name="entry.2053925393" id="entry_2053925393" data-comment="user_id" value="' + user_id + '" type="hidden"/>' +
		'<!-- SUBMIT -->' +
		'<input class="btn btn-primary" type="submit" name="submit" value="Submit"/>' +
		'</form>' +
		'';
	return a;
};
/////
///////// /FUNCS ///////////
/////
////////////////////////////////////
///////////////// EXEC /////////////
////////////////////////////////////
/////
////////// JQ EXEC //////////
/////
$(document).ready(function() {
	/////// auth/index.html 
	if (ThsBlg_pg == 'auth') {
		// $('#content').prepend(loadingDoneBar());
		$('#gAuth_login').html('' +
			htmlLogin() +
			'');
		// setTimeout(function() {
		// 	$('#loadingDoneBar').remove();
		// }, 1000);
		// 
	}
	if (ThsBlg_pg == 'writepost') {
		///// show write form if Member else take to auth page
		try {
			if (localStorage.getItem('userLoggedIn') && localStorage.getItem('memberInfo')) {
				var userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
				// console.log(userLoggedIn);
				var memberInfo = JSON.parse(localStorage.getItem('memberInfo'));
				// console.log(memberInfo);
				// 
				// 
				// 
				// if (userLoggedIn.hasOwnProperty('name')) {
				// 	console.log('SUCCESS');
				// } else {
				// 	console.log('FAILURE');
				// }
				// user_id: 91
				// 
				var post_id = ""; /// todo: auto? how to determine this?
				var post_time = JSON.parse(JSON.stringify(new Date())).replace(/T/, " ").replace(/\..*/, "") || ""; // format 2007-07-01 1:01:01
				var post_gUserNickName = memberInfo.user_gUserNickName;
				var post_gUserEmail = userLoggedIn.email; // email is NOT in memberInfo returned by app
				var post_gUserId = memberInfo.user_gUserId; //memberInfo.user_id;
				var post_forumId = "99"; // todo
				var user_level = memberInfo.user_level;
				var user_banned = memberInfo.user_banned;
				var user_from = memberInfo.user_from || "";
				var user_aim = memberInfo.user_aim || "";
				var user_id = memberInfo.user_id || "";
				// console.log(post_id + ' ' + post_time + ' ' + post_gUserNickName, post_gUserEmail + ' ' + post_gUserId + ' ' + post_forumId, user_level + ' ' + user_banned + ' ' + user_from + ' ' + user_aim)
				$('#writepost').html('' +
					// htmlLogin() +
					'<h3>Welcome  ' +
					(memberInfo.newUser == "yes" ? ' to ' + siteName + ', ' : 'back, ') + ///// ::WEBSITE::
					'<span>' +
					(memberInfo.user_aim.match(/http/) ? '<img style="height:1em;display:inline-block;vertical-align:middle;" src="' + memberInfo.user_aim + '"/> ' : '') +
					memberInfo.user_gUserNickName + '</span>!<h3> <h1>Write a Post</h1>' +
					htmlWritePost(post_id, post_time, post_gUserNickName, post_gUserEmail, post_gUserId, post_forumId, user_level, user_banned, user_from, user_aim, user_id) +
					'');
			} else {
				window.location.href = gRedirURL;
			}
		} catch (e) {
			window.location.href = gRedirURL;
		}
		////////
	}
	////
});
/////
////////// /JQ EXEC //////////
/////