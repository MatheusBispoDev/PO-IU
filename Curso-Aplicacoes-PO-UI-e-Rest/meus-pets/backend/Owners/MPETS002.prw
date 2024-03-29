#INCLUDE "TOTVS.CH"
#INCLUDE "FWMVCDEF.CH"

Function MPETS002()
	Local oMBrowse 	:= Nil

	oMBrowse := FWMBrowse():New()
	oMBrowse:SetAlias("ZSB")
	oMBrowse:SetDescription("Tutores")
	oMBrowse:SetCanSaveArea(.T.)
	oMBrowse:SetMenudef("MPETS002")
	oMBrowse:Activate()
Return Nil

Static Function MenuDef()
	Local aRotina := {}

	ADD OPTION aRotina TITLE "Op��o 1" 	ACTION "PesqBrw" 			OPERATION 1 ACCESS 0 // "Pesquisar"
	ADD OPTION aRotina TITLE "Op��o 2"	ACTION "VIEWDEF.MPETS002" 	OPERATION 2	ACCESS 0 // "Visualizar"
	ADD OPTION aRotina TITLE "Op��o 3"	ACTION "VIEWDEF.MPETS002" 	OPERATION 8 ACCESS 0 // "Imprimir"
	ADD OPTION aRotina TITLE "Incluir"	ACTION "VIEWDEF.MPETS002" 	OPERATION 3 ACCESS 0 // "Incluir"
Return aRotina

Static Function ModelDef() as Object
    Local oModel        as Object
    Local oStructZSB    := FWFormStruct(1,'ZSB',/*bAvalCampo*/,/*lViewUsado*/)

    oModel := MPFormModel():New("MPETS002",/*bPreValidacao*/,/*bPosValid*/,/*bCommit*/,/*bCancel*/)
    oModel:AddFields("ZSBMASTER",/*cOwner*/,oStructZSB,/*bPreValidacao*/,/*bPosValidacao*/,/*bCarga*/)
    oModel:GetModel("ZSBMASTER"):SetDescription("ZSB")
	oModel:SetPrimaryKey({"ZSB_FILIAL", "ZSB_ID"})
    oModel:SetDescription("Tutores")
Return oModel

Static Function ViewDef()
	Local oView
	Local oModel 		:= ModelDef()
	Local oStructZSB	:= FWFormStruct(2,"ZSB",/*bAvalCampo*/,/*lViewUsado*/)

	oView := FWFormView():New()
	oView:SetModel(oModel)
	oView:AddField("VIEW_ZSB",oStructZSB,"ZSBMASTER")
Return oView
