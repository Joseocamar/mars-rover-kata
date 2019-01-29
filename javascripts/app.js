// Rover Object Goes Here
// ======================
var rover = {
	direction: "N",
	trackName: "Rover",
	positionX: 0,
	positionY: 0,
	travelLog: []
}

var marsFloor = [
	[null, null, null, null, null],
	[null, null, null, null, null],
	[null, null, null, null, null],
	[null, null, null, null, null],
	[null, null, null, null, null],
	];
	
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  
  switch (rover.direction) {
	case "N":
	  rover.direction = "W";
	  console.log("Rover now is looking West");
	  break;
	case "W":
	  rover.direction = "S";
	  console.log("Rover now is looking South");
	  break;
	case "S":
	  rover.direction = "E";
	  console.log("Rover now is looking East");
	  break;
	case "E":
	  rover.direction = "N";
	  console.log("Rover now is looking North");
	  break;
	}
};

function turnRight(rover){
  console.log("turnRight was called!");
   switch (rover.direction) {
	case "N":
		rover.direction = "E";
		console.log("Rover now is looking East");
		break;  
	case "W":
		rover.direction = "N";
		console.log("Rover now is looking North");
		break;
	case "S":
		rover.direction = "W";
		console.log("Rover now is looking West");
		break;
	case "E":
		rover.direction = "S";
		console.log("Rover now is looking South");
		break;
	}
};
	// El movimiento de Rover hacia delante//
	
function moveForward(rover){
  console.log("moveForward was called");
  marsFloor[rover.positionY][rover.positionX] = null;
			
  if (rover.direction === "N") {
	  rover.positionY--;
	  roverPosition();
	  console.log("Rover has moved forward to North - Coordenates are: X - " + rover.positionX + " Y - " + rover.positionY);
	  var travelRover = [rover.positionX, rover.positionY];
	  rover.travelLog.push(travelRover);
  }
  else if (rover.direction === "W") {
	  rover.positionX--;
	  roverPosition();
	  console.log("Rover has moved forward to West - Coordenates are: X - " + rover.positionX + " Y - " + rover.positionY);
	  var travelRover = [rover.positionX, rover.positionY];
	  rover.travelLog.push(travelRover);
  }
  else if (rover.direction === "S") {
	  rover.positionY++;
	  roverPosition(); 
	  console.log("Rover has moved forward to South - Coordenates are: X - " + rover.positionX + " Y - " + rover.positionY);
	  var travelRover = [rover.positionX, rover.positionY];
	  rover.travelLog.push(travelRover); 
  }
  else {
	  rover.positionX++;
	  roverPosition();
	  console.log("Rover has moved forward to East - Coordenates are: X - " + rover.positionX + " Y - " + rover.positionY);
	  var travelRover = [rover.positionX, rover.positionY];
	  rover.travelLog.push(travelRover);
  }
}

	// Movimiento hacia atrás de Rover //

function moveBackward(rover){
  console.log("moveBackward was called");
  marsFloor[rover.positionY][rover.positionX] = null;
			
  if (rover.direction === "N") {
	  rover.positionY++;
	  roverPosition();
	  console.log("Rover has moved backward to South - Coordenates are: X - " + rover.positionX + " Y - " + rover.positionY);
	  var travelRover = [rover.positionX, rover.positionY];
	  rover.travelLog.push(travelRover);
  }
  else if (rover.direction === "W") {
	  rover.positionX++;
	  roverPosition();
	  console.log("Rover has moved backward to East - Coordenates are: X - " + rover.positionX + " Y - " + rover.positionY);
	  var travelRover = [rover.positionX, rover.positionY];
	  rover.travelLog.push(travelRover);
  }
  else if (rover.direction === "S") {
	  rover.positionY--;
	  roverPosition(); 
	  console.log("Rover has moved backward to North - Coordenates are: X - " + rover.positionX + " Y - " + rover.positionY);
	  var travelRover = [rover.positionX, rover.positionY];
	  rover.travelLog.push(travelRover);
  }
  else {
	  rover.positionX--;
	  roverPosition();
	  console.log("Rover has moved backward to West - Coordenates are: X - " + rover.positionX + " Y - " + rover.positionY);
	  var travelRover = [rover.positionX, rover.positionY];
	  rover.travelLog.push(travelRover);
  }
}

// Declara la posición de Rover//

function roverPosition() {
	
	marsFloor[rover.positionY][rover.positionX] = rover.trackName;
	
}


// Comandos de accioens para Rover //

function roverCommands(lineCommand) {
	
	
	for ( i = 0; i < lineCommand.length; i++) {
		
	switch (lineCommand[i]) {
	case "f":
		if (rover.positionY === 0 && rover.direction === "N") {
			console.log("Rover can't go through");
			break;
		}
		else if (rover.positionY === 9 && rover.direction === "S") {
			console.log("Rover can't go through");
			break;
		}
		else if (rover.positionX === 0 && rover.direction === "W") {
			console.log("Rover can't go through");
			break;
		}
		else if (rover.positionX === 9 && rover.direction === "E") {
			console.log("Rover can't go through");
			break;
		}
		else {
			moveForward(rover);
			break;
		}
	case "l":
		turnLeft(rover);
		break;
	case "r":
		turnRight(rover);	
		break;
	case "b":
		if (rover.positionY === 9 && rover.direction === "N") {
			console.log("Rover can't go through");
			break;
		}
		else if (rover.positionY === 0 && rover.direction === "S") {
			console.log("Rover can't go through");
			break;
		}
		else if (rover.positionX === 9 && rover.direction === "W") {
			console.log("Rover can't go through");
			break;
		}
		else if (rover.positionX === 0 && rover.direction === "E") {
			console.log("Rover can't go through");
			break;
		}
		else {
			moveBackward(rover);
			break;
		}
	default:
		console.log("That's an invalid command");
		break;
	}
	}
}


roverPosition();
roverCommands("fllflf");
console.log(marsFloor);
console.log(rover.travelLog);