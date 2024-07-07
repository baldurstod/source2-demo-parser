import 'protobufjs/dist/protobuf.min.js';

export async function testProto(reader) {
	const root = await protobuf.load('proto/dota2/dota_match_metadata.proto');

	console.log(root);

	console.log(root.lookupType('CDOTAMatchMetadataFile'));

	//var bufferSliceWhereProtobufBytesIs = reader.getBytes(elementSize);
	//var msg = definition.decode(bufferSliceWhereProtobufBytesIs);

}
