function main(radius) {
  radius = readLine();
  const PI = Math.PI;
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

  // Print the area of the circle:
  const area = PI * radius * radius;
  console.log(area);
  // Print the perimeter of the circle:
  const perimeter = 2 * PI * radius;
  console.log(perimeter);
}
