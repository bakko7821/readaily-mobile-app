import { getDefaultConfig } from 'expo/metro-config';
import type { ConfigT } from 'metro-config';

const config: ConfigT = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  const assetExts = defaultConfig.resolver?.assetExts || [];
  const sourceExts = defaultConfig.resolver?.sourceExts || [];
  const transformer = defaultConfig.transformer || {};

  return {
    transformer: {
      ...transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      ...defaultConfig.resolver,
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})() as unknown as ConfigT;

export default config;
