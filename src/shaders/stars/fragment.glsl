

void main() {


    // Light point
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = pow(strength, 10.0);

    // Final color
    vec3 color = mix(vec3(0.0), vec3(1.0), strength);

    if (strength < 0.01)
        discard;

    gl_FragColor = vec4(color,1.0);

    #include <colorspace_fragment>
}