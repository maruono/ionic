#ここに本来controllers.coffeeである記述を行う

angular.module('starter.controllers', [])
.controller('DashCtrl', ($scope) ->)

.controller('TestCtrl',
($scope) ->
    $scope.alertnum = (test) ->
      aa = new Click_coffee ("#btn12")
      aa.story1()
      
)

.controller('ChatsCtrl', ($scope, Chats) ->
  # With the new view caching in Ionic, Controllers are only called
  # when they are recreated or on app start, instead of every page change.
  # To listen for when this page is active (for example, to refresh data),
  # listen for the $ionicView.enter event:
  #
  #$scope.$on('$ionicView.enter', function(e) {
  #});
  $scope.chats = Chats.all()

  $scope.remove = (chat) ->
    Chats.remove chat
    return

  return
)
.controller('ChatDetailCtrl', ($scope, $stateParams, Chats) ->
  $scope.chat = Chats.get($stateParams.chatId)
  return
)
.controller 'AccountCtrl', ($scope) ->
  $scope.settings = enableFriends: true
  return

# ---
# generated by js2coffee 2.2.0