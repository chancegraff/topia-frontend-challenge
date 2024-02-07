const AVATAR_WIDTH_OFFSET = 50;
const AVATAR_HEIGHT_OFFSET = 125;

function isUserVisibleToPlayer(user, player) {
  // Calculate half-width and half-height for each rectangle
  const userHalfWidth = AVATAR_WIDTH_OFFSET / 2;
  const userHalfHeight = AVATAR_HEIGHT_OFFSET / 2;
  const playerHalfWidth = player.screenWidth / 2;
  const playerHalfHeight = player.screenHeight / 2;

  // Calculate the x and y distances between the centers of the rectangles
  const xDistance = Math.abs(user.x - player.x);
  const yDistance = Math.abs(user.y - player.y);

  // Check if the rectangles overlap on the x-axis
  const overlapX = xDistance < (userHalfWidth + playerHalfWidth);

  // Check if the rectangles overlap on the y-axis
  const overlapY = yDistance < (userHalfHeight + playerHalfHeight);

  // If both overlap on both axes, then one rectangle is within the other
  return overlapX && overlapY;
}

function calculateDistance(user, player) {
  return Math.pow(user.x - player.x, 2) + Math.pow(user.y - player.y, 2)
}

export default function listUsersInView(users, positionX, positionY, screenWidth, screenHeight) {
  const usersInView = [];

  // WRITE SOLUTION BELOW. ADD USERNAME AND IS_BROADCASTER TO 'usersInView' IF USER FALLS INTO VISIBLE RANGE
  const player = {x: positionX, y: positionY, screenWidth, screenHeight};

  users.forEach((user) => {
    if (isUserVisibleToPlayer(user, player)) {
      // insert the user by distance from the player
      const distanceToPlayer = calculateDistance(user, player);
      const insertIndex = usersInView.findIndex((userInView) => userInView.distanceToPlayer > distanceToPlayer);
      if (insertIndex >= 0) {
        usersInView.splice(insertIndex, 0, {...user, distanceToPlayer});
      } else {
        usersInView.push({...user, distanceToPlayer});
      }
    }
  })
  // END SOLUTION SECTION

  return usersInView;
}
