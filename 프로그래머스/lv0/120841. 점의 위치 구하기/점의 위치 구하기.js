function solution(dot) {
    const xdot = dot[0];
    const ydot = dot[1];

    if (xdot > 0 && ydot > 0) {
      return 1;
    }
    if (xdot < 0 && ydot > 0) {
      return 2;
    }
    if (xdot < 0 && ydot < 0) {
      return 3;
    }
    if (xdot > 0 && ydot < 0) {
      return 4;
    }
}