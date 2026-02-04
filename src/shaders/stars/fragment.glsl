

void main() {


    // Light point
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = pow(strength, 10.0);

    vec3 color = vec3(1.0);

    gl_FragColor = vec4(color,strength);

    #include <colorspace_fragment>
}