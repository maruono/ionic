#ここに本来controllers.coffeeである記述を行う

angular.module('starter.controllers', [])
.controller('DashCtrl', ($scope) ->
  cpm = new Cpm("memumu")
  sele = new Select_strage("key", "value")
  
  $scope.$on '$ionicView.enter', (event, data) ->
    alert "入場時自動起動"
  
  doAfter = ->
    radionum = localStorage.getItem("getradio")
    $("input[name=hoge]").val [radionum]
  setTimeout(doAfter, 100)
  
  $scope.plus = () =>
    cpm.plus()
  
  $scope.minus = () =>
    cpm.minus()
    
  $scope.change = () =>
    sele.story2()
    #alert 1
    
  $scope.getradio = =>
    @value = $('input[name=hoge]:checked').val()
    @key = "getradio"
    localStorage.setItem @key, @value
    
)

.controller('TestCtrl', ($scope) ->
    cpm_tom = new Cpm_tom()

    $scope.save = () =>
      cpm_tom.save()
      
      
)

.controller('ChatsCtrl', ($scope) ->
  $scope.$on '$ionicView.enter', (event, data) ->
    new Select_memo_disp("str33")
    
  
)

.controller('ChatDetailCtrl', ($scope, $stateParams, Chats) ->
  $scope.chat = Chats.get($stateParams.chatId)
  return
)
.controller 'AccountCtrl', ($scope) ->
  $scope.$on '$ionicView.enter', (event, data) ->
    new Disp("accountdisp").delete()
    addradio = new Add_radio("accountdisp", "betu")
    addradio.story1()
    addradio.story2()
    addradio.story3()

# ---
# generated by js2coffee 2.2.0s