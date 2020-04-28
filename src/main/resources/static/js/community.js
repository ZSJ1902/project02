
function post() {
    var  questionId = $("#question_id").val();
    var content = $("#comment_content").val();
    $.ajax({
        type: "POST",
        contentType:"application/json",
        url: "/comment",
        data: JSON.stringify({
            "parentId":questionId,
            "content":content,
            "type":1
        }),
        success: function (response) {
            if(response.code==200){
                $("#comment-section").hide();
            }else{
                if(response.code==2003){
                    var isAccepted = confirm(response.message);
                    if(isAccepted){
                        window.open("https://github.com/login/oauth/authorize?client_id=da716a90fb2e759e27c7&redirect_uri=http://localhost:8887/callback&scope=user&state=1");
                    }
                }else{
                    alert(response.message);
                }
            }
        },
        dataType: "json"
    });
    console.log(questionId);
    console.log(content);
}