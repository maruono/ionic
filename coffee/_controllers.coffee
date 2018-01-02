#ここに本来controllers.coffeeである記述を行う

angular.module('starter.controllers', [])
.controller('DashCtrl', ($scope) ->
  cpm = new Cpm("memumu")
  sele = new Select_strage("key", "value")
  title_and_memo = new Title_and_memo()
  
  $("#delbut").click =>
    new Delete_strage("delkey")
  
  
  
  $("#butcreate").click =>
    title_and_memo.save()
  $scope.$on '$ionicView.enter', (event, data) ->
    console.log "入場時自動起動"
  
  doAfter = ->
    radionum = localStorage.getItem("getradio")
    $("input[name=hoge]").val [radionum]
  setTimeout(doAfter, 100)

    

)

.controller('TestCtrl', ($scope) ->
  #cpm_tom = new Cpm_tom()
  edit_memo = new Edit_memo()
  
  $("#insert_h2").click =>
    new Insert_caret("memosd", "##")
  
  $("#insert_yoko").click =>
    new Insert_caret("memosd", "---")
    
  $("#insert_list").click =>
    new Insert_caret("memosd", "- ")
    
  $("#insert_hutoi").click =>
    new Insert_caret("memosd", "- ")
  
  $('#memosd').css
    "resize": "none"
  area_auto_size = new Area_auto_size("memosd")

  
  $("#memosd").keyup ->
    console.log "keyup"
    edit_memo.save()
    
  $scope.$on '$ionicView.enter', (event, data) ->
    edit_memo = new Edit_memo()

      
      
)

.controller('ChatsCtrl', ($scope) ->
  $scope.$on '$ionicView.enter', (event, data) ->
    select_memo_disp = new Select_memo_disp("str33")
    select_memo_disp.title_memo_disp()
    
    
  
)

.controller 'AccountCtrl', ($scope) ->
  $scope.$on '$ionicView.enter', (event, data) ->
    new Disp("accountdisp").delete()
    addradio = new Add_radio("accountdisp", "betu")
    addradio.story1()
    addradio.story2()
    addradio.story3()
  $("#add_title").click =>
    test111 = new Add_title("input_title")
    test111.story1()
  $("#delete").click =>
    new Delete_button()

# ---
# generated by js2coffee 2.2.0s