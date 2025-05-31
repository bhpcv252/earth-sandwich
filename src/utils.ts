export function getAntipode(lat: number, lon: number): [number, number] {
    const antipodeLat = -lat;
    let antipodeLon = lon + 180;
    if (antipodeLon > 180) antipodeLon -= 360;
    return [antipodeLat, antipodeLon];
}
