import AvataaarThirdParty from 'avataaars';

export const Avataaar = ({ ...props }) => (
  <AvataaarThirdParty
    avatarStyle="Circle"
    topType="ShortHairFrizzle"
    accessoriesType="Blank"
    hairColor="Black"
    facialHairType="BeardLight"
    facialHairColor="Black"
    clotheType="ShirtCrewNeck"
    clotheColor="Black"
    eyeType="Side"
    eyebrowType="DefaultNatural"
    mouthType="Smile"
    skinColor="Light"
    {...props}
  />
);
