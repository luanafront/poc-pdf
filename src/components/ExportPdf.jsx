import React from 'react';
import {
	PDFViewer,
	Document,
	Page,
	Text,
	View,
	Image,
	StyleSheet
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		fontFamily: 'Helvetica',
		fontSize: 12,
		padding: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 30,
		color: '#000',
		width: '100%',
		textAlign: 'center',
	},
	titleReports: {
		fontSize: 24,
		marginVertical: 30,
		color: '#000',
		width: '100%',
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	textKey: {
		fontSize: 10,
		marginBottom: 10,
		color: '#313131',
		position: 'absolute',
		backgroundColor: '#fff',
		top: -6,
		left: 5,
		paddingHorizontal: 5,
	},
	textValue: {
		fontSize: 12,
		marginBottom: 10,
		color: '#000',
		width: '100%',
	},
	paragraph: {
		marginBottom: 10,
		color: '#000',
	},
	image: {
		width: 200,
		height: 200,
	},
	machineInformationBlock: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	machineInformationItemBlock: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	dataValue: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		border: '1px solid #aaa',
		borderRadius: 3,
		padding: 10,
		paddingBottom: 5,
		marginHorizontal: 5,
		marginBottom: 10,
		position: 'relative',
	},
	reportBlock: {
		display: 'flex',
		flexDirection: 'column',
		width: '98%',
		paddingBottom: 30,
		marginBottom: 30,
	},
	reportItemBlock: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		marginBottom: 10,
	},
});

const PDFExport = () => {
	const windowHeight = window.innerHeight;
	const windowWidth = window.innerWidth;
	const machine = {
		model: 'MY123XYz-15',
		customer: 'Bencor LLC',
		vintage: '01/23',
		voltage: '220',
		hours: '-',
		servo: '-',
		firmware: '4.2',
		softwareVersion: '12.2.1',
		serialNumber: '57345928345',
		manufacturer: 'Mycronic',
		machineType: 'Pick and Place',
		hourActive: '10',
		lifeTime: '1000',
		additionalInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nu',
		attachment: 'https://picsum.photos/300/300/'
	}
	const reports = [
		{
			isVerified: false,
			purchaseOrder: '123456',
			reportType: 'Preventive Maintenance',
			symptoms: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nu',
			serviceDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nu',
			notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nu',
			attachment: 'https://picsum.photos/300/300/',
			dateJoined: new Date().toLocaleString(),
		},
		{
			isVerified: true,
			purchaseOrder: '123456',
			reportType: 'Preventive Maintenance',
			symptoms: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nu',
			serviceDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nu',
			notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nu',
			attachment: 'https://picsum.photos/300/300/',
			dateJoined: new Date().toLocaleString(),
		},
		{
			isVerified: true,
			purchaseOrder: '123456',
			reportType: 'Preventive Maintenance',
			symptoms: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nu',
			serviceDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nu',
			notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis tincidunt ultricies, nunc nisl lacinia nunc, quis aliquam nisl nu',
			attachment: 'https://picsum.photos/300/300/',
			dateJoined: new Date().toLocaleString(),
		},
	]
	const DataValue = ({keyName, value}) => {
		return (
			<View style={styles.dataValue}>
				<Text style={styles.textKey}>{keyName}</Text>
				{
					keyName === 'File' ? (
						<Image style={styles.image} src={value} />
					) : (
						<Text style={styles.textValue}>{value}</Text>
					)
				}
			</View>
		)
	}

	const ReportValue = ({
		 purchaseOrder,
		 reportType,
		 symptoms,
		 serviceDescription,
		 notes,
		 attachment,
		 dateJoined
	 }) => {
		return (
			<View style={styles.reportBlock}>
				<Text style={styles.title}>
					{reportType}
				</Text>
				<View style={styles.reportItemBlock}>
					<DataValue keyName="Purchase Order" value={purchaseOrder} />
					<DataValue keyName="Symptoms" value={symptoms} />
					<DataValue keyName="Service Description" value={serviceDescription} />
					<DataValue keyName="Notes" value={notes} />
					<DataValue keyName="File" value={attachment} />
					<DataValue keyName="Creation Date" value={dateJoined} />
				</View>
			</View>
		)
	}
	const MyDocument = () => (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.machineInformationBlock}>
					<Text style={styles.title}>Machine Information ({machine.serialNumber})</Text>
					<View style={styles.machineInformationItemBlock}>
						<DataValue keyName="Manufacturer" value={machine.manufacturer} />
						<DataValue keyName="Machine Type" value={machine.machineType} />
						<DataValue keyName="Customer" value={machine.customer} />
					</View>
					<View style={styles.machineInformationItemBlock}>
						<DataValue keyName="Model" value={machine.model} />
						<DataValue keyName="Serial Number" value={machine.serialNumber} />
						<DataValue keyName="Vintage" value={machine.vintage} />
					</View>
					<View style={styles.machineInformationItemBlock}>
						<DataValue keyName="S.V" value={machine.softwareVersion} />
						<DataValue keyName="Voltage" value={machine.voltage} />
						<DataValue keyName="Hours" value={machine.hours} />
						<DataValue keyName="Servo" value={machine.servo} />
						<DataValue keyName="Firmware" value={machine.firmware} />
					</View>
					<View style={styles.machineInformationItemBlock}>
						<DataValue keyName="Additional Information" value={machine.additionalInformation} />
					</View>
					<View style={styles.machineInformationItemBlock}>
						<DataValue keyName="Hours Active (per day)" value={machine.hourActive} />
						<DataValue keyName="Total Operational Time (in hours)" value={machine.lifeTime} />
					</View>
					<View style={styles.machineInformationItemBlock}>
						<DataValue keyName="File" value={machine.attachment} />
					</View>
					<View style={styles.machineInformationItemBlock}>
						<DataValue keyName="Reports Amount" value={"123"} />
					</View>
					<View style={styles.machineInformationItemBlock}>
						<DataValue keyName="System Creation Date" value={new Date().toLocaleString()} />
					</View>
					<View style={styles.machineInformationItemBlock}>
						<DataValue keyName="Lasr System Modification Date" value={new Date().toLocaleString()} />
					</View>
					<View style={styles.machineInformationItemBlock}>
						<DataValue keyName="Maintenance Status" value={"Up to date maintenance - Due in 97 days (Based on the date of the last preventive type report)."} />
					</View>
				</View>
			</Page>
			{
				reports.map((report, index) => (
					<Page key={index} size="A4" style={styles.page}>
						{index === 0 && (
							<Text style={styles.titleReports}>Machine Reports</Text>
						)}
						<View style={styles.machineInformationBlock}>
							<ReportValue {...report} />
						</View>
					</Page>
				))
			}
		</Document>
	);

	return (
		<div>
			<PDFViewer showToolbar className="oi" width={windowWidth - 100} height={windowHeight}>
				<MyDocument />
			</PDFViewer>
		</div>
	);
};

export default PDFExport;
